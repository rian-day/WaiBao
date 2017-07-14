
var btnarr=$('pro-revise ul');
$(".pro-revise ul li:eq(0) input:eq(1)").click(function() {
	$(".pro-name ul li:eq(0)").text($(".pro-revise ul li:eq(0) input:eq(0)").val());
});
$(".pro-revise ul li:eq(1) input:eq(1)").click(function() {
	$(".pro-name ul li:eq(1)").text($(".pro-revise ul li:eq(1) input:eq(0)").val());
});
$(".add-pro input:eq(0)").click(function() {
	snum=$('.pro-name li').size()+1;
//	console.log(snum);
	var s1="<li>默认职业</li>";
	$(".pro-name ul li:last").after(s1);
	var s2="<li ><input type='text' name='' class='zhiye' style='margin-left:10.7%;'><input type='submit' value='确认更改' class='btn btn-info prdemo' style='margin-left:2%;'></li>"
	$(".pro-revise ul li:last").after(s2);
   // btnarr=$('pro-revise ul');
});
// var i=$(".pro-name li").length;
// for (var s=0;s<i;s++) {
// 	alert(1);
// 	$(".pro-revise ul li:eq(s) input:eq(1)").click(function() {
// 	$(".pro-name ul li:eq(s)").text($(".pro-revise ul li:eq(s) input:eq(0)").val());
// });
// }
$(document).on("click",".prdemo",function() {
	console.log(btnarr);
	var snum=$(this).parent().index();
	var temp=$(this).prev().val();
	$('.pro-name ul li').eq(snum).text(temp);
});