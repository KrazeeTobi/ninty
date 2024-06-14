if(isWii()) {
	document.write('<link rel="stylesheet" type="text/css" href="css/idxWii.css" media="all" />');
}

$(function() {
	if(isWii() && !isDSi() && !is3DS()) {
		$(".hdrLogo").hide();
		$(".btnRelease").hide();
		$(".aboutE3").hide();
		$("#alternativeContents").hide();
		document.getElementById('main').innerHTML = 
		'<embed src="img_index/main.swf?modeWii=wii" menu="false" quality="high" bgcolor="#ffffff" width="960" height="704" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"><\/embed><\/object>';
	} else if (getFlashPlayerVersion() >= 8) {
		$(".hdrLogo").hide();
		$(".btnRelease").hide();
		$(".aboutE3").hide();
		$("#alternativeContents").hide();
		document.getElementById('main').innerHTML = 
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="100%" height="704">' +
		'<param name="movie" value="img_index/main.swf?modeWii=pc">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +
		'<param name="allowScriptAccess" value="always">' +
		'<embed src="img_index/main.swf?modeWii=pc" menu="false" quality="high" bgcolor="#ffffff" width="100%" height="704" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"><\/embed><\/object>';
	}
});

