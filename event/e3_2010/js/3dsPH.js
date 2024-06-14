function isWin () { return (navigator.appVersion.indexOf ("Win") != -1); }
function isIE () { return (navigator.appName.indexOf ("Explorer") != -1); }
function isWinIE () { return (isWin () && isIE ()); }
function isWii () { return (navigator.userAgent.indexOf("Wii") != -1); }
function isDSi () { return (navigator.userAgent.indexOf("Nintendo DSi") != -1); }
function getFlashPlayerVersion() { if (navigator.plugins) with (navigator) { var s = "application/x-shockwave-flash"; if (mimeTypes && mimeTypes [s] && mimeTypes [s].enabledPlugin) nFlashPlayerVersion = navigator.plugins ["Shockwave Flash"].description.match (/\d+/); } return parseInt (nFlashPlayerVersion); }; var nFlashPlayerVersion = 0; if (isWinIE ()) document.write ('<scr' + 'ipt type="text/vbscript" language="VBScript"\>\nPrivate i, b\nOn Error Resume Next\nFor i = 8 To 1 Step -1\nb = (IsObject (CreateObject ("ShockwaveFlash.ShockwaveFlash." & i)))\nIf b Then \nnFlashPlayerVersion = i\nExit For\nEnd If\nNext\n</scr' + 'ipt\>');


$(document).ready(function(){
	setMov("ph1");
	$(".btn1 img").css("display" , "none");
});
	
function phChange(phNam){
	
	setMov("ph" + phNam);
	$("#movieArea").css("backgroundImage" , "url(../img/phCTR" + phNam + ".jpg)");
	
	for(i=1; i <= setImageNum; i++){
		$(".btn" + i + " img").css("display" , "block");
	}
	
	$(".btn" + phNam + " img").css("display" , "none");
}

function setMov(flvName){
	if (getFlashPlayerVersion() >= 8) {
		document.getElementById('movieArea').innerHTML = 
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="736" height="470">' +
		'<param name="movie" value="../img/' + flvName + '.swf">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +
		'<param name="allowScriptAccess" value="always">' +
		'<embed src="../img/' + flvName + '.swf" menu="false" quality="high" bgcolor="#ffffff" width="736" height="470" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"><\/embed><\/object>';
	}
}

function closeWin(){
	if(isWii() || isDSi()){
		window.history.back();
	}
}