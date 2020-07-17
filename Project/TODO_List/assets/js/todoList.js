//Check off specific TODOS by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");	
});


// Click on X to delete TODO
$("ul").on("click","span",function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); 
	});
	event.stopPropagation(); 
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){//enter key
		// Grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");

		// Create a new li and add to ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}

});