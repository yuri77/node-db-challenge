const router = require("express").Router();
const Resources = require("./resource-model.js");

router.get("/", (req, res) => {
  Resources.get().then(resources => res.status(200).json(resources));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Resources.getById(id).then(resources => res.status(200).json(resources));
});

router.post("/", (req, res) => {
  const { name, description } = req.body;
  Resources.insert({ name, description })
    .then(res => status(200).end())
    .catch(err => res.status(404).end());
});

module.exports = router;
