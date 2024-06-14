$(function(){

	/*****************************************************************************************************************
	 * Video
	 *****************************************************************************************************************/


	var mainMovie  = $('.main_movie');
	var btnTwitch  = $('.main_btn_twitch');
	var btnYoutube = $('.main_btn_youtube');
	var mainContainer = $('.maincontainer').addClass('play_youtube').removeClass('play_twitch');

	// Youtube iframe Tag
	var embedTagYT = '<iframe width="900" height="506" src="http://www.youtube.com/embed/C-I4diarSU0?wmode=transparent&amp;rel=0&amp;vq=large&amp;autoplay=0" frameborder="0" allowfullscreen=""></iframe>';
	
	// twitch iframe tag
	var embedTagTW = '<object type="application/x-shockwave-flash" height="506" width="900" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=nintendo" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="hostname=www.twitch.tv&channel=nintendo&auto_play=true&start_volume=25" /></object>';


	btnTwitch.bind('click', function(e){
		e.preventDefault();
		mainMovie.find('iframe').attr('src', '');
		mainMovie.html('').append(embedTagTW);

		mainContainer.removeClass('play_youtube').addClass('play_twitch');
	});

	btnYoutube.bind('click', function(e){
		e.preventDefault();
		mainMovie.find('iframe').attr('src', '');
		mainMovie.html('').append(embedTagYT);

		mainContainer.addClass('play_youtube').removeClass('play_twitch');
	});

	if(!Shared.html.hasFlash){
		btnTwitch.remove();
	}



	/*****************************************************************************************************************
	 * Slide
	 *****************************************************************************************************************/

	var slide   = $('#slide');
	var wrapper = $('#slide .chara');
	var image   = $('#slide .chara img');
	var imgItems;
	var current = 0;
	var speed   = 50/1000;

	var naturalW = 1277;
	var naturalH = 105;

	var imageNum = Math.ceil(screen.width/naturalW)+1;

	var winW;
	var winH;
	var imgW;
	var imgH;


	// clone
	for(var i=1; i<imageNum; i++){
		wrapper.append(image.clone());
	}
	imgItems = $('#slide .chara img');
	imgItems.css({position:'absolute', top:0, opacity:0});
	wrapper.css({position:'relative'});

	// fitting
	Shared.util.addResizeListener(function(w, h){
		winW = w > 960 ? w : 960;
		winH = h;

		imgW = winW-3 > naturalW ? naturalW : winW-3;
		imgH = Math.floor(naturalH*imgW/naturalW+0.5);

		wrapper.css({height:imgH});

		imgItems.each(function(i){
			imgItems.eq(i).css({left:i*imgW, width:imgW, height:imgH});
		});
	});

	// auto slide
	$(window).load(function(){
		imgItems.animate({opacity:1}, 600, 'iX4');

		Shared.util.reqAF(function(ct, dt, pt){
			if(dt > 100) dt = 100;

			current += dt*speed;

			if(current > imgW){
				current = 0;
			}

			if(Shared.css.transform.translate3d){
				imgItems.translate3d(-current, 0);
			}else{
				imgItems.css({marginLeft:-current});
			}
		});
	});
	

	
});