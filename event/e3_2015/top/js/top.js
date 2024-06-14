! function ($) {

	/**
	 * titlelist
	 */
	var topTitlelist = [
			 '<li class="lineup_item soft_bnr"><a href="../../mario30th/maker/index.html"><img src="top/img/lineup_super_mario_maker.jpg" alt=""><div class="soft_title_wrap"><img src="top/img/lineup_super_mario_maker.png" alt="スーパーマリオメーカー"></div></a></li>'
			, '<li class="lineup_item soft_bnr"><a href="lineup/starfox/index.html"><img src="top/img/lineup_starfox_zero.jpg" alt=""><div class="soft_title_wrap"><img src="top/img/lineup_starfox_zero.png" alt="スターフォックス ゼロ"></div></a></li>'
			, '<li class="lineup_item soft_bnr"><a href="../../../wiiu/asej/index.html"><img src="top/img/lineup_fe.jpg" alt=""><div class="soft_title_wrap"><img src="top/img/lineup_fe.png" alt="幻影異聞録♯FE"></div></a></li>'
			, '<li class="lineup_item soft_bnr"><a href="lineup/doubutsunomori/index.html"><img src="top/img/lineup_doubutsunomori.jpg" alt=""><div class="soft_title_wrap"><img src="top/img/lineup_doubutsunomori.png" alt="どうぶつの森 amiiboフェスティバル"></div></a></li>'
			, '<li class="lineup_item soft_bnr"><a href="lineup/mario_tennis/index.html"><img src="top/img/lineup_mario_tennis.jpg" alt=""><div class="soft_title_wrap"><img src="top/img/lineup_mario_tennis.png" alt="マリオテニス ウルトラスマッシュ"></div></a></li>'
			, '<li class="lineup_item soft_bnr"><a href="lineup/yoshi/index.html"><img src="top/img/lineup_yoshi.jpg" alt=""><div class="soft_title_wrap"><img src="top/img/lineup_yoshi.png" alt="ヨッシー ウールワールド"></div></a></li>'
			, '<li class="lineup_item soft_bnr"><a href="lineup/mario_sonic/index.html"><img src="top/img/lineup_mario_sonic.jpg" alt=""><div class="soft_title_wrap"><img src="top/img/lineup_mario_sonic.png" alt="マリオ&ソニック AT リオオリンピック&trace;"></div></a></li>'
			, '<li class="lineup_item soft_bnr"><a href="lineup/zelda_triforce_heroes/index.html" target="_blank"><img src="top/img/lineup_zelda_triforce_heroes.jpg" alt=""><div class="soft_title_wrap"><img src="top/img/lineup_zelda_triforce_heroes.png" alt="ゼルダの伝説　トライフォース３銃士"></div></a></li>'
		, '<li class="lineup_item soft_bnr"><a href="http://www.gamecity.ne.jp/zelda-3ds/" target="_blank"><img src="top/img/lineup_zelda_hyrulewarriors.jpg" alt=""><div class="soft_title_wrap"><img src="top/img/lineup_zelda_hyrulewarriors.png" alt="ゼルダ無双 ハイラルオールスターズ"></div></li>'
			, '<li class="lineup_item soft_bnr"><a href="lineup/metroid/index.html"><img src="top/img/lineup_metroid.jpg" alt=""><div class="soft_title_wrap"><img src="top/img/lineup_metroid.png" alt="METROID PRIME: FEDERATION FORCE(米国名称)"></div></a></li>'
			, '<li class="lineup_item soft_bnr"><a href="../../3ds/bfwj/index.html" ><img src="top/img/lineup_fe_if.jpg" alt=""><div class="soft_title_wrap"><img src="top/img/lineup_fe_if.png" alt="ファイアーエムブレムif"></div></a></li>'
			, '<li class="lineup_item soft_bnr"><a href="../../3ds/edhj/index.html"><img src="top/img/lineup_doubutsunomori_happy_home_designer.jpg" alt=""><div class="soft_title_wrap"><img src="top/img/lineup_doubutsunomori_happy_home_designer.png" alt="どうぶつの森 ハッピーホームデザイナー"></div></a></li>'
			, '<li class="lineup_item soft_bnr"><a href="lineup/chibirobo/index.html"><img src="top/img/lineup_chibirobo.jpg" alt=""><div class="soft_title_wrap"><img src="top/img/lineup_chibirobo.png" alt="なげなわアクション！ぐるぐる！ちびロボ！"></div></a></li>'
			, '<li class="lineup_item soft_bnr"><a href="lineup/mario_luigi/index.html"><img src="top/img/lineup_mario_luigi.jpg" alt=""><div class="soft_title_wrap"><img src="top/img/lineup_mario_luigi.png" alt="マリオ＆ルイージRPG　ペーパーマリオMIX"></div></a></li>'
			, '<li class="lineup_item soft_bnr"><a href="http://www.pokemon.co.jp/ex/cho_dungeon/index.html" target="_blank"><img src="top/img/lineup_pokemon.jpg" alt=""><div class="soft_title_wrap"><img src="top/img/lineup_pokemon.png" alt="ポケモン超不思議のダンジョン"></div></a></li>'
		];



	var useCSS3 = Shared.css.hasTransition;
	var animationCircles;

	function bgAnimInit() {
		if (!Polaris.html.hasWebgl || ('debug' in param)) {
			return false;
		}

		animationCircles = new E3.Circles('#back', {
			// 円の数
			num: 2
				// 背景色
				,
			background: '#fff'
				// 円の最小半径
				,
			minRadius: 100
				// 円の最大半径
				,
			maxRadius: 200
				// 中心部のアルファ値
				,
			centerAlpha: 0.4
				// 円周部のアルファ値
				,
			edgeAlpha: 0.2
				// 円の大きさの分布係数(大きいほど小さい円が増える)
				,
			distribution: 2.5
				// 円の色配列
				,
			colors: ['#ffff22', '#2291ff', '#91ff22', '#ff2291']
				// 円同士の反発係数
				,
			repulsion: 0.002
				// 中心への集合力係数
				,
			attraction: 0.000001
				// 媒質の粘性(0より大きい実数)
				,
			viscosity: 14.5
				// カメラ回転スピード[deg/sec]
				,
			camSpeed: 1
				// ぼかし
				,
			blur: 15
				// WegGL使用フラグ
				,
			webgl: false
		});
		animationCircles.start();
		if (window.scrollY <= 600) {
			animationCircles.pause();
		}
	}


	function setTitleList() {

		topTitlelist.sort(
			function () {
				return Math.random() - 0.5;
			}
		);

		function initTitleList($elm, list) {

			$.each(list, function (i, x) {
				i = i + 1;
				if (i <= 9) {
					var $li = $(x);
					$elm.append($li);

				} else {
					return false; // break
				}
			});
		}

		initTitleList($('#topTitleList'), topTitlelist);

	}


	function TitleListIntro() {

		var listItemImg = $('#topTitleList .soft_bnr img');

		if (useCSS3) {
			listItemImg.translate3d("-100%", 0);
		} else {
			listItemImg.css({
				left: "-100%"
			});
		}

		listItemImg.each(function (i) {

			if (useCSS3) {
				$(this).delay(60 * i).queue(function (next) {
					$(this).transition('transform', 600, 'oX4').translate3d(0, 0);
					next();
				});
			} else {
				$(this).delay(60 * i).queue(function (next) {
					$(this).animate({
						left: 0
					}, 600);
					next();
				});
			}
		});
	}

	//
	// トップスライド
	//
	var slideMask;
	var slideActive = true;
	var slideInitDone = false;
	var resizeTimer;

	function heroSlideSet() {
			var target;
			var startPos = 0;
			var lastPos = -1;
			var slideCheck = Shared.util.cookie('slideCheck');
			if (slideCheck !== undefined && !('debug' in param)) {
				startPos = $('#heroSlide .item').length - 1;
			} else {
				Shared.util.cookie('slideCheck', '1', {
					expires: '7days'
				});
			}
			//console.log(startPos);
			// マスク
			slideMask = $("<div />");
			slideMask.addClass("slide_mask");
			slideMask.css({
				"width": "105%",
				"height": "100%",
				"background-color": "#000",
				"position": "absolute",
				"top": "0px",
				"left": "0px"
			});
			if (useCSS3) {
				slideMask.stop().transition('transform', 0).translate3d('-100%', 0, 0);
			} else {
				slideMask.css({
					"left": "-100%"
				});
			}
			$('#heroSlide').append(slideMask);
			$('#heroSlide').css("overflow", "hidden");
			// スライド
			$('#heroSlide').slide({
				type: 'fade',
				items: '.item',
				ini: startPos,
				duration: 1500,
				interval: 9600,
				easing: 'oX2',
				//inds : $('#heroPager .inds_custon'),
				//cookie : {name:'E3_2015_top', expires:'10minutes'},
				before: function (index) {
					//console.log(index);//debug
					var _slide = this;
					var _index = index;
					for (var i = 0; i < _slide.items.length; i++) {
						$(_slide.items[i]).addClass('slidein');
						if (i != _index) {
							// stop video
							target = $(_slide.items[_index]).find('video');
							if (target.hasClass('background-video')) {
								if (!target[0].paused) {
									if (!Shared.ua.isIE8) {
										target[0].pause();
									}
									target[0].currentTime = 0;
								}
							}
						}
					}
					if (lastPos < 0) {
						//lastPos = _slide.items.length-1;
					} else {
						$(_slide.items[lastPos]).removeClass('slidein');
					}
					lastPos = index;
					if (useCSS3) {
						slideMask.stop().transition('transform', 380, 'oX2').translate3d(0, 0, 0).transitionEnd(function () {
							slideCurrentIn(_slide, _index);
						});
					} else {
						slideMask.stop().animate({
							left: '0'
						}, 380, 'oX2', function () {
							slideCurrentIn(_slide, _index);
						});
					}
				},
				after: function (index) {
					//console.log(index);//debug
				},
				resize: function (W, H) {
					var _slide = this;
					$('#heroSlide').triggerHandler('stopTimer.slide');
					clearTimeout(resizeTimer);
					resizeTimer = setTimeout(function () {
						$('#heroSlide').triggerHandler('startTimer.slide');
						for (var i = 0; i < _slide.items.length; i++) {
							if (i != _slide.current) {
								$(_slide.items[i]).addClass('slidein');
							} else {
								$(_slide.items[i]).css("opacity", 1);
							}
						}
					}, 500);
					return W;
				}
			});
			// マウスオーバーでスライド停止
			/*
			$('#heroSlide').mouseenter(function(e) {
				$('#heroSlide').triggerHandler('stopTimer.slide');
				slideActive = false;
			});
			$('#heroSlide').mouseleave(function(e) {
				$('#heroSlide').triggerHandler('startTimer.slide');
				slideActive = true;
			});
			*/
		}
		// マスク表示完了時
	function slideCurrentIn(_slide, _index) {
			$(_slide.items[_index]).removeClass('slidein');
			var infodiv = $(_slide.items[_index]).find("[class$=_maininfo]");
			var titlediv = $(_slide.items[_index]).find("[class$=_title]");
			if (useCSS3) {
				infodiv.transition('transform', 0).translate3d(1200, 0, 0);
				titlediv.transition('transform', 0).translate3d(-1200, 0, 0);
				slideMask.stop().transition('transform', 480, 'iX4', 380).translate3d('100%', 0, 0).transitionEnd(function () {
					slideCurrentDone(_slide, _index);
				});;
			} else {
				infodiv.css("right", -1200);
				titlediv.css("left", -1200);
				slideMask.stop().animate({
					left: '100%'
				}, 480, 'iX4', function () {
					slideCurrentDone(_slide, _index);
				});
			}
		}
		// マスク消去完了時
	function slideCurrentDone(_slide, _index) {
		target = $(_slide.items[_index]).find('video');
		var infodiv = $(_slide.items[_index]).find("[class$=_maininfo]");
		var titlediv = $(_slide.items[_index]).find("[class$=_title]");
		if (target.hasClass('background-video')) {
			// start video

			if (!Shared.ua.isIE8) {
				target[0].play();
			}
		}
		if (!slideInitDone) {
			setTitleList();
			TitleListIntro();
			slideInitDone = true;
		}
		if (useCSS3) {
			infodiv.transition('transform', 480, 'ioExp').translate3d(0, 0, 0);
			titlediv.transition('transform', 480, 'ioExp').translate3d(0, 0, 0);
			slideMask.stop().transition('transform', 0).translate3d('-105%', 0, 0);
		} else {
			infodiv.stop().animate({
				right: 0
			}, 480, 'ioExp');
			titlediv.stop().animate({
				left: 0
			}, 480, 'ioExp');
			slideMask.stop().transit({
				left: '-105%'
			}, 0);
		}
	}

	// テキストオーバーフロー処理
	var saveText = [];

	function initOverflowText() {
		$('.eventreport_item li a').each(function (index) {
			var atext = $(this).text();
			saveText.push(atext)
		});
	}

	function setOverflowText() {
		$('.eventreport_item li a').each(function (index) {
			var atext = saveText[index];
			$(this).text(atext);
			while ($(this).height() > 40) {
				atext = atext.substr(0, atext.length - 1);
				$(this).text(atext + '...');
			}
		});
	}

	// GET パラメータ
	function getParam() {
		var url = location.href;
		parameters = url.split("?");
		if (parameters.length > 1) {
			params = parameters[1].split("&");
			var paramsArray = [];
			for (i = 0; i < params.length; i++) {
				neet = params[i].split("=");
				paramsArray.push(neet[0]);
				paramsArray[neet[0]] = neet[1];
			}
			return paramsArray;
		} else {
			return [];
		}
	}
	var param = getParam();

	// スクロール
	setScrollListener = function () {
		Shared.util.addScrollListener(function (T, B, L, R) {
			//console.log(T);
			// トップスライド
			if (T >= 600) {
				$('#heroSlide').triggerHandler('stopTimer.slide');
				slideActive = false;
			} else {
				$('#heroSlide').triggerHandler('startTimer.slide');
				slideActive = true;
			}
			// bg animn
			if (Polaris.html.hasWebgl && !('debug' in param)) {
				if (T >= 600) {
					animationCircles.resume();
				} else {
					animationCircles.pause();
				}
			}
		}, window, false);
	}

	// Modal
	setModalEvent = function () {
		//console.log(window.modalController);//debug
	}


	$(function () {

		$(window).load(function () {

			initOverflowText();

			$('#load').delay(1200).queue(function (next) {

				setOverflowText();

				$(this).fadeOut(380, function () {


					//setTitleList();
					//TitleListIntro();
					heroSlideSet();
					bgAnimInit();
					setScrollListener();
					setModalEvent();
				});

				next();
			});

		});
	});

	$(window).resize(function (e) {
		setOverflowText();
	});


}(jQuery);