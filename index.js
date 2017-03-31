const express = require('express'),
session = require('express-session'),
bodyParser = require('body-parser'),
massive = require('massive'),
cors = require('cors'),
config = require('./config');

const app = express();
app.use(bodyParser.json());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret
}))


app.listen(9000, function() {
  console.log('listening on 9000');
})
