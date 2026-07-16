const http = require("http");
const fs = require("fs");
const url = require("url");

// ==========================================================
// CREATE LOG FILE
// ==========================================================

// This file will store all incoming request logs.

fs.writeFile(
  "./L6-ServerURL.txt",
  "Logs From Requests\n",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

// ==========================================================
// CREATE SERVER
// ==========================================================

const myServer = http.createServer((req, res) => {
  console.log("Request received");

  // Create a log entry containing timestamp and URL
  const log = `New Log: ${Date.now()} , ${req.url}\n`;

  // Parse URL and query parameters
  // Example:
  // /about?myname=Rafia
  // pathname => /about
  // query => { myname: 'Rafia' }

  const myUrl = url.parse(req.url, true);

  console.log(myUrl);

  // Save request log into file
  fs.appendFile(
    "./L6-ServerURL.txt",
    log,
    (err) => {
      if (err) {
        console.log(err);
        res.end("Internal Server Error");
        return;
      }

      // ==========================================================
      // ROUTING
      // ==========================================================

      switch (myUrl.pathname) {

        // Homepage Route
        case "/":
          res.end("Homepage");
          break;

        // About Route
        // Example:
        // http://localhost:8000/about?myname=Rafia

        case "/about":
          const username = myUrl.query.myname;
          res.end(`Hi, ${username}`);
          break;

        // Search Route
        // Example:
        // http://localhost:8000/search?search_query=nodejs

        case "/search":
          const search = myUrl.query.search_query;
          res.end(`Here's your result for ${search}`);
          break;

        case "/blogs":
            const blogsID = myUrl.query.blog_id
            const blogNmae = myUrl.query.blogNmae
            res.end(`The blog you are looking for is ${blogNmae} with ${blogsID}`)
            break;

        // Invalid Route
        default:
          res.end("404 Not Found");
      }
    }
  );
});

// ==========================================================
// START SERVER
// ==========================================================

myServer.listen(8000, () => {
  console.log("Server listening on port 8000");
});