const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("API is up");
});

const projectRouter = require("./project/project-router.js");
server.use("/projects", projectRouter);

const resourcesRouter = require("./resource/resource-router.js");
server.use("/resources", resourcesRouter);

const taskRouter = require("./task/task-router.js");
server.use("/tasks", taskRouter);

module.exports = server;
