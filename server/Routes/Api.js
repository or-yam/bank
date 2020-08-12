const express = require('express');
const router = express.Router();
const Transaction = require('../Models/Transaction');
const Transaction = require('../Models/Transaction');
const transaction = require('../Models/Transaction');

router.get('/transactions', (req, res) => {
  Transaction.find({}).exec((err, data) => res.send(data));
});

router.post('/transaction', (req, res) => {
  const { transaction } = req.body;
  const newTrans = new Transaction({
    amount: transaction.amount,
    category: transaction.category,
    vendor: transaction.vendor,
  });
  newTrans.save().then((t) => res.send(t));
});

router.delete('/transaction', (req, res) => {
  const { id } = req.body;
  transaction
    .findOneAndDelete({ _id: id })
    .exec(res.send('Removed Successfully'));
});
