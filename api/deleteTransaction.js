const mongoose = require('mongoose');
const cors = require('cors')({ origin: true });
const Transaction = require('../models/Transaction');
const connectDB = require('../config/db');

module.exports = async (req, res) => {
  console.log('delete working');

  res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust as needed
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  await connectDB();

  try {
    const transaction = await Transaction.findById(req.query.id);
    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found',
      });
    }

    await transaction.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: `Server Error: ${err}`,
    });
  }
};
