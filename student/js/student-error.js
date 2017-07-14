$(function() {
				$('.choose-value').click(function() {
					if ($(this).hasClass("active")) {
						$(this).removeClass('active');
					} else {
						$(this).addClass('active');
					}
					$(this).parent().find('.choose-list').toggle();
				});
				
				// 选择选项后赋值
				$('.choose-item').click(function() {
					var _detail = $(this).text();
					var _value = $(this).attr("data-index");
					$(this).parent().parent().find(".choose-value").text(_detail);
					$(this).parent().parent().find(".choose-value").attr("data-index", _value);
					$(this).parent().hide();
					$('.choose-value').removeClass('active');
				});
				
				//点击其他区域隐藏下拉选项
				$(document).bind("click",function(e){ 
					var target = $(e.target); 
					if(target.closest(".choose-problem").length == 0){ 
						$(".choose-list").hide(); 
						$(".choose-value").removeClass("active"); 
					} 
				});
				$("#page").Page({
          totalPages: 9,//分页总数
          liNums: 7,//分页的数字按钮数(建议取奇数)
          activeClass: 'activP', //active 类样式定义
          callBack : function(page){
          //console.log(page)
          }
      });
			});
			
			
			function getValue(){
				//使用html自定义的“data-”属性
				var text = $(".choose-value").text();
				var value = $(".choose-value").attr("data-index");
				alert("值为："+value+";  文本为："+text);
			}
