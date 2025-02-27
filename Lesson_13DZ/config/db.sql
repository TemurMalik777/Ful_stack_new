-- DROP DATABASE flowers_shop

SHOW DATABASES

CREATE DATABASE flowers_shop

USE flowers_shop

SHOW TABLES

CREATE TABLE `flowers`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NULL,
    `color` VARCHAR(255) NOT NULL,
    `price` DECIMAL(8, 2) NOT NULL,
    `category_id` BIGINT NOT NULL,
    `photo` VARCHAR(255) NOT NULL,
    `import_from` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `count` SMALLINT NOT NULL
);

DESC flowers

SELECT * FROM flowers

-- DROP TABLE flowers

CREATE TABLE `customers`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` BIGINT NOT NULL,
    `address` TEXT NOT NULL
);

CREATE TABLE `orders`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `customer_id` BIGINT NOT NULL,
    `total_price` DECIMAL(8, 2) NOT NULL,
    `order_date` DATETIME NOT NULL,
    `address_id` BIGINT NOT NULL,
    `status` ENUM('') NOT NULL
);

CREATE TABLE `order_details`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `order_id` BIGINT NOT NULL,
    `flower_id` BIGINT NOT NULL,
    `quantity` BIGINT NOT NULL
);

CREATE TABLE `address`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `customer_id` BIGINT NOT NULL,
    `region` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `street` VARCHAR(255) NOT NULL
);

CREATE TABLE `category`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

DROP TABLE category

SHOW TABLES

DESC TABLE category