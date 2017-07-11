$("#collect").click(function(){
	var l = $(this).attr("class");
	if(l == "collect"){
		$(this).attr("class","collected");
	}
	else{
		$(this).attr("class","collect");
	}
})

$("#collect").mouseenter(function(){
	var l = $(this).attr("class");
	if(l == "collect"){
		$(this).next().text("收藏");
	}
	else{
		$(this).next().text("取消收藏");
	}
	$(this).next().text();
	$(this).next().css("visibility", "visible");

})

$("#collect").mouseleave(function(){
	$(this).next().css("visibility","hidden");
})
