const MovieModel = require("../models/movieModel")


// function to get all movies
const handleGetAllMovies = async(req, res) => {

    const movies = await MovieModel.find({
        createdBy: req.user._id
    });

    res.render("home", {
        movies
    })
}


// function to show movie page
const showAddMoviePage = (req, res) => {
    res.render("addMovie")
}


// function to create new movies
const handleCreateNewMovie = async(req, res) => {
    const body = req.body;

    await MovieModel.create({
        movieName: body.movieName,
        rating: body.rating,
        youtubeLink: body.youtubeLink,
        createdBy: req.user._id
    })

    res.redirect("/")
}


//function to delete a movie
const handleDeleteMovie = async(req, res) => {
    const id = req.params.id;
    await MovieModel.findByIdAndDelete(id);
    res.redirect('/')
}


//function to mark the movie watched
const handleMarkMovieWatch = async(req, res) => {
    const id = req.params.id;
    await MovieModel.findByIdAndUpdate(
        id,
        {
            watched: true
        }
    )
    res.redirect('/')
}


// export functions
module.exports = {
    handleGetAllMovies,
    showAddMoviePage,
    handleCreateNewMovie,
    handleDeleteMovie,
    handleMarkMovieWatch
}