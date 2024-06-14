if (typeof document.documentElement.style.maxHeight == "undefined") {
	var spaceW = 20;
} else if (isWinIE ()){
	var spaceW = 10;
} else {
	var spaceW = 0;
}

window.onload = function(){
	if(document.all){
		var W =document.body.clientWidth;
	} else {
		var W =innerWidth;
	}
	
	document.getElementById('allOn').style.display='block';
	document.getElementById('wiiOn').style.display='block';
	document.getElementById('dsOn').style.display='block';
	
	document.getElementById('leftNavi').style.left = Math.floor((W - 730) / 2) + spaceW - 38 + 'px' ;
}

window.onresize = function(){
	if ( navigator.appVersion.indexOf("MSIE 6.0") == -1){
		window.location.reload();
	}
}