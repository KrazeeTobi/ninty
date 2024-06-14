
// remvoe no-js
(function(){
	if(document.documentElement.className.indexOf('no-js') !== -1){
		document.documentElement.className = document.documentElement.className.replace('no-js', '');
		if(document.documentElement.className == '') document.documentElement.removeAttribute('class');
	}
})();

(function(){
	"use strict";

	var USE_CSS3 = true;

	window.Shared = (function(){

		/*****************************************************************************************************************
		 * ���[�U�[�G�[�W�F���g����
		 *****************************************************************************************************************/

		var _ua = window.navigator.userAgent.toLowerCase(),
		    _IE, _IEver,
		    _Chrome, _ChromeVer,
		    _FireFox, _FireFoxVer,
		    _Safari, _SafariVer,
		    _Opera, _OperaVer,
		    _Mac, _iPhone, _iPad, _iPod, _iOSver,
		    _Android, _AndroidMobile, _AndroidTablet, _AndroidVer,
		    _WindowsPhone, _nexus7,
			_3ds, _dsi, _wii, _wiiu, _ps3, _ps4, _psp, _psv, _xbox,
			_bot;

		// �u���E�U
		if (_ua.indexOf("msie") != -1){
			_IE = true;
			_ua.match(/msie (\d+\.\d)/);
			_IEver = parseFloat(RegExp.$1);

		}else if(_ua.indexOf('trident') != -1){
			_IE = true;
			_ua.match(/rv:(\d+\.\d)/);
			_IEver = parseFloat(RegExp.$1);

		}else if (_ua.indexOf("chrome")  != -1){
			_Chrome = true;
			_ua.match(/chrome[\/ ]?(\d+\.\d+)/);
			_ChromeVer = parseFloat(RegExp.$1);

		}else if (_ua.indexOf("firefox") != -1){
			_FireFox = true;
			_ua.match(/firefox[\/ ]?(\d+\.\d+)/);
			_FireFoxVer = parseFloat(RegExp.$1);

		}else if (_ua.indexOf("opera")   != -1){
			_Opera = true;
			_ua.match(/opera[\/ ]?(\d+\.\d+)/);
			_OperaVer = parseFloat(RegExp.$1);

		}else if (_ua.indexOf("safari")  != -1){
			_Safari = true;
			_ua.match(/version[\/ ]?(\d+\.\d+)/);
			_SafariVer = parseFloat(RegExp.$1);
		}

		// ���o�C��
		if (_ua.indexOf("iphone") != -1){
			_iPhone = true;
			_ua.match(/iphone os (\d+)_(\d+)/);
			_iOSver = RegExp.$1*1 + RegExp.$2*0.1;

		}else if (_ua.indexOf("ipad") != -1){
			_iPad = true;
			_ua.match(/cpu os (\d+)_(\d+)/);
			_iOSver = RegExp.$1*1 + RegExp.$2*0.1;

		}else if (_ua.indexOf("ipod") != -1){
			_iPod = true;
			_ua.match(/os (\d+)_(\d+)/);
			_iOSver = RegExp.$1*1 + RegExp.$2*0.1;

		}else if (_ua.indexOf("android") != -1){
			_Android = true;
			_ua.match(/android (\d+\.\d)/);
			_AndroidVer = parseFloat(RegExp.$1);

			if(_ua.indexOf('mobile') != -1){
				_AndroidMobile = true;
			}else{
				_AndroidTablet = true;
			}
		}else if (_ua.indexOf("windows phone") != -1) {
			_WindowsPhone = true;
		}

		
		if(_ua.indexOf('mac os') != -1){
			_Mac = true;
		}
		if(_ua.indexOf('nexus 7') != -1){
			_nexus7 = true;
		}

		// �Q�[���@
		if(_ua.indexOf('playstation 3') != -1){
			_ps3 = true;
		}
		if(_ua.indexOf('playstation 4') != -1){
			_ps4 = true;
		}
		if(_ua.indexOf('playstation portable') != -1){
			_psp = true;
		}
		if(_ua.indexOf('playstation vita') != -1){
			_psv = true;
		}
		if(_ua.indexOf('nintendo') != -1){
			if(_ua.indexOf('dsi;') != -1){
				_dsi = true;
			}else if(_ua.indexOf('3ds;') != -1){
				_3ds = true;
			}else if(_ua.indexOf('wii;') != -1){
				_wii = true;
			}else if(_ua.indexOf('wiiu') != -1){
				_wiiu = true;
			}
		}


		// ���̑�
		if(_ua.indexOf('mac os') != -1){
			_Mac = true;
		}
		if(_ua.indexOf('nexus 7') != -1){
			_nexus7 = true;
		}

		// BOT
		if(_ua.indexOf('googlebot') != -1 || _ua.indexOf('yahoo') != -1 || _ua.indexOf('msnbot') != -1){
			_bot = true;
		}

		var ua = {
			// IE�n
			 isIE     : !!_IE
			,isIE6    : (_IEver == 6.0)
			,isIE7    : (_IEver == 7.0)
			,isIE8    : (_IEver == 8.0)
			,isIE9    : (_IEver == 9.0)
			,isIE10   : (_IEver == 10.0)
			,isIE11   : (_IEver == 11.0)
			,isIEgt6  : !!(_IEver > 6)
			,isIEgt7  : !!(_IEver > 7)
			,isIEgt8  : !!(_IEver > 8)
			,isIEgt9  : !!(_IEver > 9)
			,isIEgt10 : !!(_IEver > 10)
			,isIEgt11 : !!(_IEver > 11)
			,isIElt6  : !!(_IE && _IEver < 6)
			,isIElt7  : !!(_IE && _IEver < 7)
			,isIElt8  : !!(_IE && _IEver < 8)
			,isIElt9  : !!(_IE && _IEver < 9)
			,isIElt10 : !!(_IE && _IEver < 10)
			,isIElt11 : !!(_IE && _IEver < 11)

			// �X�}�[�g�t�H���n
			,isiPhone : !!_iPhone
			,isiPad   : !!_iPad
			,isiPod   : !!_iPod
			,isiOS    : !!(_iPhone || _iPad || _iPod)
			,isAndroid       : !!_Android
			,isAndroidMobile	: !!_AndroidMobile
			,isAndroidTablet : !!_AndroidTablet
			,isWindowsPhone : !!_WindowsPhone
			,isSmartPhone   : (!!_iPhone || !!_iPad || !!_iPod || !!_Android || !!_WindowsPhone)
			,isMobile       : (!!_iPhone || !!_iPod || !!_AndroidMobile || !!_WindowsPhone)
			,isTablet       : (!!_iPad || !!_AndroidTablet)
			,isNexus7       : (!!_nexus7)

			// �Q�[���n
			,isPS3    : (!!_ps3)
			,isPS4    : (!!_ps4)
			,isPSP    : (!!_psp)
			,isPSV    : (!!_psv)
			,is3DS    : (!!_3ds)
			,isDSi    : (!!_dsi)
			,isWii    : (!!_wii)
			,isWiiU   : (!!_wiiu)

			// �u���E�U���
			,isSafari       : !!_Safari
			,isChrome       : !!_Chrome
			,isOpera        : !!_Opera
			,isFireFox      : !!_FireFox
			,isMac          : !!_Mac

			// �u���E�U�o�[�W����
			,verIE      : _IEver
			,verFireFox : _FireFoxVer
			,verChrome  : _ChromeVer
			,verSafari  : _SafariVer
			,verOpera   : _OperaVer
			,verAndroid : _AndroidVer
			,veriOS     : _iOSver

			// ���̑�
			,isBot : !!_bot
		};


		/*****************************************************************************************************************
		 * CSS�@�\����
		 *****************************************************************************************************************/

		var style  = document.createElement('div').style;
		var vendor = '';
		var prefix = '';

		var hasRGBA           = false;
		var hasZoom           = ('zoom' in style);
		var hasOpacity        = ('opacity' in style);
		var hasBoxShadow      = ('box-shadow' in style || 'boxShadow' in style);
		var hasBorderRadius   = ('border-radius' in style || 'borderRadius' in style);
		var hasBackgroundSize = ('background-size' in style || 'backgroundSize' in style);
		var hasTransition     = false;
		var hasAnimation      = false;
		var transitionEnd     = false;
		var hasFilter         = false;
		var hasMediaQuery     = false;
		var hasPositionFixed  = false;


		// RGBA
		try{
			style.backgroundColor = 'rgba(255,0,0,0.5)';
			hasRGBA = (style.backgroundColor.indexOf('rgba') == 0);
		}catch(e){}

		// vendor prefix
		prefix = (function(){
			var _vendors = ['o', 'ms', 'moz', 'Moz', 'webkit', ''];

			vendor = '';

			for(var i=1; i<_vendors.length; i++){
				if(_vendors[i] + 'Transform' in style){
					if(_vendors[i] != ''){
						vendor = _vendors[i].toLowerCase();
						return '-' + vendor + '-';
					}else{
						vendor = '';
						return '';
					}
				}
			}
			return '';
		})();

		// transition
		hasTransition = (function(){
			var prefixT = ['oT', 'msT', 'mozT', 'MozT', 'webkitT', 't'];

			for(var i=0; i<prefixT.length; i++){
				var property = prefixT[i] + 'ransition';
				if(property in style){
					style[property] = '';
					style[property] = 'left 1ms linear 1ms';
					if(style[property] != ''){
						if(property.indexOf('webkit') == 0){
							transitionEnd = 'webkitTransitionEnd';
						}else{
							transitionEnd = 'transitionend';
						}
						return true;
					}
				}
			}
			return false;
		})();

		// animation
		hasAnimation = (function(){
			var prefixA = ['oA', 'msA', 'mozA', 'MozA', 'webkitA', 'a'];
			for(var i=0; i<prefixA.length; i++){
				var property = prefixA[i] + 'nimation';
				if(property in style){
					style[property] = '';
					style[property] = 'check 1ms ease 0ms infinite';
					if(style[property] != ''){
						return true;
					}
				}
			}
			return false;
		})();

		// filter
		hasFilter = (function(){
			var prefixF = ['oF', 'msF', 'mozF', 'MozF', 'webkitF', 'f'];
			for(var i=0; i<prefixF.length; i++){
				var property = prefixF[i] + 'ilter';
				if(property in style){
					style[property] = '';
					style[property] = 'blur(10px)';
					if(style[property] != ''){
						if(_IE){
							return (typeof history.pushState === 'function');
						}else{
							return true;
						}

					}
				}
			}
			return false;
		})();

		// media query
		hasMediaQuery = (function(){
			if(typeof window.matchMedia == 'function'){
				try{
					return !!window.matchMedia('all').matches;
				}catch(ex){
					return (ua.isFireFox && window.parent != window);
				}
			}else if(typeof window.msMatchMedia == 'function'){
				return !!window.msMatchMedia('all').matches;
			}else{
				var dummyDiv = document.createElement('div');
				var checkDiv = document.createElement('div');
				var dummyCSS = '<style>@media all and (min-width: 0px) {#mqdummyelement{position:absolute;}}</style>';
				var head = document.getElementsByTagName('head')[0];

				dummyDiv.innerHTML = dummyCSS;
				head.appendChild(dummyDiv)

				checkDiv.setAttribute('id', 'mqdummyelement');
				dummyDiv.appendChild(checkDiv);

				var _has = (window.getComputedStyle ? getComputedStyle(checkDiv, null) : checkDiv.currentStyle)['position'] == 'absolute';
				head.removeChild(dummyDiv);

				return _has;
			}
		})();

		// position:fixed
		hasPositionFixed = (function(){
			// �N��������
			return true;
		})();


		// transform
		var transform = {
			'translate'   : '1px, 1px',
			'translate3d' : '1px, 1px, 1px',
			'translateX'  : '1px',
			'translateY'  : '1px',
			'translateZ'  : '1px',
			'scale'       : '0, 0',
			'scale3d'     : '0, 0, 0',
			'scaleX'      : '1',
			'scaleY'      : '1',
			'scaleZ'      : '1',
			'rotate'      : '1deg',
			'rotate3d'    : '1, 1, 1, 1deg',
			'rotateX'     : '1deg',
			'rotateY'     : '1deg',
			'rotateZ'     : '1deg',
			'skew'        : '1deg, 1deg',
			'skewX'       : '1deg',
			'skewY'       : '1deg',
			'matrix'      : '1, 0, 0, 1, 1, 1',
			'matrix3d'    : '1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1',
			'perspective' : '100px'
		};

		if(USE_CSS3 && ('transform' in style || prefix+'transform' in style)){
			for(var property in transform){
				var val = property + '(' + transform[property] + ')';

				style[prefix+'transform'] = '';
				style[prefix+'transform'] = val;

				if(style[prefix+'transform'] != ''){
					transform[property] = true;
				}else{
					transform[property] = false;
				}
			}
		}else{
			for(var property in transform){
				transform[property] = false;
			}
		}

		var css = {
			// �u���E�U�x���_�[�̕�����
			 vendor : vendor

			// CSS�v���t�B�b�N�X�̕�����
			,prefix : prefix

			// rgba()�ɂ��F�w�肪�\���ǂ���
			,hasRGBA           : hasRGBA

			// zoom���g�p�\���ǂ���
			,hasZoom           : hasZoom

			// �v���t�B�b�N�X�Ȃ���opacity���g�p�\���ǂ���
			,hasOpacity        : hasOpacity

			// �v���t�B�b�N�X�Ȃ���boxshadow���g�p�\���ǂ���
			,hasBoxShadow      : hasBoxShadow

			// �v���t�B�b�N�X�Ȃ���border-radius���g�p�\���ǂ���
			,hasBorderRadius   : hasBorderRadius

			// �v���t�B�b�N�X�Ȃ���background-size���g�p�\���ǂ���
			,hasBackgroundSize : hasBackgroundSize

			// ���f�B�A�N�G�����g�p�\���ǂ���
			,hasMediaQuery     : hasMediaQuery

			// ���f�B�A�N�G�����g�p�\���ǂ���
			,hasMediaQueries   : hasMediaQuery

			// positon:fixed���g�p�\���ǂ���
			,hasPositionFixed  : hasPositionFixed

			// �g�p�\��transform����I�u�W�F�N�g
			,transform     : transform

			// transition���g�p�\���ǂ���
			,hasTransition : (USE_CSS3 ? hasTransition : false)

			// css-animation���g�p�\���ǂ���
			,hasAnimation  : (USE_CSS3 ? hasAnimation  : false)

			// transtion-end���g�p�\���ǂ���
			,transitionEnd : (USE_CSS3 ? transitionEnd : false)

			// filter���g�p�\���ǂ���
			,hasFilter     : (USE_CSS3 ? hasFilter : false)
		};


		/*****************************************************************************************************************
		 * HTML�@�\����
		 *****************************************************************************************************************/

		var hasFlash = false;

		try {
			hasFlash = !!(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
		}catch(e){
			hasFlash = (navigator.mimeTypes ["application/x-shockwave-flash"] != undefined);
		}

		var html = {
			// Flash���g�p�\���ǂ���
			 hasFlash  : hasFlash

			// canvas���g�p�\���ǂ���
			,hasCanvas : !!document.createElement('canvas').getContext

			// video�^�O���g�p�\���ǂ���
			,hasVideo  : !!document.createElement('video').canPlayType

			// audio�^�O���g�p�\���ǂ���
			,hasAudio  : !!document.createElement('audio').canPlayType

			// SVG���g�p�\���ǂ���
			,hasSVG    : !!(document.createElementNS && document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect)

			// WebGL���g�p�\���ǂ���
			,hasWebGL  : !!window.WebGLRenderingContext

			// GPS���g�p�\���ǂ���
			,hasGeolocation : ('geolocation' in navigator)

			// WebSocket���g�p�\���ǂ���
			,hasWebSocket   : ('WebSocket' in window || 'MozWebSocket' in window)

			// WebWorker���g�p�\���ǂ���
			,hasWebWorkers  : ('Worker' in window)

			// HistoryAPI���g�p�\���ǂ���
			,hasHistoryAPI  : (typeof history.pushState === 'function' && 'onpopstate' in window)

			// LocalStorage���g�p�\���ǂ���
			,hasLocalStorage : ('localStorage' in window)

			// SessionStorage���g�p�\���ǂ���
			,hasSessionStorage : ('sessionStorage' in window)

			,hasFormData : ('FormData' in window)

			// �h���b�O&�h���b�vAPI���g�p�\���ǂ���
			,hasDragAndDrop : ('ondrop' in document.createElement('div'))
		};


		
		/*****************************************************************************************************************
		 * �C�x���g�@�\����
		 *****************************************************************************************************************/

		var event = {
			// orientationchange�C�x���g(��ʂ̌����̕ύX)������
			 hasOrientationChange : ('onorientationchange' in window)

			// hashchange�C�x���g(URL�n�b�V���̕ω�)������
			,hasHashChange        : ('onhashchange' in window)

			// devicemotion�C�x���g(�����x�Z���T)������
			,hasDeviceMotion      : ('ondevicemotion' in window)

			// propertychange�C�x���g(HTML�^�O�̑����ύX)������
			,hasPropertyChange    : ('onpropertychange' in document.documentElement)
		};



		/*****************************************************************************************************************
		 * �[���@�\����
		 *****************************************************************************************************************/

		var device = {
			// �^�b�`�C�x���g���������邩�ǂ���
			 hasTouch       : ('ontouchstart' in window)

			// �����x�Z���T���g�p�\���ǂ���
			,hasMotion      : ('ondevicemotion' in window)

			// �����Z���T���g�p�\���ǂ���
			,hasOrientation : (typeof window.orientation !== 'undefined')

			// �[����devicepixelratio
			,pixelRatio     : (window.devicePixelRatio ? window.devicePixelRatio : 1)
		};


		/*****************************************************************************************************************
		 * �C�[�W���O
		 *****************************************************************************************************************/

		var __cubicBezierParams = {
			linear : null,
			swing : [0.250, 0.100, 0.250, 1.000],
			iX2 : [0.55, 0.085, 0.68, 0.53],
			oX2 : [0.25, 0.460, 0.45, 0.94],
			ioX2 : [0.455, 0.03, 0.515, 0.955],
			iX3 : [0.550, 0.055, 0.675, 0.190],
			oX3 : [0.215, 0.610, 0.355, 1.000],
			ioX3 : [0.645, 0.045, 0.355, 1.000],
			iX4 : [0.895, 0.030, 0.685, 0.220],
			oX4 : [0.165, 0.840, 0.440, 1.000],
			ioX4 : [0.770, 0.000, 0.175, 1.000],
			iX5 : [0.755, 0.050, 0.855, 0.060],
			oX5 : [0.230, 1.000, 0.320, 1.000],
			ioX5 : [0.860, 0.000, 0.070, 1.000],
			iSine : [0.470, 0.000, 0.745, 0.715],
			oSine : [0.390, 0.575, 0.565, 1.000],
			ioSine : [0.445, 0.050, 0.550, 0.950],
			iExp : [0.950, 0.050, 0.795, 0.035],
			oExp : [0.190, 1.000, 0.220, 1.000],
			ioExp : [1.000, 0.000, 0.000, 1.000],
			iCirc : [0.600, 0.040, 0.980, 0.335],
			oCirc : [0.075, 0.820, 0.165, 1.000],
			ioCirc : [0.785, 0.135, 0.150, 0.860],
			iBack : [0.600, -0.280, 0.735, 0.045],
			oBack : [0.175, 0.885, 0.320, 1.275],
			ioBack : [0.680, -0.550, 0.265, 1.550]
		};

		var easing = {

			/*
			 * �o�E���h����C�[�W���O
			 * @param n �o�E���h��-1
			 * @param s ����
			 */
			bounce : function(x, n, s){
				var a = [1];
				var p = 2/n/n;
				for(var i=1; i<n; i++) a[a.length] = 1-p*i*(i+1)/2;
				a[a.length] = -n*p/2;

				for(var i=0; i<a.length; i++){
					if(x > a[i]){
						if(i == a.length-1){
							return x*x/(n*p/2)/(n*p/2);
						}else{
							return s*(x-a[i])*(x-a[i-1])+1;
						}
					}
				}
			},

			/*
			 * �e���C�[�W���O
			 * @param c ��]��
			 * @param a �I�t�Z�b�g
			 * @param s ����
			 */
			elastic : function(x, c, a, s){
				if(x < a){
					return Math.exp(10*(x/a-1));
				}else{
					return 1 + s*Math.exp((a-x)*5)*Math.sin(360*c*(x-a)/(1-a)*Math.PI/180);
				}
			},

			/*
			 * �C�[�W���O����cubic-bezier�ɕϊ�����֐�
			 */
			parse : function(name){
				if(name in __cubicBezierParams){
					var easing = __cubicBezierParams[name];

					if(easing != null){
						return 'cubic-bezier('+easing[0]+', '+easing[1]+', '+easing[2]+', '+easing[3]+')';
					}else{
						return 'linear';
					}
				}else{
					return 'linear';
				}
			}
		};


		/*****************************************************************************************************************
		 * �֗��֐�
		 *****************************************************************************************************************/

		var resizeListeners = null;
		var scrollListeners = null;
		var winW;
		var winH;
		var seeds = [123456789, 362436069, 521288629, 88675123];


		function startResizeObserver(){
			if(resizeListeners === null){
				resizeListeners = [];

				winW = window.innerWidth  || document.documentElement.clientWidth;
				winH = window.innerHeight || document.documentElement.clientHeight;

				var handler = function(){
					winW = window.innerWidth  || document.documentElement.clientWidth;
					winH = window.innerHeight || document.documentElement.clientHeight;
					for(var i=0; i<resizeListeners.length; i++){
						resizeListeners[i].callback.call(resizeListeners[i].thisObject, winW, winH);
					}
				};

				if(window.addEventListener){
					window.addEventListener('resize', handler, false);
					window.addEventListener('orientationchange', function(){
						setTimeout(handler, 1000);
					}, false);
				}else{
					window.attachEvent('onresize', handler);
				}
			}
		}

		function startScrollObserver(){
			if(scrollListeners === null){
				scrollListeners = [];

				var handler = function(){
					var t = document.body.scrollTop || document.documentElement.scrollTop;
					var l = document.body.scrollLeft || document.documentElement.scrollLeft;
					var b = t + winH;
					var r = l + winW;

					for(var i=0; i<scrollListeners.length; i++){
						scrollListeners[i].callback.call(scrollListeners[i].thisObject, t, b, l, r);
					}
				};

				if(window.addEventListener){
					window.addEventListener('scroll', handler, false);
				}else{
					window.attachEvent('onscroll', handler);
				}
			}
		}


		var util = {
			/*
			 * �[�����ߊ֐�
			 * @param n number
			 * @param d digit
			 * ex) zeroPad(12, 4) => 0012
			 */
			zeroPad : function(n, d){
				if(typeof d == 'number'){
					var len = (n+'').length;
					if(len < d) for(var i=0; i<d-len; i++) n = '0' + n;
					return n+'';
				}else{
					return n+'';
				}
			},

			/*
			 * �L�������L�@��CSS�̋L�@�ɕϊ�����֐��B
			 */
			reverseCamelCase : function(arg){
				if(typeof arg == 'string'){
					return arg.split(/(?=[A-Z])/).join('-').toLowerCase();
				}
				return arg;
			},

			/*
			 * requestAnimationFrame�̃��b�p�[�B
			 * @param fn �R�[���o�b�N�֐�
			 * @param fps requestAnimationFrame���g���Ȃ��ꍇ��FPS�B�ȗ������ꍇ�́A30fps�B
			 * 
			 * �R�[���o�b�N�֐��̈����́A[�o�ߎ���, �O��`�悩��̌o�ߎ���, �`��J�n����̌o�ߎ���]
			 * �R�[���o�b�N�֐�����false��Ԃ��ƁA�I������B
			 */
			reqAF : function(fn, fps){
				var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.setTimeout;
				var cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.clearTimeout;

				var t0 = +new Date();
				var pt = t0;
				var dt = (fps ? 1000/fps : 30);
				var id = null;

				function tick(){
					var t1 = +new Date();

					id = requestAnimationFrame(tick, dt);

					if(fn(t1, t1-pt, t1-t0, id) === false){
						cancelAnimationFrame(id);
					}
					pt = t1;
				}
				id = requestAnimationFrame(tick, dt);
			},

			cancelAF : function(id){
				var cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.clearTimeout;
				cancelAnimationFrame(id);
			},

			/*
			 * �z��I�u�W�F�N�g�����肷��֐��B
			 */
			isArray : function(arg){
				return (
					   arg
					&& typeof arg == 'object'
					&& typeof arg.length == 'number'
					&& typeof arg.splice === 'function'
				);
			},

			/*
			 * 16�i���J���[�R�[�h���A���l�z��ɕϊ�����֐��B
			 * ex) #aabbff => [170, 187, 255]
			 */
			hex2rgb : function(arg){
				var hexCode = new Array(3);

				if(arg.match(/#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/)){
					hexCode[0] = RegExp.$1;
					hexCode[1] = RegExp.$2;
					hexCode[2] = RegExp.$3;
				}else if(arg.match(/#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/)){
					hexCode[0] = RegExp.$1 + '' + RegExp.$1;
					hexCode[1] = RegExp.$2 + '' + RegExp.$2;
					hexCode[2] = RegExp.$3 + '' + RegExp.$3;
				}else{
					hexCode = null;
				}

				if(hexCode){
					var rgb = [0, 0, 0];

					for(var i=0; i<3; i++){
						rgb[i] = parseInt(hexCode[i], 16);
					}
					return rgb;
				}
				return null;
			},

			/*
			 * �F�z���16�i���J���[�R�[�h�ɕϊ�����֐��B#�����ĕԂ��Ă���̂Œ��ӁB
			 * ex) [170, 187, 255] => #aabbff
			 */
			rgb2hex : function(arg){
				if(util.isArray(arg)){
					return '#' + arg[0].toString(16) + arg[1].toString(16) + arg[2].toString(16);
				}else{
					return '#' + arguments[0].toString(16) + arguments[1].toString(16) + arguments[2].toString(16);
				}
			},

			/*
			 * URL�����֐��B
			 * @param arg URL�B�ȗ������ꍇ�́A���݂�URL�B
			 */
			parseURI : function(arg){
				var p = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
				var r = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
				var m = r.exec(arg || location.href);
				var u = {}
				var i = p.length;

				while(i--){
					u[p[i]] = m[i] || '';
				}
				return u;
			},

			/*
			 * �N�G���p�����[�^���I�u�W�F�N�g������֐��B
			 * @param arg URL�B�ȗ������ꍇ�́A���݂�location.search�B
			 */
			parseParam : function(arg){
				var param = {};

				if(!arg){
					arg = location.search;
				}
				if(arg && arg.indexOf('?') != -1){
					arg = arg.split('?')[1];
				}else{
					arg = false;
				}
				if(arg){
					var _f = arg.split('&');

					for(var i=0; i<_f.length; i++){
						if(_f[i].indexOf('=') != -1){
							var _p = _f[i].split('=');
							param[_p[0]] = _p[1];
						}else{
							param[_f[i]] = '';
						}
					}
				}
				return param;
			},

			/*
			 * �N���X�p�����s���֐��B
			 * @param superClass �e�N���X
			 * @param subConstructor�@�q�N���X�̃R���X�g���N�^
			 * @param methods ���N���X�ɓo�^���郁�\�b�h(�I�u�W�F�N�g�`��)�B

			 * @return ���N���X�̒�`�B
			 */
			extend : function(superClass, subConstructor, methods){
				if (typeof Object.create !== 'function') {
					Object.create = function(o) {
						var F = function(){};
						F.prototype = o;
						return new F();
					};
				}
				subConstructor.prototype = Object.create(superClass.prototype);
				subConstructor.prototype.constructor = subConstructor;

				subConstructor.prototype.__super__ = superClass.prototype;
				subConstructor.prototype.__super__.constructor = superClass;

				// �X�[�p�[�R���X�g���N�^
				//superClass.apply(this, args);

				if(typeof methods == 'object'){
					for(name in methods){
						subConstructor.prototype[name] = methods[name];
					}
				}
				return subConstructor;
			},

			/*
			 * �T�C�Y�ύX���̃��X�i��o�^����֐��B
			 * @param fn �R�[���o�b�N�֐��B�֐��ɂ͈����Ƃ��āA[��ʕ�, ��ʍ�]���n�����B
			 * @param thisObject �R�[���o�b�N�֐�����this�I�u�W�F�N�g
			 * @param init �o�^����Ɏ��s���邩�ǂ����B�ȗ������ꍇ�́Atrue�B
			 */
			addResizeListener : function(fn, thisObject, init){
				if(typeof fn === 'function'){
					startResizeObserver();

					if(thisObject === undefined) thisObject = window;

					resizeListeners[resizeListeners.length] = {callback:fn, thisObject:thisObject};

					if(init === undefined || init){
						fn.call(thisObject, winW, winH);
					}
				}
			},

			/*
			 * �X�N���[�����̃��X�i��o�^����֐��B
			 * @param fn �R�[���o�b�N�֐��B�֐��ɂ͈����Ƃ��āA[�X�N���[���g�b�v, �X�N���[���{�g��, �X�N���[�����t�g, �X�N���[�����C�g]���n�����B
			 * @param thisObject �R�[���o�b�N�֐�����this�I�u�W�F�N�g
			 * @param init �o�^����Ɏ��s���邩�ǂ����B�ȗ������ꍇ�́Atrue�B
			 */
			addScrollListener : function(fn, thisObject, init){
				if(typeof fn === 'function'){
					startResizeObserver();
					startScrollObserver();

					if(thisObject === undefined) thisObject = window;

					scrollListeners[scrollListeners.length] = {callback:fn, thisObject:thisObject};

					if(init === undefined || init){
						var t = document.body.scrollTop || document.documentElement.scrollTop;
						var l = document.body.scrollLeft || document.documentElement.scrollLeft;
						var b = t + winH;
						var r = l + winW;
						fn.call(thisObject, t, b, l, r);
					}
				}
			},

			/*
			 * ���T�C�Y���̃��X�i���폜����֐��B
			 * @param fn �폜����R�[���o�b�N�֐��B
			 */
			removeResizeListener : function(fn){
				if(resizeListeners !== null){
					for(var i=0; i<resizeListeners.length;){
						fn == resizeListeners[i].callback ? resizeListeners.splice(i, 1) : i++;
					}
				}
			},

			/*
			 * �X�N���[�����̃��X�i���폜����֐��B
			 * @param fn �폜����R�[���o�b�N�֐��B
			 */
			removeScrollListener : function(fn){
				if(scrollListeners !== null){
					for(var i=0; i<scrollListeners.length;){
						fn == scrollListeners[i].callback ? scrollListeners.splice(i, 1) : i++;
					}
				}
			},

			/*
			 * cookie�ǂݍ���/�������݊֐��B
			 * @param name ��1�����݂̂̏ꍇ�́A�ǂݍ��݂��s���B��2���������݂���ꍇ�́A�������݂��s���B
			 * @param value �������ޒl�B
			 * @param options path�Adomain�Aexpires�Asecure�̐ݒ肪�\�B
			 * 
			 * expires�́A�ۑ��b���܂��͐��l+�P�ʂŐݒ肷��B
			 * ex1) 3600 => 1����
			 * ex2) 1month => 30��
			 */
			cookie : function(){
				var name = arguments[0];

				if(!!name){
					if(arguments.length > 1){
						// write
						var value   = (arguments[1] || '');
						var options = (arguments[2] || {});

						var path    = options.path   ? '; path=' + (options.path) : '';
	        			var domain  = options.domain ? '; domain=' + (options.domain) : '';
	       				var secure  = options.secure ? '; secure' : '';
						var expires = options.expires ? options.expires : '';

						if(expires != ''){
							var date;

							if(typeof expires == 'number'){
								date = new Date();
								date.setTime(date.getTime() + expires*1000);
							}else if(expires.toUTCString){
								date = expires;
							}else if(typeof expires == 'string'){
								var msec = 0;

								if(expires.match(/^([0-9]+)second(s)?$/)){
									msec = (RegExp.$1-0)*1000;
								}else if(expires.match(/^([0-9]+)minute(s)?$/)){
									msec = (RegExp.$1-0)*60*1000;
								}else if(expires.match(/^([0-9]+)hour(s)?$/)){
									msec = (RegExp.$1-0)*60*60*1000;
								}else if(expires.match(/^([0-9]+)day(s)?$/)){
									msec = (RegExp.$1-0)*24*60*60*1000;
								}else if(expires.match(/^([0-9]+)week(s)?/)){
									msec = (RegExp.$1-0)*7*24*60*60*1000;
								}else if(expires.match(/^([0-9]+)month(s)?$/)){
									msec = (RegExp.$1-0)*30*24*60*60*1000;
								}else if(expires.match(/^([0-9]+)year(s)?$/)){
									msec = (RegExp.$1-0)*365*24*60*60*1000;
								}
								if(msec > 0){
									date = new Date();
									date.setTime(date.getTime() + msec);
								}
							}
							if(date) expires = '; expires=' + date.toUTCString();
						}
						document.cookie = name + '=' + encodeURIComponent(value) + path + domain + secure + expires;
					}else{
						// read
						if(!!document.cookie){
							var sp = document.cookie.split(';');

							for(var i=0; i<sp.length; i++){
								var pair = sp[i].split('=');
								if(jQuery.trim(pair[0]) == name){
									return decodeURIComponent(jQuery.trim(pair[1]));
								}
							}
						}
						return undefined;
					}
				}
			},

			/*
			 * �����V�[�h�ݒ�֐��B
			 * @param seed �V�����V�[�h�l
			 */
			srand : function(seed){
				if(!isNaN(seed)){
					seed = parseInt(seed);
					seeds[2] ^= seed;
					seeds[2] ^= seeds[2] >> 21;
					seeds[2] ^= seeds[2] << 35;
					seeds[2] ^= seeds[2] >> 4;
					seeds[2] *= 268582165;
					util.rand();
					util.rand();
				}
			},

			/*
			 * �������������֐��B�A���S���Y����xorshift���g�p
			 * @param min �ŏ��l
			 * @param max �ő�l-1
			 * �������ȗ������ꍇ�́A�����n�Ɉˑ����鐳�����l��Ԃ��B
			 */
			rand : function(min, max){
				var t = (seeds[0]^(seeds[0]<<11));
				seeds[0]=seeds[1];
				seeds[1]=seeds[2];
				seeds[2]=seeds[3];
				
				var r = ( seeds[3]=(seeds[3]^(seeds[3]>>19))^(t^(t>>8)) );

				if(arguments.length >= 2){
					return min + r%(max-min);
				}else{
					return r;
				}
			},

			/*
			 * �z��V���b�t���֐��B
			 * @param arr �V���b�t������z��
			 * @param overwrite �z����㏑�����邩�ǂ���
			 */
			shuffle : function(arr, overwrite){
				if(util.isArray(arr)){
					if(overwrite || overwrite === undefined){
						for(var i=0; i<arr.length; i++){
							var j = util.rand(0, arr.length);
							var t = arr[i];
							arr[i] = arr[j];
							arr[j] = t;
						}
					}else{
						var index = [];
						
						for(var i=0; i<arr.length; i++){
							index[i] = i;
						}
						for(var i=0; i<index.length; i++){
							var j = util.rand(0, index.length);
							var t = index[i];
							index[i] = index[j];
							index[j] = t;
						}
						for(var i=0; i<index.length; i++){
							index[i] = arr[index[i]];
						}
						return index;
					}
				}
			}
		};


		/*****************************************************************************************************************
		 * ready�C�x���g
		 *****************************************************************************************************************/

		var readyFn = [];

		function ready(fn){
			if(document.readyState === 'complete'){
				fn.call();
			}else{
				readyFn[readyFn.length] = fn;
			}
		};
		function doReady(){
			for(var i=0; i<readyFn.length; i++){
				readyFn[i].call();
			}
		}
		function check(){
			try {
				document.documentElement.doScroll('left');
			} catch(e) {
				setTimeout(check, 4);
				return;
			}
			doReady();
		}

		if(document.readyState === 'complete'){
			doReady();
		}else{
			if(document.addEventListener){
				document.addEventListener('DOMContentLoaded', doReady, false);
			}else{
				check();
			}
		}

		

		/*****************************************************************************************************************
		 * public
		 *****************************************************************************************************************/

		// �ύX�s�ɂ���
		if(Object.freeze) ua = Object.freeze(ua);
		if(Object.freeze) css = Object.freeze(css);
		if(Object.freeze) html = Object.freeze(html);
		if(Object.freeze) event = Object.freeze(event);
		if(Object.freeze) device = Object.freeze(device);
	
		return {
			ua : ua,
			css : css,
			html : html,
			event : event,
			device : device,
			easing : easing,
			util : util,
			ready : ready
		};
	})();
})();


// jQuery�g��
if(typeof $ != 'undefined'){

	/*******************************************************************************************************************************
	 * Easing
	 *******************************************************************************************************************************/

	(function(){

		jQuery.extend(
			jQuery.easing, {
				 iX2  : function(x,t,b,c,d){ return x*x; }
				,oX2  : function(x,t,b,c,d){ return -x*(x-2); }
				,ioX2 : function(x,t,b,c,d){ return (x < 0.5 ? 2*x*x : 1-2*(--x)*x); }
				,oiX2 : function(x,t,b,c,d){ return (x < 0.5 ? -2*x*(x-1) : 1+2*x*(x-1)); }

				,iX3  : function(x,t,b,c,d){ return x*x*x; }
				,oX3  : function(x,t,b,c,d){ return 1+(--x)*x*x; }
				,ioX3 : function(x,t,b,c,d){ return (x < 0.5 ? 4*x*x*x: 1+4*(--x)*x*x); }

				,iX4  : function(x,t,b,c,d){ return x*x*x*x; }
				,oX4  : function(x,t,b,c,d){ return 1-(--x)*x*x*x; }
				,ioX4 : function(x,t,b,c,d){ return (x < 0.5 ? 8*x*x*x*x : 1-8*(--x)*x*x*x); }

				,iX5  : function(x,t,b,c,d){ return x*x*x*x*x; }
				,oX5  : function(x,t,b,c,d){ return 1+(--x)*x*x*x*x; }
				,ioX2 : function(x,t,b,c,d){ return (x < 0.5 ? 16*x*x*x*x*x : 1+16*(--x)*x*x*x*x); }

				,iExp  : function(x,t,b,c,d){ return Math.exp(10*(x-1)); }
				,oExp  : function(x,t,b,c,d){ return 1-Math.exp(-10*x); }
				,ioExp : function(x,t,b,c,d){ return (x < 0.5 ? 0.5*Math.exp(10*(x*2-1)) : 1-0.5*Math.exp(-10*(x-0.5)*2)); }

				,iSin  : function(x,t,b,c,d){ return 1-Math.cos(x*Math.PI/2); }
				,oSin  : function(x,t,b,c,d){ return Math.sin(x*Math.PI/2); }
				,ioSin : function(x,t,b,c,d){ return 0.5-0.5*Math.cos(x*Math.PI); }

				,iBack  : function(x,t,b,c,d){ var s=1.8; return x*x*((s+1)*x - s); }
				,oBack  : function(x,t,b,c,d){ var s=1.8; return 1 + (x-1)*(x-1)*((s+1)*(x-1) + s); }
				,ioBack : function(x,t,b,c,d){}

				,elastic  : function(x,t,b,c,d){ return Shared.easing.elastic(x, 3, 0.1, 0.4); }
				,elastic2 : function(x,t,b,c,d){ return Shared.easing.elastic(x, 2, 0.1, 0.4); }
				,elastic3 : function(x,t,b,c,d){ return Shared.easing.elastic(x, 3, 0.1, 0.4); }
				,elastic4 : function(x,t,b,c,d){ return Shared.easing.elastic(x, 4, 0.1, 0.4); }
				,elastic5 : function(x,t,b,c,d){ return Shared.easing.elastic(x, 5, 0.1, 0.4); }
				,elastic6 : function(x,t,b,c,d){ return Shared.easing.elastic(x, 6, 0.1, 0.4); }

				,bounce  : function(x,t,b,c,d){ return Shared.easing.bounce(x,4,5); }
				,bounce2 : function(x,t,b,c,d){ return Shared.easing.bounce(x,2,2); }
				,bounce3 : function(x,t,b,c,d){ return Shared.easing.bounce(x,3,4); }
				,bounce4 : function(x,t,b,c,d){ return Shared.easing.bounce(x,4,5); }
				,bounce5 : function(x,t,b,c,d){ return Shared.easing.bounce(x,5,7); }
				,bounce6 : function(x,t,b,c,d){ return Shared.easing.bounce(x,6,9); }
			}
		);
	})();
	

	

	/*******************************************************************************************************************************
	 * Utility
	 *******************************************************************************************************************************/

	var dummyElement = null;

	jQuery.extend({
		preload : function(src){
			if(!dummyElement){
				dummyElement = document.createElement('div');
				dummyElement.style.cssText = 'position:absolute; left:-9999px; top:-9999px; display:none';
				document.body.appendChild(dummyElement);
			}
			var img = document.createElement('img');
			img.src = src;
			img.setAttribute('width', 'auto');
			img.setAttribute('height', 'auto');
			dummyElement.appendChild(img);
		},

		useVML : function(){
			if(document.namespaces){
				if(!document.namespaces['v']){
					if(Shared.ua.isIE8){
						document.namespaces.add('v', 'urn:schemas-microsoft-com:vml', '#default#VML');
					}else{
						document.namespaces.add('v', 'urn:schemas-microsoft-com:vml');
					}
					document.createStyleSheet().cssText = "v\\:rect, v\\:fill, v\\:shape, v\\:group, v\\:path, v\\:oval, v\\:image { behavior: url(#default#VML); display:inline-block; margin:0; padding:0; zoom:1; position:relative; }";
					document.createStyleSheet().cssText = "._rewrited2vml {visibility:hidden !important; position:absolute !important; top:-9999px !important; left:-9999px !important;}";
				}
				return true;
			}else{
				return false;
			}
		}
	});

	jQuery.fn.extend({

		img2vml : function(){
			if(Shared.ua.isIElt9){
				if(document.namespaces){
					jQuery.useVML();

					var images = this.filter('img');

					images.each(function(i){
						var img = this;
						var src = this.getAttribute('src');

						if(images.eq(i).hasClass('_rewrited2vml')){
							return true;
						}else{
							images.eq(i).addClass('_rewrited2vml');
						}
						if(Shared.ua.isIElt8){
							images.eq(i).css({visibility:'hidden', position:'absolute', top:'-9999px', left:'-9999px'});
						}
						if(Shared.ua.isIE8){
							var dummy = document.createElement('div');
							dummy.innerHTML = '<v:rect><v:fill></v:fill></v:rect>';
							var rect = dummy.firstChild;
							var fill = rect.firstChild;
						}else{
							var rect = document.createElement('v:rect');
							var fill = document.createElement('v:fill');
							rect.appendChild(fill);
						}
						var w = images.eq(i).attr('width');
						var h = images.eq(i).attr('height');

						fill.src     = src || '';
						fill.type    = 'frame';
						fill.opacity = 1;

						rect.fillcolor    = 'none';
						rect.stroked      = false;
						rect.coorsize     = w+','+h;
						rect.coordorigin  = '0,0';
						rect.style.width  = w + 'px';
						rect.style.height = h + 'px';

						img.parentNode.insertBefore(rect, img);

						fill.color = 'none';

						img.attachEvent('onpropertychange', function(e){
							if(e.propertyName == 'src'){
								fill.src = img.src;
							}
							else if(e.propertyName == 'width' || e.propertyName == 'style.width'){
								rect.style.width = img.currentStyle.width;
							}
							else if(e.propertyName == 'height' || e.propertyName == 'style.height'){
								rect.style.height = img.currentStyle.height;
							}
							else if(e.propertyName == 'style.filter'){
								var opacity = 1;

								if(img.style.filter){
									opacity = (img.style.filter.split('alpha(opacity=')[1]).split(')')[0]/100;
									if(opacity == 0) opacity = 0.001;
								}
								fill.opacity = opacity;
								fill.color = 'none';
							}
							else if(e.propertyName == 'style.marginTop'){
								rect.style.marginTop = img.style.marginTop;
							}
							else if(e.propertyName == 'style.marginLeft'){
								rect.style.marginLeft = img.style.marginLeft;
							}
							fill.color = 'none';
						});
					});
				}
			}
			return this;
		},

		img2bg : function(useFilter){
			if(!$('html').hasClass('_bgstyle')){
				$('html').addClass('_bgstyle');

				if(document.createStyleSheet){
					document.createStyleSheet().cssText = "._rewrited2bg { display:inline-block!important; width:auto!important; height:auto!important; } ._rewrited2bg img { visibility:hidden!important; }";
				}else{
					var style = document.createElement('style');
					style.innerHTML = "._rewrited2bg { display:inline-block!important; width:auto!important; height:auto!important; } ._rewrited2bg img { visibility:hidden!important; }";
					document.getElementsByTagName('head')[0].appendChild(style);
				}
			}

			this.filter('img').each(function(){
				var span = $('<span class="_rewrited2bg"></span>');

				if(!Shared.css.hasOpacity && useFilter){
					span.css({filter:'progid:DXImageTransform.Microsoft.AlphaImageLoader(Src='+this.src+',SizingMethod=scale)'});
				}else{
					span.css({background:'url('+this.src+') top left no-repeat', backgroundSize:'100% 100%'});
				}
				$(this).after(span);

				span.append(this);
			});
			return this;
		},


		/*
		 * �}�E�X�I�[�o�[�֐�
		 * data-src�ɂ��x�����[�h�ɂ��Ή��B�x�����[�h�ɂ�jQuery.fn.postload���g�p���邱�ƁB
		 * @param options {off:'�I�t�}�E�X���̐ڔ���', ov:'�I���}�E�X���̐ڔ���', cu:'�I�����̐ڔ����Btrue�̏ꍇ��_cu'}
		 *
		 * jQuery.fn.triggerHandler(type)�܂���jQuery.fn.trigger(type)�����s���邱�ƂŁA�����I�ɉ摜��ύX���邱�Ƃ��\�Btype�͈ȉ��̒ʂ�B
		 * pause.ov   �}�E�X�I�[�o�[������~����B
		 * resume.ov  �}�E�X�I�[�o�[������ĊJ����B
		 * enter.ov   �I���摜�ɕύX����Btrigger�̑�2�������ȗ����邩true�ɂ����ꍇ�A�������~����B
		 * leave.ov   �I�t�摜�ɕύX����Btrigger�̑�2�������ȗ����邩true�ɂ����ꍇ�A�������~����B
		 * current.ov �I���摜�ɕύX����Btrigger�̑�2�������ȗ����邩true�ɂ����ꍇ�A�������~����B
		 * reset.ov   ������Ԃɂ���B
		 */
		ov : function(options){
			var suffixOf = '';
			var suffixOv = '_ov';
			var suffixCu = false;

			if(options){
				if('off' in options && options.off && typeof options.off == 'string'){
					suffixOf = options.off;
				}
				if('ov' in options && options.ov && typeof options.ov == 'string'){
					suffixOv = options.ov;
				}
				if('cu' in options && options.cu){
					if(typeof options.cu == 'string'){
						suffixCu = options.cu;
					}else{
						suffixCu = '_cu';
					}
				}
			}

			var regexp = new RegExp('^(.+)'+suffixOf+'(\.(png|gif|jpg|jpeg|bmp))$');


			return this.each(function(){
				var self    = $(this);
				var area    = self;
				var enabled = true;
				var srcOff  = null;
				var srcOv   = null;
				var srcCu   = null;

				function enter(){
					if(enabled) self.attr('src', srcOv);
				}
				function leave(){
					if(enabled) self.attr('src', srcOff);
				}

				if(this.tagName == 'IMG' || (this.tagName == 'INPUT' && typeof this.type === 'string' && this.type.toLowerCase() == 'image')){

					var post = false;

					// OV�摜�i�x�����[�h���Ή��j
					if(self.attr('data-src')){
						srcOff = self.attr('data-src'); post = true;
					}else{
						srcOff = self.attr('src');
					}

					srcOv = srcOff.replace(regexp, '$1'+suffixOv+'$2');

					if(!post){
						jQuery.preload(srcOv);
					}else{
						self.attr('data-src-ov', srcOv);
					}

					// CU�摜�i�x�����[�h���Ή��j
					if(suffixCu){
						srcCu = srcOff.replace(regexp, '$1'+suffixCu+'$2');

						if(!post){
							jQuery.preload(srcCu);
						}else{
							self.attr('data-src-cu', srcCu);
						}
					}

					// �J�[�\�����|�C���^�ɂȂ�Ȃ��o�O�̑Ή�
					if(self.hasClass('_rewrited2vml')){
						if(this.parentNode.tagName == 'A' && this.parentNode.currentStyle['cursor'] == 'auto'){
							this.parentNode.style.cursor = 'pointer';
						}
					}
					if(this.parentNode.tagName == 'A'){
						area = self.parent('a');
					}

					// �C�x���g�o�^
					if(Shared.device.hasTouch){
						area.bind('touchstart', enter).bind('touchend touchcancel', leave);
					}else{
						area.hover(enter, leave);

						if(this.parentNode.tagName == 'A'){
							$(this.parentNode).bind('focus', enter).bind('blur', leave);
						}
					}

					// �����~
					self.bind('pause.ov', function(e){
						enabled = false;
					});
					// ����ĊJ
					self.bind('resume.ov', function(e){
						enabled = true;
					});
					// �����I�ɃI�����
					self.bind('enter.ov', function(e, pause){
						self.attr('src', srcOv);
						if(pause || pause===undefined) enabled = false;
					});
					// �����I�ɃI�t���
					self.bind('leave.ov', function(e, pause){
						self.attr('src', srcOff);
						if(pause || pause===undefined) enabled = false;
					});
					// �����I�ɑI�����
					self.bind('current.ov', function(e, pause){
						if(srcCu){
							self.attr('src', srcCu);
							if(pause || pause===undefined) enabled = false;
						}
					});
					// �ʏ��Ԃ�
					self.bind('reset.ov', function(){
						enabled = true;
						self.attr('src', srcOff);
					});
				}
			});
		},

		/*
		 * �摜�t�@�C�����u���֐��B
		 * @param options {prefix:"�ړ���", suffix:"�ڔ���", ext:"�g���q"}
		 */
		replaceSrc : function(options){
			var pre = false;
			var suf = false;
			var ext = false;

			if(typeof options == 'object'){
				if('prefix' in options && typeof options.prefix == 'string'){
					pre = options.prefix;
				}
				if('suffix' in options && typeof options.suffix == 'string'){
					suf = options.suffix;
				}
				if('ext' in options && typeof options.ext == 'string'){
					ext = options.ext.split('.')[0];
				}

				var regexp = new RegExp('(?:(.+)/)?([^\/\.]+)\.([a-zA-Z0-9]+)([\?#;].*)?$');

				this.each(function(){
					if(this.tagName == 'IMG' || (this.tagName == 'INPUT' && typeof this.type === 'string' && this.type.toLowerCase() == 'image')){
						if(this.getAttribute('data-src')){
							var src = this.getAttribute('data-src');
						}else{
							var src = this.getAttribute('src');
						}

						if(src.match(regexp)){
							var _path = RegExp.$1;
							var _name = RegExp.$2;
							var _ext  = RegExp.$3;

							if(pre) _name = pre + _name;
							if(suf) _name = _name + suf;
							if(ext) _ext  = ext;

							var file = (_path ? _path+'/' : '') + _name + '.' + _ext;

							if(this.getAttribute('data-src')){
								this.setAttribute('data-src', file);
							}else{
								this.setAttribute('src', file);
							}
						}
					}
				});
			}
			return this;
		},

		/*
		 * HTML�G�������g��style�v���p�e�B����������B
		 */
		clearStyle : function(){
			return this.each(function(){
				this.setAttribute('style', ''); // ��ɂ��Ă���łȂ��ƁAchrome�ő��������c��
				this.removeAttribute('style');
			});
		},

		/*
		 * img�^�O��x�����[�h����B
		 * @param fn �R�[���o�b�N�֐�
		 * @param thisObject �R�[���o�b�N�֐�����this�I�u�W�F�N�g
		 * @param promise $.Deferred
		 */
		postload : function(fn, thisObject, promise){
			var these = this;
			var target = new Array();

			if(promise) var deferred = new jQuery.Deferred();

			if(!thisObject) thisObject = window;


			this.each(function(){
				if(this.getAttribute('data-src')){
					target[target.length] = this;
				}
				if(this.getAttribute('data-src-ov')){
					(new Image()).src = this.getAttribute('data-src-ov');
					this.removeAttribute('data-src-ov');

				}
				if(this.getAttribute('data-src-cu')){
					(new Image()).src = this.getAttribute('data-src-cu');
					this.removeAttribute('data-src-cu');
				}
			});
			if(target.length > 0){
				var success = true;
				var count = 0;

				for(var i=0; i<target.length; i++){
					var src = target[i].getAttribute('data-src');

					target[i].removeAttribute('data-src');

					if(target[i].tagName === 'IMG'){
						target[i].src = src;
					}else{
						target[i].style.backgroundImage = 'url(' + src + ')';
					}
					var img = new Image();

					img.onload = function(){
						if(++count == target.length){
							if(promise){
								if(success){
									deferred.resolve();
								}else{
									deferred.reject();
								}
							}
							if(fn && typeof fn == 'function') fn.call(thisObject, success);
						}
					};
					img.onerror = function(){
						success = false;

						if(++count == target.length){
							if(promise) deferred.reject();
							if(fn && typeof fn == 'function') fn.call(thisObject, success);
						}
					};
					img.src = src;
				}
			}else{
				if(promise) deferred.resolve();
				if(fn && typeof fn == 'function') fn.call(thisObject, undefined);
			}
			return promise ? deferred.promise() : this;
		},

		/*
		 * �v�f����їv�f���̉摜�̓ǂݍ��݊����̃R�[���o�b�N
		 * @param fn �R�[���o�b�N�֐�
		 * @param thisObject �R�[���o�b�N�֐�����this�I�u�W�F�N�g
		 * @param async $.Deferred
		 */
		loadEnd : function(fn, thisObject, promise){
			var imgSrc = new Array();
			var success = true;
			var deferred = new jQuery.Deferred();

			if(promise) var deferred = new jQuery.Deferred();

			if(!thisObject) thisObject = window;

			this.filter('img').each(function(){
				imgSrc[imgSrc.length] = this.src;
			});
			this.find('img').each(function(){
				imgSrc[imgSrc.length] = this.src;
			});

			if(imgSrc.length > 0){
				for(var i=0, count=0; i<imgSrc.length; i++){
					var img = new Image();

					img.onload = function(){
						if(++count == imgSrc.length){
							if(promise){
								if(success){
									deferred.resolve();
								}else{
									deferred.reject();
								}
							}
							if(fn && typeof fn == 'function') fn.call(thisObject, success);
						}
					};
					img.onerror = function(){
						success = false;
						if(++count == imgSrc.length){
							if(promise) deferred.reject();
							if(fn && typeof fn == 'function') fn.call(thisObject, success);
						}
					};
					img.src = imgSrc[i];
				}
			}else{
				if(promise) deferred.resolve();
				if(fn && typeof fn == 'function') fn.call(thisObject, undefined);
			}
			return promise ? deferred.promise() : this;
		},

		/*
		 * transtion��ݒ肷��֐�
		 * @param prop �ω�������CSS�v���p�e�B
		 * @param duration �ω��ɂ����鎞��
		 * @param easing �C�[�W���O(jQuery.easing�̖��O)
		 * @param delay �x������
		 */
		transition : function(prop, duration, easing, delay){
			if(Shared.css.hasTransition){
				if(prop){
					if(!duration) duration = 0;
					if(!easing) easing = 'linear';
					if(!delay) delay = 0;
					if(prop == 'filter') prop = Shared.css.prefix+prop;
					if(prop == 'transform') prop = Shared.css.prefix+prop;

					this.css('transition', prop+' '+duration+'ms '+Shared.easing.parse(easing)+' '+delay+'ms');
					this.css(Shared.css.prefix+'transition', prop+' '+duration+'ms '+Shared.easing.parse(easing)+' '+delay+'ms');
				}else{
					this.css('transition', 'none');
					this.css(Shared.css.prefix+'transition', 'none');
				}
			}
			return this;
		},

		/*
		 * transition�̏I���C�x���g��o�^����֐�
		 * @param fn �R�[���o�b�N�֐�
		 * @param once ��x����̃R�[���o�b�N���s���B�ȗ������ꍇ�́Atrue�B
		 * @param property transition�Ώۂ�CSS�v���p�e�B�����B�ȗ������ꍇ�́A�v���p�e�B�Ɋւ�炸���s�B
		 */
		transitionEnd : function(fn, once, property){
			if(Shared.css.transitionEnd){
				if(fn){
					this.each(function(){
						function listener(e){
							if(e.target == this && (property === undefined || e.propertyName == property || e.propertyName == Shared.css.prefix + property)){
								if(once === undefined || once) this.removeEventListener(Shared.css.transitionEnd, listener);
								fn.call(this, e);
							}
						}
						this.addEventListener(Shared.css.transitionEnd, listener, false);
					});
				}else{
					this.each(function(i){
						this.removeEventListener(Shared.css.transitionEnd);
					});
				}
			}
			return this;
		},

		/*
		 * transform�̃G�C���A�X�B
		 */
		transform : function(){
			if(arguments.length > 0){
				this.css('transform', arguments[0]).css(Shared.css.prefix+'transform', arguments[0]);
			}else{
				this.css('transform', '').css(Shared.css.prefix+'transform', '');
			}
			return this;
		},

		/*
		 * translate3d�̃G�C���A�X�B
		 * @param x x������(�E)�̕ϗʁB�ȗ������ꍇ�́Atransform�v���p�e�B������
		 * @param y y������(��)�̕ϗʁB�ȗ������ꍇ��0�B
		 * @param z z������(�O)�̕ϗʁB�ȗ������ꍇ��0�B
		 */
		translate3d : function(x, y, z){
			if(arguments.length > 0){
				if(x === undefined) x = 0;
				if(y === undefined) y = 0;
				if(z === undefined) z = 0;

				if(Shared.css.transform.translate3d){
					this.css(Shared.css.prefix+'transform', 'translate3d('+x+'px,'+y+'px,'+z+'px)');
				}else if(Shared.css.transform.translate){
					this.css(Shared.css.prefix+'transform', 'translate('+x+'px,'+y+'px)');
				}
			}else{
				if(Shared.css.transform.translate3d){
					this.css(Shared.css.prefix+'transform', '');
				}else if(Shared.css.transform.translate){
					this.css(Shared.css.prefix+'transform', '');
				}
			}
			return this;
		},

		/*
		 * transform-origin�̃G�C���A�X�B
		 * @param x x�������̒��S�B���l�Ŏw�肵���ꍇ�͎����I��px��t����B%�ɂ�镶����w����\�B
		 * @param y y�������̒��S�B���l�Ŏw�肵���ꍇ�͎����I��px��t����B%�ɂ�镶����w����\�B
		 */
		transformOrigin : function(x, y, z){
			if(x == undefined) x = '50%';
			if(y == undefined) y = '50%';
			if(z == undefined) z = '50%';

			if(typeof x === 'number') x += 'px';
			if(typeof y === 'number') y += 'px';
			if(typeof z === 'number') z += 'px';

			if(Shared.css.transform.translate){
				this.css('transform-origin', x+' '+y).css('transform-origin', x+' '+y+' '+z);

				if(Shared.css.prefix !== ''){
					this.css(Shared.css.prefix+'transform-origin', x+' '+y).css(Shared.css.prefix+'transform-origin', x+' '+y+' '+z);
				}
			}
			return this;
		},

		matrix : function(a, b, c, d, x, y){
			if(!x) x = 0;
			if(!y) y = 0;

			if(arguments.length == 0){
				a = d = 1;
				b = c = x = y = 0;
			}
			if(Shared.css.transform.matrix){
				this.css(Shared.css.prefix+'transform', 'matrix('+a+','+b+','+c+','+d+','+x+','+y+')');
			}else{
				this.css('filter', "progid:DXImageTransform.Microsoft.Matrix(M11="+a+", M12="+c+", M21="+b+", M22="+d+", SizingMethod='auto expand')");
			}
			return this;
		},

		cssAnimation : function(name, duration, easing, delay, iteration){

			if(arguments.length == 0){
				return this.css(Shared.css.prefix+'animation', '');
			}else{
				if(!delay){
					delay = 0;
				}
				if(!iteration){
					iteration = 'infinite';
				}
				return this.css(Shared.css.prefix+'animation', name+' '+duration+'ms '+delay+'ms '+Shared.easing.parse(easing)+' '+iteration);
			}
		},

		rotateZ : function(deg, duration, easing, fn){
			if(Shared.css.transform.rotateZ){
				this.css(Shared.css.prefix+'transform', 'rotateZ('+deg+'deg)');
			}else if(Shared.css.transform.rotate){
				this.css(Shared.css.prefix+'transform', 'rotate('+deg+'deg)');
			}else{
				var cos = Math.cos(deg*Math.PI/180);
				var sin = Math.sin(deg*Math.PI/180);
				var that = this;

				return this.each(function(i){
					var w  = that.eq(i).outerWidth();
					var h  = that.eq(i).outerHeight();
					var mx = (w*cos + h*sin) - w;
					var my = (w*sin + h*cos) - h;
					//that.eq(i).css({marginLeft:-mx/2, marginTop:-my/2});
					this.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11="+cos+", M12="+(sin)+", M21="+(-sin)+", M22="+cos+", SizingMethod='auto expand')";
				});
			}
			return this;
		},

		/*
		 * transtion�A�j���[�V�����֐��Bstop�͌����Ȃ��̂Œ��ӁB
		 * @param property �ω�������CSS�v���p�e�B
		 * @param duration �ω��ɂ����鎞��
		 * @param easing   �C�[�W���O��
		 * @param callback �I����R�[���o�b�N
		 */
		transit : function(property, duration, easing, callback){
			if(Shared.css.hasTransition){
				if(typeof property == 'object'){
					duration = (duration ? duration + 'ms' : '0ms');
					easing   = (easing   ? Shared.easing.parse(easing) : 'linear');

					var transition = [];
					var targetProp = {};

					for(var key in property){
						var cssKey = key;

						if(key == 'transform'){
							cssKey = Shared.css.prefix+key;
							targetProp[Shared.css.prefix+key] = property[key];
						}else if(key == 'filter'){
							cssKey = Shared.css.prefix+key;
							targetProp[Shared.css.prefix+key] = property[key];
						}else{
							cssKey = Shared.util.reverseCamelCase(key);

							if(typeof property[key] == 'string' || cssKey==='opacity' || cssKey==='zoom' || cssKey==='z-index' || cssKey==='font-weight' || cssKey==='line-height'){
								targetProp[key] = property[key];
							}else{
								targetProp[key] = property[key] + 'px';
							}
						}
						transition[transition.length] = [cssKey, duration, easing].join(' ');
					}
					transition = transition.join(',');

					this.queue(function(){
						function listener(e){
							if(e.target === this){
								if(typeof callback === 'function') callback.call(this, e);
								this.removeEventListener(Shared.css.transitionEnd, listener);
								$(this).dequeue();
							}
						}
						this.addEventListener(Shared.css.transitionEnd, listener, false);
						
						$(this).css('transition', transition).css(Shared.css.prefix+'transition', transition).css(targetProp);//.dequeue();
					});
				}else{
					this.css('transition', 'none').css(Shared.css.prefix+'transition', 'none').dequeue();
				}
			}else{
				this.animate(property, duration, easing, callback);
			}
			return this;
		}
	});
}
