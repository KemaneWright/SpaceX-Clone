const app = require('../index');
const db = app.get('db');

module.exports = {
    // RETURN CURRENT USER //
    me: (req, res, next) => {
        // If user isnt on the session, then return error status
        if (!req.user) {
            console.log('Current user not found');

            return res.status(401)
                .send('current user not defined');
        }
        // Return user
        console.log('User: ', req.user)
        return res.status(200)
            .json(req.user);
    },

    update: (req, res, next) => {
        console.log('Starting update');

        const updateUser = req.body;
        updateUser.id = req.user.id;
        db.users.save(updateUser, (err, user) => {
            if (err) {
                console.log('User update error', err);

                return res.status(401)
                    .send(err);
            }

            req.user = user;

            res.status(200)
                .json(user);
        });
    }
}
