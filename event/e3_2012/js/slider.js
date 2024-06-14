//css path
//document.write('<link rel="stylesheet" type="text/css" href="../../css/slider.css" />');

var sTopPos = 0;
var sLefPos = 0;
var sImageH = 0;
var sImageW = 0;
var sIndex = 0;
var _cnt = 0;
var sliderTag = ""; //slide tag
var sPosYArr = new Array();
var sLinkArr = new Array(); //link
var sImgArr  = new Array();  //Image class Array


/*-----------------------------
// set array
------------------------------*/
function setSliderArray( value1, value2, value3 )
{
	//set array
	//-----------------------
	sLinkArr  = new Array();
	sLinkArr  = value1;
	
	//set w, h
	//-----------------------
	sImageW = value2;
	sImageH = value3;
	
}


/*-----------------------------
// openSlider
------------------------------*/
function openSlider( value )
{
	//IE6 let return
	if( jQuery.browser.msie && parseInt(jQuery.browser.version) == 6 ) 
	{
		location.href = value;
		return;
	}
	
	if( isWii() || is3DS() )
	{
		location.href = value;
		return;
	}
	
	if( isSmartPhone() )
	{
		var dirName = location.pathname.split("/");
		var fileName = value.split("ss/");
		fileName = fileName.pop().split(".");
		window.open("../../cmn/photo.html#software/" + dirName[4] + "/ss/" + fileName[0] );
		return;
	}
	
	
	$ww = $(window).width();
	$wh = $(window).height();
	
	sIndex = 0;
	for (var i = 0; i < sLinkArr.length; i++ ) 
	{
		if( value.indexOf( sLinkArr[ i ] ) != -1 ) 
		{
			sIndex = i;
			break;
		}
	}
	//alert( sIndex );
	
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
						'<img src="../../cmn/img/btnClose.png" alt="close btn">'+
					'</div>'+
					'<div id="sliderDetail" class="clearfix">'+
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
	$( "#sliderContent #sliderDetail ul li" ).css( { "width":sImageW, "height":sImageH } );
	
	//handle
	//-----------------------
	if( jQuery.browser.msie && parseInt(jQuery.browser.version) <= 8 )
	{
		$('#sliderContent').fadeTo( 0, 1 );
		sliderHtmlSet();
	}
	else
	{
		$( "#sliderContent #bg" ).fadeTo( 0, 0.9 );
		$('#sliderContent').fadeTo( 0, 0 );
		$('#sliderContent').fadeTo( "fast", 1.0, sliderHtmlSet );
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
		$( "#sliderContent #sliderMenu ul" ).append( '<li class="alpha"><img src="' + $('ul.ssList li').eq( i ).find( 'img' ).eq( 0 ).attr('src') + '" /></li>' );
	}
	
	//set default index
	//-----------------------
	//handle
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
		
		
	}
	
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
			if( _cnt == sLinkArr.length )
			{
				mainPicsAppear();
			}
		};
		//insert href
		sImg.src  = sLinkArr[ i ];
	}
		
	moveSlideContent( sIndex, false );
	

	//-----------------------
	// mouse event
	//-----------------------
	
	$( "#sliderCloseBtn" ).click( function()
	{
		removeEvent();
	});
	$( "#sliderContent #bg" ).click( function()
	{
		removeEvent();
	});
	
	
	// hover
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
	
	//thumb click
	//-----------------------
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
		$(this).stop( false, false );
		$(this).animate( { backgroundPosition:"(0 0)" }, 100, "easeOutQuad" ); 
	},
	function()
	{
		$(this).stop( false, false );
		$(this).animate( { backgroundPosition:"(0 -80px)" }, 100, "easeOutQuad" ); 	
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
	var posY = $( '#sliderContent #sliderDetail ul li' ).eq( value ).position().top;
	
	//move
	if( value2 )
	{
		$("#sliderContent #sliderDetail ul" ).animate( { "top":-posY }, 1000, "easeInOutExpo" );
	}
	else
	{
		$("#sliderContent #sliderDetail ul" ).css( { "top":-posY } );
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
	
	//resizeEvent();
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
	// insert
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
