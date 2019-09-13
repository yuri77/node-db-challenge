const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Resource router up");
});

module.exports = router;
