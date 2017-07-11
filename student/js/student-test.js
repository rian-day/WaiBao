var answer = new Array();
var id = new Array();
var i = 0;
var length = $("dl").length;
$(".index").each(function(w){
	id[w] = $(this).next().text();
	answer[w] = "";	
})
$(".answer").click(function() {
    $(this).parent().find("dd").each(function() {
    	var background_color = $(this).css("background-color");
    	if(background_color == "rgb(93, 156, 236)"){
    		flag = "checked";
    		$(this).css({
                "background-color": "rgba(0, 0, 0, 0)",
                "color": "#707070"
            });
    		return;
    	}
    })
    $(this).css({
        "background-color": "rgb(93, 156, 236)",
        "color": "white"
    }); 
    var ANSWER = $(this).find(".ABCD").text();
    $(this).parent().find("dt").find(".indexLabel").each(function() {
    	var i = $(this).children(".index").text()-1;//试卷题号
    	var ID = $(this).children(".sqlIndex").text();//数据库题号
    	id[i] = ID;
    	answer[i] = ANSWER;
    })
})

$(".input").change(function() {
	var ANSWER = ($(this).val());
    $(this).parents(".answerInput").prev().find(".indexLabel").each(function() {
    	var i = $(this).children(".index").text()-1;//试卷题号
    	var ID = $(this).children(".sqlIndex").text();//数据库题号
    	id[i] = ID;
    	answer[i] = ANSWER;
    })
})

$(".answerInput").click(function() {
    $(this).parent().find("dd").each(function() {
    	var background_color = $(this).css("background-color");
    	if(background_color == "rgb(93, 156, 236)"){
    		flag = "checked";
    		$(this).css({
                "background-color": "rgba(0, 0, 0, 0)",
                "color": "#707070"
            });
    		return;
    	}
    })
}