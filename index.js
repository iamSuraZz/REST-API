const express = require("express");
const app = express();

let router = express.Router();
app.use("/api/", router);

// Read Operation
router.get("/", function (req, res, next) {
  res.send("John Smith");
});

app.listen(5000, function () {
  console.log("app running on http://localhost:5000");
});
