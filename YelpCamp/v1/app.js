var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
	{name: "Salmon Creek", image: "https://images.unsplash.com/photo-1515408320194-59643816c5b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fcbebfe204ad7e04d558d7e0cbc0d2eb&auto=format&fit=crop&w=1000&q=60"},
	{name: "Granite Hill", image: "https://images.unsplash.com/photo-1440262206549-8fe2c3b8bf8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=806fc4197fbc5dc5f67c87e4284691fb&auto=format&fit=crop&w=1000&q=60"},
	{name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c85daa025ee04c951b6ac12fe3ba031a&auto=format&fit=crop&w=1000&q=60"},
	{name: "Brown Bear Canyon", image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec456c4aeb71d3aecbe65e586d186ec0&auto=format&fit=crop&w=1000&q=60"}
];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds",{campgrounds:campgrounds});
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

app.post("/campgrounds", function(req, res){
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	//redirect back to campgrounds page
	res.redirect("/campgrounds"); 
});

app.listen(3000, function(){
	console.log("YelpCamp server has started on port 3000");
});