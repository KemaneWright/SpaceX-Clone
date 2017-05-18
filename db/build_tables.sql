create table if not exists products (
  id serial primary key NOT NULL,
  img VARCHAR(50) NOT NULL,
  name text NOT NULL,
  price int NOT NULL,
  type text NOT NULL
);

create table if not exists users (
  user_id serial primary key NOT NULL,
  name text,
  email text unique
);

create table if not exists orders (
  order_id serial primary key,
  user_id int,
  completed_date text,
  fulfilled text
);

create table if not exists product_in_order (
  pio_id serial primary key,
  order_id int,
  product_id int,
  qty int default 1
);

-- create table if not exists gallery (
--   gallery_img VARCHAR(50) NOT NULL
-- );

-- insert into products(img, name, price, type)
--   values
--   ('./images/products/mens/tshirts/image.png', 'Men''s SES-10 Mission Patch T-shirt', 22, 'men'),
--   ('./images/products/mens/tshirts/image (1).png', 'Men''s CRS-9 Mission Patch T-shirt', 22, 'men'),
--   ('./images/products/mens/tshirts/image (2).png', 'Men''s Echostar XXIII Mission Patch T-shirt', 22, 'men'),
--   ('./images/products/mens/tshirts/image (3).png', 'Men''s CRS-10 Mission Patch T-shirt', 22, 'men'),
--   ('./images/products/mens/tshirts/image (4).png', 'Men''s JCSAT-16 Mission Patch T-shirt', 22, 'men'),
--   ('./images/products/mens/tshirts/image (5).png', 'Men''s Iridium-1 Mission Patch T-shirt', 22, 'men'),
--   ('./images/products/mens/tshirts/image (6).png', 'SpaceX Front Logo T-shirt', 22, 'men'),
--   ('./images/products/mens/tshirts/image (8).png', 'Hyperloop Pod Competition 2017 T-shirt', 22, 'men'),
--   ('./images/products/mens/tshirts/image (9).png', 'Drone Ship Landing T-shirt', 22, 'men'),
--   ('./images/products/mens/tshirts/image (10).png', 'SpaceX T-Shirt', 22, 'men'),
--   ('./images/products/mens/tshirts/image (11).png', 'F9 T-Shirt', 22, 'men'),
--   ('./images/products/mens/tshirts/image (12).png', 'F9 Launch T-shirt', 22, 'men'),
--   ('./images/products/mens/tshirts/image (13).png', 'F9 Flight T-shirt', 22, 'men'),
--   ('./images/products/mens/tshirts/image (14).png', 'Dragon T-shirt', 22, 'men'),
--   ('./images/products/mens/tshirts/image (15).png', 'F9 Graphic T-shirt', 22, 'men'),
--   ('./images/products/mens/hoodies/image.png', 'F9 Zip Hoodie', 40, 'men'),
--   ('./images/products/mens/hoodies/image (2).png', 'Mission to Mars Hoodie', 40, 'men'),
--   ('./images/products/mens/jackets/image (1).png', 'Men''s Soft Shell Jacket', 150, 'men'),
--   ('./images/products/womens/tshirts/image.png', 'Women''s SES-10 Mission Patch T-shirt', 22, 'women'),
--   ('./images/products/womens/tshirts/image (1).png', 'Women''s Echostar XXIII Mission Patch T-shirt', 22, 'women'),
--   ('./images/products/womens/tshirts/image (2).png', 'Hyperloop Pod Competition 2017 T-shirt', 22, 'women'),
--   ('./images/products/womens/tshirts/image (3).png', 'Women''s CRS-10 Mission Patch T-shirt', 22, 'women'),
--   ('./images/products/womens/tshirts/image (4).png', 'Drone Ship Landing T-shirt', 22, 'women'),
--   ('./images/products/womens/tshirts/image (5).png', 'Women''s CRS-9 Mission Patch T-shirt', 22, 'women'),
--   ('./images/products/womens/tshirts/image (6).png', 'Women''s Iridium-1 Mission Patch T-shirt', 22, 'women'),
--   ('./images/products/womens/tshirts/image (7).png', 'F9 First Stage T-shirt', 22, 'women'),
--   ('./images/products/womens/tshirts/image (8).png', 'Lucky Launch T-shirt', 22, 'women'),
--   ('./images/products/womens/tshirts/image (9).png', 'SpaceX Foil V-neck', 22, 'women'),
--   ('./images/products/womens/tshirts/image (10).png', 'Dragon CAD T-shirt', 22, 'women'),
--   ('./images/products/womens/tshirts/image (12).png', 'Women''s Vertical T-Shirt', 22, 'women'),
--   ('./images/products/womens/tshirts/image (13).png', 'SpaceX V-neck', 22, 'women'),
--   ('./images/products/womens/tshirts/image (14).png', 'F9 T-shirt', 22, 'women'),
--   ('./images/products/womens/tshirts/image (15).png', 'Dragon T-shirt', 22, 'women'),
--   ('./images/products/womens/hoodies/image.png', 'SpaceX Zipper Hoodie', 40, 'women'),
--   ('./images/products/womens/hoodies/image (1).png', 'SpaceX Hoodie', 40, 'women'),
--   ('./images/products/womens/jackets/image.png', 'Women''s Soft Shell Jacket', 150, 'women'),
--   ('./images/products/kids/image.png', 'SpaceX Onesie', 13, 'kids'),
--   ('./images/products/kids/image (1).png', 'Kid''s SES-10 Mission Patch T-shirt', 16, 'kids'),
--   ('./images/products/kids/image (2).png', 'Kid''s F9 First Stage T-shirt', 16, 'kids'),
--   ('./images/products/kids/image (3).png', 'Kid''s Occupy Mars T-shirt', 16, 'kids'),
--   ('./images/products/kids/image (4).png', 'Kid''s SpaceX T-shirt', 16, 'kids'),
--   ('./images/products/kids/image (5).png', 'Kid''s SpaceX T-shirt', 15, 'kids'),
--   ('./images/products/kids/image (7).png', 'Kid''s Dragon T-shirt', 16, 'kids'),
--   ('./images/products/kids/image (8).png', 'Kid''s F9 T-Shirt', 16, 'kids'),
--   ('./images/products/kids/image (9).png', 'Kid''s FH T-Shirt', 16, 'kids'),
--   ('./images/products/kids/image (10).png', 'Thaicom-8 Mission Patch T-shirt', 16, 'kids'),
--   ('./images/products/kids/image (11).png', 'Landing Mission Patch T-shirt', 16, 'kids'),
--   ('./images/products/kids/image (12).png', 'Orbcomm-2 Mission Patch T-shirt', 16, 'kids'),
--   ('./images/products/kids/image (13).png', 'SpaceX Youth Hoodie', 25, 'kids'),
--   ('./images/products/kids/image (14).png', 'SpaceX Youth Zipper Hoodie', 28, 'kids')


-- insert into gallery()
