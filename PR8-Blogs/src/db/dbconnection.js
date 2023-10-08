const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () => {
  mongoose
    .connect("mongodb+srv://jenilmalaviya14:ZsXFZUW0AJuxrcGK@jenil.x4sdtoa.mongodb.net/myshop", config.mongodb.options)
    .then((data) => {
      console.log("Database connection successfully!");
    })
    .catch((error) => {
      console.log("Database connetion error: ", error.message);
    });
};

module.exports = { connectDB };
