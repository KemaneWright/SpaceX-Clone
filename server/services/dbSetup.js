const app = require('../index');
const db = app.get('db');
const config = require('../config');

const allowConsoleOutput = config.INITALIZE_LOG;
const log = function(input) {
  if(allowConsoleOutput) {
    console.log(input);
  }
}

module.exports = {
  run: function() {
    console.log('Initializing Database');

    db.build_tables((err, table) => {
      if (err) return console.log('Error loading tables', err);
      else console.log('Tables loaded')
    })
  }

};
