const router = require("express").Router();
const Tasks = require("./task-model.js");

router.get("/", (req, res) => {
  Tasks.get().then(tasks => res.status(200).json(tasks));
});

module.exports = router;
