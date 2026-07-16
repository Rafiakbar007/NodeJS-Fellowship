


const express = require("express")

// handler function using express
const app = express();

app.get('/' , (req,res) => {
    return res.send('hello from expree')
})

app.get('/about', (req, res) => {
    return res.end('hello from express about page' + 'hello' + req.query.name + ' you are ' + req.query.age + ' year old')
})

app.listen(8000, ()=>console.log("express server listening"))