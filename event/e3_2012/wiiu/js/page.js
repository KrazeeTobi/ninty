/*-----------------------------
// init
------------------------------*/
$(function()
{
	//IE6 let return
	if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 6  ) return;
	
	contentSizeInit();
	movieBtnEmbed();
	
	
	if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 7) {
		$("#hardTitleRight img").css({ display : "none" });
		$("#hardTitleRight").css({ height: "350px" });
	}
	
	
	if(!isSmartPhone() && !isWii() && !isDSi() && !is3DS()) {
		$(".btn3ov").css({ opacity : 0 });
		$('.btn3ov').hover(function() {  $(this).stop(true, false).animate({ opacity: 1 }, { duration: 250 }) }, function() { $(this).stop(true, false).animate({ opacity: 0 }, { duration: 800 })});
	}
	
	
});

/*-----------------------------
// content size settings
------------------------------*/
function contentSizeInit()
{
	if( !isWii() && !isSmartPhone() )
	{
		//init
		$(".spec dd:last-child").css( { "margin-bottom":50 } );
		
		//set
		resizeContentEvent();
		$(window).bind( "load resize", resizeContentEvent );
		
		//fadein
		$(window).bind( "load", fadeInit );
		
		//zoom
		$(window).bind( "load", zoomInit );
	} 
	else 
	{
	}
}

//resize Event
//-------------
function resizeContentEvent()
{
	$ww = $(window).width();
	$wh = $(window).height();
		
	//-------
	// width
	//-------
	if( $ww >= 1100 )
	{
		//main
		$("#mainArea").css( "padding-left", 70 );
		
		if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 6  ) 
		{
		$("#movieRight").css( {margin:"-350px 0 0 350px"} );
		} else if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 7  ) 
		{
		$("#movieRight").css( {margin:"-350px 0 0 350px"} );
		} else {
		$("#movieLeft").css( "width","35%" );
		}
		$("#color").css( { "width":880 } );
		$("#accessories #items").css( { "width":880 } );
		
		//accessories
		$("#accessories #items ul li").css( { "margin-right":111 } );
		$("#accessories #items ul li").eq(3).css( { "margin-right":0 } );
		
		//spec
		$("#hardTitleWrap").css( "margin-top", "-100px" );
		$("#hardTitleLeft p").css( { width : 880, marginTop : "16%"} );
		$("#hard").css( { width: 880, marginTop : "-90px" } );
	}
	else if( $ww < 1100 && $ww > 960 )
	{
		//main
		var mar = ($ww - 960) / 140;
		$("#mainArea").css( "padding-left", ( mar * 26 ) + 44 );
		if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 6  ) 
		{
		$("#movieRight").css( {margin:"-310px 0 0 300px"} );
		} else if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 7  ) 
		{
		$("#movieRight").css( {margin:"-310px 0 0 300px"} );
		} else {
		$("#movieLeft").css( "width","36%" );	
		}
		$("#color").css( { "width": $ww - 220 } );
		$("#accessories #items").css( { "width": $ww - 220 } );
		
		//accessories
		mar = ( $ww - 960 ) / 3;
		mar = mar + 65;
		$("#accessories #items ul li").css( { "margin-right":mar } );
		$("#accessories #items ul li").eq(3).css( { "margin-right":0 } );
		
		//spec
		$("#hardTitleWrap").css( "margin-top", "-95px" );
		$("#hardTitleLeft p").css( { width : 740 + ($ww - 960), marginTop : "18%" } );
		$("#hard").css( { width: 740 + ($ww - 960), marginTop : "-60px" } );
	}
	else if( $ww <= 960 )
	{
		//main
		$("#mainArea").css( "padding-left", 44 );
		
		$("#movieLeft").css( "width","38%" );	
		$("#color").css( { "width":740 } );
		$("#accessories #items").css( { "width":740 } );
		
		//accessories
		$("#accessories #items ul li").css( { "margin-right":65 } );
		$("#accessories #items ul li").eq(3).css( { "margin-right":0 } );
		
		//spec
		$("#hardTitleWrap").css( "margin-top", "-65px" );
		$("#hardTitleLeft p").css( { width : 740} );
		$("#hard").css( { width: 740, marginTop : "-40px" } );
	}
}


