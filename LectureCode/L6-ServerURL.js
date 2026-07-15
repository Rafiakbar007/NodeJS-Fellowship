
const http = require ("http")
const fs = require("fs")


// create a file

fs.writeFile(
    "./L6-ServerURL.txt",
    "logs from requests",
    (err) => {
        if (err) {
            console.log(err)
        }
    }
)


// create server
const myServer = http.createServer( (req, res) => {

    console.log("request erceived")

    const log = `new log: ${Date.now()} , ${req.url}`

    fs.appendFile(
        "./L6-ServerURL.txt",
        log,
        (err, data) => {

             switch(req.url){

           case '/' : res.end ("welcome to homepage")
           break

           case '/about' : res.end("welcome to abouts")
           break

           case '/blogs': res.end (" welcome to blogs page")
           break

           default:
           res.end("404 not found")
        }

        }
    )

})

//start server

myServer.listen(8000, () => {
    console.log("server listening on port 8000")
})