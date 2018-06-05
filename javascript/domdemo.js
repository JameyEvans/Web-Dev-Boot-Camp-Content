var h1 = document.querySelector("h1");
h1.addEventListener("click",function(){
	alert("h1 was clicked!");
})

var lis = document.querySelectorAll("li");
var toggle = false;

for(var i=0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
		this.style.color = "purple";
	})
}

// function changeBackground(){
// 	console.log("button clicked");
// 	if (toggle == false) {
// 		body.style.background = "yellow";
// 		console.log("Changed to yellow");
// 		toggle = true;
// 	}
// 	else{
// 		body.style.background = "white";
// 		console.log("changed to white");
// 		toggle = false;
// 	}
// }

function changeBackground(){
	document.body.classList.toggle("purple");
}

var btn = document.querySelector("button");
var body = document.querySelector("body");

btn.addEventListener("click", changeBackground);