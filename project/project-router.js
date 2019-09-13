const router = require("express").Router();
const Projects = require("./projects-model.js");

router.get("/", (req, res) => {
  Projects.get().then(projects => {
    new_pro = projects.map(project => {
      if (project["completed"] === 0) {
        project["completed"] = false;
      } else {
        project["completed"] = true;
      }
      return project;
    });
    res.status(200).json(new_pro);
  });
});

router.post("/", (req, res) => {
  const { name, description, completed } = req.body;
  Projects.insert({ name, description, completed })
    .then(response => {
      console.log(response);
      res.status(201).end();
    })
    .catch(err => res.status(500).end());
});

module.exports = router;
