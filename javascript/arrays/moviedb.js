var movieDB = [
	{
		title: "Hot Rod",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Frozen",
		rating: 3,
		hasWatched: true
	},
	{
		title: "Breakfast at Tiffany's",
		rating: 4,
		hasWatched: false
	}
];


function outputMovie(movieObject){
	var msg;
	if (movieObject.hasWatched = true) {
		msg = "You have watched ";
	}
	else{
		msg = "You have not seen ";
	}
		console.log(msg + '"' + movieObject.title
					+ '" - ' + movieObject.rating + " stars");
}

for (var i = 0; i < movieDB.length; i++) {
	outputMovie(movieDB[i]);
}