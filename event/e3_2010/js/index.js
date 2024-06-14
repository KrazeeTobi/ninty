function isWin () { return (navigator.appVersion.indexOf ("Win") != -1); }
function isIE () { return (navigator.appName.indexOf ("Explorer") != -1); }
function isWinIE () { return (isWin () && isIE ()); }
function isWii() { return (navigator.userAgent.indexOf("Wii") != -1); }
function isDSi () { return (navigator.userAgent.indexOf("Nintendo DSi") != -1); }
function getFlashPlayerVersion() { if (navigator.plugins) with (navigator) { var s = "application/x-shockwave-flash"; if (mimeTypes && mimeTypes [s] && mimeTypes [s].enabledPlugin) nFlashPlayerVersion = navigator.plugins ["Shockwave Flash"].description.match (/\d+/); } return parseInt (nFlashPlayerVersion); }; var nFlashPlayerVersion = 0; if (isWinIE ()) document.write ('<scr' + 'ipt type="text/vbscript" language="VBScript"\>\nPrivate i, b\nOn Error Resume Next\nFor i = 8 To 1 Step -1\nb = (IsObject (CreateObject ("ShockwaveFlash.ShockwaveFlash." & i)))\nIf b Then \nnFlashPlayerVersion = i\nExit For\nEnd If\nNext\n</scr' + 'ipt\>');

$(document).ready(function(){
	setMov();
});

function setMov(){
	if (isWii() || isDSi()) {
		$("#mainSWF").css("background" , "url(imgIdx/baseWiiDS.jpg) no-repeat");
	} else if (getFlashPlayerVersion() >= 8) {
		document.getElementById('mainSWF').innerHTML = 
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="100%" height="513">' +
		'<param name="movie" value="imgIdx/main.swf">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +
		'<param name="allowScriptAccess" value="always">' +
		'<embed src="imgIdx/main.swf" menu="false" quality="high" bgcolor="#ffffff" width="100%" height="513" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"><\/embed><\/object>';
	} else {
		$("#mainSWF").css("background" , "url(imgIdx/base.jpg) no-repeat");
	}
}

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
	if (isWii() || isDSi()) {
		smallWin();
	} else if(WindowW < 960){
		smallWin();
 	} else {
		largeWin();
	}
}

function smallWin(){
	$("#hdrWrap").css("width" , "768px");
	$("#menu").css("width" , "768px");
	$("#topics").css("width" , "768px");
	$("#pickupWrap").css("width" , "768px");
	$("#pickupWrap").css("backgroundImage" , "url(imgIdx/ttlPickup768.png)");
	$("#pickupWrap .bnrArea").css("paddingLeft" , "0px");
	$("#pickupWrap .bnrArea").css("paddingTop" , "68px");
	$("#pickupWrap .bnrArea .bnr").css("marginRight" , "5px");
	$("#ftr").css("width" , "768px");
}

function largeWin(){
	$("#hdrWrap").css("width" , "960px");
	$("#menu").css("width" , "960px");
	$("#topics").css("width" , "960px");
	$("#pickupWrap").css("width" , "960px");
	$("#pickupWrap").css("backgroundImage" , "url(imgIdx/ttlPickup.png)");
	$("#pickupWrap .bnrArea").css("paddingLeft" , "212px");
	$("#pickupWrap .bnrArea").css("paddingTop" , "0");
	$("#pickupWrap .bnrArea .bnr").css("marginRight" , "0");
	$("#ftr").css("width" , "960px");
}
