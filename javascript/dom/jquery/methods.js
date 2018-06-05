// $("el").text(); gives text of element

//.html() gets inner html of element
$('ul').html();

var listItems = [];
var listHtml;

$("input").on("keypress", function(event){
	if (event.key == "Enter"){
		listItems.push($("input").val());
		console.log($("input").val());
		$("input").val("");

		for (var i = 0; i < listItems.length; i++) {
			if(i == 0){
				listHtml = "<li>" + listItems[i] + "</li>";
			} else{
				listHtml = listHtml + "<li>" + listItems[i] + "</li>"
			}
			
		}
		$("ul").html(listHtml);
	}
});

$("li").on("click", function(){
	$(this).css({"color": "red", "text-decoration": "line-through"});
});