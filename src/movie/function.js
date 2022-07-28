// pull in the movie table
const Movie = require("./table");

// all the CRUD function declarations here
exports.createMovie = async (movieObj) => {
	// 'C' in CRUD
	try {
		// create the movie table --> like mongoose
		const newMovie = await Movie.create(movieObj);
		console.log(newMovie);
	} catch (error) {
		console.log(error);
	}
};

// 'R' in CRUD
exports.readMovie = async (movieObj) => {
	try {
		// get the title searched for
		const readMovie = await Movie.findAll({
			where: { title: movieObj.findtitle },
		});
		const readActor = await Movie.findAll({
			where: { actor: movieObj.findActor },
		});
		console.log(
			`Are you looking for title ${readMovie} and the actor ${readActor}`
		);
	} catch (error) {
		console.log(error);
	}
};

// 'U' in CRUD
exports.updateMovie = async (movieObj) => {
	// 'U' in CRUD
	try {
		// get the title searched for
		const updatedMovie = await Movie.update(
			{ title: movieObj.newTitle },
			{ actor: movieObj.newActor },
			{
				where: {
					title: movieObj.title,
					actor: movieObj.actor,
				},
			}
		);

		console.log(`Your updated movie is ${updatedMovie}`);
	} catch (error) {
		console.log(error);
	}
};

// 'D' in CRUD
exports.deleteMovie = async (movieObj) => {
	try {
		// get the title searched for
		const deletedMovie = await Movie.delete({
			where: {
				title: movieObj.title,
				actor: movieObj.actor,
			},
		});

		console.log(`You have discarded the title ${deletedMovie}`);
	} catch (error) {
		console.log(error);
	}
};
