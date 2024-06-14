/*-----------------------------
// YouTube
------------------------------*/ 
$(function(){
	if((Shared.ua.isAndroid) && (Shared.ua.verAndroid < 4)){
		var $video = $('#moviecontainer');
		$video.css({width:280});
	}
});