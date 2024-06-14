var bgImages = [ '1.jpg', '0.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg' ];
var bgNum = 0;

$(function(){
	
	$(".btnWideWiiU a").append('<img src="img/btnWide_ov.png" width="740" height="100" alt="" class="ov" />');
	$(".btnWide3DS a").append('<img src="img/btnWide_3ds_ov.png" width="740" height="100" alt="" class="ov" />');
	$(".listNintendoWiiU li a").append('<img src="img/btn_ov.png" width="238" height="184" alt="" class="ov" />');
	$(".listNintendo3DS li a").append('<img src="img/btn_3ds_ov.png" width="238" height="191" alt="" class="ov" />');
	
	if(!isSmartPhone() && !isWii() && !isDSi() && !is3DS()) {
		$("#leftContent #contents .ov").css({ opacity : 0 });
		$('#leftContent #contents .wrap a').hover(function() {$(this).children(".ov").stop(true, false).animate({ opacity: 1 }, { duration: 250 })}, function() { $(this).children(".ov").stop(true, false).animate({ opacity: 0 }, { duration: 800 })});
	}
	
	//if device is not pc or ipad, remove screenBtn
	if( !isiPhone() && !isiPad() && !isAndroid() && !isWii() && !isDSi() && !is3DS() )
	{
	}
	else
	{
		$( ".screenBtn" ).remove();
	}

	
	$("#mainBg").css( { display : "none"} );
	$("#mainBg").fadeIn(1500);
	
	setInterval(function(){
		$("#mainBg").fadeOut(500,repeatBgEffect);
	},6000)	;
	
});

function repeatBgEffect() {
	
	if(bgNum >= bgImages.length - 1){
		bgNum = 0
	}else{
		bgNum++;
	}
	
	$("#mainBg").css( { backgroundImage : "url(img/mainPlaystyle/" + bgImages[bgNum] +")"} );
	$("#mainBg").fadeIn(2000);
}