const express = require("express");
const http = require("http");
const { WebSocketServer } = require("ws");

const app = express();

// Serve index.html
app.use(express.static("public"));

// Create HTTP server
const server = http.createServer(app);

// Create WebSocket server
const wss = new WebSocketServer({ server });

// Store all connected clients
const clients = new Map();

let id = 1;

// When a client connects
wss.on("connection", (socket) => {

  // Give this client a unique ID
  const clientId = id++;

  // Store the client
  clients.set(clientId, socket);

  console.log("Client connected:", clientId);

  // Send the ID to the client
  socket.send("Your ID: " + clientId);

  // When this client sends a message
  socket.on("message", (message) => {

    // Expected format:
    // 2 Hello
    const [receiverId, msg] = message.toString().split(" ");

    // Find the receiver
    const receiverSocket = clients.get(Number(receiverId));

    // Send only to that client
    if (receiverSocket) {
      receiverSocket.send(
        `Message from Client ${clientId}: ${msg}`
      );
    }

  });

  // Remove client when disconnected
  socket.on("close", () => {
    clients.delete(clientId);
    console.log("Client disconnected:", clientId);
  });

});

server.listen(1500, () => {
  console.log("Server running at http://localhost:1500");
});