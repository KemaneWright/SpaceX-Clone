select * from products p join product_in_order pio on p.id = pio.product_id
where pio.order_id = $1;
