var app = require('../index.js');
var db = app.get('db');

module.exports = {
  getMens: function(req, res, next) {
    db.get_mens([], function(err, product) {
      if (err) {
        return res.status(500).send(err)
      }
      else {
        res.send(product)
      }
    })
  },
  getWomens: function(req, res, next) {
    db.get_womens([], function(err, product) {
      if (err) {
        return res.status(500).send(err)
      }
      else {
        res.send(product)
      }
    })
  }
}
