CREATE DATABASE `burgers_db`;

USE `burgers_db`;

CREATE TABLE `burgers`
(
    id INTEGER AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL,
    created_at TIMESTAMP NOT NUll,
    PRIMARY KEY (id)
);
     