/*-----------------------------
// fade
------------------------------*/
function fadeInit()
{
	//init
	//----------------
	var cTag ='<div class="wCover"></div>';
	$(".Alpha a").prepend( cTag );
	var $wc = $(".Alpha").each(function() 
	{
		$( this ).css( { "position":"realative" } );
    	var $wc = $( this ).find( ".wCover" );
		$wc.css( { "width":100, "height":100, "position":"absolute", "left":0, "background-color":"#fff" } );
		$wc.fadeTo( 0, 0 );
	});

	
	//mouse over
	//----------------
	$(".Alpha a").hover(function()
	{
		//html
		//---------------
		//alert( $( this ).find( ".wCover" ) );
		var $d = $( this ).find( ".wCover" );
		var $i = $( this ).find( "img" );
		
		$d.css( { "width":$i.width(), "height":$i.height(), "left":$i.position().left  } );
		$d.stop( false, false );
		$d.fadeTo( 0, 0.4 );
	}, 
	function() 
	{	
		//html
		//---------------
		dad = $( this ).find( ".wCover" );
		dad.stop( false, false );
		dad.fadeTo( 0, 0 );
	});	
}


/*-----------------------------
// zoom init
------------------------------*/
function zoomInit()
{
	if(!isSmartPhone())
	{
		//creat zoom div
		var $zoomTag = '<div id="zoomIcon"></div>';
		$($zoomTag).prependTo('body');
		$("#zoomIcon").fadeTo( 0, 0 );
	
		//zoom
		$(".Zoom").hover(function()
		{
		
			$("#zoomIcon").stop( false, false );
			$("#zoomIcon").fadeTo( 200, 1 );
		
			//get mouse posx from html
			$(this).mousemove(function( e )
			{
				var dx = e.clientX;
				var dy = e.clientY;
	
				$("#zoomIcon").css( { top:dy - 30 } );
				$("#zoomIcon").css( { left:dx + 10 } ); 
			});
		}, 
		function() 
		{
			$("#zoomIcon").stop( false, false );
			$("#zoomIcon").fadeTo( 200, 0 );
		});	
	}
}



/*-----------------------------
// movie btn
------------------------------*/
function movieBtnEmbed(){
	 if(isSmartPhone() || isWii() || is3DS()) {
		document.getElementById('btn1').innerHTML = 
		'<a href="../cmn/movie.html#interview_wiiu?" target="_blank"><img src="img/btnMov01.jpg" width="418" height="85" alt="" /></a>';		
		
		document.getElementById('btn2').innerHTML = 
		'<a href="../cmn/movie.html#wiiu_gamepad?TB_iframe=true&amp;width=912&amp;height=512" class="thickbox"><img src="img/btnMov02.jpg" width="418" height="85" alt="" /></a>';
	} else if (getFlashPlayerVersion() >= 9) {
		document.getElementById('btn1').innerHTML = 
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="418" height="85" id="aexternal">' +
		'<param name="movie" value="img/btnInterview.swf">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +
		'<param name="wmode" value="transparent">' +
		'<param name="allowScriptAccess" value="always">' +
		'<embed src="img/btnInterview.swf" menu="false" quality="high" bgcolor="#ffffff" width="418" height="85" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent"><\/embed><\/object>';		
		
		document.getElementById('btn2').innerHTML = 
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="418" height="85" id="aexternal">' +
		'<param name="movie" value="img/btnGamePad.swf">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +
		'<param name="wmode" value="transparent">' +
		'<param name="allowScriptAccess" value="always">' +
		'<embed src="img/btnGamePad.swf" menu="false" quality="high" bgcolor="#ffffff" width="418" height="85" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent"><\/embed><\/object>';
	}
}