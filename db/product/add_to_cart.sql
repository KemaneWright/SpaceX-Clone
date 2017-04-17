insert into product_in_order (order_id, product_id, qty)
  values ($1, $2, $3)
  returning *;
