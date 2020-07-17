//Check off specific TODOS by clicking
$("li").click(function(){
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