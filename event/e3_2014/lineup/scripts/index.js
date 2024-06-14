$(function(){
	$(".texthover").find('img').img2vml().css({opacity:0});
	$(".imghover").css({opacity:0});
	$(".imghover").css({top:0});
	
	if( !Shared.ua.isWiiU )
	{
		$(".soft").hover(function(){
			$(this).find('.imghover').stop().animate({opacity:0.94}, 200, 'oX2');
			$(this).find('.texthover').find('img').stop().animate({opacity:1}, 200, 'oX2');
			
		},function(){
			$(this).find('.imghover').stop().animate({opacity:0}, 200, 'oX2');
			$(this).find('.texthover').find('img').stop().animate({opacity:0}, 200, 'oX2');
		});
	}

	$("#nfp .content").hover(function(){
		$(this).find('.imghover').stop().animate({opacity:0.85}, 300, 'oX2');
		$(this).find('.texthover').find('img').stop().animate({opacity:1}, 200, 'oX2');
		
	},function(){
		$(this).find('.imghover').stop().animate({opacity:0}, 200, 'oX2');
		$(this).find('.texthover').find('img').stop().animate({opacity:0}, 200, 'oX2');
	});
});