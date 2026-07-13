\# Node.js HTTP Server with Request Logging

## Modules Used

```javascript
const http = require("http");
const fs = require("fs");
```

### http Module

The `http` module is a built-in Node.js module used to create web servers.

### fs Module

The `fs` (File System) module is used to create, read, update, and delete files.

---

# Step 1: Create a Log File

Before starting the server, create a log file to store incoming request information.

```javascript
fs.writeFile(
  "./ServerLogFile.txt",
  "LOGS FROM INCOMING SERVER REQUESTS\n",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);
```

### Explanation

* Creates a file named `ServerLogFile.txt`.
* Writes an initial heading into the file.
* Uses an asynchronous operation.
* Error handling is performed using a callback function.

---

# Step 2: Create an HTTP Server

```javascript
const myServer = http.createServer(
  (req, res) => {
    // Request handling logic
  }
);
```

### Explanation

* `createServer()` creates an HTTP server.
* The callback function is called whenever a client sends a request.
* `req` contains request information.
* `res` is used to send a response back to the client.

---

# Step 3: Handle Incoming Requests

```javascript
(req, res) => {
  const log = `${Date.now()} : new request received\n`;

  fs.appendFile(
    "./ServerLogFile.txt",
    log,
    (err) => {
      if (err) {
        console.log(err);
      }

      res.end("hello from server again logs");
    }
  );

  console.log("new request received");
}
```

### Explanation

Whenever a request arrives:

1. A log message is created.
2. The log message is appended to `ServerLogFile.txt`.
3. A response is sent back to the client.
4. A message is printed in the terminal.

---

# Step 4: Append Logs to File

```javascript
const log = `${Date.now()} : new request received\n`;
```

### Example Log Entry

```text
1752345678901 : new request received
1752345680000 : new request received
1752345682000 : new request received
```

### Why Use Date.now()?

`Date.now()` returns the current timestamp in milliseconds.

This helps track exactly when requests were received.

---

# Step 5: Send Response to Client

```javascript
res.end("hello from server again logs");
```

### Explanation

* Sends a response to the client.
* Ends the request-response cycle.
* Without `res.end()`, the browser will keep waiting.

---

# Step 6: Start the Server

```javascript
myServer.listen(
  8000,
  () => console.log("server listening")
);
```

### Explanation

* Starts the server.
* Listens for incoming requests on Port 8000.
* Executes the callback once the server starts successfully.

---

# Testing the Server

## Run the Server

```bash
node index.js
```

## Terminal Output

```text
server listening
```

## Open Browser

Visit:

```text
http://localhost:8000
```

## Browser Output

```text
hello from server again logs
```

## Terminal Output

```text
new request received
```

## Log File Output

```text
LOGS FROM INCOMING SERVER REQUESTS

1752345678901 : new request received
1752345680000 : new request received
```

---

# Request Flow

```text
Browser Request
       ↓
HTTP Server Receives Request
       ↓
Create Log Entry
       ↓
Append Log To File
       ↓
Send Response To Browser
       ↓
Request Completed
```

---

# Important Concepts

| Concept               | Description                         |
| --------------------- | ----------------------------------- |
| `http.createServer()` | Creates an HTTP server              |
| `req`                 | Contains client request information |
| `res`                 | Sends response to client            |
| `fs.writeFile()`      | Creates/Writes a file               |
| `fs.appendFile()`     | Appends data to a file              |
| `Date.now()`          | Returns current timestamp           |
| `res.end()`           | Sends response and ends request     |
| `listen()`            | Starts server on a specific port    |

---

# Quick Revision

```text
http.createServer()
        ↓
Request Arrives
        ↓
Generate Log
        ↓
Append Log To File
        ↓
Send Response
        ↓
Finish Request
```
