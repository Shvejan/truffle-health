## Software Engineering Internship Assessment for Truffle Health

This project is built using Node and Express JS. \
As a person who has worked on multiple projects in different teams, I understand the importance of writing clean and understandable code. I have tried to structure this project as clean as possible.

I used a sqlite3 database to store the medical bills data.

the folder "./db" contains and the files related to database

1. "connect.js" file had the database connection
2. "api.js" file has the functions which run queries on the database

The database connection is done through Knex package

db.sqlite3 file has already been setup with a table to hold the medical bills data, the table schema is as follows

CREATE TABLE IF NOT EXISTS "medical-bills" ( \
"name" TEXT, \
"hospital" TEXT, \
"date-of-service" TEXT, \
"bill-amount" REAL, \
"address" TEXT \
);

## Run the project

### 1) install all the required node packages

run the following command in the terminal \
 $ npm i

### 2) start the server

once the packages are installed, go into the project directory and type the followin command in the terminal \
 $ node .

### 3) making API calls

The backend has two APIs built which are as follows \
 a. GET /items: returns a list of medical bills \
 b. POST /items: creates a new medical bill

to make API calls use any API testing platform like Postman to make API calls

1.  make a GET request to localhost:8000/items endpoint \
    it should return a list of all the medical bills in the database

2.  make a POST request to localhost:8000/items endpoint
    with the following data in the body in JSON format \
     { \
     "name":"Alex", \
     "hospital":"NYU Langone", \
     "date-of-service":"01/10/2023", \
     "bill-amount":502.8, \
     "address":"Brooklyn NY" \
    } \
    this API call should create a new entry in the database tabe with the data provided in the body
