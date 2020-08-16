var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("landing");
});

app.get("/campgrounds", function(req,res){
	var campgrounds = [
		{name:"Salmon Creek", image:"https://www.photosforclass.com/download/px_2419278"},
		{name:"Granite Hill", image:"https://www.photosforclass.com/download/px_803226"},
		{name:"Mountain Goat's Rest", image:"https://www.photosforclass.com/download/pb_1851092"}
	]

	res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(3000, function(){
	console.log("The YelpCamp Server is listening at port 3000");
})