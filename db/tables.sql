DROP DATABASE IF EXISTS 

CREATE DATABASE resource_db

\c resource_db

CREATE TABLE user (
	id SERIAL PRIMARY KEY,
	username VARCHAR(64),
	email VARCHAR(64),
	password VARCHAR(64)
);

CREATE TABLE admin ( 
	id SERIAL PRIMARY KEY,
	adminusername VARCHAR(64),
	password VARCHAR(64)
); 

CREATE TABLE organization (
	id SERIAL PRIMARY KEY,
	organizationname VARCHAR(64),
	password VARCHAR(64)
); 

CREATE TABLE resource (
	id SERIAL PRIMARY KEY,
	organizationId INT REFERENCES organization(id) ON DELETE CASCADE,
	description VARCHAR(64), 
	url VARCHAR(64),
	phone_number VARCHAR(64), 
	category VARCHAR(64),
	contact_info VARCHAR(64) 
); 

