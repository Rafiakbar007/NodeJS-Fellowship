const UserModel = require("../model/userModel");


// GET ALL USERS

const getAllUsers = async (req, res) => {

    const allUsers = await UserModel.find({});

    return res.json(allUsers);

};


// GET SPECIFIC USER

const getSpecificUser = async (req, res) => {

    const id = req.params.id;

    const user = await UserModel.findById(id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User with this ID not found"
        });
    }

    return res.json(user);

};


// CREATE USER

const createNewUser = async (req, res) => {

    const body = req.body;

    const user = await UserModel.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
    });

    return res.status(201).json({
        success: true,
        user
    });

};


// UPDATE USER

const updateUser = async (req, res) => {

    const id = req.params.id;

    const body = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(
        id,
        body,
        {new: true }
    );

    if (!updatedUser) {
        return res.status(404).json({
            success: false,
            message: "User with this ID not found for update"
        });
    }

    return res.json({
        success: true,
        updatedUser
    });

};


// DELETE USER

const deleteUser = async (req, res) => {

    const id = req.params.id;

    const deletedUser = await UserModel.findByIdAndDelete(id);

    if (!deletedUser) {
        return res.status(404).json({
            success: false,
            message: "User with this ID not found for delete"
        });
    }

    return res.json({
        success: true,
        deletedUser
    });

};


module.exports = {
    getAllUsers,
    getSpecificUser,
    createNewUser,
    updateUser,
    deleteUser,
};