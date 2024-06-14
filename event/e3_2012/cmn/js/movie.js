/*-----------------------------
// UA
------------------------------*/
function isWiiU() { return (navigator.userAgent.indexOf("WiiU") != -1); }
function isWii() { if ( !isWiiU() && (navigator.userAgent.indexOf("Wii") != -1)) {
	return true;
	} else return false;
}
function isDSi() { return (navigator.userAgent.indexOf("Nintendo DSi") != -1); }
function is3DS() { return (navigator.userAgent.indexOf("Nintendo 3DS") != -1); }
function isiPhone() { return (navigator.userAgent.indexOf("iPhone") != -1); }
function isiPod() { return (navigator.userAgent.indexOf("iPod") != -1); }
function isiPad() { return (navigator.userAgent.indexOf("iPad") != -1); }
function isAndroid() { return (navigator.userAgent.indexOf("Android") != -1); }
function isAndroidPhone() { return (navigator.userAgent.indexOf("Android") != -1 && navigator.userAgent.indexOf('Mobile') != -1); }
function isAndroidTablet() { return (navigator.userAgent.indexOf("Android") != -1 && navigator.userAgent.indexOf('Mobile') == -1); }
function isSmartPhone(){ var devices = ['iPhone','iPad','iPod','Android','WiiU']; var pattern = new RegExp(devices.join('|'), 'i'); return pattern.test(navigator.userAgent);}

/*-----------------------------
// Flash Plugin
------------------------------*/
function getFlashPlayerVersion() {
    var vsn = '';
    if( navigator.plugins && navigator.mimeTypes.length ) {     // not IE
        var tmp = navigator.plugins["Shockwave Flash"].description.match(/([0-9]+)/);
        vsn = tmp[0];
    } else {    // IE
        var tmp = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/([0-9]+)/);
        vsn = tmp[0];
    }
    return vsn;
}

if(document.referrer.indexOf("report")  >= 0) {
	dir = "report/"
	moveName = location.search.substr(1,location.search.length - 1);
	moveName = encodeURIComponent(moveName);
} else {
	dir = "cmn/"
	var movSRC = location.hash.split("?");
	moveName = movSRC[0].substr(1,location.hash.length -1);
	moveName = encodeURIComponent(moveName);
}

function ga(){
	gaID = "/n10/e3_2012/" + dir + "mov/" + moveName + ".mp4";
	_gaq.push(['_trackPageview', '" + gaID + "']);
	if(isiPhone() || isiPad() || isWiiU()){
		location.href = "../" + dir + "mov/" + moveName + ".mp4";
	}
}

$(function() {
	if(isDSi() || is3DS()) {
		$("body").append('<div id="TB_btnClose"><a href="javascript:history.back();void(0);"><img src="img/btnClose.png" width="80" height="80" alt="Close" /></a></div>');
	} else if(isiPad() || isiPhone() || isWiiU()) {
		$("body").append('<div id="TB_btnClose"><a href="javascript:window.close();void(0);"><img src="img/btnClose.png" width="80" height="80" alt="Close" /></a></div><img src="img/movLogo.png" width="560" height="76" alt="" class="logo" />');
		$("body").css({ marginTop: "95px" });
		$("#movPlayer").css({ width: "640px", margin: "0 auto" });
		
		$("#movPlayer").html( 
			'<div style="position: relative;"><div style="position: absolute;"><a href="#" onclick="ga();"><img src="img/iphone.png" width="640" border="0" class="cover" /></a></div><img src="../' + dir + 'thumb/mov.jpg" width="640" border="0" class="thumb" /></div>'
		);
	} else if(isAndroid()) {
		$("body").append('<div id="TB_btnClose"><a href="javascript:window.close();void(0);"><img src="img/btnClose.png" width="80" height="80" alt="Close" /></a></div><img src="img/movLogo.png" width="280" height="38" alt="" class="logo" />');
		$("body").css({ marginTop: "95px" });
		$("#movPlayer").css({ width: "640px", margin: "0 auto" });
		
		$("#movPlayer").html( 
			'<video src="../' + dir + 'mov/' + moveName + '.mp4" preload="none" poster="../' + dir + 'thumb/movAndroid.jpg" controls preload="metadata" onclick="ga();this.play();" width="640" >' +
			'<a href="../' + dir + 'mov/' + moveName + '.mp4"><img src="../' + dir + 'thumb/movAndroid.jpg" width="640" border="0" /></a>' +  
			'</video>'
		);
	} else if(isWii()) {
		$("body").append('<div id="TB_btnClose"><a href="javascript:window.close();void(0);"><img src="img/btnClose.png" width="80" height="80" alt="Close" /></a></div>');
		
		serverType = 0;
		serverPath = "n10/e3_2012/";
	
		document.getElementById('movPlayer').innerHTML = 
		'<embed src="swf/playerWii.swf" menu="false" quality="high" bgcolor="#ffffff" width="480" height="306" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" flashVars="server=' + serverType +'&serverPath='+ serverPath +'&fid='+ moveName +'.flv&auto=1" allowfullscreen="true"><\/embed><\/object>';
		
		$("body").css({ marginTop: "70px" });		
		
	} else if (getFlashPlayerVersion() >= 10) {
		
		moveName = location.hash.substr(1,location.hash.length -1).slice(0, -1);
		moveName = encodeURIComponent(moveName);
		
		moveNameHigh = moveName + "_high";
		moveNameLow = moveName + "_low";
		
		var serverType = 0;
		var exName = ".f4v";
		
		if( serverType == 0 ){
			var connectFMS = "mp4:n10/e3_2012/";
		} else {
			var connectFMS = "";
		}
		
		var playerColor = "0096c8";
		
		document.getElementById('movPlayer').innerHTML =		
			'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" id="aexternal" width="912" height="513">' +
			'<param name="movie" value="swf/player.swf">' +
			'<param name="menu" value="false">' +
			'<param name="quality" value="high">' +
			'<param name="bgcolor" value="#000000">' +
			'<param name="FlashVars" value="server=' + serverType +'&fid1=' + connectFMS + moveNameHigh + '&fid2=' + connectFMS + moveNameLow + '&auto=1&color='+ playerColor +'&thumb=thumb/mov.jpg&ex=' + exName + '" />' +
			'<param name="allowFullScreen" value="true" />' + 
			'<param name="allowScriptAccess" value="always">' +
			'<embed src="swf/player.swf" menu="false" quality="high" bgcolor="#000000" width="912" height="513" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" id="aexternal" flashVars="server=' + serverType +'&fid1=' + connectFMS + moveNameHigh + '&fid2=' + connectFMS + moveNameLow + '&auto=1&color='+ playerColor +'&thumb=thumb/mov.jpg&ex=' + exName + '" allowfullscreen="true"><\/embed><\/object>';
		
	} 
	
});