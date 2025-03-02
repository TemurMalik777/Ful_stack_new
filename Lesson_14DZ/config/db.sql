
SHOW DATABASES

CREATE DATABASE cheap_fuel

USE cheap_fuel

SHOW TABLES

CREATE TABLE gas_station(
    id INT AUTO_INCREMENT PRIMARY KEY, 
    main_gas_station_name VARCHAR(250)
    )

-- DROP TABLE gas_station

DESC gas_station

CREATE TABLE gas_station_branch(
    id INT AUTO_INCREMENT PRIMARY KEY,
    gas_station_id BIGINT NOT NULL,
    branch_name VARCHAR(250),
    address VARCHAR(100),
    location VARCHAR(250),
    phone_number VARCHAR(50)
)

SHOW TABLES

CREATE TABLE gas_station_fuel_type(
    id INT AUTO_INCREMENT PRIMARY KEY,
    gas_station_branch_id BIGINT NOT NULL,
    fuel_type_id BIGINT NOT NULL,
    price DECIMAL(15, 2),
    is_have BOOLEAN
)

CREATE TABLE fuel_type(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250)
)

SHOW TABLES