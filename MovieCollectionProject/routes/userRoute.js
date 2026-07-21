const express = require('express')
const router = express.Router();

//import controller
const {
    handleSignup,
    handleNewUserSingup,
    handleLogin,
    handleUserLogin,
    handleUserLogout,
} = require('../controllers/userController')

// define routes

router.get('/signup', handleSignup)
router.post('/signup' , handleNewUserSingup)
router.get('/login', handleLogin)
router.post('/login', handleUserLogin)
router.get('/logout', handleUserLogout)

// export module

module.exports = router