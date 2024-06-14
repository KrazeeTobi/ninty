
function isWii() { return (navigator.userAgent.indexOf("Wii") != -1); }
function isDSi () { return (navigator.userAgent.indexOf("Nintendo DSi") != -1); }


$(document).ready(function(){
	if(location.hash==""){
		$(".btn1 img").css("display" , "none");
	} else {
		var defaultPH = location.hash.substr(1,1);
		defaultPH = encodeURIComponent(defaultPH);
		$(".btn" + defaultPH + " img").css("display" , "none");
		$("#ph").attr("src" , "img/0"+ defaultPH +".jpg");
	}
});
	
function phChange(phNam){
	$("#ph").attr("src" , "img/0"+ phNam +".jpg");

	for(i=1; i <= setImageNum; i++){
		$(".btn" + i + " img").css("display" , "block");
	}
	
	$(".btn" + phNam + " img").css("display" , "none");
}

function closeWin(){
	if(isWii() || isDSi() || is3DS()){
		window.history.back();
	}
}