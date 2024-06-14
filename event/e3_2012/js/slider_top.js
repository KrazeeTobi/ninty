//css path
document.write('<link rel="stylesheet" type="text/css" href="../css/slider.css" />');

var sTopPos = 0;
var sLefPos = 0;
var sImageH = 0;
var sImageW = 0;
var sIndex = 0;
var sDirName = "";
var _cnt = 0;
var sAmount = 0;
var sEx = "jpg";
var sliderTag = ""; //slide tag
var sPosYArr = new Array();
var sLinkArr = new Array(); //link
var sImgArr  = new Array();  //Image class Array


/*-----------------------------
// openSlider
// prop1 @ path
// prop2 @ amount of tumb
// prop3 @ extention
// prop4 @ thumb width
// prop5 @ thumb height
------------------------------*/
function openSlider( value1, value2, value3, value4, value5 )
{

	switch (arguments.length) 
	{ 
		case 0: value1 = 'default1'; 
		case 1: value2 = 'default2'; 
		case 2: value3 = 'default3'; 
		case 3: value4 = 'default4'; 
		case 4: value5 = 'default5'; 
	} 
	
	//alert ( "value1:" + value1 + " & value2:" + value2 + " & value3:" + value3 + " & value4:" + value4 + " & value5:" + value5  ); 
	
	$ww = $(window).width();
	$wh = $(window).height();
	if( value2 != 'default2') sAmount = value2; 
	if( value3 != 'default3') sEx     = value3; 
	if( value4 != 'default4') sImageW = value4; 
	if( value5 != 'default5') sImageH = value5; 
 	
	//check directry name
	var opArr = value1.split("/");
	for( var i = 0; i < opArr.length; i++ )
	{
		if( opArr[ i ] == "software" )
		{
			sDirName = opArr[ i + 1 ];
			break;
		}
	}
	
	//menu array
	sLinkArr  = new Array();
	for( var i = 0; i < sAmount; i++ )
	{
		var str = sDirName + "/" + "img" + i + "." + sEx;
		sLinkArr.push( str );
		//alert( str );
	}
	
	
	
	//IE6 let return
	if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 6 ) 
	{
		location.href = value1;
		return;
	}
	
	if( isWii() )
	{
		location.href = value1;
		return;
	}
	
	if( isSmartPhone() )
	{
		var fileName = value1.split("ss/");
		fileName = fileName.pop().split(".");
		window.open("../cmn/photo.html#software/" + sDirName + "/ss/" + fileName[ 0 ] );
		return;
	}
	
	sIndex = 0;
	
	
	showSlider();
	setSliderResize();
}


/*-----------------------------
// set html into body
------------------------------*/
function showSlider()
{
	
	
	//html
	//---------------
	sliderTag ='<div id="sliderContent" class="clearfix">'+
					'<div id="sliderCloseBtn">'+
						'<img src="../cmn/img/btnClose.png" alt="">'+
					'</div>'+
					'<div id="sliderDetail">'+
						'<ul>'+
						'</ul>'+
					'</div>'+
					'<div id="sliderMenu">'+
						'<ul>'+
						'</ul>'+
					'</div>'+
					'<div id="bg" style="">'+
					'</div>'+
				'</div>';
					
	$( "body" ).prepend( sliderTag );
	

	
	//set size
	//-----------------------
	$( "#sliderContent" ).css( { "width":$ww, "height":$wh } );
	$( "#sliderContent #bg" ).css( { "width":$ww, "height":$wh } );
	$("#sliderContent #sliderDetail" ).css( { "position":"relative", "width":sImageW } );
	$("#sliderContent #sliderDetail ul" ).css( { "position":"absolute", "width":sImageW } );
	$( "#sliderContent #sliderDetail ul li" ).css( { "width":sImageW, "height":sImageH, "border":"1px solid red" } );
	
	if( jQuery.browser.msie && parseInt(jQuery.browser.version) <= 8 )
	{
		sliderHtmlSet();
	}
	else
	{
		$('#sliderContent #bg').fadeTo( 0, 0.9 );
		$('#sliderContent').fadeTo( 0, 0 );
		$('#sliderContent').fadeTo( "fast",1.0, sliderHtmlSet );
	}

}

