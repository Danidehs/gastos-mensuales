const mongoose = require('mongoose');
const cors = require('cors')({ origin: true });
const Transaction = require('../models/Transaction');
const connectDB = require('../config/dbbackup');

module.exports = async (req, res) => {
  res.status(200).json({ message: 'Function executed successfully' });
};
