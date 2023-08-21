const express = require("express");
const http = require("http");
const routes = require("./src/routes/v1/index");
const config = require("./src/config/config");
const { connectDB } = require("./src/db/dbconnection");

const app =express();

const server = http.createServer(app);

connectDB();

server.listen(config.port, () => {
    console.log("server listning port number 8080!",new Date);
    console.log("server is runing ")
  });