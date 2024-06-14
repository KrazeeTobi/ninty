

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
	
	$(".contentsWrap .wrap .main .con02").css("width" , "620px");
	$(".contentsWrap .wrap .main .con02list").css("width" , "620px");
	$(".contentsWrap .wrap .main .con02list").css("backgroundPosition" , "310px top");
	
	$(".contentsWrap .wrap .main .con02list .kid_icarus").css("width" , "270px");
	$(".contentsWrap .wrap .main .con02list .kid_icarus").css("textAlign" , "left");
	$(".contentsWrap .wrap .main .con02list .nintendogs").css("width" , "270px");
	
	$(".contentsWrap .wrap .main .con03").css("width" , "620px");	
	$(".contentsWrap .wrap .main .con03 .con03list").css("width" , "620px");
	$(".contentsWrap .wrap .main .con03 .con03list").css("marginLeft" , "10px");
	$(".contentsWrap .wrap .main .con03 .con03list li").css("marginLeft" , "9px");
	
	$(".contentsWrap .wrap .main .con04").css("width" , "620px");
	$(".contentsWrap .wrap .main .con04 .con04list").css("width" , "620px");
	$(".contentsWrap .wrap .main .con04 .con04list .mName").css("float" , "left");
	$(".contentsWrap .wrap .main .con04 .con04list .mName").css("marginLeft" , "15px");	
	$(".contentsWrap .wrap .main .con04 .mg .mName").css("position" , "absolute");
	$(".contentsWrap .wrap .main .con04 .mg .mName").css("right" , "90px");
	$(".contentsWrap .wrap .main .con04 .mg .mName").css("width" , "40px");
	$(".contentsWrap .wrap .main .con04 .con04note").css("width" , "620px");
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
	$(".contentsWrap .wrap .main .con02list").css("width" , "770px");
	$(".contentsWrap .wrap .main .con02list").css("backgroundPosition" , "center top");
	
	$(".contentsWrap .wrap .main .con02list .kid_icarus").css("width" , "370px");
	$(".contentsWrap .wrap .main .con02list .kid_icarus").css("textAlign" , "center");
	$(".contentsWrap .wrap .main .con02list .nintendogs").css("width" , "385px");
	
	$(".contentsWrap .wrap .main .con03").css("width" , "770px");	
	$(".contentsWrap .wrap .main .con03 .con03list").css("width" , "770px");
	$(".contentsWrap .wrap .main .con03 .con03list").css("marginLeft" , "auto");
	$(".contentsWrap .wrap .main .con03 .con03list li").css("marginLeft" , "0");
	
	$(".contentsWrap .wrap .main .con04").css("width" , "770px");	
	$(".contentsWrap .wrap .main .con04 .con04list").css("width" , "770px");
	$(".contentsWrap .wrap .main .con04 .con04list .mName").css("float" , "right");
	$(".contentsWrap .wrap .main .con04 .con04list .mName").css("marginLeft" , "0");
	$(".contentsWrap .wrap .main .con04 .mg .mName").css("position" , "static");
	$(".contentsWrap .wrap .main .con04 .mg .mName").css("float" , "right");
	$(".contentsWrap .wrap .main .con04 .mg .mName").css("width" , "140px");
	$(".contentsWrap .wrap .main .con04 .con04note").css("width" , "770px");
}



