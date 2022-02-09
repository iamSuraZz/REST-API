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

//Search by id
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
      res.status(201).json({
        status: 201,
        statusText: "Create",
        message: "User created successfully",
        data: data,
      });
    },
    function (err) {
      next(err);
    }
  );
});

//Updating user
router.put("/:id", function (req, res, next) {
  userRepo.update(
    req.params.id,
    req.body,
    function (data) {
      res.status(200).json({
        status: 200,
        statusText: "Update",
        message: "Users data updated successfully",
        data: data,
      });
    },
    function (err) {
      res.status(404).json({
        status: 404,
        statusText: err.message,
        error: err.message,
      });
    }
  );
});

//Deleting user
router.delete("/:id", function (req, res, next) {
  userRepo.delete(
    req.params.id,
    function (data) {
      res.status(200).json({
        status: 200,
        statusText: "User deleted",
        message: "User with id " + req.params.id + "successfully",
        data: data,
      });
    },
    function (err) {
      res.status(404).json({
        status: 404,
        statusText: err.message,
        error: err.message,
      });
    }
  );
});

app.listen(5000, function () {
  console.log("app running on http://localhost:5000");
});
