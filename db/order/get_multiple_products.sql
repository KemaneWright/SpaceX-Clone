select * from products p join product_in_order pio on p.products_id = pio.product_id where pio.order_id = ANY($1);
