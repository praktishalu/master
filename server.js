var express = require('express');
var app = express();

var port = 3000;


app.use(express.static(__dirname + "/public"));
app.listen(port,function(){
	console.log("Server running on port 3000"); 
});
