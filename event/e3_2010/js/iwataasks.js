function thumbnailMov(target) {
	$(target + "BTN .ov").css("display", "block");
}

function thumbnailMovOff(target) {
	$(target + "BTN .ov").css("display", "none");
}

function defaultMov(){	
	setMov('../iwataasks/flv/' + defaultMovFile,2,2,'img/' + defaultMovFile + '.jpg');
}

function pageload(hash) {
	if(hash) {
		hash = encodeURIComponent(hash);
		changeVideo(hash);
		document.title= '任天堂 E3 2010情報'; 
	} else {
		defaultMov();
	}
}
	
window.setInterval("document.title= '任天堂 E3 2010情報';" ,1000);

$(document).ready(function(){

	$.historyInit(pageload, "index.html");
	if(!location.hash.split('#')[1]) {
		defaultMov();
	
		$(".contentsWrap .wrap .main .con02 .con02list li").removeClass("current");
		$(".contentsWrap .wrap .main .con02 .con02list li .cu").css("display" , "none");
		$(".contentsWrap .wrap .main .con02 .con02list li a").css("display" , "block");
		$(".contentsWrap .wrap .main .con01 #movTTL").css("backgroundImage" , "url(img/ttl_" + defaultMovFile + ".png)");
		$("#" + defaultMovFile + "BTN .cu").css("display" , "block");
		$("#" + defaultMovFile + "BTN a").css("display" , "none");
		$("#" + defaultMovFile + "BTN").addClass("current");
	}
	$("a[rel='history']").click(function(){
		var hash = this.href;
		hash = hash.replace(/^.*#/, '');
		hash = encodeURIComponent(hash);
		$.historyLoad(hash);
		return false;
	});
});

function changeVideo(flvName) {	
	defaultMovFile = flvName;
	setMov('../iwataasks/flv/' + defaultMovFile,2,1,'img/' + defaultMovFile + '.jpg');
	$('html, body').stop().animate({scrollTop: $("#contentsTop").offset().top + 10}, 500);
	
	$(".contentsWrap .wrap .main .con02 .con02list li").removeClass("current");
	$(".contentsWrap .wrap .main .con02 .con02list li .cu").css("display" , "none");
	$(".contentsWrap .wrap .main .con02 .con02list li a").css("display" , "block");
	$(".contentsWrap .wrap .main .con01 #movTTL").css("backgroundImage" , "url(img/ttl_" + defaultMovFile + ".png)");
	$("#" + flvName + "BTN .cu").css("display" , "block");
	$("#" + flvName + "BTN a").css("display" , "none");
	$("#" + flvName + "BTN").addClass("current");
}

function setMov(flvName,serverType,autoPlay,imagePath){
	if (isWii()) {
		document.getElementById('movieArea').innerHTML = 
		'<embed src="../imgCmn/movieWii.swf?flvName=' + flvName + '.flv&serverType=' + serverType + '&autoMovie=' + autoPlay + '&imagePath=' + imagePath + '&locationWii=' + isWii() + '" menu="false" quality="high" bgcolor="#ffffff" width="644" height="402" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"><\/embed><\/object>';
	} else if (getFlashPlayerVersion() >= 8) {
		document.getElementById('movieArea').innerHTML = 
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="644" height="402">' +
		'<param name="movie" value="../imgCmn/movie.swf?flvName=' + flvName + '.flv&serverType=' + serverType + '&autoMovie=' + autoPlay + '&imagePath=' + imagePath + '&locationWii=' + isWii() + '">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +
		'<param name="allowScriptAccess" value="always">' +
		'<embed src="../imgCmn/movie.swf?flvName=' + flvName + '.flv&serverType=' + serverType + '&autoMovie=' + autoPlay + '&imagePath=' + imagePath + '&locationWii=' + isWii() + '" menu="false" quality="high" bgcolor="#ffffff" width="644" height="402" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"><\/embed><\/object>';
	} else {
		document.getElementById('movieArea').innerHTML = 
		'<img src="../imgCmn/noPlugin.png" width="644" height="361" alt="この動画はパソコンのブラウザでJavaScriptを有効にして、最新のAdobe Flash Playerをインストールしてからご覧下さい。">';
	}
}