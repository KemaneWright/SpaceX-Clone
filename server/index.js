const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    config = require('./config')



const app = module.exports = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./public'))
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.SESSION_SECRET
}))



////////////  MASSIVE AND DB SETUP ////////////
const massiveUri = config.MASSIVE_URI;
const massiveServer = massive.connectSync({
    connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');

var dbSetup = require('./services/dbSetup');
dbSetup.run();


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
    successRedirect: '/#!/shop',
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
var orderCtrl = require('./controllers/orderctrl.js');
var userCtrl = require('./controllers/userctrl.js');


//////////// USER ENDPOINTS  ////////////
app.get('/api/me', userCtrl.me);
app.get('/api/user/current', isAuthed, userCtrl.update);

//////////// ORDER ENDPOINTS  ////////////
app.put('/api/order/complete', isAuthed, orderCtrl.complete, storeCtrl.getProductDetails);
// app.get('/api/order/history', isAuthed, orderCtrl.orderHistory);
app.get('/api/order', isAuthed, storeCtrl.getProductDetails);
app.post('/api/order/add', isAuthed, orderCtrl.addToCart);
app.put('/api/order/update/:id', isAuthed, orderCtrl.updateItemInCart);
app.delete('/api/order/delete/:id', isAuthed, orderCtrl.deleteFromCart);

//////////// PRODUCTS ENDPOINTS  ////////////
app.get('/api/store/men', storeCtrl.getMens)
app.get('/api/store/women', storeCtrl.getWomens)
app.get('/api/store/kids', storeCtrl.getKids)
app.get('/api/store/:id', storeCtrl.getProductDetails)

var port = config.PORT;
app.listen(port, function() {
    console.log('listening on 3000');
})
