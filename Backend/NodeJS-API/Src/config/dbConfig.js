require("dotenv").config();
// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "restaurant",
});

module.exports = connection;
