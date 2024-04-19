const mongoose = require("mongoose");

const connectMongo = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/company")
    .then(() => console.log("connected to mongodb.."))
    .catch((err) => console.log(err));
};

module.exports = connectMongo;
