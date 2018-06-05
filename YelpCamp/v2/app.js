var express 	= require("express"),
	app 		= express(),
	bodyParser 	= require("body-parser"),
	mongoose 	= require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");

// schema setup
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// var campgrounds = [
// 	{
// 		name: "Salmon Creek", 
// 	 	image: "https://images.unsplash.com/photo-1515408320194-59643816c5b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fcbebfe204ad7e04d558d7e0cbc0d2eb&auto=format&fit=crop&w=1000&q=60",
// 	 	description: "Dope campground with salmon in the creek."
// 	},
// 	{
// 		name: "Granite Hill", 
// 		image: "https://images.unsplash.com/photo-1440262206549-8fe2c3b8bf8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=806fc4197fbc5dc5f67c87e4284691fb&auto=format&fit=crop&w=1000&q=60",
// 		description: "Some hills with sweet beach..."
// 	},
// 	{
// 		name: "Mountain Goat's Rest", 
// 		image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c85daa025ee04c951b6ac12fe3ba031a&auto=format&fit=crop&w=1000&q=60",
// 		description: "Remote campground at the top of a fucking mountain."
// 	},
// 	{
// 		name: "Brown Bear Canyon", 
// 		image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec456c4aeb71d3aecbe65e586d186ec0&auto=format&fit=crop&w=1000&q=60",
// 		description: "Campground at the base of a large canyon in the desert.  Somehow bears have made their way here."
// 	}
// ];


// for (var i = 0; i < campgrounds.length; i++) {
// 	Campground.create(campgrounds[i], function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else{
// 			console.log("Newly created campground: ");
// 			console.log(campground);
// 		}
// 	})
// };

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	// get all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		} else{
			res.render("index", {campgrounds:allCampgrounds});
		}
	});
	// res.render("campgrounds",{campgrounds:campgrounds});
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

//SHOW - show details about a campground
app.get("/campgrounds/:id", function(req, res){
	//find the campground with provided ID
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else{
			//render show template with that campground
			res.render("show", {campground: foundCampground});
		}
	});
});
//CREATE - add new campground to DB
app.post("/campgrounds", function(req, res){
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description
	var newCampground = {name: name, image: image, description: desc};
	//create a new campground and save to DB
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else{
			//redirect back to campgrounds
			res.redirect("/campgrounds");
		}
	});
});

app.listen(3000, function(){
	console.log("YelpCamp server has started on port 3000");
});