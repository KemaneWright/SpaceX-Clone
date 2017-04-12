const app = require('../index.js');
const db = app.get('db');


module.exports = {
  run: function() {
    console.log('Initializing Database');

    db.init.build_tables(function(err, table) {
      if (err) return console.log('Error loading tables', err);
      else console.log('Tables loaded')
    })
  }

};
