create table if not exists products (
  products_id: serial primary key NOT NULL,
  products_img: VARCHAR(50) NOT NULL,
  products_name: text NOT NULL,
  products_price: integer NOT NULL,
  products_type: text NOT NULL
  -- products_color: text,
  -- products_size: text
)
