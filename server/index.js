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


////////////  AUTH SETUP ////////////
passport.use(new Auth0Strategy({
        domain: config.auth0.domain,
        clientID: config.auth0.clientID,
        clientSecret: config.auth0.clientSecret,
        callbackURL: '/auth/callback'
    },
    function(accessToken, resfeshToken, extraParams, profile, done) {
      // Invoke one time to set things up
      passport.serializeUser(function(userA, done) {
          console.log('serializing', userA);
          var userB = userA;
          done(null, userB);
      });

        // Find user in DB
        db.get_user_by_authid([profile.id], function(err, user) {
            user = user[0];
            if (!user) {
                console.log('Creating User');
                db.create_user_by_auth([profile.displayName, profile.id], function(err, user) {
                    console.log('User Created', userA);
                    return done(err, user[0]);
                })
            } else {
                console.log('Found User', user);
                return done(err, user);
            }
        })
    }
));
passport.deserializeUser(function(userB, done) {
var userC = userB;
done(null, userC);
})

////////////  CONTROLLERS ////////////
var storeCtrl = require('./controllers/storectrl.js')





//////////// PRODUCTS ENDPOINTS  ////////////
app.get('/api/store/men', storeCtrl.getMens)
app.get('/api/store/women', storeCtrl.getWomens)
app.get('/api/store/kids', storeCtrl.getKids)
app.get('/api/store/:id', storeCtrl.getProductDetails)


////////////  AUTH ENDPOINTS   ////////////
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback',
    passport.authenticate('auth0', {
        successRedirect: '/'
    }),
    function(req, res) {
        res.status(200).sed(req.user);
    })
app.get('/auth/me', function(req, res) {
    console.log('auth me', res);
    if (!req.user) return res.sendStatus(404);
    res.status(200).send(req.user);
})
app.get('/auth/logout', function(req, res) {
    req.logout();
    res.redirect('/')
})


app.listen(3000, function() {
    console.log('listening on 3000');
})
