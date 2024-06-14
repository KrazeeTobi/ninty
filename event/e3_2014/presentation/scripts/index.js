$(function(){
	
	if(Shared.ua.isWiiU || Shared.ua.isTablet){
		$('body').addClass('abs');
	}


	/*****************************************************************************************************************
	 * 
	 *****************************************************************************************************************/


	var movie = $('#presentationcontainer .movie');
	var buttons = $('#presentationcontainer .buttons a');
	var hash2vid = {};

	buttons.each(function(i){
		hash2vid[this.getAttribute('href').split('#')[1]] = this.getAttribute('data-src');
	});


	function switchMovie(hash, auto){
		if(hash in hash2vid && hash != "miyamoto"){
			var vid = hash2vid[hash];

			if(auto){
				var autoplay = '1';
			}else{
				var autoplay = '0';
			}

			var iframe = '<iframe name="youtube" width="802" height="481" src="https://www.youtube.com/embed/'+vid+'?wmode=transparent&amp;rel=0&amp;autoplay='+autoplay+'&amp;showinfo=1" frameborder="0" hspace="0" allowtransparency="true" allowfullscreen=""></iframe>';

			movie.find('iframe').attr('src', '').remove();
			movie.html('').html(iframe);

			buttons.each(function(i){
				var btnHash = buttons.eq(i).attr('href').split('#')[1];

				if(btnHash == hash){
					buttons.eq(i).addClass('cu');
				}else{
					buttons.eq(i).removeClass('cu');
				}
			});
		}
	}


	// 
	buttons.each(function(i){
		var url = buttons.eq(i).attr('href').split('#')[0];
		var hash = buttons.eq(i).attr('href').split('#')[1];

		var hov = buttons.eq(i).find('.hover');

		buttons.eq(i).bind('click', function(e){
			e.preventDefault();

			if(!buttons.eq(i).hasClass('cu')){
				if(hash == null){
					window.location.href = url;
				}
				else{
					switchMovie(hash, true);
				}
			}
		});

		if(Shared.device.hasTouch && (Shared.ua.isSmartPhone || Shared.ua.isWiiU)){
			;
		}else{
			buttons.eq(i).bind('mouseenter touchstart', function(){
				hov.css({display:'block'});
			});
			buttons.eq(i).bind('mouseleave touchend touchcancel', function(){
				hov.css({display:'none'});
			});
		}

		

		if('#'+hash == location.hash){
			switchMovie(hash, false);
		}
	});
	
	if(buttons.filter('.cu').length == 0){
		movie.find('iframe').attr('src', '');
		movie.html('');
		switchMovie(buttons.eq(0).attr('href').split('#')[1], false);
	}
});

function winOpen(){
	window.open('../presentation/miyamoto.html', 'win', 'width=850, menubar=no, toolbar=no, scrollbars=yes, resizable=no');
}