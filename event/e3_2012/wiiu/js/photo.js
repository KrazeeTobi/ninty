/*-----------------------------
// UA
------------------------------*/
function isWii() { return (navigator.userAgent.indexOf("Wii") != -1); }
function isDSi() { return (navigator.userAgent.indexOf("Nintendo DSi") != -1); }
function is3DS() { return (navigator.userAgent.indexOf("Nintendo 3DS") != -1); }
function isiPhone() { return (navigator.userAgent.indexOf("iPhone") != -1); }
function isiPod() { return (navigator.userAgent.indexOf("iPod") != -1); }
function isiPad() { return (navigator.userAgent.indexOf("iPad") != -1); }
function isAndroid() { return (navigator.userAgent.indexOf("Android") != -1); }
function isAndroidPhone() { return (navigator.userAgent.indexOf("Android") != -1 && navigator.userAgent.indexOf('Mobile') != -1); }
function isAndroidTablet() { return (navigator.userAgent.indexOf("Android") != -1 && navigator.userAgent.indexOf('Mobile') == -1); }
function isSmartPhone(){ var devices = ['iPhone','iPad','iPod','Android']; var pattern = new RegExp(devices.join('|'), 'i'); return pattern.test(navigator.userAgent);}

$(function() {
	if(isSmartPhone() || isWii() || isDSi() || is3DS()){
		$("body").append('<div id="TB_btnClose"><a href="javascript:window.close();void(0);"><img src="img/btnClose.png" width="80" height="80" alt="Close" /></a></div>');
		$("body").css({ marginTop: "45px" });
	}
	
});