//BUILDING REST API USING NODE JS AND EXPRESS

const express = require("express")
const users = require('./MOCK_DATA.json')
const app = express();
const fs = require('fs')


// HEADERS : extra information with request and responce 

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

//  json data of all users
app.get('/api/users', (req, res) => {
   
    res.setHeader("X-name", "hello world") // custom header
    // always add X- to custom headers
   console.log(req.headers)
    return res.json(users)
})

// WHEN ROUTES ARE SAME FOR MULTIPLE METHODS THEN GROUP THEM:
app.route("/api/user/:id")

//  get user using get

.get((req, res) => {

    const id = Number(req.params.id)
    const user = users.find(user => user.id === id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: "invalid ID, user not foound"
        })
    }
    return res.json(user)
})


//  update user using patch

.patch((req, res) => {
    const id = Number(req.params.id)
    const body = req.body   
    const userIndex = users.findIndex(
        user => user.id === id
    );

    if (userIndex === -1 || !body.first_name || !body.last_name) {
        return res.status(404).json({
            success: false,
            message: "user not found"
        })
    }


    users[userIndex] = {
        ...users[userIndex],
        ...body
    }

    fs.writeFile(
        "./MOCK_DATA.json",
        JSON.stringify(users),
        (err, data) => {
            if(err){
                return res.status(500).json({
                    success: false
                })
            }
            return res.json({
                success: true,
                updatedUser: users[userIndex]
            })
        }
    )
})

//  delete user using delete

.delete((req, res) => {

    const id = Number(req.params.id)

    const userIndex = users.findIndex(
        user => user.id === id
    )

    const deleteUser = users[userIndex]

    users.splice(userIndex,1)

    fs.writeFile(
        "./MOCK_DATA.json",
        JSON.stringify(users),
        (err, data) => {
            if(err){
                return res.status(500).json({
                    success:false
                })
            }
            return res.json({
                success:true,
                deleteUser
            })
        }
    )
})


// create new user using post
app.post ("/api/user", (req, res) => {

    const body = req.body
    users.push({...body, id: users.length+1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {

         if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to save user"
                });
            }

            return res.status(201).json({
                success: true,
                id: users.length
        })
    })
})


// SERVER LISTEN
const PORT = 8000;
app.listen(PORT, ()=> console.log("server started at port", PORT))



