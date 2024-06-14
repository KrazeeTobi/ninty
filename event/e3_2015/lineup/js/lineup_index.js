$(function(){

	$('.lineup_item').css({'display':'none'});
	$('.lineup_item').each(function(index){
		selectItem($(this), index);
	});

	var isSP;
	if( document.getElementById("spContens") != null ){
		isSP = true;
	} else {
		$('#menu_all').find('img').unwrap();
		$('#menu_all').addClass('cu');
		isSP = false;
	}

	initClickEvent();

	function clickAll(){
		var def = new $.Deferred;
		addCurrent($('#menu_all'));
		def.promise().then(startFadeOut('all')).then(startFadeIn);
		def.resolve();
	}

	function clickWiiu(){
		var def = new $.Deferred;
		addCurrent($('#menu_wiiu'));
		def.promise().then(startFadeOut('wiiu')).then(startFadeIn);
		def.resolve();
	}

	function click3ds(){
		var def = new $.Deferred;
		addCurrent($('#menu_3ds'));
		def.promise().then(startFadeOut('3ds')).then(startFadeIn);
		def.resolve();
	}

	function clickAmiibo(){
		var def = new $.Deferred;
		addCurrent($('#menu_amiibo'));
		def.promise().then(startFadeOut('amiibo')).then(startFadeIn);
		def.resolve();
	}

	function initClickEvent(){
		$('#menu_all').find('a').unbind('click',clickAll).bind('click',clickAll);
		$('#menu_wiiu').find('a').unbind('click',clickWiiu).bind('click',clickWiiu);
		$('#menu_3ds').find('a').unbind('click',click3ds).bind('click',click3ds);
		$('#menu_amiibo').find('a').unbind('click',clickAmiibo).bind('click',clickAmiibo);
	}

	function addCurrent(obj){
		if( !isSP ){
			$('.menu .cu').find('img').wrap('<a href="#"></a>');
			$('.menu li').removeClass('cu');
			obj.find('img').unwrap();
			obj.addClass('cu');
			initClickEvent();
		}
	}

	function startFadeOut(str){
		var d = new $.Deferred;
		$('.lineup_item').animate({opacity:0}, 300, 'oX3', function(){
			$('.lineup_item').removeClass('left').removeClass('right').css({'display':'none'});
			if( str === 'all' ){
				$('.lineup_item').each(function(index){
					selectItem($(this), index);
				});
			} else {
				$('#lineup .item_'+str).each(function(index){
					selectItem($(this), index);
				});
			}
			d.resolve();
		});
		return d.promise();
	}

	function startFadeIn(){
		var d = new $.Deferred;
		$('.lineup_item').animate({opacity:1}, 800, 'oX3', function(){
			d.resolve();
		});
		return d.promise();
	}

	function selectItem(item, index){
		item.css({'display':'inline-block'});
	}

});