var express = require("express");
var app = express();

function findObjectByKey(array, key, value){
	for (var i = 0; i < array.length; i++) {
	 if(array[i][key] === value){
	 	return array[i];
	 }
	}
	return null;
}

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

// app.get("/speak/:animal",function(req, res){
// 	var objArray = [{animal: "pig", sound: "oink"},
// 					{animal: "cow", sound: "moo"},
// 					{animal: "dog", sound: "Woof Woof!"}];
// 	var animal = req.params.animal;
// 	var obj = findObjectByKey(objArray, "animal", animal);
// 	res.send("The " + animal + " says " + obj.sound);
// });

app.get("/speak/:animal", function(req, res){
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof!!!",
		cat: "I hate you human",
		goldfish: "...glub...."
	};
	var animal = req.params.animal.toLowerCase();
	res.send("The " + animal + " says " + sounds[animal]);
});

app.get("/repeat/:statement/:numRepeat", function(req, res){
	var str = req.params.statement;
	var newStr = str;
	for (var i = 1; i < req.params.numRepeat; i++) {
		newStr += " " + str;
	}
	res.send(newStr);
});

app.get("/r/:subredditName", function(req, res){
  var subreddit = req.params.subredditName;
  res.send("Welcome to the " + subreddit + " subreddit.");
});

app.get("*", function(req, res){
	res.send("Sorry, page not found... What are you doing?");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started!!!");
});

