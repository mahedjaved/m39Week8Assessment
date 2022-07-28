// pull in yargs and sequelise item
const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const {
	createMovie,
	readMovie,
	updateMovie,
	deleteMovie,
} = require("./movie/function");
const Movie = require("./movie/table");

// the main app with CRUD operations
const app = async (yargsObj) => {
	// get all of the tables I've created and set it up in MySQL db
	await sequelize.sync({ alter: true });
	if (yargsObj.create) {
		// create movie from the database
		await createMovie({ title: yargsObj.title, actor: yargsObj.actor });
	} else if (yargsObj.read) {
		// list movies from the database
		await readMovie(yargsObj);
	} else if (yargsObj.update) {
		// update the movie datbase
		await updateMovie(yargsObj);
	} else if (yargsObj.delete) {
		// delete the movie database
		await deleteMovie(yargsObj);
	} else {
		console.log("Incorrect command");
	}
};

app(yargs.argv);
