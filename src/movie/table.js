// pull in a specific method from sequelize library called DataTypes
const { DataTypes } = require("sequelize");
// grab the connection.js
const { sequelize } = require("../db/connection");

// no need to create schema, we immediately define the table using sequelize.define
const Movie = sequelize.define("Movie", {
	// define the constraints of each column of the table
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	actor: {
		type: DataTypes.STRING,
		defaultValue: "Not specified",
	},
});

module.exports = Movie;
