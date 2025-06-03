
import dbConnect from '../../../lib/dbConnect';
import Payment from '../../../models/Payment'; 

export default async function handler(req, res) {
  console.log('Received HTTP method for /api/swish/payment-result:', req.method);

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    await dbConnect(); 
    const swishCallbackData = req.body;
    console.log('[Swish Callback] Received data:', swishCallbackData);

    const instructionUUID = swishCallbackData.id; 
    const status = swishCallbackData.status; 
    const errorCode = swishCallbackData.errorCode || null;
    const errorMessage = swishCallbackData.errorMessage || null;

    if (!instructionUUID || !status) {
      console.error('[Swish Callback] Missing ID or Status in callback data.');
      return res.status(400).json({ message: 'Missing required data in callback.' });
    }

    
    const updatedPayment = await Payment.findOneAndUpdate(
      { instructionUUID: instructionUUID },
      { status, errorCode, errorMessage },
      { upsert: true, new: true, setDefaultsOnInsert: true } 
    );

    console.log(`[Swish Callback] Stored/Updated payment for ${instructionUUID} with status: ${status}`);
    res.status(200).json({ message: 'Callback received and processed.' });

  } catch (error) {
    console.error('[Swish Callback] Error processing callback:', error);
    res.status(500).json({ message: 'Error processing callback.' });
  }
}