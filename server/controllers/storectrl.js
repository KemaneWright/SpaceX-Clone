const app = require('../index');
const db = app.get('db');

module.exports = {
  getMens: function(req, res, next) {
    db.product.get_mens([], (err, product) => {
      if (err) {
        return res.status(500).send(err)
      }
      else {
        res.send(product)
      }
    })
  },
  getWomens: function(req, res, next) {
    db.product.get_womens([], (err, product) => {
      if (err) {
        return res.status(500).send(err)
      }
      else {
        res.send(product)
      }
    })
  },
  getKids: function(req, res, next) {
    db.product.get_kids([], (err, product) => {
      if (err) {
        return res.status(500).send(err)
      }
      else {
        res.send(product)
      }
    })
  },
  getProductDetails: function(req, res) {
    const id = req.body.id;
    console.log(id);
    db.product.get_product_details([id], (err, product) => {
      if (err) {
        console.log(err)
      }
      // console.log(product)
      return res.status(200).send(product)
    })
  }
}