// sliderHtmlSet
//------------------------------
function sliderHtmlSet()
{
	//set image & menu to html
	//-----------------------
	var sImgArr = new Array();
	for (var i = 0; i < sLinkArr.length; i++ ) 
	{
		$( "#sliderContent #sliderDetail ul" ).append( '<li><img src="' + sLinkArr[ i ] + '"  /></li>' );
		$( "#sliderContent #sliderMenu ul" ).append( '<li class="alpha"><img src="' + sDirName + "/" + "ssThumb_img" + i + ".jpg" + '" /></li>' );
	}
	
	$( '#sliderContent #sliderMenu ul li' ).css( "padding-bottom", 5 );
	
	//set default index
	//-----------------------
	if( jQuery.browser.msie && parseInt(jQuery.browser.version) <= 8 )
	{
		$( '#sliderContent #sliderMenu ul li img' ).css( "border","none" );
		$( '#sliderContent #sliderMenu ul li img' ).eq( sIndex ).css( "border","1px solid #c6c6c6" );
	}
	else
	{
		//$('#sliderContent #sliderDetail ul li img').fadeTo( 0, 0 );
		$('#sliderContent #sliderMenu ul li img').fadeTo( 0, 0.5 );
		$('#sliderContent #sliderMenu ul li img').eq( sIndex ).fadeTo( 0, 1 );
		//moveSlideContent( sIndex, true );
	}
	
	moveSlideContent( sIndex, false );
	
	
	//set complete function
	//-----------------------
	_cnt = 0;
	var sImgArr = new Array();
	for (var i = 0; i < sLinkArr.length; i++ ) 
	{
		var sImg  = new Image();
		sImgArr.push( sImg );
		
		sImg.onload = function() 
		{
			_cnt ++;
			//var idx = sImgArr.indexOf( this );
			//$('#sliderContent #sliderDetail ul li img').eq( idx ).fadeTo( "fast",1.0 );
			if( _cnt == sLinkArr.length )
			{
				mainPicsAppear();
			}
		};
		
		//insert href
		sImg.src  = sLinkArr[ i ];
	}

	//-----------------------
	// mouse event
	//-----------------------
	
	// menu
	//-----------------------
	$('#sliderMenu li img').hover( function()
	{

		if( jQuery.browser.msie && parseInt(jQuery.browser.version) <= 8 )
		{
		}
		else
		{
			$( this ).stop( false, false );
			$( this ).fadeTo( "fast", 1 );
		}
	},
	function()
	{	
		if( jQuery.browser.msie && parseInt(jQuery.browser.version) <= 8 )
		{
		}
		else
		{
			if( sIndex == $('#sliderMenu li img').index( this ) ) return; 
			$( this ).stop( false, false );
			$( this ).fadeTo( "fast", 0.5 );
		}
	});
	
	
	$('#sliderMenu li img').click( function()
	{
		//slide
		var num = $('#sliderMenu li img').index( this );
		moveSlideContent( num, true );
		
		//pointer
		$( this ).css( "cursor","default" );
		
		//fade
		if( jQuery.browser.msie && parseInt(jQuery.browser.version) <= 8 )
		{
		
		}
		else
		{
			$( '#sliderContent #sliderMenu ul li img' ).stop( false, false );
			$( '#sliderContent #sliderMenu ul li img' ).fadeTo( "fast", 0.5 );
			$( this ).stop( false, false );
			$( this ).fadeTo( "fast", 1 );
		}
		
		
  	});
	
	//bg closebtn
	//-----------------------
	$( "#sliderCloseBtn" ).hover( function()
	{
		if( jQuery.browser.msie && parseInt(jQuery.browser.version) <= 8 )
		{
		}
		else
		{
			$(this).stop( false, false );
			$(this).animate( { backgroundPosition:"(0 0)" }, 100, "easeOutQuad" ); 
		}
	},
	function()
	{
		if( jQuery.browser.msie && parseInt(jQuery.browser.version) <= 8 )
		{
		}
		else
		{
			$(this).stop( false, false );
			$(this).animate( { backgroundPosition:"(0 -80px)" }, 100, "easeOutQuad" ); 	
		}
	});
	
	$( "#sliderCloseBtn" ).click( function()
	{
		removeEvent();
	});
	$( "#sliderContent #bg" ).click( function()
	{
		removeEvent();
	});
}


