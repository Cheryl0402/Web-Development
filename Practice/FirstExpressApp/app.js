var express = require("express");
var app = express(); 

// "/"  => "Hi there!"
app.get("/", function(req, res){
	res.send("Hi there!");

});

// "/bye" => "Goodbye!"
app.get("/bye", function(request, response){
	response.send("Goodbye!");

});



// Tell Express to listen for requests
app.listen(3000, function(){
	console.log("Serving dog demo on port 3000");
});


console.log("OUR EXPRESS APP WILL GO HERE!");
