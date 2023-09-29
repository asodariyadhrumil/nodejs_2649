const express = require("express");
const http = require("http");
const routes = require("./routes/index.js");
const config = require("./config/config");



http.createServer(function(req,res){
    res.write("on thise site");
    res.end();

}).listen(8080 ,"server is runing on port 8080", new date)