const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    config = require('./config'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0');


const app = module.exports = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public'))
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.secret
}))
app.use(passport.initialize());
app.use(passport.session());



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


////////////  PASSPORT SETUP ////////////
var passport = require('./services/passport');
app.use(passport.initialize());
app.use(passport.session());

///////////  PASSPORT ENDPOINTS /////////
app.get('/auth', function(req, res, next) {
  if (req.query.state) {
    req.session.state = req.query.state;
  }
  passport.authenticate('auth0')(req, res, next);
});
app.get('/auth/callback', function(req, res, next) {
  var state = 'profile';
  if (req.session.state) {
    state = req.session.state;
  }
  req.session.state = null;

  passport.authenticate('auth0', {
    successRedirect: '/#!/shop' + state,
    failureRedirect: '/#!/shop'
  })(req, res, next);
})
app.get('/api/logout', function(req, res, next) {
  req.logout();
  return res.status(200)
  .send('logged out');
})

/////////// POLICIES ////////////
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
}

////////////  CONTROLLERS ////////////
var storeCtrl = require('./controllers/storectrl.js');





//////////// PRODUCTS ENDPOINTS  ////////////
app.get('/api/store/men', storeCtrl.getMens)
app.get('/api/store/women', storeCtrl.getWomens)
app.get('/api/store/kids', storeCtrl.getKids)
app.get('/api/store/:id', storeCtrl.getProductDetails)


app.listen(3000, function() {
    console.log('listening on 3000');
})
