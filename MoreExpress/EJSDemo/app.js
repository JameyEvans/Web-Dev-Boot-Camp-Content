var express = require("express");
var app = express();

// serve contents of public directory
app.use(express.static("public"));

// set default file type to ejs
app.set("view engine", "ejs");


app.get("/", function(req, res){
	res.render("home.ejs");
	res.send("<h1>Welcome to the home page!</h1>");
});

app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Susy"},
		{title: "Post 2", author: "Susy"},
		{title: "Post 3", author: "Susy"},
	];

	res.render("posts.ejs", {posts: posts});
});

app.listen(3000, function(){
	console.log("Server is listening on port 3000");
});