const http = require("http");
const express = require("express");
const { createUser, createPost, searchPost } = require("./app.js");

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "/ pong" });
});

app.post("/signup", createUser);
app.post("/postup", createPost);
app.post("/postsearch", searchPost);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});
