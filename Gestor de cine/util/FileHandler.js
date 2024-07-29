const fs = require("fs");

exports.GetAllDataFromFile = (Datapath, callback) => {
  fs.readFile(Datapath, function (error, data) {
    if (error) {
      return callback([]);
    } else {
      callback(JSON.parse(data));
    }
  });
};

exports.SaveDataInFile = (Datapath, data) => {
    fs.writeFile(Datapath,JSON.stringify(data), function (error) {
      console.log(error);
    });
  };
