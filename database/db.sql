/* Creando la base de datos */
CREATE DATABASE crudnodejsmysql;

/* Using the database */
use crudnodejsmysql;


/* Creating a Table */
CREATE TABLE users(id int unsigned primary key not null auto_increment,name varchar (50) not null,email Varchar (50) not null);


CREATE TABLE users(
    id int unsigned not null primary key auto_increment,
    name varchar (50) not null,
    email varchar (50) not null,
);
/* tp show all table */

SHOW TABLES;

/* to describe the table */ 
describe customer;

