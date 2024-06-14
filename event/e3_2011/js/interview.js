document.write('<link rel="stylesheet" type="text/css" href="../../css/thickbox.css" media="all" />');

if(isWii()) {
	document.write('<link rel="stylesheet" type="text/css" href="../../css/p02Wii.css" media="all" />');
}

$(function() { 
	$("#indexArea a").hover(function(){ $(this).animate( { backgroundPosition:"(-327px 0)" }, {duration: 200} ); }, function() { $(this).animate( { backgroundPosition:"(-654px 0)" }, {duration: 500}); } );
	if(isSmartPhone()) {
		$(".ftrBG").hide();		
	}
});

function setMainMovie(fid){	
	if(isSmartPhone()) {
		document.getElementById('mainSWF').innerHTML = 
		'<a href="../movFiles/' + fid + '.mp4"><img src="img/smartPhone.png" width="675" height="381" alt="" style=" position: absolute; top: 1px;" /></a>';
	} else if(isWii() && !isDSi()) {
		document.getElementById('mainSWF').innerHTML = 
		'<embed src="img/mainMovie_forWii.swf?flvName=../../movFiles/' + fid +'.flv" menu="false" quality="high" bgcolor="#ffffff" width="676" height="418" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent" allowfullscreen="true"><\/embed><\/object>';
	} else if (getFlashPlayerVersion() >= 10) {
		document.getElementById('mainSWF').innerHTML = 
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="676" height="418">' +
		'<param name="movie" value="img/mainMovie.swf">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +
		'<param name="FlashVars" value="server=0&amp;fid=../../movFiles/'+ fid +'" />' +
		'<param name="wmode" value="transparent">' +
		'<param name="allowFullScreen" value="true" />' + 
		'<param name="allowScriptAccess" value="always">' +
		'<embed src="img/mainMovie.swf" menu="false" quality="high" bgcolor="#ffffff" width="676" height="418" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent" flashVars="server=0&amp;fid=../../movFiles/'+ fid +'" allowfullscreen="true"><\/embed><\/object>';
	}
}

function deleteMainMov(){
	document.getElementById('mainSWF').innerHTML = '';	
}


function conceptLink(){
	if(isSmartPhone()) {
		location.href = "../movFiles/concept.mp4";		
	} else if(is3DS()) {
		location.href = "popup/conceptMov.html";		
	} else {
		tb_show('conceptMov','popup/conceptMov.html?TB_iframe=true&height=464&width=784');		
	}
}

function conceptLinkTop(){
	if(isSmartPhone()) {
		location.href = "../movFiles/concept.mp4";		
	} else if(is3DS()) {
		location.href = "popup/conceptMov.html";		
	} else {
		deleteMainMov();
		tb_show('conceptMov','popup/conceptMov.html?TB_iframe=true&height=464&width=784');		
	}
}
