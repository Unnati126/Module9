const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let users = {}; // socket.id => nickname

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  console.log("New user connected:", socket.id);

  // user sets nickname
  socket.on("setNickname", (nickname) => {
    users[socket.id] = nickname;
    io.emit("userList", Object.values(users));
    socket.broadcast.emit("message", `${nickname} has joined the chat`);
  });

  // Message from user
  socket.on("chatMessage", (msg) => {
    const sender = users[socket.id] || "Anonymous";
    socket.emit("yourMessage", { sender, msg });
    socket.broadcast.emit("message", `${sender}: ${msg}`);
  });

  // typing indicator
  socket.on("typing", () => {
    const user = users[socket.id];
    socket.broadcast.emit("typing", `${user} is typing...`);
  });

  // disconnect
  socket.on("disconnect", () => {
    const nickname = users[socket.id];
    delete users[socket.id];
    io.emit("userList", Object.values(users));
    socket.broadcast.emit("message", `${nickname} has left the chat`);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));