/*-----------------------------
// move slider ul
//
// prop1 : index of menu
// prop2 : motion or not
------------------------------*/
function moveSlideContent( value, value2 )
{
	$("#sliderContent #sliderDetail ul" ).stop( true, false );
	var posY = $('#sliderContent #sliderDetail ul li').eq( value ).position().top;
	
	//move
	if( value2 )
	{
		$("#sliderContent #sliderDetail ul" ).animate( { top:-posY }, 1000, "easeInOutExpo" );
	}
	else
	{
		$("#sliderContent #sliderDetail ul" ).css( { top:-posY } );
	}
	
	//pointer
	$( '#sliderContent #sliderDetail ul li img' ).css( "cursor","Pointer" );
	$( '#sliderContent #sliderDetail ul li img' ).eq( value ).css( "cursor","default" );
	$( '#sliderContent #sliderMenu ul li img' ).css( "cursor","Pointer" );
	$( '#sliderContent #sliderMenu ul li img' ).eq( value ).css( "cursor","default" );
	
	//border
	$( '#sliderContent #sliderMenu ul li img' ).css( "border","2px solid #000" );
	$( '#sliderContent #sliderMenu ul li img' ).eq( value ).css( "border","2px solid #0096cb" );
		
	//fade
	if( jQuery.browser.msie && parseInt(jQuery.browser.version) <= 8 )
	{
	}
	else
	{	
		$( '#sliderContent #sliderMenu ul li img' ).stop( false, false );
		$( '#sliderContent #sliderMenu ul li img' ).fadeTo( "fast", 0.5 );
	
		$( '#sliderContent #sliderMenu ul li img' ).eq( value ).stop( false, false );
		$( '#sliderContent #sliderMenu ul li img' ).eq( value ).fadeTo( "fast", 1 );
	}
	
	//set index
	sIndex = value;
}

/*-----------------------------
// mainPicsAppear
------------------------------*/
function mainPicsAppear()
{
	$('#sliderDetail li img').click( function()
	{
		//slide
		var num = $('#sliderDetail li img').index( this );
		
		//move
		moveSlideContent( num, true );
		
  	});
	
	srEvent();
}




/*-----------------------------
// setSliderResize
------------------------------*/
function setSliderResize()
{
	srEvent();
	$(window).bind( "resize",srEvent );
};

//  set event
//------------------------------
function srEvent()
	{
	//set
	//----------------------
	stageW = $(window).width();
	stageH = $(window).height();
	imageH = $("#sliderMenu li").height();
	imageW = $("#sliderMenu li").width();
	
	
	 
	//bg
	//----------------------
	$( "#sliderContent" ).css( { "width":$ww, "height":$wh } );
	$( "#sliderContent #bg" ).css( { "width":$ww, "height":$wh } );

	// pos for detail
	//----------------------	
	sTopPos = ( $wh / 2 ) - ( sImageH / 2 );
	sLefPos = ( $ww / 2 ) - ( sImageW / 2 );
	$("#sliderDetail").css({ top:sTopPos, left:sLefPos });

	// pos for menu
	//----------------------
	//alert( $( "#sliderDetail").left  );
	$("#sliderMenu").css({ top:sTopPos, left:$( "#sliderDetail").offset().left + sImageW + 20 });
	
	//min height
	//----------------------
	if( $wh < sImageH+80 )
	{
		$("#sliderDetail").css({ top:60 });
		$("#sliderMenu").css({ top:60 });
		$("#sliderCloseBtn").css({ width:40,height:40 });
		$("#sliderCloseBtn img").css({ width:40,height:40 });
	} else {
		$("#sliderCloseBtn").css({ width:80,height:80 });
		$("#sliderCloseBtn img").css({ width:80,height:80 });
	}
};



/*-----------------------------
// kill
------------------------------*/

function removeEvent()
{
	$( $('#sliderMenu li img') ).unbind('hover');
	$( $( "#sliderCloseBtn" ) ).unbind( "hover" );
	$( $( "#sliderCloseBtn" ) ).unbind( "click" );
	
	if( jQuery.browser.msie && parseInt(jQuery.browser.version) <= 8 )
	{
		killSlider();
	}
	else
	{
		$('#sliderContent').stop( false, false );
		$('#sliderContent').fadeTo( "fast", 0, killSlider );
	}
}

function killSlider( )
{
	//removeEvent
	$(window).unbind( "resize", srEvent );
	
	$('#sliderContent').remove();
}
