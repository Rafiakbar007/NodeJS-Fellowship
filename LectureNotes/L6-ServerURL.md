# Node.js URL Handling & Basic Routing

## Modules Used

```javascript
const http = require("http");
const fs = require("fs");
const url = require("url");
```

### http Module

Used to create an HTTP server.

### fs Module

Used for file handling operations such as creating, reading, and appending data to files.

### url Module

Used to parse URLs and extract:

* Pathname
* Query Parameters

---

# Creating a Log File

Before starting the server, we create a file to store request logs.

```javascript
fs.writeFile(
  "./L6-ServerURL.txt",
  "Logs From Requests\n",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);
```

### Purpose

Creates a file named:

```text
L6-ServerURL.txt
```

which stores information about incoming requests.

---

# Creating the HTTP Server

```javascript
const myServer = http.createServer((req, res) => {

});
```

### Parameters

#### req (Request Object)

Contains information about the client request.

Examples:

```javascript
req.url
req.method
req.headers
```

#### res (Response Object)

Used to send data back to the client.

Example:

```javascript
res.end("Hello World");
```

---

# Logging Incoming Requests

```javascript
const log = `New Log: ${Date.now()} , ${req.url}\n`;
```

### Example Output

```text
New Log: 1752673000000 , /
New Log: 1752673005000 , /about?myname=Rafia
```

---

# Appending Logs to a File

```javascript
fs.appendFile(
  "./L6-ServerURL.txt",
  log,
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);
```

### Purpose

Adds new log entries without deleting previous logs.

---

# Parsing URLs

```javascript
const myUrl = url.parse(req.url, true);
```

### Example URL

```text
/about?myname=Rafia
```

### Parsed Result

```javascript
{
  pathname: "/about",
  query: {
    myname: "Rafia"
  }
}
```

---

# URL Components

## Pathname

```javascript
myUrl.pathname
```

Example:

```text
/about
```

---

## Query Parameters

```javascript
myUrl.query
```

Example:

```text
/about?myname=Rafia
```

Output:

```javascript
{
  myname: "Rafia"
}
```

---

# Routing Using Switch Statement

```javascript
switch(myUrl.pathname) {

}
```

Routing allows us to return different responses for different URLs.

---

# Home Route

```javascript
case "/":
  res.end("Homepage");
  break;
```

### URL

```text
http://localhost:8000/
```

### Output

```text
Homepage
```

---

# About Route

```javascript
case "/about":
  const username = myUrl.query.myname;
  res.end(`Hi, ${username}`);
  break;
```

### URL

```text
http://localhost:8000/about?myname=Rafia
```

### Output

```text
Hi, Rafia
```

### Important

If the URL is:

```text
http://localhost:8000/about
```

Then:

```javascript
myUrl.query.myname
```

will be:

```javascript
undefined
```

Output:

```text
Hi, undefined
```

because no query parameter was provided.

---

# Search Route

```javascript
case "/search":
  const search = myUrl.query.search_query;

  res.end(
    `Here's your result for ${search}`
  );
  break;
```

### URL

```text
http://localhost:8000/search?search_query=nodejs
```

### Output

```text
Here's your result for nodejs
```

---

# 404 Route

```javascript
default:
  res.end("404 Not Found");
```

### URL

```text
http://localhost:8000/anything
```

### Output

```text
404 Not Found
```

---

# Starting the Server

```javascript
myServer.listen(8000, () => {
  console.log("Server listening on port 8000");
});
```

### Port

```text
8000
```

### Access Server

```text
http://localhost:8000
```

---

# Request Flow

```text
Browser Request
       ↓
Server Receives Request
       ↓
Parse URL
       ↓
Create Log Entry
       ↓
Store Log In File
       ↓
Check Route
       ↓
Send Response
```

---

# Key Concepts Learned

✅ HTTP Server Creation

✅ Request & Response Objects

✅ URL Parsing

✅ Query Parameters

✅ Routing

✅ Logging Requests

✅ File Handling

✅ HTTP Status Flow

---

# Quick Revision

| Concept               | Purpose          |
| --------------------- | ---------------- |
| `http.createServer()` | Create server    |
| `req.url`             | Requested URL    |
| `url.parse()`         | Parse URL        |
| `pathname`            | Route path       |
| `query`               | Query parameters |
| `fs.appendFile()`     | Store logs       |
| `switch()`            | Routing          |
| `res.end()`           | Send response    |
| `listen()`            | Start server     |
