DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(

    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(32) NOT NULL,
    department_name VARCHAR(32) NOT NULL,
    price DECIMAL (6,2),
    stock_quantity INTEGER NOT NULL,

    PRIMARY KEY (item_id)
);

