update product_in_order set qty = $2 where pio_id = $1
  returning *;
