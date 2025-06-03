import dbConnect from '../../../lib/dbConnect';
import Payment from '../../../models/Payment'; 

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id: instructionUUID } = req.query;

  if (!instructionUUID) {
    return res.status(400).json({ message: 'Missing instruction ID' });
  }

  try {
    await dbConnect(); 
    const storedPayment = await Payment.findOne({ instructionUUID: instructionUUID });

    if (storedPayment) {
      return res.status(200).json({
        status: storedPayment.status,
        message: storedPayment.errorMessage || 'Status retrieved successfully.'
      });
    } else {
      return res.status(404).json({ message: 'Payment status not found or not yet processed.' });
    }
  } catch (error) {
    console.error('[Swish Status API] Error fetching status:', error);
    res.status(500).json({ message: 'Error fetching payment status.' });
  }
}