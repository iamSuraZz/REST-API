const express = require("express");
const app = express();

let router = express.Router();
app.use("/api/", router);

const users = [
  { name: "John Does", age: 36, gender: "Male" },
  { name: "Krish", age: 34, gender: "Male" },
  { name: "Mary", age: 24, gender: "Female" },
];

// Read Operation
router.get("/", function (req, res, next) {
  res.send(users);
});

app.listen(5000, function () {
  console.log("app running on http://localhost:5000");
});
