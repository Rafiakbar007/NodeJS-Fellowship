const {getUser} = require("../service/auth")

function checkLoggedinUser (
    req,
    res,
    next
) {

    const userUid = req.cookies.uid

    if(!userUid){
        return res.redirect("/login")
    }

    const user = getUser(userUid)

    if(!user){
        return res.redirect("/login")
    }

    // user found
    req.user = user

    next()
}

module.exports = {
    checkLoggedinUser

}