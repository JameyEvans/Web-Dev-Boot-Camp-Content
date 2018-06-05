// var userName;

// userName=prompt("What is your name?");

// alert("Nice to meet you " + userName);
// console.log("Also great to meet you, " + userName);

// if(age<18){
// 	console.log("sorry, get out of here baby.");
// }

// else if(age > 18 && age < 21){
// 	console.log("Enter but don't drink the booze.");
// }

// else{
// 	console.log("Come on in homey.");
// }

// var count = 1;

// while(count < 6){
// 	console.log("count is: " + count);
// 	count++;
// }

// for(init; condition; step){
// 	//run some code
// }

// for(var count = 0; count < 6; count++){
// 	console.log(count);
// }

// function doSomething(){
// 	console.log("Hello World");
// }

// doSomething();

// function square(num){
// 	return num * num
// }

// console.log("2^2 = " + square(2));

function capitalize(str){
	return str.charAt(0).toUpperCase()+str.slice(1);
}

var city = "paris";
console.log(capitalize(city));