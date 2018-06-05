var squares = document.querySelectorAll(".square");
var h3s = document.querySelectorAll("h3");
var pickedColorSpan = document.querySelector(".pickedColor");
var colors = [];
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var randomIndex;
var pickedColor;
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var isEasy = false;

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	isEasy = true;
	resetGame();
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	isEasy = false;
	resetGame();
})

populateColorArray();
initializeColors();
// for (var i = 0; i < squares.length; i++){
// 	squares[i].style.backgroundColor = colors[i];
// 	h3s[i].textContent = colors[i];
// }

// // Set initial background colors
// var randomIndex = genRandom(colors.length);
// var pickedColor = colors[randomIndex];
// console.log("Index = " + randomIndex + "; picked color = " + pickedColor)
// pickedColorSpan.textContent = pickedColor;

//add click listeners to squares
for (var i = 0; i < squares.length; i++) {
	console.log ("added listerner to square: " + i);
	squares[i].addEventListener("click", function(){
		console.log("clicked square " + i);
		if (this.style.backgroundColor == pickedColor){
			messageDisplay.style.visibility = "visible";
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.style.visibility = "visible";
			messageDisplay.textContent = "Try Again";
		}
	});
}

resetButton.addEventListener("click", function(){
	console.log("button is clicked");
	resetGame();
})

function genRandom(maxNum){
	return Math.floor(Math.random() * (maxNum));
	}

function genRGB(){
	var strRGB = genRandom(256);
	return "rgb(" + strRGB + ", " + genRandom(256) + ", " + genRandom(256) + ")";
}

function populateColorArray(){
	colors = [];
	for (var i = 0; i < squares.length; i++) {
		colors.push(genRGB());
	}
	console.log("populateColorArray was run");
}

function changeColors(color){
	//loop through all squares
	// change each color to match given color
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}

}

function initializeColors(){
	for (var i = 0; i < squares.length; i++){
		if (i > 2){
			if (isEasy){
				squares[i].style.backgroundColor = "#232323"
			}
			else{squares[i].style.backgroundColor = colors[i]}
		}else{
			squares[i].style.backgroundColor = colors[i];
			// h3s[i].textContent = colors[i];
		}
	}

	// Set initial background colors
	if (isEasy){
		randomIndex = genRandom(3);
	} else{
		randomIndex = genRandom(colors.length);
	}
	pickedColor = colors[randomIndex];
	console.log("Index = " + randomIndex + "; picked color = " + pickedColor)
	pickedColorSpan.textContent = pickedColor;
	messageDisplay.style.visibility = "hidden";
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";

	console.log("initializeColors was run");
}

function resetGame(){
	populateColorArray();
	initializeColors();
}