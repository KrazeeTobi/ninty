document.write('<script type="text/javascript" src="../../js/slider.js" charset="UTF-8"></script>');
document.write('<script type="text/javascript" src="../js/titlelistnav.js"></script>');

//remove Alert tag
function removeAlertWindow(){	
		$('#alertWrap').stop( false, false );
		$('#alertWin').stop( false, false );
		$('#alertWrap').fadeOut(300, function(){ $( this ).remove() });
		$('#alertWin').fadeOut(300);
}

//Alert
$(document).ready(function()
{
	if($("body").attr("class").indexOf("alert") >= 0 )
	{ 
		checkFlagForAlert();
	}
});

//checkFlagForAlert
function checkFlagForAlert()
{
	var co = document.cookie.split(';');
	var st = "";
	var ti = 0;
	
	for( var i = 0; i < co.length; i++ )
	{
		if( co[ i ].indexOf( window.location ) != -1 )
		{
			var arr = co[ i ].split('=');
			st = arr[ 1 ];
			if( arr[ 2 ] ) ti = arr[ 2 ];
		}
	}
	
	//check flg & timer
	if( st == 1 )
	{
		//check timelimit
		if( ti - new Date().getTime()  < 0 ) setAlert();
		return;
	}
	else
	{
		setAlert();
	}
}

//setAlert
function setAlert()
{
	document.cookie = window.location + "=0=" + 2012;
	
	$('body').append(
		'<div id="alertWin">' +
		'<img src="../img/detail/alertTitle.png" width="500" height="207" alt="ページをご覧いただく前に。本タイトルには過激な表現が含まれています。内容の視聴にはご配慮をお願いいたします。" />' +
		'<div class="alertBtn clearfix">' +
		'<a href="../index.html"><img src="../img/detail/btnAlertBack.png" width="167" height="40" alt="ソフトウェア一覧へ" class="btnAlertBack" /></a>' +
		'<a href="JavaScript:alertWindow();void(0);"><img src="../img/detail/btnAlertGo.png" width="167" height="40" alt="ページへ進む" class="btnAlertGo" /></a>' +
		'</div>' +
		'</div>' +
		'<div id="alertWrap"></div>');
	
	$('#alertWrap').fadeIn( 400, "easeInQuad", appearCation );

};


//set Alert mouse event after appeared
function appearCation()
{	
	$('#alertWin').delay( 600 ).fadeIn( 400, "easeOutQuad", null );
	$('.btnAlertBack').hover(function()
	{
		$(this).attr("src","../img/detail/btnAlertBack_ov.png");
	}, 
	function() 
	{
		$(this).attr("src","../img/detail/btnAlertBack.png");
	});
	
	$('.btnAlertGo').hover(function()
	{
		$(this).attr("src","../img/detail/btnAlertGo_ov.png");
	}, 
	function() 
	{
		$(this).attr("src","../img/detail/btnAlertGo.png");
	});
	
	//go clicked
	$('.btnAlertGo').click(function()
	{
		//set date
		var expires = new Date;
		expires.setTime( expires.getTime() + 60 * 1000 * 5 ); //after 5min
		
		//set flg
		document.cookie = window.location + "=1=" + expires.getTime();		

		removeAlertWindow();
	});
};





