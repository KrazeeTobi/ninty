
var useCSS3 = Shared.css.hasTransition;

(function(){

	var thumbs;
	var content;
	var container;

	var winW;
	var winH;
	var itemW     = 384;
	var itemH     = 216;
	var currItemW = itemW;
	var currItemH = itemH;
	var scale;

	var start     = false;
	var current   = 0;
	var animate   = false;
	var movedY    = 0;
	var movedC    = 0;
	var map       = [];
	var max       = 5*Math.ceil(screen.height/itemH);
	var colH      = [];

	if(max%2 == 1) max++;

	Shared.util.srand(+new Date());


	/*****************************************************************************************************************
	 * 定数
	 *****************************************************************************************************************/


	// 画像が切り替るアニメーションの間隔
	var CHANGE_IMAGE_DELAY = 50;

	// 画像が切り替るアニメーションの間隔(IE8以下)
	var CHANGE_IMAGE_DELAY_IE8 = 200;

	// 画像切り替わりアニメーションが発生する間隔
	var SCROLL_CHANGE_IMAGE_INTERVAL = 400;



	/*****************************************************************************************************************
	 * 非同期
	 *****************************************************************************************************************/

	var req = jQuery.ajax({
		url      : 'xml/soft.xml',
		dataType : 'xml'
	});

	var ready = (function(){
		var def = new jQuery.Deferred();

		$(function(){
			content = $('#content');
			container = $('#content .container');
			content.css({height:$(window).height()-60});
			def.resolve();
		});
		return def.promise();
	})();

	jQuery.when(req, ready).done(function(xml){

		var items = $(xml[0]).find('item').toArray();

		Shared.util.shuffle(items, true);

		items = $(items);

		init(items, function(){
			if(!Shared.ua.isIElt9){
				if(startOpening) startOpening();
			}else{
				setScroll();
			}
		});
	});



	/*****************************************************************************************************************
	 * 初期化
	 *****************************************************************************************************************/

	function init(items, fn){

		var count = 0;

		function check(){
			if(++count == items.length) fn.call();
		}

		items.each(function(i){
			var type   = items.eq(i).find('type').text();
			var link   = items.eq(i).find('link').text();
			var title  = items.eq(i).find('title').text();
			var source = items.eq(i).find('source').text();
			var hover  = items.eq(i).find('hover').text();
			var thumb  = $('<div class="thumb"></div>').css({display:'none'});
			var wrap   = $('<a></a>');
			var mask   = $('<div class="mask"></div>');
			var image  = $('<img src="" alt="" class="base" />');

			

			if(Shared.ua.isIElt9){
				wrap = $('<div></div>');
				wrap.addClass(type);
				wrap.append(image);
			}else{
				var bg = $('<div class="bg"></div>').css({opacity:0});
				var ov = $('<div class="ov"><img src="" alt="" /></div>');

				if(link.indexOf('http') == 0){
					wrap.attr('target', '_blank');
				}
				ov.find('img').attr('src', hover).css({opacity:0});

				mask.append(bg).append(ov);

				wrap.attr('href', link);
				wrap.addClass(type);
				wrap.append(image);
				wrap.append(mask);
			}

			image.on('load', check);
			image.attr('src', source).attr('alt', title);

			thumb.append(wrap);
			container.append(thumb);
		});

		thumbs = container.find('.thumb');

		for(var i=thumbs.length; i<max; i++){
			container.prepend(thumbs.eq(i%thumbs.length).clone());
		}
		container.append(thumbs);

		thumbs = $('#content .thumb');

		thumbs.each(function(i){
			map[i] = {x:0, y:0, dx:0, dy:0, c:0};

			var self = $(this);

			if(useCSS3){
				self.find('.bg').transform('translate3d(-50%,100%,0) rotateZ(30deg)');
			}else{
				self.find('.bg').css({marginTop:'100%'});
			}

			if(!Shared.ua.isIElt9){
				self.hover(function(){
					if(start){
						if(useCSS3){
							self.find('.bg').stop().transit({transform:'translate3d(0%, 0%, 0) rotateZ(0deg)', opacity:0.95}, 300, 'oX2');
						}else{
							self.find('.bg').stop().animate({marginTop:0, opacity:0.95}, 300, 'oX2');
						}
						self.find('.ov img').stop(true).delay(200).animate({opacity:1}, 300, 'oX2');
					}
				}, function(){
					if(start){
						if(useCSS3){
							self.find('.bg').stop().transit({transform:'translate3d(-50%,100%,0) rotateZ(30deg)', opacity:0}, 300, 'iX2');
						}else{
							self.find('.bg').stop().animate({marginTop:currItemH, opacity:0}, 300, 'iX2');
						}
						self.find('.ov img').stop(true).animate({opacity:0}, 300, 'iX2');
					}
				});
			}
		});

		Shared.util.addResizeListener(function(w, h){
			winW = w > 960 ? w : 960;
			winH = h > 600 ? h : 600;
			colChange();
			content.css({height:winH-60});
		});

		thumbs.css({display:'none'});
	}

	function colChange(){
		var x = 0;
		var y = 0;
		var w = 0;
		var h = 0;
		var c = 0;

		if(winW > itemW*4){
			c = 5;
		}else if(winW > itemW*3){
			c = 4;
		}else{
			c = 3;
		}

		w = Math.ceil(winW/c);
		h = parseInt(itemH/itemW*w);

		currItemW = w;
		currItemH = h;

		scale = w/itemW;

		colH = [];

		if(current != c){
			thumbs.clearStyle();
			movedY = 0;
			movedC = 0;
		}

		thumbs.each(function(i){
			if(current != c){
				thumbs.eq(i).clearStyle();
				map[i].c = 0;
			}
			map[i].x = x*w;
			map[i].y = y*h;

			thumbs.eq(i).css({top:map[i].y, left:map[i].x, width:w, height:h});
			thumbs.eq(i).find('.ov').css({width:w, height:h});

			colH[x] = y*h+currItemH;

			x++;

			if(x >= c){
				x = 0;
				y++;
			}
		});
		thumbs.each(function(i){
			map[i].y += colH[i%c]*map[i].c;
			thumbs.eq(i).css({top:map[i].y});
		});
		current = c;
	}



	/*****************************************************************************************************************
	 * オープニングアニメーション
	 *****************************************************************************************************************/

	function startOpening(){
		var count = 0;
		var limit = 0;

		thumbs.each(function(i){

			thumbs.eq(i).css({display:'block'});

			if(map[i].y < winH){
				limit++;

				var delay = 50+(map[i].y + map[i].x)/2;

				if(Shared.ua.isIElt9){
					delay *= 2;
				}

				if(useCSS3){
					thumbs.eq(i).find('.base').css({opacity:0}).transform('');
					thumbs.eq(i).transformOrigin('0%', '50%').transform('perspective(1000px) rotateY(30deg)');

					thumbs.eq(i).find('.base').delay(delay).transit({opacity:1}, 800, 'iX2');

					thumbs.eq(i).delay(delay).transit({transform:'perspective(1000px) rotateY(0deg)'}, 800, 'oX2', function(){
						if(++count == limit && setScroll) setScroll();
					});
				}else{
					thumbs.eq(i).find('.base').css({opacity:0});
					thumbs.eq(i).css({marginLeft:20});

					thumbs.eq(i).find('.base').delay(delay).animate({opacity:1}, 800, 'iX2');

					thumbs.eq(i).delay(delay).animate({marginLeft:0}, 800, 'oX2', function(){
						if(++count == limit && setScroll) setScroll();
					});
				}
			}else{
				thumbs.eq(i).css({display:'none'});
			}
		});
	}


	/*****************************************************************************************************************
	 * スクロール
	 *****************************************************************************************************************/

	function setScroll(){
		setScroll = null;

		$('#content .thumb').clearStyle();
		$('#content .thumb .base').clearStyle();

		colChange();

		var speed = 25/1000; // 1秒当たりの移動ピクセル
		var fps   = Shared.ua.isIElt9 ? 25 : 50;

		start = true;
		animate = true;

		setTitleHover();

		Shared.util.reqAF(function(ct, dt, pt){
			if(dt > 50) dt = 50;

			if(animate){

				var dy = dt*speed;

				movedY += dy;
				movedC += dy;
				
				if(useCSS3){
					if(!start){
						container.translate3d(0, -parseInt(scale*movedY));
					}else{
						container.translate3d(0, -scale*movedY);
					}
				}else{
					container.css({top:-scale*movedY});
				}
				thumbs.each(function(i){
					var absH = map[i].y - scale*movedY;

					if(absH < -currItemH*2){
						map[i].c ++;
						map[i].y += colH[i%current];
						thumbs.eq(i).css({top:map[i].y});
					}else{
						thumbs.eq(i).css({display:'block'});
					}
					if(absH > winH){
						thumbs.eq(i).css({display:'none'});
					}
				});

				if(!Shared.ua.isIElt9){
					if(movedC > SCROLL_CHANGE_IMAGE_INTERVAL){
						movedC = 0;
						changeImage();
					}
				}
			}
		}, fps);
	}

	function changeImage(){

		thumbs.trigger('mouseleave');

		var arrE = [];
		var arrO = [];

		for(var i=0; i<thumbs.length; i+=2){
			arrE.push(i);
			arrO.push(i+1);
		}
		Shared.util.shuffle(arrE, true);
		Shared.util.shuffle(arrO, true);

		if(useCSS3){
			var cover = $('<div class="cover"></div>').transform('translate3d(-100%,0%,0)').css({opacity:1});
		}else{
			var cover = $('<div class="cover"></div>').css({opacity:1, marginLeft:-currItemW});
		}

		start = false;

		setTimeout(function(){
			start = true;
		}, 2500);

		var delays = [];

		for(var i=0; i<thumbs.length/2; i++){
			delays[i] = i*(Shared.ua.isIElt9 ? CHANGE_IMAGE_DELAY_IE8 : CHANGE_IMAGE_DELAY);
		}

		Shared.util.shuffle(delays, true);

		for(var i=0; i<thumbs.length/2; i++){
			(function(i){
				var item1 = thumbs.eq(arrE[i]);
				var item2 = thumbs.eq(arrO[i]);
				var delay = delays[i];
				var duration = 600;
				var easing   = 'oX4';

				$([item1, item2]).each(function(){
					var self  = $(this);

					self.append(cover.clone());

					if(self.is(':visible')){
						if(useCSS3){
							self.find('.cover').stop().delay(delay).transit({transform:'translate3d(0%,0%,0)'}, duration, easing);
						}else{
							self.find('.cover').stop().delay(delay).animate({marginLeft:0}, duration, easing);
						}
					}else{
						if(useCSS3){
							self.find('.cover').stop().transform('translate3d(0%,0%,0)');
						}else{
							self.find('.cover').stop().css({marginLeft:'0%'});
						}
					}
				});

				setTimeout(function(){
					swap(item1, item2);

					var delay    = 300;
					var duration = 600;
					var easing   = 'iX3';

					$([item1, item2]).each(function(){
						var self  = $(this);
						var cover = self.find('.cover');

						if(self.is(':visible')){
							if(useCSS3){
								cover.stop().delay(delay).transit({transform:'translate3d(100%,0%,0)'}, duration, easing, function(){
									cover.remove();
								});
							}else{
								cover.stop().delay(delay).transition('all',0).animate({marginLeft:currItemW}, duration, easing, function(){
									cover.remove();
								});
							}
						}else{
							cover.remove();
						}
					});
				}, delay+650);
			})(i);
		}

		function swap(item1, item2){
			var wrap1 = item1.find('a');
			var wrap2 = item2.find('a');

			item1.append(wrap2);
			item2.append(wrap1);
		}
	}


	/*****************************************************************************************************************
	 * タイトル回転アニメーション
	 *****************************************************************************************************************/

	function setTitleHover(){
		var title   = $('.contenttitle');
		var obverse = $('.contenttitle .obverse');
		var reverse = $('.contenttitle .reverse');
		var link    = $('.contenttitle .btnlinklineup');
		var ratio   = obverse.width()/reverse.width();
		var dummy   = $('<div></div>').css({top:0});

		var circleW1 = 290;
		var circleW2 = 338;

		var obverseImg = obverse.find('img');
		var reverseImg = reverse.find('img');
		var dummyArea  = $('<div></div>').css({width:'100%', height:'100%', position:'absolute', top:0, left:0, background:'#fff', opacity:0});

		title.prepend(dummyArea);
		
		if(useCSS3){
			reverse.transform('scale('+ratio+') rotateY(90deg)');
		}else{
			reverseImg.css({witdth:0, height:circleW1, marginLeft:(circleW2-circleW1)/2, marginTop:(circleW2-circleW1)/2});
		}

		function step(deg){
			if(deg < 90){
				obverse.css({display:'block'});
				reverse.css({display:'none'});
			}else{
				obverse.css({display:'none'});
				reverse.css({display:'block'});
			}
			if(useCSS3){
				obverse.transform('rotateY('+deg+'deg)');

				if(deg < 90){
					reverse.transition('all', 0).transform('scale('+ratio+') rotateY('+(180-deg)+'deg)');
				}else{
					reverse.transition('all', 0).transform('scale('+(1-(1-ratio)*(180-deg)/90)+') rotateY('+(180-deg)+'deg)');
				}
			}else{
				var r1 = deg/180*Math.PI;
				var c1 = Math.cos(r1);
				var w1 = circleW1*c1;
				var m1 = (circleW1-w1)/2;

				var r2 = (180-deg)/180*Math.PI;
				var c2 = Math.cos(r2);

				obverseImg.css({width:w1, marginLeft:m1});

				if(deg < 90){
					var w2 = circleW1*c2;
					var m2 = (circleW1-w2)/2 + (circleW2-circleW1)/2;
					var h2 = circleW1;
					var mt = (circleW2-circleW1)/2;
				}else{
					var w2 = circleW2*c2*(1-(1-ratio)*(180-deg)/90);
					var m2 = (circleW1-w2)/2 + (circleW2-circleW1)/2;
					var h2 = circleW2*(1-(1-ratio)*(180-deg)/90);
					var mt = (circleW2-circleW1)/2*(180-deg)/90;
				}
				reverseImg.css({width:w2, marginLeft:m2, height:h2, marginTop:mt});
			}
		}


		title.hover(function(){
			dummy.stop().animate({top:180}, {duration:800, easing:'oX3', step:step, complete:function(){
				link.css({display:'block'});
			}});
		}, function(){
			link.css({display:'none'});
			dummy.stop().animate({top:0}, {duration:800, easing:'oX3', step:step});
		});
	}
})();

