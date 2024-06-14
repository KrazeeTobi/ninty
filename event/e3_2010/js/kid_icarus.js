function isWin () { return (navigator.appVersion.indexOf ("Win") != -1); }
function isIE () { return (navigator.appName.indexOf ("Explorer") != -1); }
function isWinIE () { return (isWin () && isIE ()); }
function isWii () { return (navigator.userAgent.indexOf("Wii") != -1); }
function isDSi () { return (navigator.userAgent.indexOf("Nintendo DSi") != -1); }
function getFlashPlayerVersion() { if (navigator.plugins) with (navigator) { var s = "application/x-shockwave-flash"; if (mimeTypes && mimeTypes [s] && mimeTypes [s].enabledPlugin) nFlashPlayerVersion = navigator.plugins ["Shockwave Flash"].description.match (/\d+/); } return parseInt (nFlashPlayerVersion); }; var nFlashPlayerVersion = 0; if (isWinIE ()) document.write ('<scr' + 'ipt type="text/vbscript" language="VBScript"\>\nPrivate i, b\nOn Error Resume Next\nFor i = 8 To 1 Step -1\nb = (IsObject (CreateObject ("ShockwaveFlash.ShockwaveFlash." & i)))\nIf b Then \nnFlashPlayerVersion = i\nExit For\nEnd If\nNext\n</scr' + 'ipt\>');

function setMov(flvName,serverType,autoPlay,imagePath){
	if (getFlashPlayerVersion() >= 8) {
		document.write (
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="400" height="281">' +
		'<param name="movie" value="../img/kid_icarus.swf?flvName=' + flvName + '.flv&serverType=' + serverType + '&autoMovie=' + autoPlay + '&imagePath=' + imagePath + '&locationWii=' + isWii() + '">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +
		'<param name="allowScriptAccess" value="always">' +
		'<param name="wmode" value="transparent">' +
		'<embed src="../img/kid_icarus.swf?flvName=' + flvName + '.flv&serverType=' + serverType + '&autoMovie=' + autoPlay + '&imagePath=' + imagePath + '&locationWii=' + isWii() + '" menu="false" quality="high" bgcolor="#ffffff" width="400" height="281" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent"><\/embed><\/object>'
		);
	} else {
		document.write (
		'<img src="../../imgCmn/windowLogo.gif" width="34" height="79" alt="E3 2010" class="logo2"><img src="../img/kid_icarus/noPlugin.jpg" width="400" height="240" alt="この動画はパソコンのブラウザでJavaScriptを有効にして、最新のAdobe Flash Playerをインストールしてからご覧ください。">'
		);
	}
}