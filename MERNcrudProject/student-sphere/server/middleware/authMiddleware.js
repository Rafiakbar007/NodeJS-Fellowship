const jwt = require("jsonwebtoken");
const User = require("../models/User");

// 1- Create middleware

const checkAuth = async (req, res, next) => {

    // 2- Read Cookie

    const token = req.cookies.token;

    // 3- Check Token Exists

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }

    // 4- Verify JWT : decoded will eventually store user id if valid

    const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
    );

    // 5- Find User

    const user = await User.findById(decoded.id);

    // 6- Attach User

    req.user = user;

    // 7- next controller

    next()

};

module.exports = checkAuth