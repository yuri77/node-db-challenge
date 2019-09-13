const router = require("express").Router();
const Tasks = require("./task-model.js");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Tasks.getById(id)
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).json({ error: "error" }));
});

router.get("/", (req, res) => {
  Tasks.get()
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).json({ error: "error" }));
});

router.post("/", (req, res) => {
  const { description, notes, project_id } = req.body;
  Tasks.insert({ description, notes, project_id })
    .then(task => res.status(201).json(task))
    .catch(err => res.status(500).json({ err }));
});

module.exports = router;
