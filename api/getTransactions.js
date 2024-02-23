// const cors = require('cors')({ origin: true });

// const mongoose = require('mongoose');
// const Transaction = require('../models/Transaction');
// const connectDB = require('../config/db');

// module.exports = async (req, res) => {
//   console.log('get working');

//   await connectDB();

//   try {
//     const transactions = await Transaction.find();
//     return res.status(200).json({
//       success: true,
//       count: transactions.length,
//       data: transactions,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       error: 'Server Error',
//     });
//   }
// };

export default async function handler(req, res) {
  console.log('add working');

  res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust as needed
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  await connectDB();

  res.json({ message: 'It works (add)' });
  // Handle pre-flight requests for CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
}
