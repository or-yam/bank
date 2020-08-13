const express = require('express');
const router = express.Router();
const Transaction = require('../Models/Transaction');

//REMOVE BEFORE PUBLISHING!
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );
  next();
});
//*******/

router.get('/transactions', (req, res) => {
  Transaction.find({}).exec((err, data) => res.send(data)); // to sort by date (newest firs)
});

router.post('/transaction', (req, res) => {
  const transaction = req.body;
  const newTrans = new Transaction({
    amount: transaction.amount,
    category: transaction.category,
    vendor: transaction.vendor,
  });
  newTrans.save().then((t) => res.send(t));
});

router.delete('/transaction/:id', (req, res) => {
  const id = req.params.id;
  Transaction.findByIdAndRemove(id).exec((err, data) => { //handle errors better!!
    if (err) {
      res.send(err);
    }
    if (!data) {
      res.send('not found');
    } else {
      res.send('success');
    }
  });
});

module.exports = router;
