$(function(){
	
	$(".texthover").find('img').img2vml().css({opacity:0});
	$(".imghover").css({opacity:0});
	$(".imghover").css({top:0});
	
	$(".soft").hover(function(){
		$(this).find('.imghover').stop().animate({opacity:0.6}, 300, 'oX2');
		$(this).find('.texthover').find('img').stop().animate({opacity:1}, 300, 'oX2');
		
	},function(){
		$(this).find('.imghover').stop().animate({opacity:0}, 200, 'oX2');
		$(this).find('.texthover').find('img').stop().animate({opacity:0}, 200, 'oX2');
	});
});