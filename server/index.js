const express = require('express'),
session = require('express-session'),
bodyParser = require('body-parser'),
massive = require('massive'),
cors = require('cors'),
config = require('./config.js');

const app = express();
app.use(bodyParser.json());
app.use(express.static('../public'))
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret
}))


////////////  MASSIVE SETUP ////////////
const massiveUri = config.massiveUri;
const massiveServer = massive.connectSync({
  connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');


////////////  DB SETUP ////////////
// var dbSetup = require('./services/dbSetup');
// dbSetup.run();


////////////  ENDPOINTS SETUP ////////////
// app.get('/api/table')  //PUT CONTROLLER FUNCTION HERE //








app.listen(9000, function() {
  console.log('listening on 9000');
})
