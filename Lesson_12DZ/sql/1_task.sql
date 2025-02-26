SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS flowers_shop;

USE flowers_shop;

SHOW TABLES;

CREATE TABLE IF NOT EXISTS Employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(100),
    phone VARCHAR(100),
    email VARCHAR(100),
    address VARCHAR(100),
    password VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Employees (fullname, phone, email, address, password) 
VALUES
('Ali Valiyev', '998901234567', 'ali@example.com', 'Toshkent, Uzbekistan', 'passAli'),
('Sunat Berdiyev', '998901112233', 'vali@example.com', 'Samarqand, Uzbekistan', 'passVali'),
('Abbos Qudratov', '998909876543', 'gulnora@example.com', 'Buxoro, Uzbekistan', 'passGul');


CREATE TABLE IF NOT EXISTS Customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(100),
    phone VARCHAR(100),
    email VARCHAR(100),
    address VARCHAR(100),
    password VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Customers (fullname, phone, email, address, password) 
VALUES
('Kucharbek', '998901111111', 'kucharbek@gmil.com', 'Samarqand', 'ertyui4512'),
('Jumong', '998901222222', 'jumong@gmail.com', 'Sebzor', 'sdfghjk9852'),
('Xayrullo', '998901333333', 'xayrullo@gmil.com', 'Orikzor', 'adjf654'),
('Salim', '998901444444', 'salim@gmil.com', 'Sergily', 'zcvzx845'),
('Iskandar', '998901555555', 'iskandar@gmil.com', 'Chilonzor', 'ijhb456')

SELECT * FROM Customers

SHOW TABLES

CREATE TABLE IF NOT EXISTS Flowers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    color VARCHAR(50),
    quantity_stock INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Flowers (name, description, price, color, quantity_stock) VALUES
('Rose', 'Beautiful red roses perfect for bouquets', 2.50, 'Red', 100),
('Tulip', 'Vibrant spring tulips ideal for gardens', 1.75, 'Yellow', 150),
('Lily', 'Elegant white lilies for a sophisticated touch', 3.00, 'White', 80),
('Daisy', 'Cheerful daisies that brighten any room', 1.20, 'White', 200),
('Orchid', 'Exotic orchids with delicate petals', 4.50, 'Purple', 50)


SELECT * FROM Flowers

CREATE TABLE IF NOT EXISTS Orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    employee_id INT NULL, 
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10,2),
    status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending',
    CONSTRAINT fk_orders_customer FOREIGN KEY (customer_id) REFERENCES Customers(id) ON DELETE CASCADE,
    CONSTRAINT fk_orders_employee FOREIGN KEY (employee_id) REFERENCES Employees(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS Order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    flower_product_id INT,
    quantity INT,
    subtotal DECIMAL(10,2),
    CONSTRAINT fk_order_items_order FOREIGN KEY (order_id) REFERENCES Orders(id) ON DELETE CASCADE,
    CONSTRAINT fk_order_items_flower FOREIGN KEY (flower_product_id) REFERENCES Flowers(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Vendors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    contact_email VARCHAR(100),
    contact_phone VARCHAR(100),
    address TEXT
);
