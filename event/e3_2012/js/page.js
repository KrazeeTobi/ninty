/*-----------------------------
// variables
------------------------------*/
var picW = 0;
var picH = 0;

/*-----------------------------
// init
------------------------------*/
$(function()
{
	
	//IE6 let return
	if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 6  ) 
	{
		return;
	};
	
	if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 7  ) 
	{
		return;
	};
	
	mainImageInit();
	contentSizeInit();
	fadeInit(); //setalpha
	
	if(isiPad()){
		tilt();
		window.onorientationchange = tilt;
	}
	
});

/*-----------------------------
// main image init
------------------------------*/

var bTimer;
var isWhite = Math.floor( Math.random() * 2 );
var mainImageCnt = 0;
var mainImageArr = [];

function mainImageInit()
{
	$('#mainArea').css({opacity: "0"});
	
	mainImageArr = [];
	for( var i = 0; i < 8; i ++ )
	{
		var img = new Image();
		mainImageArr.push( img );
	}
	
	for( i = 0; i < 8; i ++ )
	{
		mainImageArr[ i ].onload = function() 
		{
			mainImageLoadedFunc();
		}
	}
	
	mainImageArr[ 0 ].src  = "img_idx/main_image_w.jpg";
	mainImageArr[ 1 ].src  = "img_idx/main_image_b.jpg";
	mainImageArr[ 2 ].src  = "img_idx/main_image1.jpg";
	mainImageArr[ 3 ].src  = "img_idx/main_image2.jpg";
	mainImageArr[ 4 ].src  = "img_idx/main_image3.jpg";
	mainImageArr[ 5 ].src  = "img_idx/main_image4.jpg";
	mainImageArr[ 6 ].src  = "img_idx/main_image5.jpg";
	mainImageArr[ 7 ].src  = "img_idx/main_image6.jpg";
	
}

//after loaded
function mainImageLoadedFunc()
{
	mainImageCnt ++;
	
	if( mainImageCnt == mainImageArr.length )
	{
		//random
		//--------------
		if( isWhite != 1 )
		{
			var mw = mainImageArr[ 0 ];
			var mb = mainImageArr[ 1 ];
			mainImageArr.unshift( mw );
			mainImageArr.unshift( mb );
			mainImageArr.splice( 2, 2 );
		}
		
		var str = "";
		for( var i = 0; i < mainImageArr.length; i++ )
		{
			str += mainImageArr[ i ].src;
			str += "\n";
		}
		
		//mainArea fix
		//---------------
		$('#mainArea').css({opacity: "1"});
		$( "#mainArea img" ).remove();
		
		//set new image
		//---------------
		$( "#mainArea" ).append( mainImageArr[ 0 ] );
		$('#mainArea img').css({opacity: "0"});
		$('#mainArea img').animate({ opacity: 1 }, 1000);
		bTimer = setInterval( changeMainImage, 5000 );
		
		//css huck for IE8
		//-------------
		if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 7 ) $('#top #mainArea img').css({ "height":"76%" });
		if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 8 ) $('#top #mainArea img').css({ "height":"76%" });
		
		//init
		mainImageCnt = 0;
	}
}

//roop
//---------------------------
function changeMainImage()
{
	clearTimeout( bTimer );
	$( "#mainArea" ).fadeTo( 300, 0, showMainImage );
}

function showMainImage()
{
	mainImageCnt ++;
	if (mainImageCnt == mainImageArr.length ) mainImageCnt = 0;
	
	//appear
	$( "#mainArea img" ).remove();
	$( "#mainArea" ).append( mainImageArr[ mainImageCnt ] );
	$( "#mainArea" ).fadeTo( 800, 1, mainImageAppeared );
	
	//css huck for IE8
	//-------------
	if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 7 ) $('#top #mainArea img').css({ "height":"76%" });
	if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 8 ) $('#top #mainArea img').css({ "height":"76%" });
		
}

function mainImageAppeared()
{
	bTimer = setInterval( changeMainImage, 5000 );
}


/*-----------------------------
// content size settings
------------------------------*/
function tilt(){
	var orientation = window.orientation;
	if(orientation == 0){
		$("#contents").css( { "height":$(window).width() + 55 } );
	}else{
		$("#contents").css( { "height":$(window).width() - 110 } );
	}
}

function contentSizeInit()
{
	if( !isWii() )
	{
		//init
		$("#subContents ul li a").css( { "height":"auto" } );
		$("#subContents ul li").eq( 0 ).css( { "border":"none" } );
		$("#subContents ul li #detail").css( { "padding":"18px 0 9px 0" } );
		$( "#menuContainer" ).css( "margin-top", -5 );
	} 
	else 
	{
	}
}

/*-----------------------------
// fade
------------------------------*/
function fadeInit()
{
	//init
	//----------------
	
	//mouse over
	//----------------
	$(".alpha").hover(function()
	{
		//html
		//---------------
		var cTag ='<div id="wCover"></div>';
		$( this ).prepend( cTag );
		var $d = $( this ).find( "#wCover" );
		var $i = $( this ).find( "img" );
		$( this ).css( { "position":"realative" } );
		$d.css( { "width":$i.width() + 5, "height":$i.height() + 5, "position":"absolute", "left":$i.position().left, "background-color":"#fff" } );
		$d.fadeTo( 0, 0 );
		$d.fadeTo( 150, 0.3 );
	}, 
	function() 
	{
		//html
		//---------------
		var cTag ='<div id="wCover"></div>';
		$( this ).prepend( cTag );
		var $d = $( this ).find( "#wCover" );
		$d.fadeTo( 150, 0,
		function()
		{
			$( this ).remove();
		});
	});	
}

