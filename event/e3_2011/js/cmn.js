function isWin () { return (navigator.appVersion.indexOf ("Win") != -1); }
function isIE () { return (navigator.appName.indexOf ("Explorer") != -1); }
function isWinIE () { return (isWin () && isIE ()); }
function isWiiU() { return (navigator.userAgent.indexOf("WiiU") != -1); }
function isWii() { if ( !isWiiU() && (navigator.userAgent.indexOf("Wii") != -1)) {
	return true;
	} else return false;
}
function isDSi () { return (navigator.userAgent.indexOf("Nintendo DSi") != -1); }
function is3DS () { return (navigator.userAgent.indexOf("Nintendo 3DS") != -1); }
function isOpera () { return (navigator.userAgent.indexOf("Opera") != -1); }

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

function isSmartPhone(){
	var devices = ['iPhone','iPad','iPod','Android','WiiU'];
	var pattern = new RegExp(devices.join('|'), 'i');
	return pattern.test(navigator.userAgent);
}

// jQuery_Auto 0.9
// Automatic functions for webpages (using the wonderful jQuery library)

// Copyright: (c) 2006, Michal Tatarynowicz (tatarynowicz@gmail.com)
// Licenced as Public Domain (http://creativecommons.org/licenses/publicdomain/)
// $Id: jquery_auto.js 426 2006-05-06 19:54:39Z Micha? $


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
		this.src = this.src.replace(/^(.+)(\.[a-z]+)$/, "$1_ov$2");
	},

	exit: function() {
		this.src = this.src.replace(/^(.+)_ov(\.[a-z]+)$/, "$1$2");
	}
};


// Auto-submitting SELECTs

$.auto.submit = {
	init: function() {
		$('SELECT.Submit').bind('change', this.on_change);
	},

	on_change: function() {
		if (this.value) this.form.submit();
	}
};


// Auto-selected text in text fields after a label click

$.auto.select = {
	init: function() {
		$('LABEL.Select').each(this.label_action);
		$('INPUT.Select').bind('click', function(){ this.select(); });
	},

	label_action: function() {
		var field = $('#'+this.htmlFor).get(0);
		if (field && field.focus && field.select) {
			$(this).bind('click', function(){ field.focus(); field.select(); });
		}
	}
};


// Switches tabs on click

$.auto.tabs = {

	init: function() {

		$('.Tabs').each(function(){
			var f = $.auto.tabs.click;
			var group = this;
			$('.Tab', group).each(function(){
				this.group = group;
				$(this).click(f);
				$('#'+this.id+'_body').hide();
			}).filter(':first').trigger('click');
		});

	},

	click: function() {
		var tab = $('#'+this.id+'_body').get(0);
		$('.Tab', this.group).each(function(){
			$(this).removeClass('Active');
			$('#'+this.id+'_body').hide();
		});

		$(this).addClass('Active');
		$(tab).show();
		this.blur();

		return false;
	}

};

//Position Fixed
(function($j){
    $j.positionFixed = function(el){
        $j(el).each(function(){
            new fixed(this)
        })
        return el;                  
    }
    $j.fn.positionFixed = function(){
        return $j.positionFixed(this)
    }
    var fixed = $j.positionFixed.impl = function(el){
        var o=this;
        o.sts={
            target : $j(el).css('position','fixed'),
            container : $j(window)
        }
        o.sts.currentCss = {
            top : o.sts.target.css('top'),              
            right : o.sts.target.css('right'),              
            bottom : o.sts.target.css('bottom'),                
            left : o.sts.target.css('left')             
        }
        if(!o.ie6)return;
        o.bindEvent();
    }
    $j.extend(fixed.prototype,{
        ie6 : $.browser.msie && $.browser.version < 7.0,
        bindEvent : function(){
            var o=this;
            o.sts.target.css('position','absolute')
            o.overRelative().initBasePos();
            o.sts.target.css(o.sts.basePos)
            o.sts.container.scroll(o.scrollEvent()).resize(o.resizeEvent());
            o.setPos();
        },
        overRelative : function(){
            var o=this;
            var relative = o.sts.target.parents().filter(function(){
                if($j(this).css('position')=='relative')return this;
            })
            if(relative.size()>0)relative.after(o.sts.target)
            return o;
        },
        initBasePos : function(){
            var o=this;
            o.sts.basePos = {
                top: o.sts.target.offset().top - (o.sts.currentCss.top=='auto'?o.sts.container.scrollTop():0),
                left: o.sts.target.offset().left - (o.sts.currentCss.left=='auto'?o.sts.container.scrollLeft():0)
            }
            return o;
        },
        setPos : function(){
            var o=this;
            o.sts.target.css({
                top: o.sts.container.scrollTop() + o.sts.basePos.top,
                left: o.sts.container.scrollLeft() + o.sts.basePos.left
            })
        },
        scrollEvent : function(){
            var o=this;
            return function(){
                o.setPos();
            }
        },
        resizeEvent : function(){
            var o=this;
            return function(){
                setTimeout(function(){
                    o.sts.target.css(o.sts.currentCss)      
                    o.initBasePos();
                    o.setPos()
                },1)    
            }           
        }
    })
})(jQuery);



