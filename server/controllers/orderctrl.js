const app = require('../index');
const db = app.get('db');

module.exports = {
    addToCart: function(req, res, next) {
        db.product.add_to_cart([req.user.order_id, req.body.product_id, req.body.qty], (err, product) => {
            if (err) {
                console.log('Add to Order err: ', err);
                return res.status(500).send(err);
            }

            return res.status(200).send('Product added to cart');
        });
    },
    updateItemInCart: (req, res, next) => {
        console.log(req.params.id);
        db.product.update_order([req.params.id, req.body.qty], (err, product) => {

            // if (err) {
            //   console.log('Update qty err: ', err);
            //   return res.status(500).send(err);
            // }
            //
            return res.status(200).send('Product updated successfully');
        });
    },
    deleteFromCart: (req, res, next) => {
        db.product.remove_from_cart([req.params.id], (err, response) => {
            console.log(response);
            // if (err) {
            //   console.log('Delete product in cart err: ', err);
            //   return res.status(500).send(err);
            // }

            return res.status(200).send('Product deleted successfully');
        });
    },
    complete: (req, res, next) => {
        db.order.update([req.user.order_id, new Date(), undefined], (err, order) => {
            console.log(order);
            // if (err) {
            //   console.log('complete order err: ', err);
            //   return res.status(500).send(err);
            // }

            db.order.insert([req.user.user_id], (err, order) => {
                if (err) {
                    console.log('complete order create err: ', err);
                    return res.status(500).send(err);
                }

                req.user.order_id = order[0].order_id;
                return res.status(200).send('Order completed successfully');
            })
        })
    },
    read: function(req, res, next) {
        db.order.read_id([req.user.order_id], (err, order) => {
            if (err) {
                console.log('Order read err: ', err);
                return res.status(500).send(err);
            }

            const totalOrder = {
                order: order[0]
            };

            db.order.get_products([req.user.order_id], (err, products) => {
                if (err) {
                    console.log('Order products read err: ', err);
                    return res.status(500).send(err);
                }

                totalOrder.products = products;

                return res.status(200).send(totalOrder);
            })
        })
    }
}
