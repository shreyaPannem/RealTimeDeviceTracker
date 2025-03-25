const express = require("express");
const app = express();
const socketio = require("socket.io");
const http = require("http");
const path = require("path");
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");

app.set(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  console.log("connectes");
});
app.get("/", (req, res) => {
  res.render("index");
});

server.listen(4000);
