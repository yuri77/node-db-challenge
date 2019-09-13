const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("resources router up");
});

module.exports = router;
