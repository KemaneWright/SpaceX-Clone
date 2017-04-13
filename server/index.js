const express = require('express'),
session = require('express-session'),
bodyParser = require('body-parser'),
massive = require('massive'),
cors = require('cors'),
config = require('./config.js');

const app = module.exports = express();
app.use(cors());
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

db.build_tables(function(err, res) {
  console.log(err)
});

////////////  DB SETUP ////////////
// var dbSetup = require('./services/dbSetup');
// dbSetup.run();

////////////  CONTROLLERS ////////////
var storeCtrl = require('./controllers/storectrl.js')





////////////  ENDPOINTS SETUP ////////////
app.get('/api/store/men', storeCtrl.getMens)
app.get('/api/store/women', storeCtrl.getWomens)
app.get('/api/store/kids', storeCtrl.getKids)
app.get('/api/store/details/:id', storeCtrl.getProductDetails)





app.listen(3000, function() {
  console.log('listening on 3000');
})
