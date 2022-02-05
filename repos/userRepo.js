let fs = require("fs");
let FILE_PATH = "./assets/users.json";

let usersRepo = {
  get: function (resolve, reject) {
    fs.readFile(FILE_PATH, function (error, data) {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(data));
      }
    });
  },
  getById: function (id, resolve, reject) {
    fs.readFile(FILE_PATH, function (error, data) {
      if (error) {
        reject(error);
      } else {
        let users = JSON.parse(data);
        let user = users.find((u) => u.id == id);
        resolve(user);
      }
    });
  },
};
module.exports = usersRepo;
