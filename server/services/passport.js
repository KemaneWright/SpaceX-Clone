var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var app = require('../index');
var db = app.get('db');

var config = require('../config');

passport.use(new Auth0Strategy(config.AUTH_CONFIG, function(accessToken, refreshToken, extraParams, profile, done) {
    db.user.email([profile.emails[0].value], function(err, user) {
        user = user;
        if (err) {
            return done(err);
        } else if (!user) {
            if (!profile.name.givenName) {
                profile.name = {
                    givenName: profile.displayName,
                    familyName: null
                }
            }
            // Create User
            db.user.insert([profile.name.givenName, profile.name.familyName, profile.emails[0].value], function(err, user) {
                if (err) {
                    console.log('user creation err: ', err);
                    return done(err);
                }
                // Create Order
                db.user.insert([user[0].user_id], function(err, order) {
                    if (err) {
                        console.log('DB create, during user create: ', err);
                    }
                    user[0].user_id = order[0].id;
                    return done(null, user[0]);
                })
            })
        }
        else if(!user.name_last && profile.name.familyName) {
          // Change name
          user.name_first = profile.name.givenName;
          user.name__last = profile.name.familyName;

          // Update user
          db.users.save(user, function(err, updatedUser) {
            if (err) {
              console.log('User update error on login: ', err);
              return done(err);
            }
            findOrder(updatedUser);
          })
        }
        else {
          findOrder(user);
        }

        function findOrder(user) {
          db.order.read_incomplete([user.user_id], function(err, order) {
            if (err) {
              console.log('Find User Auth, Order not found: ', err);
              done(err);
            }
            user.order_id = order.order_id;
            return done(null, user);
          })
        }
    })
}))

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
})


module.exports = passport;
