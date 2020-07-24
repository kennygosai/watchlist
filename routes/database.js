/*
 * Filename: \routes\database.js
 * Created Date: Wednesday, July 22nd 2020, 2:50:15 pm
 * Author: Kenny Gosai
 */

const mysql = require("mysql");
require("dotenv").config();
module.exports = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.DBPORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
