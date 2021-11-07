const mysql = require('mysql');
require("dotenv").config();



// Connect to the DB
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });


  module.exports = connection;