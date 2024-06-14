

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
	$(".contentsSeparate").css("backgroundImage" , "url(../imgCmn/bgContentsSeparate768.png)");
	$("#contentsBtm").css("backgroundPosition" , "right top");
	$("#ftr").css("width" , "768px");
	
	$(".contentsWrap .wrap .main .con01").css("width" , "620px");
	$(".contentsWrap .wrap .main .con01list").css("width" , "620px");
	$(".contentsWrap .wrap .main .con01list").css("backgroundPosition" , "310px top");
	
	$(".contentsWrap .wrap .main .con02").css("width" , "620px");
	$(".contentsWrap .wrap .main .con02list").css("width" , "620px");
	$(".contentsWrap .wrap .main .con02list").css("backgroundPosition" , "310px top");
	$(".contentsWrap .wrap .main .con02listDS").css("width" , "620px");
	$(".contentsWrap .wrap .main .con02listDS").css("backgroundPosition" , "310px top");
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
	
	$(".contentsWrap .wrap .main .con01").css("width" , "770px");
	$(".contentsWrap .wrap .main .con01list").css("width" , "770px");
	$(".contentsWrap .wrap .main .con01list").css("backgroundPosition" , "center top");
	
	$(".contentsWrap .wrap .main .con02").css("width" , "770px");
	$(".contentsWrap .wrap .main .con02list").css("width" , "770px");
	$(".contentsWrap .wrap .main .con02list").css("backgroundPosition" , "center top");
	$(".contentsWrap .wrap .main .con02listDS").css("width" , "770px");
	$(".contentsWrap .wrap .main .con02listDS").css("backgroundPosition" , "center top");
}