$(function(){	
	if(!isSmartPhone() && !isWii() && !isDSi() && !is3DS()) {
		$('#leftContent #contents .ov').css({ opacity : 0 });
		$('#leftContent #contents .wrap a').hover(function() {$(this).children(".ov").stop(true, false).animate({ opacity: 1 }, { duration: 250 })}, function() { $(this).children(".ov").stop(true, false).animate({ opacity: 0 }, { duration: 800 })});
		$('#mainArea .selectImg').hover(function() {$(this).children(".ov").stop(true, false).animate({ opacity: 1 }, { duration: 250 })}, function() { $(this).children(".ov").stop(true, false).animate({ opacity: 0 }, { duration: 800 })});
	}
	
	if(!isWii() && !isDSi() && !is3DS()) {
		
		$('#leftContent #contents .wrap #mainArea #cuArrow').css({ display : "block" });
		$('#leftContent #contents .wrap #mainArea #cuBox').css({ display : "block" });
		$('#leftContent #contents .wrap #mainArea ul').css({ display : "block" });
	}
	
	
	//Over Image Set
	$(".wiiu #mainArea .selectImg").append('<img src="../img/detail/main_ov_wiiu.png" width="70" height="49" alt="" class="ov" />');
	$(".n3ds #mainArea .selectImg").append('<img src="../img/detail/main_ov_3ds.png" width="70" height="49" alt="" class="ov" />');
	
	$(".wiiu .btnWide a").append('<img src="../img/btnWide_ov.png" width="740" height="100" alt="" class="ov" />');
	$(".n3ds .btnWide a").append('<img src="../img/btnWide_3ds_ov.png" width="740" height="100" alt="" class="ov" />');
	
	$(".wiiu .movThumb a").append('<img src="../img/detail/movIcon_wiiu.png" width="197" height="111" alt="" class="movIcon" /><img src="../img/detail/mov_ov_wiiu.png" width="197" height="111" alt="" class="ov" />');
	$(".wiiu .ssList a").append('<img src="../img/detail/ss_ov_wiiu.png" width="93" height="52" alt="" class="ov" />');
	
	$(".n3ds .movThumb a").append('<img src="../img/detail/movIcon_3ds.png" width="212" height="119" alt="" class="movIcon" /><img src="../img/detail/mov_ov_3ds.png" width="212" height="119" alt="" class="ov" />');
	$(".n3ds .ssList a").append('<img src="../img/detail/ss_ov_3ds.png" width="93" height="56" alt="" class="ov" />');
	
	$("#contents .ov").css({ opacity : 0 });
	
	//remove over image for under IE7
	if( jQuery.browser.msie && parseInt(jQuery.browser.version) <= 7 )
	{
		$('#leftContent #contents .wrap #mainArea #cuArrow').remove();
		$("#cuBox").remove();
	}
	
	
	//ScreenShot
	var imgList = new Array();
	
	ssLength = $("#leftContent #contents .wrap .ssList li").size();
	
	if($("body").attr("class").indexOf("wiiu") >= 0){ 
		for (var i = 0; i < ssLength; i++ )  {
			imgList.push("ss/img" + i + ".jpg");
		}
		setSliderArray( imgList, 800, 450 );
	} else if($("body").attr("class").indexOf("ssSingle") >= 0){
		for (var i = 0; i < ssLength; i++ )  {
			imgList.push("ss/img" + i + ".png");
		}
		setSliderArray( imgList, 400, 400 );
	} else {
		for (var i = 0; i < ssLength; i++ )  {
			imgList.push("ss/img" + i + ".jpg");
		}
		setSliderArray( imgList, 400, 480 );
	}
	
	//MainAreaImage
	if(!isWii() && !isDSi() && !is3DS()) {
		for (var i = 1; i < $(".selectImg").size(); i++ )  {
			$("#mainVisual").append('<img src="img/img' + i + '.jpg" width="654" height="461" alt="" />');
		}
	}
	
	//MainAreaNavi
	$("#mainArea .selectImg").css( { cursor: "pointer" } );	
	$("#mainArea .selectImg:first").css( { cursor: "default" } );	
	$("#mainArea .selectImg").click(function()
	{
		$("#mainArea .selectImg").css( { cursor: "pointer" } );
		
		$(this).css( { cursor: "default" } );
		cuPos = $(this).offset().top - $("#mainArea").offset().top;
		selectNum = $(this).index(".selectImg");
		mainSlider(selectNum, cuPos);
	});
	
});

function mainSlider(num , cuPos){
	posY = 0- 461 * num;
	if(jQuery.browser.msie && parseInt(jQuery.browser.version) == 7) {
		$("#mainVisual").html('<img src="img/img' + num + '.jpg" width="654" height="461" alt="" />');
	} else if(!isWii() && !isDSi() && !is3DS()) {
		$("#mainVisual").animate( { top: posY + "px" }, 500, "easeOutQuad" ); 
	}else {
		$("#mainVisual").html('<img src="img/img' + num + '.jpg" width="654" height="461" alt="" />');
	}
	
	if( jQuery.browser.msie && parseInt(jQuery.browser.version) <= 7 ) return;
	$("#cuArrow").animate( { top: cuPos + "px" }, 500, "easeOutQuad" );
	$("#cuBox").css( { top: cuPos + "px" } );
}