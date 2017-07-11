$(".list-view").mouseenter(function(){
	$(".list-view div").show();
})

$(".list-view").mouseleave(function(){
	$(".pageChangeLeft ").hide();
	$(".pageChangeRight").hide();
})

$("table tr").mouseenter(function(){
	$(this).css({
		"background-color":"none"
	})
})