SHOW DATABASES;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE IF NOT EXISTS employees (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    position VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

DESCRIBE employees;

DROP TABLE employees

INSERT INTO employees (first_name, last_name, position, department, salary)
VALUES
('Jamshid', 'Rakhimov', 'Dasturchi', 'Axborot texnologiyalari', 70000.00),
('Dildora', 'Tursunova', 'HR Menejeri', 'Kadrlar boshqarmasi', 65000.00),
('Nelufar', 'Karimova', 'Mahsulot Menejeri', 'Savdo', 80000.00),
('Rasul', 'Sobirov', 'UX Dizayneri', 'Dizayn studiyasi', 75000.00),
('Farida', 'Ismailova', 'Ma''lumotlarni Tahlilchi', 'Analitika bo''limi', 72000.00),
('Azamat', 'Karimov', 'Texnik Rivojlantiruvchi', 'Texnik xizmatlar', 67000.00),
('Nargiza', 'Tashkentova', 'HR Mutaxassisi', 'Kadrlar boshqarmasi', 60000.00),
('Alisher', 'Muradov', 'Biznes Tahlilchisi', 'Biznes bo''limi', 72000.00),
('Zohid', 'Salimov', 'Mahsulot Tahlilchisi', 'Savdo', 74000.00);


SELECT * FROM employees

SELECT department AS 'Bo"lim', 
       first_name AS 'Ism', 
       last_name AS 'Familiya', 
       position AS 'Pozitsiya', 
       salary AS 'Maosh' 
FROM employees 
ORDER BY department ASC;
