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
  const newTrans = new Transaction(transaction);
  newTrans.save().then((t) => res.send(t));
});

router.delete('/transaction/:id', (req, res) => {
  const { id } = req.params;
  Transaction.findByIdAndDelete(id, (err) =>
    err ? res.send(err) : res.send('deleted')
  );
});

module.exports = router;
