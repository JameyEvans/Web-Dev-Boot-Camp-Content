// Check off specific todos by clicking

$("ul").on("click", "li", function(){
	//if li is gray
	$(this).toggleClass("completed");
	
});

$("ul").on("click", "span", function(event){
	//if "X" is clicked then delete todo
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//prevent event bubbling
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		//grab new todo text from input
		var todoText = $(this).val();
		//create a new li and add to ul
		$("ul").append('<li><span><i class="fas fa-trash"></i> </span>' + todoText + "</li>");
		$(this).val("");
		makeSortable();

	}
});

function makeSortable(){
	$("li").sortable();
	$("li").disableSelection();
};

$("#togglePlus").click(function(){
	$("input[type='text'").fadeToggle();
});