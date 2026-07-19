//BUILDING REST API USING NODE JS AND EXPRESS AND MONGODB

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },

    last_name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    gender: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("user", userSchema);

const express = require("express")
const app = express();

// midleware = plugin
app.use(express.urlencoded({extended:false}))



// html data of all users
app.get('/users', (req,res) => {
    const html = `
    <ul>
    ${users.map(user => `<li>${user.first_name}</li>`)}
    </ul>
    `
    res.send(html)
})

// json data of all users
app.get('/api/users', async (req, res) => {
    
    const allUsers = await User.find({});

    return res.json(allUsers);

})

// WHEN ROUTES ARE SAME FOR MULTIPLE METHODS THEN GROUP THEM:
app.route("/api/user/:id")

//  get specific user using get

.get(async(req, res) => {
    const id = req.params.id
    const user = await User.findById(id)

    if(!user){
        return res.status(404).json({
            success: false,
            message: "User with this ID not found"
        })
    }
    return res.json(user)
})


//  update user using patch

.patch(async(req, res) => {
    const id = req.params.id
    const body = req.body  
    
    const updatedUser = await User.findByIdAndUpdate(
        id,
        body,
        {new: true}
    )

    if(!updatedUser) {
        return res.status(404).json({
            success: false,
            message: "user with this id not found for update"
        })
    }

    return res.json({
        success: true,
        updatedUser
    })

})

//  delete user using delete

.delete(async(req, res) => {

    const id = req.params.id

    const deletedUser = await User.findByIdAndDelete(id)

    if(!deletedUser){
        return res.status(404).json({
            success: false,
            message: "user id not found for delete"
        })
    }

    return res.json({
        success: true,
        deletedUser
    })

})


// create new user using post
app.post ("/api/user", async (req, res) => {

    const body = req.body

    const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    });

    return res.status(201).json({
    success: true,
    data: result,
    });
   
    })


// SERVER LISTEN

mongoose.connect("mongodb://127.0.0.1:27017/usersDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

const PORT = 8000;

app.listen(PORT, ()=> console.log("server started at port", PORT))



