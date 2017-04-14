var app = require('../index');
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
  },
  getKids: function(req, res, next) {
    db.get_kids([], function(err, product) {
      if (err) {
        return res.status(500).send(err)
      }
      else {
        res.send(product)
      }
    })
  },
  getProductDetails: function(req, res) {
    var id = req.params.id;
    console.log(id);
    db.get_product_details([id], function(err, product) {
      if (err) {
        console.log(err)
      }
      // console.log(product)
      return res.status(200).send(product)
    })
  }
}
