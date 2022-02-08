let express = require("express");
let app = express();
let userRepo = require("./repos/userRepo");

let router = express.Router();
app.use(express.json());
app.use("/api/", router);

// Read Operation
router.get("/", function (req, res, next) {
  userRepo.get(
    function (data) {
      res.status(201).json({
        status: 201,
        statusText: "Create",
        message: "User created",
        data: data,
      });
    },
    function (err) {
      next(err);
    }
  );
});

router.get("/:id", function (req, res, next) {
  let id = req.params.id;
  userRepo.getById(
    id,
    function (data) {
      res.status(200).json({
        status: 200,
        statusText: "Ok",
        message: "Users data fetched successfully",
        data: data,
      });
    },
    function (err) {
      next(err);
    }
  );
});

//Creating user
router.post("/", function (req, res, next) {
  userRepo.insert(
    req.body,
    function (data) {
      res.status(200).json({
        status: 200,
        statusText: "Ok",
        message: "Users data fetched successfully",
        data: data,
      });
    },
    function (err) {
      next(err);
    }
  );
});

app.listen(5000, function () {
  console.log("app running on http://localhost:5000");
});
