var express = require("express");
var router = express.Router();

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   // Comment out this line:
//   //res.send('respond with a resource');

//   // And insert something like this instead:
//   const parsed = JSON.parse(req.body);
//   console.log("EventName", parsed.eventName);
//   console.log("contact");
// });

router.post("/", function (req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  console.log(req.body.eventName);
  for (let i = 0; i < req.body.rivalsArray.length; i++) {
    console.log(req.body.rivalsArray[i].side1);
    console.log(req.body.rivalsArray[i].side2);
  }
  //   console.log(req.body.rivalsArray[0].side1);
  //   console.log(req.body.rivalsArray[0].side2);

  console.log("contact");
});

module.exports = router;
