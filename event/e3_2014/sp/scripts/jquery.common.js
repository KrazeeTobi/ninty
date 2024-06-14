/*-----------------------------
// Redirect
------------------------------*/

if(Shared.ua.isiPhone || Shared.ua.is3DS || Shared.ua.isAndroidMobile){
	;
}else{
	var uri = Shared.util.parseURI();
	var dir = uri['directory'];

	if(dir.indexOf('/sp/') != -1){
		location.href = dir.replace('/sp/', '/') + 'index.html';
	}
}

/*-----------------------------
// GNAV
------------------------------*/
$(function(){
	var container = $('#container');
	var containerWrap = container.find('#containercontents');
	var contents = $('#contents');
	var header    = $('#header');
	var btnMenu   = header.find('.btn_menu');
	var menu      = $('#slidemenu');
	var btnClose  = menu.find('.btn_close');
	var overlay   = $("<div id='menu_overlay'>").css({opacity:0});
	var useTransition = Shared.css.hasTransition && (Shared.ua.isiOS || Shared.ua.isChrome || Shared.ua.isFireFox || (Shared.ua.isAndroid && Shared.ua.verAndroid >= 4));

	var menuH = menu.outerHeight();
	menu.css({top:50});

	if(useTransition){
		menu.translate3d(0, -menuH, 0);
	}else{
		menu.css({marginTop:-menuH});
	}


	Shared.util.addResizeListener(function(w, h){
		wh = 20 + header.height() + menu.height();

		if(document.documentElement.clientHeight > wh){
			wh = document.documentElement.clientHeight;
		}
	});

	btnMenu.bind('click',function(){
		if(!btnMenu.hasClass('show')){
			openAction();
		}else{
			closeAction();
		}
	});

	btnClose.on('click',function(){
		closeAction();
	});

	function openAction(){
		btnMenu.addClass('show');
		containerWrap.addClass('show');

		container.css({overflow:'hidden', height:wh});
		container.append(overlay);

		if(useTransition){
			menu.stop().transit({transform:'translate3d(0,0,0)'}, 450, 'oX2', function(){
				menu.clearStyle().css({top:50});
			});
		}else{
			menu.stop().animate({marginTop:0}, 450, 'oX2');
		}
		overlay.stop().animate({opacity:1}, 400, 'iX2');
		contents.find("a[href]").bind('click', hrefDisabled);
		contents.find("iframe").css({'visibility':'hidden'});
	}

	function closeAction(){
		btnMenu.removeClass('show');

		window.scrollTo(0, 0);

		if(useTransition){
			menu.stop().transit({transform:'translate3d(0,-'+menuH+'px,0)'}, 350, 'iX2');
		}else{
			menu.stop().animate({marginTop:-menuH}, 350, 'iX2');
		}

		overlay.stop().animate({opacity:0}, 350, 'oX2', function(){
			overlay.remove();
			container.clearStyle();
			containerWrap.removeClass('show');
		});
		contents.find("a[href]").unbind('click', hrefDisabled);
		contents.find("iframe").css({'visibility':'visible'});
	}
	function hrefDisabled(e){
		e.preventDefault();
	}
});

/*-----------------------------
// SNS
------------------------------*/
$(function(){
	var sw = window.screen.width;
	var sh = window.screen.height;

	function openSubWin(url, w, h){
		window.open(url, null, 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width='+w+',height='+h+',left='+(sw/2-w/2)+',top='+(sh/2-h/2));
	}

	var twLink = $('#sns_nav .twitter a');
	var fbLink = $('#sns_nav .facebook a');

	var shareURL = 'http://www.nintendo.co.jp/event/e3_2014/';
	var tweetHash = 'NintendoE3JP';
	var tweetText = 'îCìVì∞ E3 2014 èÓïÒ -';

	var twURL = 'https://twitter.com/share?url='+encodeURIComponent(shareURL)+'&text='+encodeURIComponent(tweetText)+'&hashtags='+tweetHash;
	var fbURL = 'http://www.facebook.com/sharer.php?u='+shareURL;
	
	twLink.attr('href',twURL);
	fbLink.attr('href',fbURL);
	
});

/*-----------------------------
// SmoothScroll
------------------------------*/

$(function(){
     $('a[href^="#"]').click(function(event) {
       
       try {
         var $targetId = $($(this).attr("href"));
         // ëŒè€óvëfÇÃbodyÇÕwebkitóp
         $('html, body').animate({scrollTop:$targetId.offset().top}, 500);
       }
       catch(e) {
       }
       return false;
      });
     
});

/*-----------------------------
// DeviceCheck addClass
------------------------------*/
$(function(){
	setOperate();
});
function setOperate(){
	setView();
	if(Shared.ua.isiPhone) {
		$("body").addClass("iphone");
		window.onorientationchange = setView;
	}else if(Shared.ua.isAndroid){
		$("body").addClass("android");
		window.onresize = setView;
	}else if(Shared.ua.is3DS){
		$("body").addClass("view_3ds");
		window.onresize = setView;
	}else{
		$("body").addClass("other");
		window.onorientationchange = setView;
	}
}
function setView(){
	var orientation = window.orientation;
	if(orientation === 0){
		$("body").addClass("portrait");
		$("body").removeClass("landscape");
	}else{
		$("body").addClass("landscape");
		$("body").removeClass("portrait");
	}
}