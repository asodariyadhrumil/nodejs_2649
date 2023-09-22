const express = require("express")
// const mongoose = require("mongoose")
const app = express()
const bodyParser = require("body-parser")
const {
  connectDB
} = require("./src/db/dbConnection");
const config = require("./src/config/config");
const routes = require("./src/routes/v1");
require("./src/helpers/crons");
const http = require("http");
const path = require("path")
const cors = require("cors")


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

/** Get image */
app.use(express.static(path.join(__dirname, `./public`)));

app.use(cors());
app.options("*", cors())

app.use("/v1", routes);

app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

connectDB()
const server = http.createServer(app)
server.listen(config.port, () => {
  console.log("server listning port number", config.port);
});