$(document).ready(function(){



		$(".Emails").focus(function() {
			$(".Emails").css("border","2px solid red");
		});
		$(".Emails").blur(function() {
			$(".Emails").css("border","2px solid rgb(230,230,230)");
		});

		$(".Passwords").focus(function() {
			$(".Passwords").css("border","2px solid red");
		});
		$(".Passwords").blur(function() {
			$(".Passwords").css("border","2px solid rgb(230,230,230)");
		});


		$(".denglu input").mousemove(function() {
			$(".denglu input").css("background","green")
		});




		//切换login和sign
		$(".sss").click(function() {
			$(".loginul").css("display","none");
			$("#signup").css("display","block");
			$("#signup").css("-webkit-animation-name","fadeIn");
			$("#signup").css("-webkit-animation-duration","2s");
			$("#signup").css("-webkit-animation-iteration-count","0");
			$("#signup").css("-webkit-animation-delay","1s");
		});
		$(".qqq").click(function() {
			$(".loginul").css("display","block");
			$("#signup").css("display","none");

		});






		//signup		
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches


$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'transform': 'scale('+scale+')'});
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})



//获取input
$("#s1").click(function() {
	$(".Email1").val(
            $(".Email").val()
		)
});
$("#s1").click(function() {
	var s="";

	if ($(".Email").val()==""||$(".Email").val()==null) {
		s="账号不能为空";
		$(".prompt1").html("账号不能为空");
		$(".prompt1").fadeIn();
		setTimeout(function() {$(".prompt1").fadeOut();}, 2000);
	}
	else if (!$(".Email").val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
		s="邮箱格式不符合";
		$(".prompt1").html("邮箱格式不符合");
		$(".prompt1").fadeIn();
		setTimeout(function() {$(".prompt1").fadeOut();}, 2000);
	}
	else if ($(".pass").val().length<=8) {
		s="密码至少含有8个字符";
		$(".prompt2").html("密码至少含有8个字符");
		$(".prompt2").fadeIn();
		setTimeout(function() {$(".prompt2").fadeOut();}, 2000);
	}
	else if ($(".pass").val()!=$(".cpass").val()){
		s="密码不一致";
		$(".prompt3").html("密码不一致");
		$(".prompt3").fadeIn();
		setTimeout(function() {$(".prompt3").fadeOut();}, 2000);
	}
	 else{
				if(animating) return false;
					animating = true;
					
					current_fs = $(this).parent();
					next_fs = $(this).parent().next();
					
					//activate next step on progressbar using the index of next_fs
					$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
					
					//show the next fieldset
					next_fs.show(); 
					//hide the current fieldset with style
					current_fs.animate({opacity: 0}, {
						step: function(now, mx) {
							//as the opacity of current_fs reduces to 0 - stored in "now"
							//1. scale current_fs down to 80%
							scale = 1 - (1 - now) * 0.2;
							//2. bring next_fs from the right(50%)
							left = (now * 50)+"%";
							//3. increase opacity of next_fs to 1 as it moves in
							opacity = 1 - now;
							current_fs.css({'transform': 'scale('+scale+')'});
							next_fs.css({'left': left, 'opacity': opacity});
						}, 
						duration: 800, 
						complete: function(){
							current_fs.hide();
							animating = false;
						}, 
						//this comes from the custom easing plugin
						easing: 'easeInOutBack'
					});
	}
});









});
