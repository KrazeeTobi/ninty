/*@cc_on _d=document;eval('var document=_d')@*/

if(CSSpath_loc == undefined){
	JSpath = "";
} else {	
	JSpath = CSSpath_loc.replace("css/", "");
}

document.write('<SCRIPT LANGUAGE="JavaScript" TYPE="text/JavaScript" SRC="'+ JSpath +'js/jquery.js"></SCRIPT>');
document.write('<SCRIPT LANGUAGE="JavaScript" TYPE="text/JavaScript" SRC="'+ JSpath +'js/jquery_auto.js"></SCRIPT>');
document.write('<SCRIPT LANGUAGE="JavaScript" TYPE="text/JavaScript" SRC="'+ JSpath +'js/jquery_png.js"></SCRIPT>');
document.write('<SCRIPT LANGUAGE="JavaScript" TYPE="text/JavaScript" SRC="'+ JSpath +'js/select_style.js"></SCRIPT>');

function isWin () { return (navigator.appVersion.indexOf ("Win") != -1); }
function isIE () { return (navigator.appName.indexOf ("Explorer") != -1); }
function isWinIE () { return (isWin () && isIE ()); }
function isMac () { return (navigator.appVersion.indexOf("Macintosh") != -1);}
function isSafari () { return (navigator.appVersion.indexOf("Safari") != -1);}
function isMacSafari () { return (isMac () && isSafari ()); }
function isiphone () { return (navigator.userAgent.indexOf("iPhone") != -1);}
function isWii () { return (navigator.userAgent.indexOf("Wii") != -1); }
function isDSi () { return (navigator.userAgent.indexOf("Nintendo DSi") != -1); }
function getFlashPlayerVersion() { if (navigator.plugins) with (navigator) { var s = "application/x-shockwave-flash"; if (mimeTypes && mimeTypes [s] && mimeTypes [s].enabledPlugin) nFlashPlayerVersion = navigator.plugins ["Shockwave Flash"].description.match (/\d+/); } return parseInt (nFlashPlayerVersion); }; var nFlashPlayerVersion = 0; if (isWinIE ()) document.write ('<scr' + 'ipt type="text/vbscript" language="VBScript"\>\nPrivate i, b\nOn Error Resume Next\nFor i = 8 To 1 Step -1\nb = (IsObject (CreateObject ("ShockwaveFlash.ShockwaveFlash." & i)))\nIf b Then \nnFlashPlayerVersion = i\nExit For\nEnd If\nNext\n</scr' + 'ipt\>');

if(document.all){
	var WindowW =document.documentElement.clientWidth;
	var WindowH =document.documentElement.clientHeight;
} else {
	var WindowW =innerWidth;
	var WindowH =innerHeight;
}

if (isWii()) {
	document.write('<LINK REL="stylesheet" TYPE="text/css" HREF="'+ JSpath +'css/wiicommon.css">');
} else if ( WindowW <= 900 || WindowH <= 600 || isDSi () || isiphone ()) {
	document.write('<LINK REL="stylesheet" TYPE="text/css" HREF="'+ JSpath +'css/wiicommon.css">');
	document.write('<LINK REL="stylesheet" TYPE="text/css" HREF="'+ JSpath +'css/lowResolution.css">');
}
	
	
function setPickup(){
	if (isDSi() || isiphone ()) {
		document.write (
		'<div id="pickup">' +
		'<table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">' +
		'<tr>' +
		'<td><DIV><a href="details/wii_new_super_mario.html"><img src="img/rightWaku01.gif" width="250" height="138" alt="New Super Mario Bros. Wii" /></a></DIV>' +
		'<DIV><a href="details/wii_fit_plus.html"><img src="img/rightWaku02.gif" width="250" height="147" alt="Wii Fit Plus" /></a></DIV>' +
		'<DIV><a href="details/wii_sports_resort.html"><img src="img/rightWaku03.gif" width="250" height="166" alt="Wii Sports Resort" /></a></DIV></td>' +
		'</tr>' +
		'</table>' +
		'</div>'
		);
	} else if (isWii() || WindowW <= 800 || WindowH <= 600 ) {
		document.write (
		'<div id="pickup">' +
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="250" height="100%">' +
		'<param name="movie" value="img/rightNavi.swf?locationMode=wii">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#f7f7f7">' +
		'<param name="allowScriptAccess" value="always">' +
		'<param name="SeamlessTabbing" value="true">' +
		'<param name="wmode" value="transparent">' +
		'<embed src="img/rightNavi.swf?locationMode=wii" menu="false" quality="high" bgcolor="#f7f7f7" width="250" height="100%" swLiveConnect="true" allowScriptAccess="always" SeamlessTabbing= "true" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent"><\/embed><\/object><br>' +
		'</div>'
		);
	} else if (getFlashPlayerVersion() >= 7) {
		document.write (
		'<div id="pickup">' +
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="250" height="100%">' +
		'<param name="movie" value="img/rightNavi.swf?locationMode=pc">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +
		'<param name="allowScriptAccess" value="always">' +
		'<param name="SeamlessTabbing" value="true">' +
		'<param name="wmode" value="transparent">' +
		'<embed src="img/rightNavi.swf?locationMode=pc" menu="false" quality="high" bgcolor="#ffffff" width="250" height="100%" swLiveConnect="true" allowScriptAccess="always" SeamlessTabbing= "true" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent"><\/embed><\/object><br>' +
		'</div>'
		);
	} else {
		'<div id="pickup">' +
		'<table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">' +
		'<tr>' +
		'<td><DIV><a href="details/wii_new_super_mario.html"><img src="img/rightWaku01.gif" width="250" height="138" alt="New Super Mario Bros. Wii" /></a></DIV>' +
		'<DIV><a href="details/wii_fit_plus.html"><img src="img/rightWaku02.gif" width="250" height="147" alt="Wii Fit Plus" /></a></DIV>' +
		'<DIV><a href="details/wii_sports_resort.html"><img src="img/rightWaku03.gif" width="250" height="166" alt="Wii Sports Resort" /></a></DIV></td>' +
		'</tr>' +
		'</table>' +
		'</div>'
	}
}

