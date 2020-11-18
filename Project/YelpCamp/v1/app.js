var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgrounds = [
	{name:"Salmon Creek", image:"https://www.photosforclass.com/download/px_2419278"},
	{name:"Granite Hill", image:"https://www.photosforclass.com/download/px_803226"},
	{name:"Mountain Goat's Rest", image:"https://www.photosforclass.com/download/pb_1851092"}	
];

app.get("/", function(req,res){
	res.render("landing");
});


app.get("/campgrounds", function(req,res){

	res.render("campgrounds", {campgrounds:campgrounds});
});


//send a new post to create new campground
app.post("/campgrounds", function(req, res){
	//get data from form and add to campground array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name:name, image: image}
	campgrounds.push(newCampground);

	//redirect back to campground page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
	res.render("new");
})






app.listen(3000, function(){
	console.log("The YelpCamp Server is listening at port 3000");
})