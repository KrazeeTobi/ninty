document.write('<script type="text/javascript" src="js/jquery.history.js"></script>');

var defaultMov;
var autoPlayMode = 0;

function pageload(hash) {
	if(hash) {
		hash = encodeURIComponent(hash);
		if(!isSmartPhone() && !isWii() && !isDSi() && !is3DS()){
			selectMov(hash,0);
			document.title= '任天堂 E3 2012情報 | E3レポート';
		}
	}
}

window.setInterval("document.title= '任天堂 E3 2012情報 | E3レポート';" ,1000);


$(function() {
		   
	var i = 0;
	$("#leftContent #contents .wrap #listContainer ul li").each(function(){
		$(this).attr("id","mov" + i);
		i++;
	});

	$.historyInit(pageload, "index.html");
	if(!location.hash.split('#')[1]) {
		if(!isSmartPhone() && !isWii() && !isDSi() && !is3DS()){
			defaultMov = "mov0";
			$("#" + defaultMov).prepend('<img src="img/cu.png" width="238" height="194" class="movCu trans" />');	
			report(defaultMov , autoPlayMode);
		}
	}
	$("a[rel='history']").click(function(){
		var hash = this.href;
		hash = hash.replace(/^.*#/, '');
		hash = encodeURIComponent(hash);
		$.historyLoad(hash);
		return false;
	});
	
	$("#listContainer ul li a").append('<img src="img/ov.png" width="238" height="194" alt="" class="ov" />');
	$("#nDirect a").append('<img src="img/btnNintendoDirect_ov.png" width="740" height="69" alt="" class="ov" />');
	$("#leftContent #contents .ov").css({ opacity : 0 });
	
	$("#leftContent #contents .wrap #listContainer ul li a").hover(function()
	{
		$(this).children(".ov").stop(true, false).animate({ opacity: 1 }, { duration: 250 });
	}, 
	function() 
	{
		$(this).children(".ov").stop(true, false).animate({ opacity: 0 }, { duration: 800 });
	});
	
	$("#nDirect a").hover(function()
	{
		$(this).children(".ov").stop(true, false).animate({ opacity: 1 }, { duration: 250 });
	}, 
	function() 
	{
		$(this).children(".ov").stop(true, false).animate({ opacity: 0 }, { duration: 800 });
	});
	

	if(isSmartPhone() || isWiiU()) {		
		$("#movPlayer").css( { display: "none" } );
		$("hr").css( { display: "none" } );
		$(".ttlList").css( { display: "none" } );
	} else if(isWii()){
		$("#movPlayer").css( { display: "none" } );
		$("hr").css( { display: "none" } );
		$(".ttlList").css( { display: "none" } );
	} else if(isDSi() || is3DS()){
		$("#listContainer").css( { display: "none" } );
		$("hr").css( { display: "none" } );
		$(".ttlList").css( { display: "none" } );
	}

});

function selectMov(target,mode){
	if(isiPad() || isWiiU()) {
		location.href = "mov/" + target + ".mp4";
	} else if(isSmartPhone() || isWii()) {		
		window.open("../cmn/movie.html?" + target);
	} else {
		
		$( "img.movCu" ).remove();
		defaultMov = target;
		
		if( defaultMov == "mov11" )
		{
			$( "#mov10" ).prepend('<img src="img/cu.png" width="238" height="194" class="movCu trans" />');
		}
		else if( defaultMov == "mov10" )
		{
			$( "#mov11" ).prepend('<img src="img/cu.png" width="238" height="194" class="movCu trans" />');
		}
		else
		{
			$("#" + defaultMov ).prepend('<img src="img/cu.png" width="238" height="194" class="movCu trans" />');
		}
		
		report(defaultMov,mode);
		if( mode == 1){
			$('html,body').animate({ scrollTop: $("#contents").offset().top +100 }, 'normal','swing');
		}
	}
}

function changeMode(){
	autoPlayMode = 1;
}

function report(moveName,autoPlay){	
	if(isWiiU() || isWii() || isDSi() || is3DS() || isSmartPhone()){
	} else if (getFlashPlayerVersion() >= 10) {
		
		/*if(moveName=="mov4"){
			var serverType = 1;
		} else {
			var serverType = 0;
		}*/
		
		//change to new mov
		
		var matName = moveName;
		
		moveName = "re_" + moveName;
		
		if(moveName == "re_mov0")
		{		
			moveName =  "mov_high";
		}		
		if(moveName == "re_mov3")
		{
			moveName = "mov3_0607";
		}
		if(moveName == "re_mov4")
		{		
			moveName =  "mov4_0607";
		}
	
		
		
		var serverType = 0;
		
		var connection = "";
		
		
		if( serverType == 0 ){
			var connectFMS = "mp4:n10/e3_2012/";
		} else {
			var connectFMS = "mov/";
		}
		
		var playerColor = "0096c8";
		
		if(autoPlayMode == 1){
			auto = 1;
		} else {
			auto = 0;
		}
		
		document.getElementById('movPlayer').innerHTML =		
			'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" id="aexternal" width="740" height="415">' +
			'<param name="movie" value="swf/player.swf">' +
			'<param name="menu" value="false">' +
			'<param name="quality" value="high">' +
			'<param name="bgcolor" value="#ffffff">' +
			'<param name="FlashVars" value="server=' + serverType +'&fid=' + connectFMS + moveName + '&auto='+ auto +'&color='+ playerColor +'&thumb=thumb/' + matName + '.jpg&title=thumb/' + matName + '.png&nc=' + connection + '" />' +
			'<param name="wmode" value="transparent">' +
			'<param name="allowFullScreen" value="true" />' + 
			'<param name="allowScriptAccess" value="always">' +
			'<embed src="swf/player.swf" menu="false" quality="high" bgcolor="#ffffff" width="740" height="415" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent" id="aexternal" flashVars="server=' + serverType +'&fid=' + connectFMS + moveName + '&auto='+ auto +'&color='+ playerColor +'&thumb=thumb/' + matName + '.jpg&title=thumb/' + matName + '.png&nc=' + connection + '" allowfullscreen="true"><\/embed><\/object>';
			//alert( connectFMS + moveName );
			
			
		if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 6  ) 
		{
			//movie
			$( "object" ).css( "margin-left", 10 );
		}
	}
}
