$(function(){
	
	
	/**
	 * MAIN BG
	 */
	(function(){
		var $mainbg = $('#mainbg');
		var minWidth = 1150;
		var imgH;
		
		Shared.util.addResizeListener(function(w, h){
			var winW = (w < minWidth ? minWidth : w);
			imgH = winW * 600 / minWidth;
			if(w > minWidth){
				$mainbg.css({marginTop : -(imgH/2)});
			}else{
				$mainbg.css({marginTop : -300});
			}
		});
	})();
	
	
	
	/**
	 * HEADER
	 */	
	(function(){
		$('#globalheader').each(function(){
			var $win = $(window);
			var $header = $(this);
			var fixpos = 65;

			Shared.util.addScrollListener(function(t, b){
				if(t > fixpos){
					$header.addClass('fixed');
				}else{
					$header.removeClass('fixed');
				}
			});
			$win.trigger('scroll');
		});
	})();
	
	
	/**
	 * banner
	 */	
	(function(){
		$('.bannerbody').each(function(){
			var $hover = $(this).find('.hover');
			
			$(this).on('mouseover',function(){
				$hover.stop(true).animate({width : 290,opacity:1}, 300, 'oX4');
			})
			.on('mouseout',function(){
				$hover.stop(true).animate({width : 0,opacity:0}, 200, 'oX2');
			});
		});
	})();
	
	/**
	 * titlelist
	 */
	(function(){

		var wiiuTitles = [
			 '<li><div><a href="http://www.smashbros.com/jp/" target="_blank"><span>大乱闘スマッシュブラザーズ for Wii U<img src="../sharedimg/icon_out_wiiu.png" alt="" width="18" height="14" /></span></a></div></li>'
			,'<li><div><a href="../splatoon/index.html"><span>Splatoon(スプラトゥーン)</span></a></div></li>'
			,'<li><div><a href="http://www.gamecity.ne.jp/zelda/" target="_blank"><span>ゼルダ無双<img src="../sharedimg/icon_out_wiiu.png" alt="" width="18" height="14" /></span></a></div></li>'
			,'<li><div><a href="../yoshis_woolly_world/index.html"><span>Yoshi\'s Woolly World</span></a></div></li>'
			,'<li><div><a href="../xenobladex/index.html"><span>XenobladeX</span></a></div></li>'
			,'<li><div><a href="../../../../wiiu/aquj/index.html" target="_blank"><span>ベヨネッタ 2<img src="../sharedimg/icon_out_wiiu.png" alt="" width="18" height="14" /></span></a></div></li>'
			,'<li class="noWrap"><div><a href="../devils_third/index.html"><span>Devil\'s Third</span></a></div></li>'
			,'<li class="noWrap"><div><a href="../mario_party_10/index.html"><span>Mario Party 10</span></a></div></li>'
			,'<li><div><a href="../captain_toad/index.html"><span>Captain Toad: Treasure Tracker</span></a></div></li>'
			,'<li class="noWrap"><div><a href="../mario_maker/index.html"><span>Mario Maker</span></a></div></li>'
			,'<li><div><a href="../kirby_and_the_rainbow_curse/index.html"><span>Kirby and the Rainbow Curse</span></a></div></li>'
			,'<li><div><a href="../mario_vs_donkey_kong/index.html"><span>Mario vs. Donkey Kong</span></a></div></li>'
			,'<li><div><a href="../art_academy/index.html"><span>Art Academy</span></a></div></li>'
			,'<li><div><a href="../wii_sports_club/index.html"><span>Wii Sports Club</span></a></div></li>'
			,'<li><div><a href="../zeldas_new_game/index.html"><span>ゼルダの伝説 最新作</span></a></div></li>'
		];

		var n3dsTitles = [
			 '<li><div><a href="http://www.smashbros.com/jp/" target="_blank"><span>大乱闘スマッシュブラザーズ for 3DS<img src="../sharedimg/icon_out_3ds.png" alt="" width="18" height="14" /></span></a></div></li>'
			,'<li><div><a href="http://www.pokemon.co.jp/ex/oras/" target="_blank"><span>ポケットモンスター オメガルビー・アルファサファイア<img src="../sharedimg/icon_out_3ds.png" alt="" width="18" height="14" /></span></a></div></li>'
			,'<li><div><a href="../../../../3ds/bpcj/index.html" target="_blank"><span>ポケモンアートアカデミー<img src="../sharedimg/icon_out_3ds.png" alt="" width="18" height="14" /></span></a></div></li>'
			,'<li class="noWrap"><div><a href="../steam/index.html"><span>Code Name: S.T.E.A.M.</span></a></div></li>'
		];

		var items = null;

		if($('#pagetop').hasClass('wiiu')){
			items = wiiuTitles;
		}else if($('#pagetop').hasClass('n3ds')){
			items = n3dsTitles;
		}else{
			return;
		}

		var lineupList = $('#content .lineuplist').html('');
		var current = -1;
		var currURI = Shared.util.parseURI(location.href);

		if(currURI['file'] == '') currURI['file'] = 'index.html';

		// カレント判定
		for(var i=0; i<items.length; i++){
			var dummy = document.createElement('div');
			dummy.innerHTML = items[i];
			var targetURI = Shared.util.parseURI((dummy.getElementsByTagName('a')[0]).href);

			if(targetURI['directory'] == currURI['directory'] && targetURI['file'] == currURI['file']){
				current = i;
				break;
			}
		}

		for(var i=0; i<items.length; i++){
			var li = $(items[i]);

			if(i == current){
				li.addClass('current');

				var em = $('<em></em>').html(li.find('a').html());
				li.find('a').after(em);
				li.find('a').remove();
			}
			lineupList.append(li);
		}
	})();
});