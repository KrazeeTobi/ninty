!function($){
	/**
	 * titlelist
	 */
	var wiiuTitles = [
		'<li class="nav__item"><a href="../../../../mario30th/maker/index.html" class="out">スーパーマリオメーカー</a></li>'
		,'<li class="nav__item"><a href="../starfox/index.html">スターフォックス ゼロ</a></li>'
		,'<li class="nav__item"><a href="http://www.nintendo.co.jp/wiiu/asej/" class="out">幻影異聞録♯FE</a></li>'
		,'<li class="nav__item"><a href="../doubutsunomori/index.html">どうぶつの森 amiiboフェスティバル</a></li>'
		,'<li class="nav__item"><a href="../mario_tennis/index.html">マリオテニス ウルトラスマッシュ</a></li>'
		,'<li class="nav__item"><a href="../yoshi/index.html">ヨッシー ウールワールド</a></li>'
		,'<li class="nav__item"><a href="../mario_sonic/index.html">マリオ&ソニック AT リオオリンピック&trade;</a></li>'
		
	];

	var n3dsTitles = [
		 '<li class="nav__item"><a href="../zelda_triforce_heroes/index.html">ゼルダの伝説　トライフォース３銃士</a></li>'
		,'<li class="nav__item"><a href="http://www.gamecity.ne.jp/zelda-3ds/" target="_blank" class="out">ゼルダ無双 ハイラルオールスターズ</a></li>'
		,'<li class="nav__item"><a href="../metroid/index.html">METROID PRIME: FEDERATION FORCE(米国名称)</a></li>'
		,'<li class="nav__item"><a href="../../../../3ds/bfwj/index.html" class="out">ファイアーエムブレムif</a></li>'
		,'<li class="nav__item"><a href="../../../../3ds/edhj/index.html" class="out">どうぶつの森　ハッピーホームデザイナー</a></li>'
		,'<li class="nav__item"><a href="../chibirobo/index.html">なげなわアクション！ぐるぐる！ちびロボ！</a></li>'
		,'<li class="nav__item"><a href="../mario_luigi/index.html">マリオ＆ルイージRPG　ペーパーマリオMIX</a></li>'
		,'<li class="nav__item"><a href="../mario_sonic/index.html">マリオ&ソニック AT リオオリンピック&trade;</a></li>'
		,'<li class="nav__item"><a href="http://www.pokemon.co.jp/ex/cho_dungeon/index.html" target="_blank" class="out">ポケモン超不思議のダンジョン</a></li>'
	];

	var amiiboTitles = [
		 '<li class="nav__item"><a href="../amiibo/index.html">E3で発表されたamiibo</a></li>'
	];

	function initTitleList(){
		function initLineupList($elm,list){
			$.each(list,function(i,x){
				var $li=$(x);
				var href=$li.find("a").attr("href");
				var url=$li.find("a").prop("href");
				if(href && url === location.href){
					$li.addClass("cu");
				}
				$elm.append($li);
			});
		}
		initLineupList($('#titleList .lineuplist_wiiu_items'),wiiuTitles);
		initLineupList($('#titleList .lineuplist_3ds_items'),n3dsTitles);
		initLineupList($('#titleList .lineuplist_amiibo_items'),amiiboTitles);
	}
	function adjustHeight(){
		var navH = $('.lineup_detail_nav').height();
		var cBodyH = $('.contents__body').height();
		if( navH < cBodyH ){
			$('.lineup_detail_nav').height(cBodyH);
		}
	}

	$(function(){
 		initTitleList();
 	});

	$(window).load(function(){
		adjustHeight();
	});

}(jQuery);

