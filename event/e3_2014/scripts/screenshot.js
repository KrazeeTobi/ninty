(function(){

	if(window.parent == window){
		if(Shared.ua.is3DS){
			$(function(){
				$('body').addClass('n3ds_hard').append('<a class="back" href="javascript:history.back();"></a>');
			});
		}
		return true;
	}

	window.nextScreen = function(){};

	window.prevScreen = function(){};


	$(function(){

		var wrapper   = $('<div></div>').css({position:'relative', overflow:'hidden'});
		var container = $('<div></div>').css({position:'absolute', top:0, left:0});

		var screens = $('.screenshotcontent');
		var offset  = 0;
		var maxW    = 0;
		var maxH    = 0;
		var current = 0;

		screens.each(function(i){
			screens.eq(i).css({position:'absolute', left:offset});
			offset += screens.eq(i).width();

			if(screens.eq(i).width() > maxW) maxW = screens.eq(i).width();
			if(screens.eq(i).height() > maxH) maxH = screens.eq(i).height();
		});

		screens.each(function(i){
			screens.eq(i).css({top:(maxH-screens.eq(i).height())/2});
		});

		screens.eq(-1).after(wrapper);
		container.append(screens);
		wrapper.append(container).css({width:maxW, height:maxH});

		function doSlide(index, fn){

			if(fn && typeof fn == 'function'){
				fn.call(this, (index < screens.length-1), (index > 0));
			}

			if(Shared.css.hasTransition){
				container.stop().transit({transform:'translate3d('+(-maxW*index)+'px,0px,0px)'}, 700, 'ioX4');
			}else{
				container.stop().animate({left:-maxW*index}, 700, 'ioX4');
			}
			current = index;
		}

		window.nextScreen = function(fn){
			if(current < screens.length-1){
				doSlide(current+1, fn);
			}
		};

		window.prevScreen = function(fn){
			if(current > 0){
				doSlide(current-1, fn);
			}
		};
	});
})();