document.write('<script type="text/javascript" src="../js/thickbox.js"></script>');
document.write('<script type="text/javascript" src="../js/jquery.history.js"></script>');

function isWin () { return (navigator.appVersion.indexOf ("Win") != -1); }
function isIE () { return (navigator.appName.indexOf ("Explorer") != -1); }
function isWinIE () { return (isWin () && isIE ()); }
function isWii() { return (navigator.userAgent.indexOf("Wii") != -1); }
function isDSi () { return (navigator.userAgent.indexOf("Nintendo DSi") != -1); }
function getFlashPlayerVersion() { if (navigator.plugins) with (navigator) { var s = "application/x-shockwave-flash"; if (mimeTypes && mimeTypes [s] && mimeTypes [s].enabledPlugin) nFlashPlayerVersion = navigator.plugins ["Shockwave Flash"].description.match (/\d+/); } return parseInt (nFlashPlayerVersion); }; var nFlashPlayerVersion = 0; if (isWinIE ()) document.write ('<scr' + 'ipt type="text/vbscript" language="VBScript"\>\nPrivate i, b\nOn Error Resume Next\nFor i = 8 To 1 Step -1\nb = (IsObject (CreateObject ("ShockwaveFlash.ShockwaveFlash." & i)))\nIf b Then \nnFlashPlayerVersion = i\nExit For\nEnd If\nNext\n</scr' + 'ipt\>');

function pageTop() {
	$('html, body').stop().animate({scrollTop: $("#hdrWrap").offset().top}, 300);
}

function globalMenu(locationPage) {
	if(locationPage == "report"){
		document.write ('<img src="../imgCmn/btnReport_ov.png" width="90" height="86" alt="E3レポート"><a href="../3ds/index.html"><img src="../imgCmn/btn3DS.png" width="127" height="86" alt="ニンテンドー3DS" class="hover"></a><a href="../wii_ds/index.html"><img src="../imgCmn/btnWiiDS.png" width="76" height="86" alt="Wii・DS" class="hover"></a><A href="../iwataasks/index.html"><img src="../imgCmn/btnIwataAsks.png" width="84" height="86" alt="社長が訊く" class="hover"></a><a href="../interview/index.html"><img src="../imgCmn/btnInterview.png" width="92" height="86" alt="インタビュー" class="hover"></a>');
	} else if(locationPage == "3ds") {
		document.write ('<a href="../report/index.html"><img src="../imgCmn/btnReport.png" width="90" height="86" alt="E3レポート" class="hover"></a><img src="../imgCmn/btn3DS_ov.png" width="127" height="86" alt="ニンテンドー3DS"><a href="../wii_ds/index.html"><img src="../imgCmn/btnWiiDS.png" width="76" height="86" alt="Wii・DS" class="hover"></a><a href="../iwataasks/index.html"><img src="../imgCmn/btnIwataAsks.png" width="84" height="86" alt="社長が訊く" class="hover"></a><a href="../interview/index.html"><img src="../imgCmn/btnInterview.png" width="92" height="86" alt="インタビュー" class="hover"></a>');
	} else if(locationPage == "3ds_deteil") {
		document.write ('<a href="../report/index.html"><img src="../imgCmn/btnReport.png" width="90" height="86" alt="E3レポート" class="hover"></a><a href="../3ds/index.html"><img src="../imgCmn/btn3DS_ov.png" width="127" height="86" alt="ニンテンドー3DS"></a><a href="../wii_ds/index.html"><img src="../imgCmn/btnWiiDS.png" width="76" height="86" alt="Wii・DS" class="hover"></a><a href="../iwataasks/index.html"><img src="../imgCmn/btnIwataAsks.png" width="84" height="86" alt="社長が訊く" class="hover"></a><a href="../interview/index.html"><img src="../imgCmn/btnInterview.png" width="92" height="86" alt="インタビュー" class="hover"></a>');
	} else if(locationPage == "wii_ds") {
		document.write ('<a href="../report/index.html"><img src="../imgCmn/btnReport.png" width="90" height="86" alt="E3レポート" class="hover"></a><a href="../3ds/index.html"><img src="../imgCmn/btn3DS.png" width="127" height="86" alt="ニンテンドー3DS" class="hover"></a><img src="../imgCmn/btnWiiDS_ov.png" width="76" height="86" alt="Wii・DS"><a href="../iwataasks/index.html"><img src="../imgCmn/btnIwataAsks.png" width="84" height="86" alt="社長が訊く" class="hover"></a><a href="../interview/index.html"><img src="../imgCmn/btnInterview.png" width="92" height="86" alt="インタビュー" class="hover"></a>');
	} else if(locationPage == "wii_ds_deteil") {
		document.write ('<a href="../report/index.html"><img src="../imgCmn/btnReport.png" width="90" height="86" alt="E3レポート" class="hover"></a><a href="../3ds/index.html"><img src="../imgCmn/btn3DS.png" width="127" height="86" alt="ニンテンドー3DS" class="hover"></a><a href="../wii_ds/index.html"><img src="../imgCmn/btnWiiDS_ov.png" width="76" height="86" alt="Wii・DS"></a><a href="../iwataasks/index.html"><img src="../imgCmn/btnIwataAsks.png" width="84" height="86" alt="社長が訊く" class="hover"></a><a href="../interview/index.html"><img src="../imgCmn/btnInterview.png" width="92" height="86" alt="インタビュー" class="hover"></a>');
	} else if(locationPage == "iwataasks") {
		document.write ('<a href="../report/index.html"><img src="../imgCmn/btnReport.png" width="90" height="86" alt="E3レポート" class="hover"></a><a href="../3ds/index.html"><img src="../imgCmn/btn3DS.png" width="127" height="86" alt="ニンテンドー3DS" class="hover"></a><a href="../wii_ds/index.html"><img src="../imgCmn/btnWiiDS.png" width="76" height="86" alt="Wii・DS" class="hover"></a><img src="../imgCmn/btnIwataAsks_ov.png" width="84" height="86" alt="社長が訊く"><a href="../interview/index.html"><img src="../imgCmn/btnInterview.png" width="92" height="86" alt="インタビュー" class="hover"></a>');
	} else if(locationPage == "interview") {
		document.write ('<a href="../report/index.html"><img src="../imgCmn/btnReport.png" width="90" height="86" alt="E3レポート" class="hover"></a><a href="../3ds/index.html"><img src="../imgCmn/btn3DS.png" width="127" height="86" alt="ニンテンドー3DS" class="hover"></a><a href="../wii_ds/index.html"><img src="../imgCmn/btnWiiDS.png" width="76" height="86" alt="Wii・DS" class="hover"></a><a href="../iwataasks/index.html"><img src="../imgCmn/btnIwataAsks.png" width="84" height="86" alt="社長が訊く" class="hover"></a><img src="../imgCmn/btnInterview_ov.png" width="92" height="86" alt="インタビュー">');
	}
}