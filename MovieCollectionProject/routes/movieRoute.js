


const express = require("express")
const router = express.Router()

//Import controller
const {
    handleGetAllMovies,
    showAddMoviePage,
    handleCreateNewMovie,
    handleDeleteMovie,
    handleMarkMovieWatch
} = require("../controllers/movieController")


// create routes

router.get('/', handleGetAllMovies)
router.get('/add-movie', showAddMoviePage)
router.post('/movies', handleCreateNewMovie)
router.post('/delete/:id', handleDeleteMovie)
router.post('/watched/:id', handleMarkMovieWatch)



// export route
module.exports = router