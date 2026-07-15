const http = require("http");
const fs = require("fs");

// Create log file Asynchronous that is non blocking

fs.writeFile(
  "./ServerLogFile.txt",
  "LOGS FROM INCOMING SERVER REQUESTS\n",
  
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

// Create server
const myServer = http.createServer((req, res) => {

  console.log("new request received");

  const log = `new request received: ${Date.now()} on url ${req.url}\n`;

  fs.appendFile(

    "./ServerLogFile.txt",
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
  );
});

// Start server
myServer.listen(8000, () => {
  console.log("server listening on port 8000");
});