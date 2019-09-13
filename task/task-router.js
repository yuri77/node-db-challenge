const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("task router up");
});

module.exports = router;
