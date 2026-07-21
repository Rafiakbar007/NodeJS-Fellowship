


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
    checkLoggedinUser
} = require("../middleware/authMiddleware")

// create routes

router.get('/', checkLoggedinUser, handleGetAllMovies)
router.get('/add-movie', checkLoggedinUser, showAddMoviePage)
router.post('/movies', checkLoggedinUser, handleCreateNewMovie)
router.post('/delete/:id', checkLoggedinUser, handleDeleteMovie)
router.post('/watched/:id', checkLoggedinUser, handleMarkMovieWatch)



// export route
module.exports = router