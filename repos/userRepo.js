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
  insert: function (user, resolve, reject) {
    fs.readFile(FILE_PATH, function (error, data) {
      if (error) {
        reject(error);
      } else {
        let users = JSON.parse(data);
        if (user) {
          users.push(user);
        }
        fs.writeFile(FILE_PATH, JSON.stringify(users), function (error) {
          if (error) {
            reject(error);
          } else {
            resolve(user);
          }
        });
      }
    });
  },
};
module.exports = usersRepo;
