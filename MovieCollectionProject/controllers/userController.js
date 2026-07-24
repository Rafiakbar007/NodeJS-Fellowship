const UserModel = require('../models/userModel')
// for statefull authentication
const {v4: uuidv4} = require("uuid")
const { setUser, removeUser } = require("../service/auth");

// for stateless authen
const jwt = require('jsonwebtoken')


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
//      // STATEFULL AUTHENTICATION
//     //generate session id

//     const sessionId = uuidv4();

//     //create cookie

//    res.cookie(
//        "uid",
//        sessionId
//    )

//    setUser(sessionId, user);

    // STATELESS AUTHENTICATION

    //create jwt token using .sign
    const token = jwt.sign(
        {id : user._id } , // payload
        process.env.JWT_SECRET  // token generated automatically by jsonwebtoken
    );

    //send token to cookie
    res.cookie("token", token, {
    httpOnly: true,
    });

    return res.redirect("/");
}

const handleUserLogout = (req, res) => {

    //console.log(req.cookies);

    // const sessionId = req.cookies?.uid;

    // if(sessionId){
    //     removeUser(sessionId);
    // }

    res.clearCookie("token");

    return res.redirect("/login");
}



module.exports = {
    handleSignup,
    handleNewUserSingup,
    handleLogin,
    handleUserLogin,
    handleUserLogout,
}