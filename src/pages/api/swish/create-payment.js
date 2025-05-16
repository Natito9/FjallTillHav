import axios from 'axios';
import https from 'https';
import fs from 'fs';
import path from 'path'; 
import { v4 as uuidv4 } from 'uuid';

const privateKeyPath = process.env.PRIVATE_KEY_PATH || path.resolve('certs/private.key');
const certificatePath = process.env.CERTIFICATE_PATH || path.resolve('certs/swish-certificate.pem');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount, message } = req.body;

  const id = uuidv4();

  const data = {
    payeeAlias: '1234742532',
    amount,
    currency: 'SEK',
    message,
    callbackUrl: 'http://www.localhost:3001/api/swish/create-payment',
  };

  try {
    const response = await axios.put(
      `https://mss.cpc.getswish.net/swish-cpcapi/api/v2/paymentrequests/${id}`,
      data,
      {
        headers: { 'Content-Type': 'application/json' },
        httpsAgent: new https.Agent({
          cert: fs.readFileSync(certificatePath),  
          key: fs.readFileSync(privateKeyPath), 
        }),
      }
    );

    const token = response.headers['paymentrequesttoken'];
    return res.status(201).json({ token });
  } catch (error) {
    if (error.response) {
      console.error('Response error details:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    } else {
      console.error('Error details:', error.message);
    }
    return res.status(500).json({ error: 'Swish request failed' });
  }
  
}
