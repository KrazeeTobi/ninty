$(function(){
	
	$(".btnWideWiiU a").append('<img src="../software/img/btnWide_ov.png" width="740" height="100" alt="" class="ov" />');
	$(".btnWide3DS a").append('<img src="../software/img/btnWide_3ds_ov.png" width="740" height="100" alt="" class="ov" />');
	
	if(!isSmartPhone() && !isWii() && !isDSi() && !is3DS()) {
		$("#leftContent #contents .ov").css({ opacity : 0 });
		$('#leftContent #contents .wrap a').hover(function() {$(this).children(".ov").stop(true, false).animate({ opacity: 1 }, { duration: 250 })}, function() { $(this).children(".ov").stop(true, false).animate({ opacity: 0 }, { duration: 800 })});
	}
	
});