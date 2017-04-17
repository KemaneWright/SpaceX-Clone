select * from product_in_order pio
where
pio.product_id = $1 and
pio.order_id = $2;
