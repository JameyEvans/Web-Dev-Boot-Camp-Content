var faker = require('faker');
console.log(
	"===================\n"+
	"WELCOME TO MY SHOP!\n"+
	"===================");

var productName;
var price;
var num;
var spaces;
for (var i = 0; i < 10; i++) {
	productName = faker.commerce.productName();
	price = faker.commerce.price();
	num = 30 - productName.length;
	spaces = " ";

	if(num > 0){
		for (var j = 0; j < num; j++) {
			spaces = " " + spaces;
		}
	}

	console.log(productName + spaces + "$" + price);

}