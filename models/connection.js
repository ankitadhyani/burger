/* setup the code to connect Node to MySQL */

const mysql = require("mysql");

// Include the dotenv npm package
require('dotenv').config();


let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PWD,
    database: "burgers_db"
  });
}

//Export the connection
module.exports = connection;
