const router = require("express").Router();
const Tasks = require("./task-model.js");

router.get("/", (req, res) => {
  Tasks.get()
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).json({ error: "error" }));
});
router.post("/", (req, res) => {
  Tasks.insert().then(res => {
    console.log(res);
    res.status(201).end();
  });
});

module.exports = router;
