//Check off specific TODOS by clicking
$("ul").on("click","li",function(){
//$("li").on("click",function(){
	$(this).toggleClass("completed");
	//check if the color is grey
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	console.log("it is gray");
	// 	//turn it black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// }
	// else{//turn it gray
	// 	// $(this).css("color", "grey");
	// 	// $(this).css("text-decoration", "line-through");
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }	
});


// Click on X to delete TODO
$("span").click(function(){
	// $(this).parent().remove();// span.parent() is li, so li removed.
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); // remove the entire li
	});
	event.stopPropagation();  // stops other events to fire 
	//because elements are nested which leads to other/parents elements triggered.
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