const mongoose = require('mongoose');
const Transaction = require('../models/Transaction');
const connectDB = require('../config/db');

module.exports = async (req, res) => {
  await connectDB();

  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create({ text, amount });
    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error',
      });
    }
  }
};
