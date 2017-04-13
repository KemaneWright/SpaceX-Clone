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
  getProductDetails: function(req, res, next) {
    db.get_product_details([req.params.id],
    function(err, result) {
      // console.log(res);
      if (err) {
        console.log(err);
        return res.send(err);
      }
      // console.log(result)
      return res.status(200).send(result)
    })
  }
}
