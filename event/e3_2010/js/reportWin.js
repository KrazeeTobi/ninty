

window.onload = function (){
	if(document.all){
		var WindowW =document.documentElement.clientWidth;
	} else {
		var WindowW =innerWidth;
 	}
	if (isWii() || isDSi()) {
		smallWin();
	} else if(WindowW < 960){
		smallWin();
 	} else {
		largeWin();
	}
}

window.onresize = function (){
	if(document.all){
		var WindowW =document.documentElement.clientWidth;
	} else {
		var WindowW =innerWidth;
 	}
	if(WindowW < 960){
		smallWin();
 	} else {
		largeWin();
	}
}

function smallWin(){
	$("#hdrWrap").css("width" , "768px");
	$("#menuWrap .wrap").css("width" , "768px");
	$("#contentsTop").css("backgroundPosition" , "right top");
	$("#contentsTop .wrap").css("width" , "768px");
	$(".contentsWrap .wrap").css("width" , "768px");
	$(".contentsWrap .wrap .main").css("width" , "670px");
	$(".contentsWrap .wrap .main").css("backgroundImage" , "none");
	$(".contentsSeparate").css("backgroundImage" , "none");
	$("#contentsBtm").css("backgroundPosition" , "right top");
	$("#ftr").css("width" , "768px");
	
	$(".contentsWrap .wrap .main .con02").css("width" , "620px");	
	$(".contentsWrap .wrap .main .con02ttl").css("width" , "620px");
	$(".contentsWrap .wrap .main .con02ttl img").css("marginLeft" , "18px");	
	$(".contentsWrap .wrap .main .con02ttl span").css("marginRight" , "18px");
	$(".contentsWrap .wrap .main .con02 .con02list").css("width" , "620px");
	$(".contentsWrap .wrap .main .con02 .con02list").css("marginLeft" , "10px");
	$(".contentsWrap .wrap .main .con02 .con02list li").css("marginLeft" , "9px");
	$(".contentsWrap .wrap .main .con02 #interviewBTN").css("marginLeft" , "18px")
	$(".contentsWrap .wrap .main .con02 .con02subttl").css("width" , "620px");;
	
	$(".contentsWrap .wrap .main .con02 .con02subttl").css("marginLeft" , "18px");
}

function largeWin(){
	$("#hdrWrap").css("width" , "960px");
	$("#menuWrap .wrap").css("width" , "960px");
	$("#contentsTop").css("backgroundPosition" , "center top");
	$("#contentsTop .wrap").css("width" , "960px");
	$(".contentsWrap .wrap").css("width" , "960px");
	$(".contentsWrap .wrap .main").css("width" , "854px");
	$(".contentsWrap .wrap .main").css("backgroundImage" , "url(../imgCmn/bgContents.png)");
	$(".contentsSeparate").css("backgroundImage" , "url(../imgCmn/bgContentsSeparate.png)");
	$("#contentsBtm").css("backgroundPosition" , "center top");
	$("#ftr").css("width" , "960px");
	
	$(".contentsWrap .wrap .main .con02").css("width" , "770px");
	$(".contentsWrap .wrap .main .con02ttl").css("width" , "770px");	
	$(".contentsWrap .wrap .main .con02ttl img").css("marginLeft" , "0");
	$(".contentsWrap .wrap .main .con02ttl span").css("marginRight" , "8px");
	$(".contentsWrap .wrap .main .con02 .con02list").css("width" , "770px");
	$(".contentsWrap .wrap .main .con02 .con02list").css("marginLeft" , "auto");
	$(".contentsWrap .wrap .main .con02 .con02list li").css("marginLeft" , "0");
	$(".contentsWrap .wrap .main .con02 #interviewBTN").css("marginLeft" , "0");
	$(".contentsWrap .wrap .main .con02 .con02subttl").css("width" , "770px");
	
	$(".contentsWrap .wrap .main .con02 .con02subttl").css("marginLeft" , "auto");
}



