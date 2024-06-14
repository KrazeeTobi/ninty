
function isWii() { return (navigator.userAgent.indexOf("Wii") != -1); }
function isDSi () { return (navigator.userAgent.indexOf("Nintendo DSi") != -1); }


$(document).ready(function(){
	if(location.hash==""){
		$(".btn1 img").css("display" , "none");
	} else {
		var defaultPH = location.hash.substr(1,1);
		defaultPH = encodeURIComponent(defaultPH);
		$(".btn" + defaultPH + " img").css("display" , "none");
		$("#topPH").attr("src" , "img/0"+ defaultPH +"top.jpg");
		$("#btmPH").attr("src" , "img/0"+ defaultPH +"btm.jpg");
	}
	if ($.browser.msie && $.browser.version < 7) {
		$(".btn1").css("display" , "none");		
		$(".btn2").css("display" , "none");		
		$(".btn3").css("display" , "none");		
		$(".btn4").css("display" , "none");		
		$(".btn5").css("display" , "none");		
		$(".btn6").css("display" , "none");		
		$(".btn7").css("display" , "none");		
		$(".btn8").css("display" , "none");		
	}
	
});
	
function phChange(phNam,changeSize){
	$("#topPH").attr("src" , "img/0"+ phNam +"top.jpg");
	$("#btmPH").attr("src" , "img/0"+ phNam +"btm.jpg");

	for(i=1; i <= setImageNum; i++){
		$(".btn" + i + " img").css("display" , "block");
	}
	
	$(".btn" + phNam + " img").css("display" , "none");
}

function closeWin(){
	if(isWii() || isDSi() || is3DS()){
		window.history.back();
	}
}