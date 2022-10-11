// Lio Code by Fullstack Labs

var app = require("express");
var http = require("http").createServer(app);
var io = require("socket.io")(http);

const PORT = 8080;
const STATIC_CHANNELS = ["global_notifications", "global_chat"];

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

io.on("connection", (socket) => {
  console.log("new client connected");
  socket.emit("connection", null);
});
