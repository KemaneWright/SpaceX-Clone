var app = require('../index.js');
var db = app.get('db');

module.exports = {
  getProducts: function(req, res, next) {
    db.get_products([], function(err, product) {
      if (err) {
        return res.status(500).send(err)
      }
      else {
        res.send(product)
      }
    })
  }
}
