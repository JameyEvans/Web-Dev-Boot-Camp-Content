var todos = [];

function list(){
	console.log("**********");
	for (let i=0; i < todos.length; i++){
		console.log(i + ": " + todos[i]);
	}
	console.log("**********");
}

function newToDo(toDoDesc){
	todos.push(toDoDesc);
}

function removeElement(elementNum){
	todos.splice(elementNum, 1);
}

var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === "list"){
		list();	
	}
	else if (input === "new"){
		var toDoDesc = prompt("Enter new ToDo description.");
		newToDo(toDoDesc);
	}
	else if (input === "delete"){
		var elementNum = prompt("Enter list number you would like to delete.");
		removeElement(elementNum);
	}
	else{
		console.log("That input was not recognized.");
	}

	input = prompt("What would you like to do?");
}