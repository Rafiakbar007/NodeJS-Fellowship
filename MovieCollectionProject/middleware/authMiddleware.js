const {getUser} = require("../service/auth")
const jwt = require("jsonwebtoken");

// function checkLoggedinUser (
//     req,
//     res,
//     next
// ) {

//     const userUid = req.cookies.uid

//     if(!userUid){
//         return res.redirect("/login")
//     }

//     const user = getUser(userUid)

//     if(!user){
//         return res.redirect("/login")
//     }

//     // user found
//     req.user = user

//     next()
// }

// module.exports = {
//     checkLoggedinUser

// }

function checkForAuthentication(
    req,
    res,
    next
){
    const token = req.cookies.token;

    if(!token)
        return res.redirect('/login')

    try {

        const user = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = user;

        next();

    } catch (err) {

        return res.redirect("/login");

    }

}

module.exports = {
    checkForAuthentication
};