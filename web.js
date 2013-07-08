
var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var buffer = new Buffer(64);
app.get('/', function(request, response) {

 
  fs.readFile('index.html', function(err,data){
        if (err) throw err;
     buffer.write(data);
     response.send(buffer.toString());
   });

});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
