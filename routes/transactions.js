const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require('../controllers/transactions');

// prettier-ignore
router
  .route('/')
  .get(getTransactions)
  .post(addTransaction);

// prettier-ignore
router
  .route('/:id')
  .delete(deleteTransaction);

module.exports = router;
