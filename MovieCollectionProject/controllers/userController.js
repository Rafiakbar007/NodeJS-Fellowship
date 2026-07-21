const UserModel = require('../models/userModel')
const {v4: uuidv4} = require("uuid")
const { setUser, removeUser } = require("../service/auth");

const handleSignup = (req, res) => {
    res.render('signup')

}


const handleNewUserSingup = async (req, res) => {
    const {name, email, password} = req.body;

    await UserModel.create({
        name,
        email,
        password
    })

    res.redirect('/')
}


const handleLogin = (req, res) => {
    res.render('login')

}


const handleUserLogin = async (req, res) => {
    const {email, password} = req.body;

    const user = await UserModel.findOne({
        email: email
    })

    if(!user){
        return res.redirect("signup")
    }

    if(user.password !== password){
        return res.redirect("signup")
    }

    //generate session id

    const sessionId = uuidv4();

    // create cookie

    res.cookie(
        "uid",
        sessionId
    )

    setUser(sessionId, user);

    return res.redirect("/");
}

const handleUserLogout = (req, res) => {

    console.log(req.cookies);

    const sessionId = req.cookies?.uid;

    if(sessionId){
        removeUser(sessionId);
    }

    res.clearCookie("uid");

    return res.redirect("/login");
}



module.exports = {
    handleSignup,
    handleNewUserSingup,
    handleLogin,
    handleUserLogin,
    handleUserLogout,
}