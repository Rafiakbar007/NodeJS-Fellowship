const express = require('express')
const router = express.Router();

//import controller
const {
    handleSignup,
    handleNewUserSingup,
    handleLogin,
    handleUserLogin
} = require('../controllers/userController')

// define routes

router.get('/signup', handleSignup)
router.post('/signup' , handleNewUserSingup)
router.get('/login', handleLogin)
router.post('/login', handleUserLogin)

// export module

module.exports = router