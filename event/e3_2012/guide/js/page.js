$(function() {
	var posArr = new Array();
	var current = -1;
	
	$('.dayContent').each(function (i) {
		$(this).addClass('conWrap' + i);
		$(this).children( ".usDate" ).css({opacity: .3});
		$(this).children( ".usTime" ).css({opacity: .3});
		$(this).children( ".dateBaloon" ).css({opacity: .3});
		posArr[i] = $(this).offset().top;
	});
	
	$(window).scroll(function () {
		showPos = $wh * .75;
		for (var i = posArr.length-1; i>=0; i--) {
			if ($(window).scrollTop() > posArr[i] - showPos) {
				fadeWrap(i);
				break;
			}
		}
	});
	
	setTimeout( function() {
		for (var i = posArr.length-1; i>=0; i--) {			
			if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 6 ) {
				$("#leftContent #contents .dateWrap .conWrap" + i + " .usDate").css({opacity: 1});
				$("#leftContent #contents .dateWrap .conWrap" + i + " .usTime").css({opacity: 1});
				$("#leftContent #contents .dateWrap .conWrap" + i + " .dateBaloon").css({opacity: 1});
			} else if(isChrome() || isSmartPhone() && !isWii() && !isDSi() && !is3DS()){
				$("#leftContent #contents .dateWrap .conWrap" + i + " .usDate").css({opacity: 1});
				$("#leftContent #contents .dateWrap .conWrap" + i + " .usTime").css({opacity: 1});
				$("#leftContent #contents .dateWrap .conWrap" + i + " .dateBaloon").css({opacity: 1});
			} else if($(window).scrollTop() > 200) {
				$("#leftContent #contents .dateWrap .conWrap" + i + " .usDate").css({opacity: 1});
				$("#leftContent #contents .dateWrap .conWrap" + i + " .usTime").css({opacity: 1});
				$("#leftContent #contents .dateWrap .conWrap" + i + " .dateBaloon").css({opacity: 1});
			} else if (posArr[i] < $wh) {
				$("#leftContent #contents .dateWrap .conWrap" + i + " .usDate").stop().animate({opacity: 1} , 400);
				$("#leftContent #contents .dateWrap .conWrap" + i + " .usTime").stop().animate({opacity: 1} , 400);
				$("#leftContent #contents .dateWrap .conWrap" + i + " .dateBaloon").stop().animate({opacity: 1} , 1000);
			}
		}
	}, 100);

	function fadeWrap(sectionNum) {
		if (sectionNum != current) {
			current = sectionNum;
			
			for (var i = posArr.length-1; i>=0; i--) {
				if (current == i) {
					$("#leftContent #contents .dateWrap .conWrap" + i + " .usDate").stop().animate({opacity: 1} , 400);
					$("#leftContent #contents .dateWrap .conWrap" + i + " .usTime").stop().animate({opacity: 1} , 400);
					$("#leftContent #contents .dateWrap .conWrap" + i + " .dateBaloon").stop().animate({opacity: 1} , 1000);
				}
			}
		}
	}
	
	//alpha
	$("img.alpha").hover(function()
	{
		
		$( this ).stop( false, false );
		$( this ).fadeTo( 200, 0.7 );
	}, 
	function() 
	{
		$( this ).stop( false, false );
		$( this ).fadeTo( 200, 1 );
	});	
});
