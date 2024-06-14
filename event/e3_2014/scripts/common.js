(function(){

	var useTransition = Shared.css.hasTransition;


	/*****************************************************************************************************************
	 * Redirect
	 *****************************************************************************************************************/

	if(Shared.ua.isiPhone || Shared.ua.is3DS || Shared.ua.isAndroidMobile){
		
		var uri = Shared.util.parseURI();
		var dir = uri['directory'];

		// リダイレクト除外
		var not = (uri['file'] == 'screenshot.html');


		if(!not){
			var fragment = dir.split('/');
			var redirect = '';

			for(var i=0; i<fragment.length; i++){
				if(fragment[i].indexOf('e3_2014') != -1){
					fragment.splice(i+1, 0, 'sp');
					break;
				}
			}
			redirect = fragment.join('/') + 'index.html';

			location.href = redirect;
		}
	}



	/*****************************************************************************************************************
	 * Common
	 *****************************************************************************************************************/

	$(function(){
		$('.ov').ov();
	});
	
	/**
	 * header hover
	 */
	$(function(){
		if(Shared.ua.isiOS || Shared.ua.isAndroid){
			$('#globalheader .gnavbutton .body').transform('none');
			$('#globalheader .gnavbutton .hover').remove();
			return;
		}
		if(!Shared.css.hasTransition){
			$('#globalheader .gnavbutton').each(function(i){

				var btn       = $(this);
				var btnH      = btn.height();
				var btnBody   = btn.find('.body').transform('none').transition('all',0).css({height:btnH, marginTop:0});
				var btnHover  = btn.find('.hover').transform('none').transition('all',0).css({height:0, marginBottom:0, bottom:0, top:'auto'});
				var dummy     = $('<p></p>').css({top:0});

				btnBody.find('img').css({height:'100%'});
				btnHover.find('img').css({height:'100%'});

				function step(d){
					var r = d*Math.PI/180;
					var c = Math.cos(r);
					var s = Math.sin(r);
					var m = -btnH/2*(c+s-1); // = h*sqrt(2)*sin(r+pi/4)/2 - h/2

					btnBody.css({height:btnH*c, marginTop:m});
					btnHover.css({height:btnH*s, marginBottom:m});
				}

				btn.hover(function(){
					dummy.stop().animate({top:90}, {duration:200, easing:'oX2', step:step});
				}, function(){
					dummy.stop().animate({top:0}, {duration:200, easing:'oX2', step:step});
				});
			});
		}
	});

	/*****************************************************************************************************************
	 * SNS
	 *****************************************************************************************************************/

	$(function(){

		function openSubWin(url, name, w, h){
			var sw = window.screen.width;
			var sh = window.screen.height;
			window.open(url, name, 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width='+w+',height='+h+',left='+(sw/2-w/2)+',top='+(sh/2-h/2));
		}

		function setToolTip(btn, tip){
			tip.css({opacity:0, marginTop:5});

			btn.hover(function(){
				tip.stop().css({display:'block'}).animate({opacity:1, marginTop:0}, 200, 'oX2');
			}, function(){
				tip.stop().animate({opacity:0, marginTop:5}, 200, 'iX2', function(){
					tip.css({display:'none'});
				});
			});
		}
		var shareURL  = 'http://www.nintendo.co.jp/event/e3_2014/';
		var tweetText = '任天堂 E3 2014 情報 -';
		var tweetURL  = shareURL;
		var tweetHash = 'NintendoE3JP';

		// fetch og meta data
		if($('body').hasClass('ssi')){
			$('meta').each(function(){
				if($(this).attr('property') == 'og:url'){
					shareURL = tweetURL = $(this).attr('content');
				}
				if($(this).attr('property') == 'og:description'){
					tweetText = $(this).attr('content');
				}
			});
		}

		var twURL = 'https://twitter.com/share?url='+encodeURIComponent(tweetURL)+'&text='+encodeURIComponent(tweetText)+'&hashtags='+tweetHash
		var fbURL = 'http://www.facebook.com/sharer.php?u='+shareURL;

		$('.btntwitter a').attr('href', twURL).bind('click', function(e){
			e.preventDefault();
			openSubWin(this.href, 'twitter', 550, 342);
		});

		$('.btnfacebook a').attr('href', fbURL).bind('click', function(e){
			e.preventDefault();
			openSubWin(this.href, 'facebook', 600, 300);
		});
		
		$('.btntwitterpage a').bind('click', function(e){
			e.preventDefault();
			openSubWin(this.href, 'twitter', 550, 342);
		});

		$('.btnfacebookpage a').bind('click', function(e){
			e.preventDefault();
			openSubWin(this.href, 'facebook', 600, 300);
		});

		setToolTip($('.btntwitter'), $('.tooltiptwitter'));
		setToolTip($('.btnfacebook'), $('.tooltipfacebook'));
	});

	
	/*****************************************************************************************************************
	 * PageTop
	 *****************************************************************************************************************/

	$(function(){

		var scrolling = false;

		var backTop = $('#btnbacktotop')

		$('body').bind('mousewheel', function(){
			return !scrolling;
		});

		$('a[href^=#]').bind('click', function(e){
			e.preventDefault();

			scrolling = true;

			var target = $('#'+this.getAttribute('href').split('#')[1]);

			if(target.length > 0){
				var top = target.offset().top;
			}else{
				var top = 0;
			}
			var dur = Math.abs(top - (document.body.scrollTop || document.documentElement.scrollTop));

			if(dur > 880) dur = 880;

			$('html,body').stop().animate({scrollTop:top}, {duration:dur, easing:'oX4', always:function(){
				scrolling = false;
			}});
		});

		var show = null;
		var winH = null;

		Shared.util.addResizeListener(function(w, h){
			winH = h;
		});

		Shared.util.addScrollListener(function(t, b){
			var _show;

			if(winH > 880){
				if(t > 65){
					_show = true;
				}else{
					_show = false;
				}
			}else{
				if(b > 880){
					_show = true;
				}else{
					_show = false;
				}
			}

			if(_show != show){
				show = _show;

				if(show){
					backTop.stop().animate({bottom:30}, 200, 'oX3');
				}else{
					backTop.stop().animate({bottom:-60}, 150, 'iX2');
					backTop.find('img').stop().animate({paddingBottom:0}, 150, 'iX2');
				}
			}
		});

		backTop.hover(function(){
			if(show) backTop.find('img').stop().animate({paddingBottom:10}, 150, 'oX3');
		}, function(){
			if(show) backTop.find('img').stop().animate({paddingBottom:0}, 150, 'iX2');
		});
	});



	/*****************************************************************************************************************
	 * Modal Window
	 *****************************************************************************************************************/


	var ModalController = function(){

		this.modal;
		this.modalBackground;
		this.modalWrapper;
		this.modalContainer;
		this.modalClose;

		this.opened = false;
		this.minMargin = 80;
		this.scrollTop;

		this.winW;
		this.winH;

		this.modalW;
		this.modalH;

		this.useTransition = Shared.css.hasTransition;
	};

	ModalController.prototype = {

		setup : function(){
			if($('#modal').length == 0){
				$('body').append('<div id="modal"><div class="background"></div><div class="wrapper"><div class="container"></div></div><a href="#" class="close"></a></div>')
			}

			var self = this;

			this.modal           = $('#modal');
			this.modalBackground = $('#modal .background');
			this.modalWrapper    = $('#modal .wrapper');
			this.modalContainer  = $('#modal .container');
			this.modalClose      = $('#modal .close');

			Shared.util.addResizeListener(function(w, h){
				this.winW = w > 960 ? w : 960;
				this.winH = h;

				if(this.opened){
					this.resize();
				}
			}, this);

			this.modalClose.bind('click', function(e){
				e.preventDefault();
				self.close();
			});

			this.modalBackground.bind('click', function(e){
				e.preventDefault();
				self.close();
			});

			this.modalClose.bind('mouseenter', function(){
				if(self.opened) self.modalClose.stop().animate({top:-1}, 100, 'oX2');
			}).bind('mouseleave', function(){
				if(self.opened) self.modalClose.stop().animate({top:-10}, 100, 'oX2');
			});

			this.setup = function(){};
		},

		resize : function(){
			if(this.opened){
				if(this.winH > this.modalH + this.minMargin*2){
					var h = this.winH;
					this.modalWrapper.css({top:this.minMargin+(this.winH-this.modalH-this.minMargin*2)/2});
				}else{
					var h = this.modalH + this.minMargin*2;
					this.modalWrapper.css({top:this.minMargin});
				}
				this.modal.css({height:h});

				this.modalWrapper.css({height:this.modalH});

				$('html,#pagetop').css({height:this.scrollTop+h});
			}
		},

		open : function(type, url, w, h, opacity, style, modalClass){

			var self = this;

			this.opened = true;
			this.modalW = w;
			this.modalH = h;

			this.modal.addClass(modalClass).css({position:'absolute'});
			this.modalClose.addClass(style);

			var iframe = $('<iframe src="'+url+'" width="'+w+'" height="'+h+'" allowtransparency="true" frameborder="0" allowfullscreen></iframe>');

			this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

			this.modal.css({top:this.scrollTop});

			if(self.useTransition){
				self.modalWrapper.css({marginLeft:-w/2});
			}else if(Shared.css.hasOpacity){
				self.modalContainer.css({zoom:0, width:w, height:h});
			}else{
				self.modalContainer.css({width:w, height:h});
				self.modalWrapper.css({marginLeft:-w/2});
			}

			$('#pagetop').css({overflow:'hidden'});
			$('html').css({position:'relative', top:-this.scrollTop});

			this.resize();

			window.scrollTo(0, 0);

			function showBackground(){
				var def = new jQuery.Deferred();

				self.modal.css({display:'block'});
				self.modalBackground.css({opacity:0});
				self.modalContainer.css({opacity:0});

				self.modalBackground.stop().delay(20).transit({opacity:opacity}, 300, 'iX2', function(){
					def.resolve();
				})

				return def.promise();
			}

			function loadIframe(iframe){
				var def = new jQuery.Deferred();

				iframe.on('load', function(){
					iframe.translate3d(0);
					def.resolve(iframe.get(0));
				});

				self.modalContainer.append(iframe);

				return def.promise();
			}

			jQuery.when(loadIframe(iframe), showBackground()).done(function(iframe){
				self.modal.addClass('show');

				if(self.useTransition){
					self.modalContainer.css({width:w, height:h}).transform('scale(0.01)');
					self.modalContainer.stop().delay(50).transit({'transform':'scale(1)', opacity:1}, 500, 'oX2', function(){
						self.modalContainer.transition('all', 0).transform('none');
					});
				}else if(Shared.css.hasOpacity){
					self.modalContainer.stop().animate({zoom:1, opacity:1}, 500, 'oX2');
					self.modalWrapper.animate({marginLeft:-w/2}, 500, 'oX2');
				}else{
					self.modalContainer.css({opacity:1});
				}
				self.modalClose.animate({top:-10}, 300, 'oX2');


				if(type == 'slide'){
					self.__setSlide(iframe, style, w, h);
				}
			});
		},

		close : function(){
			if(!this.modal.hasClass('show')) return;

			var self = this;

			this.opened = false;
			this.modal.removeClass('show');

			if(this.useTransition){
				this.modalContainer.stop().delay(20).transit({'transform':'scale(0.01)', opacity:0}, 500, 'iX2');
			}else if(Shared.css.hasOpacity){
				this.modalWrapper.animate({marginLeft:0, marginTop:0}, 500, 'iX2');
				this.modalContainer.stop().animate({zoom:0, opacity:0}, 500, 'iX2');
			}else{
				this.modalContainer.css({opacity:0});
			}

			this.modalClose.stop().animate({top:-65}, 300, 'iX2');

			this.modal.stop().transit({opacity:0}, 500, 'oX2', function(){
				self.modalBackground.clearStyle();
				self.modalWrapper.clearStyle();
				self.modalContainer.find('iframe').attr('src', '');
				self.modalContainer.clearStyle().html('');
				self.modalClose.stop().clearStyle();
				self.modal.clearStyle().removeAttr('class');
				self.modal.find('#prev, #next').remove();

				var currentTop = document.body.scrollTop || document.documentElement.scrollTop;

				$('html,#pagetop').clearStyle();

				window.scrollTo(0, self.scrollTop+currentTop);
			});
		},

		bind : function(sel){
			var self = this;

			$(sel).filter('a').bind('click', function(e){
				e.preventDefault();

				var u = this.getAttribute('href');
				var t = this.getAttribute('data-type') ? this.getAttribute('data-type') : null;
				var w = this.getAttribute('data-width') ? this.getAttribute('data-width')-0 : 480;
				var h = this.getAttribute('data-height') ? this.getAttribute('data-height')-0 : 320;
				var o = this.getAttribute('data-opacity') ? this.getAttribute('data-opacity')-0 : 0.8;
				var s = this.getAttribute('data-style') ? this.getAttribute('data-style') : null;
				var c = this.getAttribute('data-class') ? this.getAttribute('data-class') : '';
				self.open(t, u, w, h, o, s, c);
			});
		},


		__setSlide : function(iframe, style, w, h){
			var self    = this;
			var btnNext = $('<a href="#" id="next"></a>').css({marginRight:-w/2+71, display:'none'}).translate3d(0).addClass(style);
			var btnPrev = $('<a href="#" id="prev"></a>').css({marginLeft:-w/2+71, display:'none'}).translate3d(0).addClass(style);
			var url     = iframe.getAttribute('src');

			this.modalContainer.css({overflow:'hidden'});
			this.modalBackground.after(btnNext).after(btnPrev);

			function cb(hasNext, hasPrev){
				if(hasNext){
					btnNext.css({display:'block'}).animate({marginRight:-w/2-71}, 300, 'iX2');
				}else{
					btnNext.animate({marginRight:-w/2+71}, 300, 'iX2');
				}
				if(hasPrev){
					btnPrev.css({display:'block'}).animate({marginLeft:-w/2-71}, 300, 'iX2');
				}else{
					btnPrev.animate({marginLeft:-w/2+71}, 300, 'iX2');
				}
			}

			if(url.match(/interview([0-9]+)\.html/)){
				// interview
				var current = parseInt(RegExp.$1)-1;
				var cuFrame = $(iframe).css({position:'absolute', top:0, left:0});
				var maxNum  = 5; // max interview num
				var animate = false;

				btnNext.bind('click', function(e){
					e.preventDefault();

					if(!animate && current < maxNum-1){
						current++;
						move(+1);
						cb(current<maxNum-1, current>0);
					}
				});

				btnPrev.bind('click', function(e){
					e.preventDefault();

					if(!animate && current > 0){
						current--;
						move(-1);
						cb(current<maxNum-1, current>0);
					}
				});

				function move(d){
					animate = true;

					var nextURL   = url.replace(/(.*)interview([0-9]+)\.html/, '$1interview'+Shared.util.zeroPad(current+1, 2)+'.html');
					var nextFrame = $('<iframe src="'+nextURL+'" width="'+w+'" height="'+h+'" allowtransparency="true" frameborder="0"></iframe>').css({position:'absolute', top:0, left:d*w});

					self.modalContainer.append(nextFrame);

					if(useTransition){
						nextFrame.delay(20).transit({transform:'translate3d('+(-d*w)+'px,0,0)'}, 500, 'ioX4');
						cuFrame.delay(20).transit({transform:'translate3d('+(-d*w)+'px,0,0)'}, 500, 'ioX4', function(){
							cuFrame.attr('src', '').remove();
							cuFrame = nextFrame.clearStyle().css({position:'absolute', top:0, left:0});
							animate = false;
						});;
					}else{
						nextFrame.animate({left:0}, 500, 'ioX4');
						cuFrame.animate({left:-d*w}, 500, 'ioX4', function(){
							cuFrame.attr('src', '').remove();
							cuFrame = nextFrame;
							animate = false;
						});
					}
				}

				setTimeout(function(){
					cb(current<maxNum-1, current>0);
				}, 500);
			}else{
				// image slide
				btnNext.bind('click', function(e){
					e.preventDefault();

					if(iframe.contentWindow && typeof iframe.contentWindow.nextScreen == 'function'){
						iframe.contentWindow.nextScreen(cb);
					}
				});

				btnPrev.bind('click', function(e){
					e.preventDefault();

					if(iframe.contentWindow && typeof iframe.contentWindow.prevScreen == 'function'){
						iframe.contentWindow.prevScreen(cb);
					}
				});
				setTimeout(function(){
					cb(true, false);
				}, 500);
			}
		}
	};

	window.modalController = new ModalController();


	$(function(){
		modalController.setup();
		modalController.bind('.modal');
	});

})();

























