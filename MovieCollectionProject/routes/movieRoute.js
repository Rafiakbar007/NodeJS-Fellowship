


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


// IMPORT MIDDLEWARE
const {
    checkForAuthentication
} = require("../middleware/authMiddleware")

// create routes

router.get('/', checkForAuthentication, handleGetAllMovies)
router.get('/add-movie', checkForAuthentication, showAddMoviePage)
router.post('/movies', checkForAuthentication, handleCreateNewMovie)
router.post('/delete/:id', checkForAuthentication, handleDeleteMovie)
router.post('/watched/:id', checkForAuthentication, handleMarkMovieWatch)



// export route
module.exports = router