function setTitle(titleFrame,introMode,heightNum){
	if (isWii() || getFlashPlayerVersion() < 7) {
		if ( titleFrame == 1 ){
			document.write ('<img src="'+ JSpath +'img/message_ttl.gif" width="226" height="44" alt="キーメッセージ" />');
		} else if ( titleFrame == 2 ){
			document.write ('<img src="'+ JSpath +'img/newsrelease_ttl.gif" width="246" height="44" alt="NEWS RELEASE" />');
		} else if ( titleFrame == 3 ){
			document.write ('<img src="img/webcast_ttl.gif" width="215" height="64" alt="メディアブリーフィング ウェブキャスト" />');
		} else if ( titleFrame == 4 ){
			document.write ('<img src="img/titlelist_ttl.gif" width="270" height="44" alt="出展タイトルリスト" />');
		}
	} else {
		document.write (
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="100%" height="'+ heightNum +'">' +
		'<param name="movie" value="'+ JSpath +'img/titleBar.swf?titleFrame=' + titleFrame + '&introMode=' + introMode + '&heightNum=' + heightNum + '">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +
		'<param name="allowScriptAccess" value="always">' +
		'<param name="SeamlessTabbing" value="true">' +
		'<param name="wmode" value="transparent">' +
		'<embed src="'+ JSpath +'img/titleBar.swf?titleFrame=' + titleFrame + '&introMode=' + introMode + '&heightNum=' + heightNum + '" menu="false" quality="high" bgcolor="#ffffff" width="100%" height="'+ heightNum +'" swLiveConnect="true" allowScriptAccess="always" SeamlessTabbing= "true" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent"><\/embed><\/object><br>'
		);
	}
}

function setWebCast(){
	if (isWii() || isDSi()) {
		document.write ('<img src="img/webcast_plugin.gif" width="450" height="45" alt="※ウェブキャストをご覧いただくには、最新のFlash Playerが必要です。また、WiiやニンテンドーDSでご覧の方は、恐れ入りますがパソコンのブラウザでご覧頂きますようお願いいたします。" />');
	}
}

function setMovie(fileName,fileNameWii,movieTime,imageName,op1,op2){
	if (isWii()) {
		document.write (
		'<embed src="'+ JSpath +'img/moviePlayerWii.swf?fileName=' + fileName + '&fileNameWii=' + fileNameWii + '&movieTime=' + movieTime + '&imageName=' + imageName + '&locationMode=wii" menu="false" quality="high" bgcolor="#f7f7f7" width="461" height="304" swLiveConnect="true" allowScriptAccess="always" SeamlessTabbing= "true" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent"><\/embed><\/object><br>'
		);
	} else if (getFlashPlayerVersion() >= 8) {
		document.write (
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="461" height="304">' +
		'<param name="movie" value="'+ JSpath +'img/moviePlayer.swf?fileName=' + fileName + '&fileNameWii=' + fileNameWii + '&movieTime=' + movieTime + '&imageName=' + imageName + '&locationMode=pc">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +
		'<param name="allowScriptAccess" value="always">' +
		'<param name="SeamlessTabbing" value="true">' +
		'<param name="wmode" value="transparent">' +
		'<embed src="'+ JSpath +'img/moviePlayer.swf?fileName=' + fileName + '&fileNameWii=' + fileNameWii + '&movieTime=' + movieTime + '&imageName=' + imageName + '&locationMode=pc" menu="false" quality="high" bgcolor="#ffffff" width="461" height="304" swLiveConnect="true" allowScriptAccess="always" SeamlessTabbing= "true" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent"><\/embed><\/object><br>'
		);
	} else if (getFlashPlayerVersion() >= 7) {
		document.write (
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="461" height="304">' +
		'<param name="movie" value="'+ JSpath +'img/moviePlayerWii.swf?fileName=' + fileName + '&fileNameWii=' + fileNameWii + '&movieTime=' + movieTime + '&imageName=' + imageName + '&locationMode=wii">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +
		'<param name="allowScriptAccess" value="always">' +
		'<param name="SeamlessTabbing" value="true">' +
		'<param name="wmode" value="transparent">' +
		'<embed src="'+ JSpath +'img/moviePlayerWii.swf?fileName=' + fileName + '&fileNameWii=' + fileNameWii + '&movieTime=' + movieTime + '" menu="false" quality="high" bgcolor="#ffffff" width="461" height="304" swLiveConnect="true" allowScriptAccess="always" SeamlessTabbing= "true" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent"><\/embed><\/object><br>'
		);
	} else {
		document.write (
		'<img src="../img/detail_movie_noplugin.png" width="461" height="304" alt="ムービーをご覧頂くにはJavaScriptをオンにして最新のAdobe Flash Playerでご覧ください。また、ニンテンドーDSをご利用の方は、恐れ入りますがパソコンのブラウザや、Wiiのインターネットチャンネルでご覧ください。" />'
		);
	}
}