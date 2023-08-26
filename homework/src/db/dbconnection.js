
// connection mongoose

const mongoose = require("mongoose");
const config = require("../config/config");


const connectDB = async () => {
    mongoose
        .connect(config.mongodb.url, config.mongodb.options)
        .then((data) => {
            console.log("Database connection successully");
        })
        .catch((error) => {
            console.log("Database connecetion error : ", error);
        })
}
module.exports = { connectDB }