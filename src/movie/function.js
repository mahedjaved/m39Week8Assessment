// pull in the movie table
const Movie = require("./table");

exports.createMovie = async (movieObj) => {
	try {
		// create the movie table --> like mongoose
		const newMovie = await Movie.create(movieObj);
		console.log(newMovie);
	} catch {}
};
