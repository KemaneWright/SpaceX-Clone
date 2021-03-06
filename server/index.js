const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    config = require('./config'),
    passport = require('passport'),
    auth0 = require('passport-auth0');
const stripe = require('stripe')(config.STRIPE_KEYS.secretKey);



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
const db = app.get('db');

const dbSetup = require('./services/dbSetup');
dbSetup.run();


////////////  PASSPORT SETUP ////////////
app.use(passport.initialize());
app.use(passport.session());

passport.use(new auth0(config.AUTH_CONFIG, function(accessToken, refreshToken, extraParams, profile, done) {
    db.user.email([profile.displayName], (err, user) => {
        if (err) {
            return done(err);
        } else if (!user.length) {
            db.user.create([profile.nickname, profile.displayName], (err, user) => {
                if (err) {
                    return done(err);
                }
                console.log('User created');

                db.order.insert([user[0].user_id], (err, order) => {
                    if (err) {
                        console.log('DB Create, durring user create: ', err);
                    }

                    user[0].order_id = order[0].order_id;
                    return done(null, user[0]);
                })
            })
        } else {
            console.log('User found');
            db.order.read_incomplete([user[0].user_id], (err, order) => {
                if (err) {
                    return console.log("Find User Auth, Order not found", err);
                }

                console.log('order: ', order);
                user[0].order_id = order[0].order_id;
                return done(null, user[0]);
            });
        }
    });

}));

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});


// payment
app.post('/api/payment', function(req, res, next) {
    console.log(req.body);

    //convert amount to pennies
    let chargeAmt = req.body.amount;
    let amountArray = chargeAmt.toString().split('');
    let pennies = [];
    for (let i = 0; i < amountArray.length; i++) {
        if (amountArray[i] === ".") {
            if (typeof amountArray[i + 1] === "string") {
                pennies.push(amountArray[i + 1]);
            } else {
                pennies.push("0");
            }
            if (typeof amountArray[i + 2] === "string") {
                pennies.push(amountArray[i + 2]);
            } else {
                pennies.push("0");
            }
            break;
        } else {
            pennies.push(amountArray[i])
        }
    }
    let convertedAmt = parseInt(pennies.join(''));
    console.log("Pennies: ");
    console.log(convertedAmt);

    let charge = stripe.charges.create({
        amount: convertedAmt, // amount in cents, again
        currency: 'usd',
        source: req.body.payment.token,
        description: 'Test charge from grahms repo'
    }, (err, charge) => {
        res.sendStatus(200);
        // if (err && err.type === 'StripeCardError') {
        //   // The card has been declined
        // }
    });
});


///////////  PASSPORT ENDPOINTS /////////
app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: '/#!/shop'
}))

app.get('/auth/me', function(req, res) {
    if (!req.user) return res.sendStatus(404);

    return res.staus(200).send(req.user);
})

app.get('/auth/logout', function(req, res) {
    req.logout();
    res.redirect('/');
})

/////////// POLICIES ////////////
const isAuthed = function(req, res, next) {
    if (!req.isAuthenticated()) return res.status(401).send();
    return next();
}

////////////  CONTROLLERS ////////////
const storeCtrl = require('./controllers/storectrl.js');
const orderCtrl = require('./controllers/orderctrl.js');
const userCtrl = require('./controllers/userctrl.js');


//////////// USER ENDPOINTS  ////////////
app.get('/api/me', userCtrl.me);
app.get('/api/user/current', isAuthed, userCtrl.update);

//////////// ORDER ENDPOINTS  ////////////
app.put('/api/order/complete', isAuthed, orderCtrl.complete);
// app.get('/api/order/history', isAuthed, orderCtrl.orderHistory);
app.get('/api/order', isAuthed, orderCtrl.read);
app.post('/api/order/add', isAuthed, orderCtrl.addToCart);
app.put('/api/order/update/:id', isAuthed, orderCtrl.updateItemInCart);
app.delete('/api/order/delete/:id', isAuthed, orderCtrl.deleteFromCart);

//////////// PRODUCTS ENDPOINTS  ////////////
app.get('/api/store/men', storeCtrl.getMens)
app.get('/api/store/women', storeCtrl.getWomens)
app.get('/api/store/kids', storeCtrl.getKids)
app.get('/api/store/:id', storeCtrl.getProductDetails)

const port = config.PORT;
app.listen(port, function() {
    console.log('listening on 3000');
})
