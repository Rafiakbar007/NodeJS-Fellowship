const express = require("express");

const userRouter = express.Router();

const {
    getAllUsers,
    createNewUser,
    getSpecificUser,
    updateUser,
    deleteUser,
} = require("../controller/userController");


// Routes for all users

userRouter.route("/")

.get(getAllUsers)

.post(createNewUser);


// Routes for specific user

userRouter.route("/:id")

.get(getSpecificUser)

.patch(updateUser)

.delete(deleteUser);


module.exports = userRouter;