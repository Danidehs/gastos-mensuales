// const mongoose = require('mongoose');
// const cors = require('cors')({ origin: true });
// const Transaction = require('../models/Transaction');
// const connectDB = require('../config/db');

// export function GET(req, res) {
//   return new res.status(200).json({
//     message: 'Function executed successfully',
//   });
// }

const mongoose = require('mongoose');
const Transaction = require('../models/Transaction');
const connectDB = require('../config/db');

module.exports = async (req, res) => {
  console.log('get working');

  await connectDB();

  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
