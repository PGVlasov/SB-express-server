var express = require("express");
var router = express.Router();

router.post("/", async (req, res, next) => {
  console.log("contact register");
  console.log(req.body);
});

module.exports = router;
