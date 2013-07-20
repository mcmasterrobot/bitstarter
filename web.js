
var express = require('express');
var htmlfile="index.html"
var fs = require('fs');


//var app = express.createServer(express.logger());
var app = connect.createServer().use(connect.static(__dirname + '/public'));
app.get('/', function(request, response) {

	var html = fs.readFileSync(htmlfile).toString();
	response.send(html);
});

var connect = require("connect");





var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
