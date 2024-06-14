if(isWii()) {
	document.write('<link rel="stylesheet" type="text/css" href="../css/reportWii.css" media="all" />');
}

document.write('<script type="text/javascript" src="../js/jquery.history.js"></script>');

var autoPlayMode = false;


function pageload(hash) {
	if(hash) {
		hash = encodeURIComponent(hash);
		selectMov(hash,0);
		document.title= '”C“V“° E3 2011î•ñ'; 
	} else {
		defaultMov();
	}
}

window.setInterval("document.title= '”C“V“° E3 2011î•ñ';" ,1000);


function selectMov(target,mode){
	defaultMovFile = "video_0" + target.substring(2,3);

	$('.crt').css('left' , $('.' + target).css('left'));
	
	$('.crt').css('top' , $('.' + target).css('top'));
	
	$('#mTitle').attr('src', 'img/' + target + 'title.png');
	$("#movTime").text(movLength[target.substring(2,3) - 1]);
	if( mode == 1){
		$('html,body').animate({ scrollTop: $("#contentsWrap").offset().top -10 }, 'normal','swing');
	}
	report(defaultMovFile,mode);
}


$(function() {
	if(isSmartPhone()) {
		$(".ftrBG").hide();		
	}
	if(isWii() && !isDSi() && !is3DS()) {
	} else if (getFlashPlayerVersion() >= 10) {
	}
	
	$.historyInit(pageload, "index.html");
	if(!location.hash.split('#')[1]) {
		report("video_01");
	}
	$("a[rel='history']").click(function(){
		var hash = this.href;
		hash = hash.replace(/^.*#/, '');
		hash = encodeURIComponent(hash);
		$.historyLoad(hash);
		return false;
	});


});

function changeMode(){
	autoPlayMode = true;
}

function report(fid,autoPlay){	
	if(isSmartPhone()) {
		document.getElementById('mainSWF').innerHTML = 
		'<a href="movFiles/' + fid + '.mp4"><img src="img/' + fid + '_smartPhone.jpg" width="675" height="381" alt="" style=" position: absolute; top: 1px;" /></a>';
	} else if(isWii() && !isDSi()) {		
		document.getElementById('mainSWF').innerHTML = 
		'<embed src="img/reportPlayer_forWii.swf?flvName=' + fid + '" menu="false" quality="high" bgcolor="#ffffff" width="676" height="418" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent" allowfullscreen="true"><\/embed><\/object>';
	} else if (getFlashPlayerVersion() >= 10) {
		if(fid == "video_04"){
			fid = "video_04Mov";
		} 
		if(autoPlayMode == true){
			autoParam = "Auto";
		} else {
			autoParam = "";
		}
		document.getElementById('mainSWF').innerHTML = 
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="676" height="418">' +
		'<param name="movie" value="img/reportPlayer' + autoParam + '.swf">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +
		'<param name="FlashVars" value="server=0&amp;fid='+ fid +'&amp;autoPlay='+ autoPlay +'" />' +
		'<param name="wmode" value="transparent">' +
		'<param name="allowFullScreen" value="true" />' + 
		'<param name="allowScriptAccess" value="always">' +
		'<embed src="img/reportPlayer' + autoParam + '.swf" menu="false" quality="high" bgcolor="#ffffff" width="676" height="418" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent" flashVars="server=0&amp;fid='+ fid +'&amp;autoPlay='+ autoPlay +'" allowfullscreen="true"><\/embed><\/object>';
	}
}
