var mysql = require("mysql");
const constants = require("../utils/constants");

var connection = mysql.createConnection({
  host: "localhost",
  user: constants.DB_USER_NAME,
  password: constants.DB_USER_PASSWORD,
  database: constants.DB_NAME,
});

connection.connect();

module.exports = connection;
