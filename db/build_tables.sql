create table if not exists products (
  products_id serial primary key NOT NULL,
  products_img VARCHAR(50) NOT NULL,
  products_name text NOT NULL,
  products_price integer NOT NULL,
  products_type text NOT NULL
);
-- insert into products(products_img, products_name, products_price, products_type)
--   values
--   ('./images/products/mens/tshirts/image.png', 'Men''s SES-10 Mission Patch T-shirt', 22.00, 'men'),
--   ('./images/products/mens/tshirts/image (1).png', 'Men''s CRS-9 Mission Patch T-shirt', 22.00, 'men'),
--   ('./images/products/mens/tshirts/image (2).png', 'Men''s Echostar XXIII Mission Patch T-shirt', 22.00, 'men'),
--   ('./images/products/mens/tshirts/image (3).png', 'Men''s CRS-10 Mission Patch T-shirt', 22.00, 'men'),
--   ('./images/products/mens/tshirts/image (4).png', 'Men''s JCSAT-16 Mission Patch T-shirt', 22.00, 'men'),
--   ('./images/products/mens/tshirts/image (5).png', 'Men''s Iridium-1 Mission Patch T-shirt', 22.00, 'men'),
--   ('./images/products/mens/tshirts/image (6).png', 'SpaceX Front Logo T-shirt', 22.00, 'men'),
--   ('./images/products/mens/tshirts/image (8).png', 'Hyperloop Pod Competition 2017 T-shirt', 22.00, 'men'),
--   ('./images/products/mens/tshirts/image (9).png', 'Drone Ship Landing T-shirt', 22.00, 'men'),
--   ('./images/products/mens/tshirts/image (10).png', 'SpaceX T-Shirt', 22.00, 'men'),
--   ('./images/products/mens/tshirts/image (11).png', 'F9 T-Shirt', 22.00, 'men'),
--   ('./images/products/mens/tshirts/image (12).png', 'F9 Launch T-shirt', 22.00, 'men'),
--   ('./images/products/mens/tshirts/image (13).png', 'F9 Flight T-shirt', 22.00, 'men'),
--   ('./images/products/mens/tshirts/image (14).png', 'Dragon T-shirt', 22.00, 'men'),
--   ('./images/products/mens/tshirts/image (15).png', 'F9 Graphic T-shirt', 22.00, 'men')
--   ('./images/products/mens/hoodies/image.png', 'F9 Zip Hoodie', 40.00, 'men'),
--   ('./images/products/mens/hoodies/image (2).png', 'Mission to Mars Hoodie', 40.00, 'men'),
--   ('./images/products/mens/jackets/image (1).png', 'Men''s Soft Shell Jacket', 150.00, 'men')
    --
    -- ('./images/products/womens/tshirts/image.png', 'Womens Item', 22.00, 'women')
    -- ('./images/products/womens/tshirts/image (1).png', 'Womens Item', 22.00, 'women')
    -- ('./images/products/womens/tshirts/image (2).png', 'Womens Item', 22.00, 'women')
    -- ('./images/products/womens/tshirts/image (3).png', 'Womens Item', 22.00, 'women')
    -- ('./images/products/womens/tshirts/image (4).png', 'Womens Item', 22.00, 'women')
    -- ('./images/products/womens/tshirts/image (5).png', 'Womens Item', 22.00, 'women')
    -- ('./images/products/womens/tshirts/image (6).png', 'Womens Item', 22.00, 'women')
    -- ('./images/products/womens/tshirts/image (7).png', 'Womens Item', 22.00, 'women')
    -- ('./images/products/womens/tshirts/image (8).png', 'Womens Item', 22.00, 'women')
    -- ('./images/products/womens/tshirts/image (9).png', 'Womens Item', 22.00, 'women')
    -- ('./images/products/womens/tshirts/image (10).png', 'Womens Item', 22.00, 'women')
    -- ('./images/products/womens/tshirts/image (11).png', 'Womens Item', 22.00, 'women')
    -- ('./images/products/womens/tshirts/image (12).png', 'Womens Item', 22.00, 'women')
    -- ('./images/products/womens/tshirts/image (13).png', 'Womens Item', 22.00, 'women')
    -- ('./images/products/womens/tshirts/image (14).png', 'Womens Item', 22.00, 'women')
    -- ('./images/products/womens/tshirts/image (15).png', 'Womens Item', 22.00, 'women')
    -- ('./images/products/womens/hoodies/image.png', 'Womens Item', 40.00, 'women')
    -- ('./images/products/womens/hoodies/image (1).png', 'Womens Item', 40.00, 'women')
    -- ('./images/products/womens/jackets/image.png', 'Womens Item', 150.00, 'women')
