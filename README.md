## Software Engineering Internship Assessment for Truffle Health

This project built using Node and Express JS.

I have also used a sqlite3 database to store the medical bills data.

The database connection is done through Knex package

db.sqlite3 file has already been setup with a table to hold the midical bills data, the table schema is as follows

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
     "hospital":"children hosptal", \
     "date-of-service":"01/10/2023", \
     "bill-amount":502.8, \
     "address":"Brooklyn NY" \
    } \
    this API call should create a new entry in the database tabe with the data provided in the body
