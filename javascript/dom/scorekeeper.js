var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");

var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var winScoreDisplay = document.getElementById("winScoreDisplay");
var targetInput = document.querySelector("input");


var p1Score = 0, p2Score = 0, winScore = 5;
var isComplete = false;
function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	for (var i = 0; i < document.querySelectorAll("h1 span").length; i++) {
		document.querySelectorAll("h1 span")[i].classList.remove("winner");
	}
	isComplete = false;
	console.log("Scores have been reset.");
}
p1Button.addEventListener("click", function(){
	// alert("clickedP1");
	if(p1Score < winScore && isComplete == false){
		p1Score++;
		p1Display.textContent = p1Score;
		if(p1Score == winScore){
			p1Display.classList.add("winner");
			isComplete = true;
		}
		console.log("p1Score = " + p1Score);	
	}

})

p2Button.addEventListener("click", function(){
	if(p2Score < winScore && isComplete == false){
		p2Score++;
		p2Display.textContent = p2Score;
		if(p2Score == winScore){
			p2Display.classList.add("winner");
			isComplete = true;
		}
	}
	console.log("p2Score = " + p2Score);
})

resetButton.addEventListener("click", function(){
	reset();
})

targetInput.addEventListener("input", function(){
	winScore = targetInput.value;
	winScoreDisplay.textContent = winScore;
	reset();

})