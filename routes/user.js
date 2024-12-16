
// const router = require('express').Router();
// app.get("/", (req, res) => {
//     res.send("Welcome to the API.");
//   });
const router = require('express').Router();


router.get("/", (req, res) => {
    res.send("Welcome to the API.");
  });


module.exports = router