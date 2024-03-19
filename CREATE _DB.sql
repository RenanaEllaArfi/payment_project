CREATE DATABASE SALESDB;

use SALESDB;

CREATE TABLE sales_users (
	user_id INT PRIMARY KEY),
	user_name VARCHAR(100) NOT NULL, 
	user_email VARCHAR(100) NOT NULL,
	user_phone_number VARCHAR(100) NOT NULL
	password VARCHAR(100) NOT NULL 
);

CREATE TABLE business_compenies (
	company_id INT PRIMARY KEY)
    company_name VARCHAR(100) NOT NULL,
    industry VARCHAR(50) NOT NULL,
    location VARCHAR(100) NOT NULL,
);

CREATE TABLE meetings (
    meeting_id INT AUTO_INCREMENT PRIMARY KEY,
    Date DATE NOT NULL,
    location VARCHAR(100) NOT NULL,
    company_id VARCHAR(100) NOT NULL,
    summary TEXT NOT NULL
);

