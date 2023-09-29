const http = require("http");
const express = require('express')
const app = express();


app.listen(8080, function(){
   console.log("server is runing" ,new Date);
});



// http.createServer(function app(req, res){
//    res.write("<h1>welcome to site</h1>");
//    res.end();
// }).listen(8080 , console.log('started your server', new Date))