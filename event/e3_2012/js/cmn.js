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
function isChrome() { return (navigator.userAgent.indexOf("Chrome") != -1); }

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

/*-----------------------------
// variables
------------------------------*/
var $wh; //window height
var $ww; //window width
var $isSmall = false; //for top

/*-----------------------------
// init
------------------------------*/
$(document).ready(function()
{	
	//IE6 let return
	if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 6  ) 
	{
		//menu cursol
		$( ".current" ).remove( );
		return;
	}
	
	firstSetting();
	mainMenuInit();	
	scrollInit();
	sizeInit();
	
	if(isWii() || isWiiU() || is3DS()) {
		$("#footer").css( { display : "none"} );
	}
});


/*-----------------------------
// firstSetting
------------------------------*/
function firstSetting()
{
	//add top line
	$("body").append("<div id='topLine'></div>");
	$("div#topLine").css({ "position":"fixed","width":"100%", "height":7,"z-index":2, "top":0, "left":0, "background-color":"#ededed" } );
}


/*-----------------------------
// content size settings
------------------------------*/
function sizeInit()
{
	if( !isSmartPhone() && !isWii() && !isiPad() )
	{
		resizeEvent();
		$(window).bind( "load resize", resizeEvent );
	} 
	else 
	{
	}
}

//resize Event
//-------------
function resizeEvent()
{
	
	$ww = $(window).width();
	$wh = $(window).height();
	
	//-------
	// width
	//-------
	if( !$isSmall )
	{
		if( $ww > 1280 )
		{
			$("#container").css( { width:1266 } );
			$("#leftContent").css( { width:1079 } );
			$("#header").css( { width:1079 } );
			$("#footerInside").css( { width:1266, "left":"50%" } );
			$("#pageTopWrap").css( { width:1079 } );
			
			//rightcontent
			$("#rightContent #menuContainer").css({ "right":"inherit" });
			
		}
		else if( $ww > 960 && $ww <= 1366 )
		{
			$("#container").css( { width:$ww - 14 } );
			$("#leftContent").css( { width:$ww - 201 } );
			$("#header").css( { width:$ww - 201 } );
			$("#footerInside").css( { width:$ww - 14, "left":0 } );
			$("#pageTopWrap").css( { width:$ww - 201 } );
			
			//rightcontent
			$("#rightContent #menuContainer").css({ "right":7 });
			
		}
		else if( $ww <= 960 )
		{
			$("#container").css( { width:946 } );
			$("#leftContent").css( { width:757 } );
			$("#header").css( { width:757 } );
			$("#footerInside").css( { width:946, "left":0 } );
			$("#pageTopWrap").css( { width:760 } );
			
			//rightcontent
			$("#rightContent #menuContainer").css({ "right":"inherit" });
		}
	}

		
	//-------
	// height
	//-------
	if( $wh > 590 )
	{
		$("#footer").css( { "top":"auto" } );
	}
	else if( $wh <= 590 )
	{
		$("#footer").css( { "top":560 } );
	}
	
}