//Animate
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

jQuery(function($j){
	if (isWii() || isDSi() || is3DS()){
	} else if ($.browser.msie && $.browser.version > 6){
		$j('#ftrWrap').positionFixed();
	} else if ($.browser.msie && $.browser.version < 7) {
	} else if (isSmartPhone()) {
		$(".ftrBG").hide();
	} else {
		$j('#ftrWrap').positionFixed();
	}

})

$(function() { 
	
	if(isDSi()){
	} else if(is3DS()){
	} else if(!isWii()){ 	
		$(".ftrBG").show();
	}
	
	$("#ftrWrap .menu .menuTop").hover(function(){ $(this).animate( { backgroundPosition:"(0 -25px)" }, {duration: 200} ); }, function() { $(this).animate( { backgroundPosition:"(0 -30px)" }, {duration: 500}); } );	
	$("#ftrWrap .menu .menu01").hover(function(){ $(this).animate( { backgroundPosition:"(0 -25px)" }, {duration: 200} ); }, function() { $(this).animate( { backgroundPosition:"(0 -30px)" }, {duration: 500}); } );	
	$("#ftrWrap .menu .menu02").hover(function(){ $(this).animate( { backgroundPosition:"(0 -25px)" }, {duration: 200} ); }, function() { $(this).animate( { backgroundPosition:"(0 -30px)" }, {duration: 500}); } );	
	$("#ftrWrap .menu .menu03").hover(function(){ $(this).animate( { backgroundPosition:"(0 -25px)" }, {duration: 200} ); }, function() { $(this).animate( { backgroundPosition:"(0 -30px)" }, {duration: 500}); } );	
	$("#ftrWrap .menu .menu04").hover(function(){ $(this).animate( { backgroundPosition:"(0 -25px)" }, {duration: 200} ); }, function() { $(this).animate( { backgroundPosition:"(0 -30px)" }, {duration: 500}); } );	
	$("#ftrWrap .menu .menu05").hover(function(){ $(this).animate( { backgroundPosition:"(0 -25px)" }, {duration: 200} ); }, function() { $(this).animate( { backgroundPosition:"(0 -30px)" }, {duration: 500}); } );	
	
	
	$("#ftrPageTop a").click(function(){
    	$('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'normal','swing');
     	return false;
    });
		
	$(window).scroll(function(){
    	if ($(window).scrollTop() > 0){
        	$("#ftrWrap #ftrPageTop").fadeIn("slow");
    	} else {
        	$("#ftrWrap #ftrPageTop").fadeOut("slow");
		}
	});
	
	if(isSmartPhone()) {		
	$("#noScript").hide();
	} else if(isWii() && !isDSi()) {
	$("#noScript").hide();
	} else if (getFlashPlayerVersion() >= 10) {
	$("#noScript").hide();
	}

});

function setGallery(){		
	if(isSmartPhone()) {
		document.getElementById('mainSWF').innerHTML = 
		'';
	} else if(isWii() && !isDSi()) {
		document.getElementById('mainSWF').innerHTML = 
		'';
	} else if (getFlashPlayerVersion() >= 10) {
		document.getElementById('mainSWF').innerHTML = 
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="100%" height="648">' +
		'<param name="movie" value="img/mainGallery.swf">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +
		'<param name="wmode" value="transparent">' +
		'<param name="allowScriptAccess" value="always">' +
		'<embed src="img/mainGallery.swf" menu="false" quality="high" bgcolor="#ffffff" width="100%" height="648" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent"><\/embed><\/object>';
	}
}

function setTrailer(hard,fid){	
	if(isSmartPhone()) {
		document.getElementById('mainSWF').innerHTML = 
		'<a href="' + fid + '.mp4"><img src="../../img/playVideo.png" width="725" height="408" alt="" style=" position: absolute;" /></a><img src="img/main.jpg" width="725" height="408" alt="" />';
	} else if(isWii() && !isDSi()) {
		document.getElementById('mainSWF').innerHTML = 
		'<embed src="../img/moviePlayer_forWii.swf?flvName=' + fid +'.flv" menu="false" quality="high" bgcolor="#ffffff" width="725" height="444" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent" allowfullscreen="true"><\/embed><\/object>';
	} else if (getFlashPlayerVersion() >= 10) {
		document.getElementById('mainSWF').innerHTML = 
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="725" height="444">' +
		'<param name="movie" value="../img/moviePlayer'+ hard +'.swf">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +		
		'<param name="FlashVars" value="server=0&amp;fid='+ fid +'" />' +
		'<param name="wmode" value="transparent">' +
		'<param name="allowFullScreen" value="true" />' + 
		'<param name="allowScriptAccess" value="always">' +
		'<embed src="../img/moviePlayer'+ hard +'.swf" menu="false" quality="high" bgcolor="#ffffff" width="725" height="444" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent" flashVars="server=0&amp;fid='+ fid +'" allowfullscreen="true"><\/embed><\/object>';
	}
}

function setConcept(fid){	
	if(isWii() && !isDSi() && !isWiiU()) {
		document.getElementById('mov').innerHTML = 
		'<embed src="../../img/moviePlayerAuto_forWii.swf?flvName=../../02/movFiles/' + fid +'.flv"" menu="false" quality="high" bgcolor="#ffffff" width="725" height="444" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent" allowfullscreen="true"><\/embed><\/object>';
	} else if (getFlashPlayerVersion() >= 10) {
		document.getElementById('mov').innerHTML = 
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="725" height="444">' +
		'<param name="movie" value="../../img/moviePlayerAuto.swf">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +		
		'<param name="FlashVars" value="server=0&amp;fid=../../02/movFiles/'+ fid +'" />' +
		'<param name="wmode" value="transparent">' +
		'<param name="allowFullScreen" value="true" />' + 
		'<param name="allowScriptAccess" value="always">' +
		'<embed src="../../img/moviePlayerAuto.swf" menu="false" quality="high" bgcolor="#ffffff" width="725" height="444" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent" flashVars="server=0&amp;fid=../../02/movFiles/'+ fid +'" allowfullscreen="true"><\/embed><\/object>';
	}
}

function movieP02(fid){	
	if(isWii() && !isDSi() && !isWiiU()) {
		document.getElementById('mov').innerHTML = 
		'<embed src="img/moviePlayerAuto_forWii.swf?flvName=../movFiles/' + fid +'.flv" menu="false" quality="high" bgcolor="#ffffff" width="725" height="444" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent" allowfullscreen="true"><\/embed><\/object>';
	} else if (getFlashPlayerVersion() >= 10) {
		document.getElementById('mov').innerHTML = 
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="725" height="444">' +
		'<param name="movie" value="img/moviePlayerAuto.swf">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +		
		'<param name="FlashVars" value="server=0&amp;fid=../movFiles/'+ fid +'" />' +
		'<param name="wmode" value="transparent">' +
		'<param name="allowFullScreen" value="true" />' + 
		'<param name="allowScriptAccess" value="always">' +
		'<embed src="img/moviePlayerAuto.swf" menu="false" quality="high" bgcolor="#ffffff" width="725" height="444" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent" flashVars="server=0&amp;fid=../movFiles/'+ fid +'" allowfullscreen="true"><\/embed><\/object>';
	}
}

function zelda(fid){	
	if(isSmartPhone()) {
		document.getElementById('mainSWF').innerHTML = 
		'<a href="movFiles/' + fid + '.mp4"><img src="img/smartPhone.png" width="675" height="381" alt="" style=" position: absolute; top: 1px;" /></a>';
	} else if(isWii() && !isDSi()) {
		document.getElementById('mainSWF').innerHTML = 
		'<embed src="img/mainMovie_forWii.swf?flvName=../movFiles/' + fid +'.flv" menu="false" quality="high" bgcolor="#ffffff" width="676" height="418" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent" allowfullscreen="true"><\/embed><\/object>';
	} else if (getFlashPlayerVersion() >= 10) {
		document.getElementById('mainSWF').innerHTML = 
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="676" height="418">' +
		'<param name="movie" value="img/mainMovie.swf">' +
		'<param name="menu" value="false">' +
		'<param name="quality" value="high">' +
		'<param name="bgcolor" value="#ffffff">' +
		'<param name="FlashVars" value="server=0&amp;fid=../movFiles/'+ fid +'" />' +
		'<param name="wmode" value="transparent">' +
		'<param name="allowFullScreen" value="true" />' + 
		'<param name="allowScriptAccess" value="always">' +
		'<embed src="img/mainMovie.swf" menu="false" quality="high" bgcolor="#ffffff" width="676" height="418" swLiveConnect="true" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" wmode="transparent" flashVars="server=0&amp;fid=../movFiles/'+ fid +'" allowfullscreen="true"><\/embed><\/object>';
	}
}

function closeWin(){
	if(isWii() || isDSi()){
		window.history.back();
	}
}
