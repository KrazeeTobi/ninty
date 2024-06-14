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

/*-----------------------------
// variables
------------------------------*/
var $wh; //window height
var $ww; //window width


/*-----------------------------
// init
------------------------------*/
$(function()
{	
	sizeInit();
});

/*-----------------------------
// content size settings
------------------------------*/
function sizeInit()
{
	if( !isSmartPhone() && !isWii() )
	{
		resizeEvent();
		$(window).bind( "load resize", resizeEvent );
		
	} 
	else
	{
		tilt();
		window.onorientationchange = tilt;
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
	if( $ww < 961 )
	{
		$("body").css( { width: "960px" } );
		$("#ftrWrap").css({ width : "960px" } );
	} else
	{
		$("body").css( { width: "100%" } );
		$("#ftrWrap").css({ width : "100%" } );
	}

		
	//-------
	// height
	//-------
	if( $wh < 651 )
	{
		$("body").css( { height :"650px" } );
		$("#footer").css({ top :"620px"});
		if(jQuery.browser.msie && parseInt(jQuery.browser.version) == 6){
				$("#contentWrap").css({ top :"300px"});
		}			
	} else
	{
		$("body").css( { height :"100%" } );
		$("#footer").css({ top :"auto" , bottom :"0"});
		if(jQuery.browser.msie && parseInt(jQuery.browser.version) == 6){
				$("#contentWrap").css({ top :"50%"});
		}
	}
}

function tilt(){
	var orientation = window.orientation;
	if(orientation == 0){
		$("body").css( { height :"100%" } );
		$("#footer").css({ top :"auto" , bottom :"0"});
	}else{
		$("body").css( { height :"650px" } );
		$("#footer").css({ top :"620px"});
	}
}

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