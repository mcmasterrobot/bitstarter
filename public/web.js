
var express = require('express');
var htmlfile="index.html"
var fs = require('fs');
var connect = require("connect");


//var app = express.createServer(express.logger());
var app = connect.createServer().use(connect.static(__dirname));






var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
