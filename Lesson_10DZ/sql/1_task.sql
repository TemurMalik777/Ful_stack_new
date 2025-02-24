SHOW DATABASES

CREATE DATABASE IF NOT EXISTS store

USE store

CREATE TABLE IF NOT EXISTS products(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10,2),
    stock INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

DESCRIBE products

INSERT INTO products(name, category, price, stock)
VALUES
('iPhone 13', 'Elecronics', 9000.00, 10),
('Samsung TV 55', 'Elecronics', 1200.00, 5),
('Nike Shoes', 'Fashion', 150.00, 20),
('Adidas T-shirt', 'Fashion', 40.00, 30),
('HP Laptop', 'Electronics', 700.00, 7);

SELECT * FROM products

SELECT * FROM products
WHERE price > 500

SELECT * FROM products
ORDER BY price DESC

UPDATE products
SET price = 170
WHERE name = 'Nike Shoes'

DELETE FROM products
WHERE name = 'Adidas T-shirt'

SELECT * FROM products
WHERE name LIKE 'S%'

SELECT COUNT(*)
FROM products

SELECT MAX(price)
FROM products

SELECT MIN(price)
FROM products

SELECT SUM(price)
FROM products

SELECT AVG(price)
FROM products