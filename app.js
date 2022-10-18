const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});
io.on("connection", (socket) => {
	console.log("user connected", socket.id);
});

server.listen(3000, () => console.log("server Is Running on port 3000"));
