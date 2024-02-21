const mongoose = require('mongoose');
const Transaction = require('../models/Transaction');
const connectDB = require('../config/db');

module.exports = async (req, res) => {
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
