import https from 'https';
import fs from 'fs';

import path from 'path';
import { v4 as uuidv4 } from 'uuid'; 

export default async function handler(req, res) {
   console.log('Received HTTP method for /api/swish/payment-request:', req.method); 
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

    const PFX_PATH = process.env.SWISH_PFX_PATH; 

  try {
    // const cert = fs.readFileSync(CERT_PATH, { encoding: 'utf8' }); 
    // const key = fs.readFileSync(KEY_PATH, { encoding: 'utf8' });
    // Instead, read the .p12 file:
    const pfx = fs.readFileSync(PFX_PATH); 


    // const ca = fs.readFileSync(CA_PATH, { encoding: 'utf8' }); // Commented out, keep as is unless Swish provides a production CA

    const instructionUUID = uuidv4().replace(/-/g, '').toUpperCase();

    const { amount, message, payerAlias, callbackIdentifier } = req.body; 

    const swishPayload = {
      payeeAlias: process.env.SWISH_PAYEE_ALIAS, 
      currency: 'SEK',
      callbackUrl: process.env.SWISH_CALLBACK_URL,

      // callbackUrl: ' https://5557-188-149-51-155.ngrok-free.app/api/swish/payment-result', // Sandbox URL
      amount: String(amount), 
      message,
      // payerAlias: payerAlias || '4671234768',
      callbackIdentifier: callbackIdentifier || '11A86BE70EA346E4B1C39C874173F478' 
    };

    const agent = new https.Agent({

      // cert: cert, 
      // key: key,

      pfx: pfx, 

      passphrase: process.env.SWISH_CERT_PASSPHRASE,
      // passphrase: 'swish', // Sandbox passphrase - now using env var
      // ca: ca, // Commented out, keep as is unless Swish provides a production CA
      secureProtocol: 'TLSv1_2_method',
      rejectUnauthorized: true,
    });

    const payloadString = JSON.stringify(swishPayload);

    const postOptions = {
      method: 'PUT',
      hostname: process.env.SWISH_API_HOSTNAME, 
      // hostname: 'staging.getswish.pub.tds.tieto.com',//sandbox!!!
      path: `/swish-cpcapi/api/v2/paymentrequests/${instructionUUID}`,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payloadString),
      },
      agent: agent,
    };

    const swishResponse = await new Promise((resolve, reject) => {
      let data = '';
      const swishReq = https.request(postOptions, (res) => {
        const responseHeaders = res.headers; 
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => resolve({ statusCode: res.statusCode, headers: responseHeaders, data: data }));
      });
      swishReq.on('error', (e) => reject(e));
      swishReq.write(payloadString);
      swishReq.end();
    });

   
    console.log(`[Swish API Route] Swish Response Status: ${swishResponse.statusCode}`);
    console.log(`[Swish API Route] Swish Response Headers:`, swishResponse.headers);
    console.log(`[Swish API Route] Swish Response Data:`, swishResponse.data);

    if (swishResponse.statusCode === 201) { 
      const paymentrequesttoken = swishResponse.headers['paymentrequesttoken'];
      
      if (!paymentrequesttoken) {
        console.warn("[Swish API Route] Received 201 but no paymentrequesttoken. This is unusual for the M-commerce flow.");
       
        res.status(200).json({ 
            id: instructionUUID,
            message: "Payment processed by Swish Simulator. Check callback result.",
           
        });
        return; 
      }
         const frontendCallbackBaseUrl = process.env.SWISH_FRONTEND_CALLBACK_BASE_URL; // <--- Correctly uses env var
      // const frontendCallbackBaseUrl = 'https://9b8f-188-149-51-155.ngrok-free.app/receipt'; // Sandbox URL
      const encodedFrontendCallbackUrl = encodeURIComponent(`${frontendCallbackBaseUrl}?ref=${instructionUUID}`);
      const appUrl = `swish://paymentrequest?token=${paymentrequesttoken}&callbackurl=${encodedFrontendCallbackUrl}`;

      res.status(201).json({
        id: instructionUUID,
        token: paymentrequesttoken,
        paymentUrl: appUrl,
        message: "Payment request created, open Swish app."
      });
    } else if (swishResponse.statusCode === 200) { 
        console.log("[Swish API Route] Swish API returned 200. Payment processed immediately.");
        
        res.status(200).json({
            id: instructionUUID,
            message: "Payment processed immediately by Swish Simulator. Check callback result.",
           
        });
    }
    else { 
      let errorBody = swishResponse.data;
      try { errorBody = JSON.parse(swishResponse.data); } catch (e) {}
      res.status(swishResponse.statusCode || 500).json({
        message: 'Swish API returned an error.',
        statusCode: swishResponse.statusCode,
        error: errorBody
      });
    }
   

  } catch (error) {
    
    console.error(`[Swish API Route] FATAL ERROR:`, error);
    if (error.code) {
        console.error(`[Swish API Route] Error Code: ${error.code}`);
    }
    if (error.syscall) {
        console.error(`[Swish API Route] System Call: ${error.syscall}`);
    }
    if (error.stack) {
        console.error(`[Swish API Route] Error Stack:`, error.stack);
    }
 

    res.status(500).json({ message: 'Server error: Failed to process request.', error: error.message || 'Unknown error' });
  }
}