/*-----------------------------
// main menu settings
------------------------------*/
function mainMenuInit()
{
	//header
	//----------------
	$("#header .btnTop").hover(function()
	{
		$(this).stop( false, false );
		$(this).animate( { backgroundPosition:"(0 -2px)" }, 100, "easeOutQuad" ); 
	}, 
	function() 
	{
		$(this).stop( false, false );
		$(this).animate( { backgroundPosition:"(0 -5px)" }, 250, "easeOutQuad" ); 
	});
	
	//mouse over
	//----------------
	$("#menu li.ov").hover(function()
	{
		$(this).stop( false, false );
		$(this).animate( { backgroundPosition:"(0 0)" }, 300, "easeOutQuad" ); 
	}, 
	function() 
	{
		$(this).stop( false, false );
		$(this).animate( { backgroundPosition:"(-180px 0)" }, 500, "easeOutQuad" ); 
	});	
	
	//footer
	//----------------
	$("#footerInside #pageTopWrap .btnPageTop").click(function()
	{
    	$('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'normal','swing');
     	return false;
    });
		
	$("#footerInside #pageTopWrap .btnPageTop").hover(function()
	{
		$(this).stop( false, false );
		$(this).animate( { backgroundPosition:"(0 -5px)" }, 100, "easeOutQuad" ); 
	}, 
	function() 
	{
		$(this).stop( false, false );
		$(this).animate( { backgroundPosition:"(0 0)" }, 250, "easeOutQuad" ); 
	});	
	
	//for pages
	//----------------
	
	//if .current is null, let return.
	if( $(".current").offset() == null ) return;
	
	//side menu
	$(window).bind( "load", function(){ $(".current").css( { top:$( "#menu li.cu" ).position().top + 2 } ); });
	
	$("#menu li").hover(function()
	{
		$(".current").stop( false, false );
		$(".current").animate( { top:$( this ).position().top + 2 }, 300, "easeOutQuad" ); 
	}, 
	function() 
	{
		$(".current").stop( false, false );
		$(".current").animate( { top: $( "#menu li.cu" ).position().top + 2 }, 500, "easeOutQuad" ); 
	});		
}



/*-----------------------------
// scroll settings
------------------------------*/
function scrollInit()
{
	if( !isSmartPhone() && !isWii() && !isiPad() )
	{	
		$containerY = $("#leftContent #header").offset().top;
		$containerX = $("#leftContent #header").offset().left;
		
		//setScroll
		setScroll();
	}
}

//resize Event
//-------------
function setScroll()
{
	$(window).scroll( function()
	{
		//object Y position
		var objY = $(window).scrollTop();
		var objX = $(window).scrollLeft();
		
		//X
		if( $(window).scrollLeft() > 0 )
		{	
			$("#rightContent #menuContainer").css({ "position":"static" });
			$("#header").css({ "position":"static" });
			$("#footer").css( { "position":"static" } );
			$isSmall = true;
			return;
		}
		else
		{
			$("#rightContent #menuContainer").css({ "position":"fixed" });
			$("#header").css({ "position":"fixed" });
			$("#footer").css({ "position":"fixed" });
			$isSmall = false;
		}

		
		//Y
		if( objY > 0 )
		{
			$("#footerInside #pageTopWrap .btnPageTop").fadeIn();
			$("#header").css({ "position":"fixed", "top":0 });
			$("#footer").css( { "position":"fixed", "bottom":0 } );
		}
		else
		{
			$("#footerInside #pageTopWrap .btnPageTop").fadeOut();
			$("#header").css({ "position":"absolute", "top":0 });
			$("#footer").css( { "position":"absolute", "bottom":0 } );
		}
	
		
		
	}).scroll();
};


//library------------------------------------------------


// jQuery_Auto 0.9
// Automatic functions for webpages (using the wonderful jQuery library)
// Copyright: (c) 2006, Michal Tatarynowicz (tatarynowicz@gmail.com)
// Licenced as Public Domain (http://creativecommons.org/licenses/publicdomain/)
// $Id: jquery_auto.js 426 2006-05-06 19:54:39Z Michal $


// Initialization
$.auto = {
	init: function() {
		for (module in $.auto) {
			if ($.auto[module].init)
				$.auto[module].init();
		}
	}
};
$(document).ready($.auto.init);

// Auto-hidden elements
$.auto.hide = {
	init: function() {
		$('.Hide').hide();
	}
};

// Mouse hover
$.auto.hover = {
	init: function() {	
	$('IMG.hover').not('[src*="_ov."]')
			.bind('mouseover', this.enter)
			.bind('mouseout', this.exit)
			.each(this.preload);
	},
	preload: function() {
		this.preloaded = new Image;
		this.preloaded.src = this.src.replace(/^(.+)(\.[a-z]+)$/, "$1_ov$2");
	},
	enter: function() {		
		//customize Nintendo Direct
		autoPlayMode = true;		
		this.src = this.src.replace(/^(.+)(\.[a-z]+)$/, "$1_ov$2");
	},
	exit: function() {
		this.src = this.src.replace(/^(.+)_ov(\.[a-z]+)$/, "$1$2");
	}
};

/**
 * @author Alexander Farkas
 * v. 1.21
 */
(function($) {
	if(!document.defaultView || !document.defaultView.getComputedStyle){ // IE6-IE8
		var oldCurCSS = jQuery.curCSS;
		jQuery.curCSS = function(elem, name, force){
			if(name === 'background-position'){
				name = 'backgroundPosition';
			}
			if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]){
				return oldCurCSS.apply(this, arguments);
			}
			var style = elem.style;
			if ( !force && style && style[ name ] ){
				return style[ name ];
			}
			return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force);
		};
	}
	
	var oldAnim = $.fn.animate;
	$.fn.animate = function(prop){
		if('background-position' in prop){
			prop.backgroundPosition = prop['background-position'];
			delete prop['background-position'];
		}
		if('backgroundPosition' in prop){
			prop.backgroundPosition = '('+ prop.backgroundPosition;
		}
		return oldAnim.apply(this, arguments);
	};
	
	function toArray(strg){
		strg = strg.replace(/left|top/g,'0px');
		strg = strg.replace(/right|bottom/g,'100%');
		strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
		var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
		return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
	}
	
	$.fx.step. backgroundPosition = function(fx) {
		if (!fx.bgPosReady) {
			var start = $.curCSS(fx.elem,'backgroundPosition');
			
			if(!start){//FF2 no inline-style fallback
				start = '0px 0px';
			}
			
			start = toArray(start);
			
			fx.start = [start[0],start[2]];
			
			var end = toArray(fx.options.curAnim.backgroundPosition);
			fx.end = [end[0],end[2]];
			
			fx.unit = [end[1],end[3]];
			fx.bgPosReady = true;
		}
		//return;
		var nowPosX = [];
		nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
		nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];           
		fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

	};
})(jQuery);