DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (

    -- id: an auto incrementing int that serves as the primary key.
    id INT(11) AUTO_INCREMENT NOT NULL,

    -- burger_name: a string.
    burger_name VARCHAR(255) NOT NULL,

    -- devoured: a boolean.
    devoured BOOLEAN DEFAULT false,
    
    PRIMARY KEY (id)
);