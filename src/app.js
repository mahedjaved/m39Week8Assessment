// pull in yargs and sequelise item
const yargs = require("yargs");
const { sequelize } = require("./db/connection");

// the main app with CRUD operations
const app = async (yargsObj) => {
	if (yargsObj.add) {
		// create movie from the database
	} else if (yargsObj.read) {
		// list movies from the database
	} else if (yargsObj.update) {
		// update the movie datbase
	} else if (yargsObj.delete) {
		// delete the movie database
	} else {
		console.log("Incorrect command");
	}
};

app(yargs.argv);
