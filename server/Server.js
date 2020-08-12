const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./server/routes/Api');

const PORT = 4000;
const app = express();

mongoose.connect('mongodb://localhost/bank', { useNewUrlParser: true });

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );

  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', api);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
