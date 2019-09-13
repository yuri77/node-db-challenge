const router = require("express").Router();
const Resources = require("./resource-model.js");

router.get("/", (req, res) => {
  Resources.get().then(resources => res.status(200).json(resources));
});

module.exports = router;
