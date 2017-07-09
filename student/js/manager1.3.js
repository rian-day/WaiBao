$(document).ready(function(){
	$("#triangle-right,#triangle-bottom").click(function(){
		var tclass = $(this).attr("class")+"-below";
		if($(this).attr("id")=="triangle-right"){
			$("#triangle-bottom").attr({"id": "triangle-right"});
			$(".left-below").hide();
			$(this).attr({"id": "triangle-bottom"});
			$("."+tclass).show();
		}else{
			$("#triangle-bottom").attr({"id": "triangle-right"});
			$(".left-below").hide();
		}
	});
	$(".left-state").click(function() {
		$(".left-state-alive").attr("class","left-state");
		$(this).attr("class","left-state-alive");
	});
	$(".left-state-alive").click(function() {
		$(".left-state-alive").attr("class","left-state");
	});
	$(".left-head").click(function() {
		var lWidth = $(".left").width();
		if (lWidth==50) {
			$(".left").width(180);
			$(".right").css("marginLeft","180px");
			$(".right").width($(".right").width()-130);
			$(".show-name").show();
		}else{
			$(".left").width(50); 
			$(".right").css("marginLeft","50px");
			$(".right").width($(".right").width()+130);
			$(".show-name").hide();
		}
	});
});