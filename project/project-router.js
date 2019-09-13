const router = require("express").Router();
const Projects = require("./projects-model.js");

router.get("/", (req, res) => {
  Projects.get().then(projects => res.status(200).json(projects));
});

router.post("/", (req, res) => {
  const { name, description, completed } = req.body;
  Projects.insert()
    .then(response => {
      console.log(res);
      res.status(201).end();
    })
    .catch(err => res.status(500).end());
});

module.exports = router;
