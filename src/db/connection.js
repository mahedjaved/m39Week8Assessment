require("dotenv").config(); // to get contents of .env file
const { Sequelize } = require("sequelize");

exports.sequelize = new Sequelize(process.env.MYSQL_URI);
