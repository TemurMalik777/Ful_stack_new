CREATE DATABASE IF NOT EXISTS univer;
USE univer;

SHOW DATABASES


-- DROP TABLE IF EXISTS student;
-- DROP TABLE IF EXISTS groupss;
-- DROP TABLE IF EXISTS region;
-- DROP TABLE IF EXISTS faculty;

SHOW TABLES

CREATE TABLE IF NOT EXISTS faculty(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO faculty(name)
VALUES
('Full-stack'),
('SMM');

-- DROP TABLE faculty

SELECT * FROM faculty;

CREATE TABLE IF NOT EXISTS region(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

INSERT INTO region(name)
VALUES
('Navoiy'),
('Samarqand'),
('Toshkent'),
('Andijon'),
('Namangan'),
('Jizzax'),
('Sirdaryo'),
('Fargona'),
('Buxoro'),
('Qashqadaryo'),
('Surxandaryo'),
('Urganch');

-- DROP TABLE region

SELECT * FROM region;

CREATE TABLE IF NOT EXISTS groupss(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    faculty_id INT(11),
    FOREIGN KEY (faculty_id) REFERENCES faculty(id)
);


INSERT INTO groupss(name, faculty_id) VALUES 
('Dasturlash', 1),
('SMM', 2),
('Mobil', 1)


-- DROP TABLE groupss

SELECT * FROM groupss;

SHOW TABLES

-- DROP TABLE IF EXISTS student;


CREATE TABLE IF NOT EXISTS student(
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    region_id INT(11),
    group_id INT(11),
    FOREIGN KEY (region_id) REFERENCES region(id),
    FOREIGN KEY (group_id) REFERENCES groupss(id) 
);

DESC TABLE student

SHOW TABLES;

SELECT * FROM groupss

INSERT INTO student(name, region_id, group_id)
VALUES
('Temur', 1, 1),
('Davlat', 2, 2),
('Anvar', 3, 3),
('Sunnat', 4, 1),
('Abbos', 5, 2),
('Salim', 6, 3),
('Quldosh', 7, 1),
('Homid', 8, 2),
('Berdiyor', 9, 3),
('Abubakir', 10, 1)

DROP TABLE student

DESC student


SELECT * FROM student;

SELECT * FROM student
WHERE name LIKE 'A%';

SELECT 
    s.id, 
    s.name, 
    r.name AS Region, 
    g.name AS Guruh, 
    f.name AS Fakultet
FROM student s
JOIN region r ON s.region_id = r.id
JOIN groupss g ON s.group_id = g.id
JOIN faculty f ON g.faculty_id = f.id
WHERE s.name LIKE 'A%';

SELECT 
    s.id, 
    s.name, 
    r.name AS Region, 
    g.name AS Guruh, 
    f.name AS Fakultet
FROM student s
JOIN region r ON s.region_id = r.id
JOIN groupss g ON s.group_id = g.id
JOIN faculty f ON g.faculty_id = f.id
WHERE r.name = 'Samarqand'
  AND f.name = 'Full-stack';
