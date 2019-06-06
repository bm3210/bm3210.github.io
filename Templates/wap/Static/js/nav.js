
/*字号rem尺寸变化代码*/
window.onload=window.onresize=function(){
	document.documentElement.style.fontSize=30*
	document.documentElement.clientWidth/750+'px'
	
};

//菜单
$(function(){
	$(".header ul").hide()
	$("html").click(function(){
		$(".header ul").fadeOut();  
	});
	$(".menu span").click(function(event){
		$(".header ul").fadeToggle();
		event.stopPropagation();//阻止冒泡事件
	});
})

