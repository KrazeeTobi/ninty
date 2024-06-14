

$(function() {
	if(isSmartPhone()) {
        $("#main").css("backgroundPosition","-100px 0");
	} else if(isWii() && !isDSi()) {
        $("#main").css("backgroundPosition","-100px 0");
	} else if (getFlashPlayerVersion() >= 10) {
        $("#main").css("background","none");
        $("#alternativeContents").hide();
        $("#hdrWrap").hide();
        $("#main").css("border-bottom","none");
		$("#main").css("height","648px");
	}
	if(isSmartPhone()) {
		$(".ftrBG").hide();		
	}

});

if(isWii()) {
	document.write('<link rel="stylesheet" type="text/css" href="../css/p02Wii.css" media="all" />');
}





function lineupMov(){
	if(isSmartPhone()) {
		location.href = "movFiles/lineup.mp4";		
	}  else if(is3DS()){
		location.href = "lineupMov.html";	
	} else {
		tb_show('lineupMov','lineupMov.html?TB_iframe=true&height=464&width=784');
	}
}


function interview01Mov(){
	if(isSmartPhone()) {
		location.href = "movFiles/interview01.mp4";		
	}  else if(is3DS()){
		location.href = "interview01Mov.html";	
	} else {
		tb_show('interview01Mov','interview01Mov.html?TB_iframe=true&height=464&width=784');
	}
}

function interview02Mov(){
	if(isSmartPhone()) {
		location.href = "movFiles/interview02.mp4";		
	} else if(is3DS()){
		location.href = "interview02Mov.html";	
	} else {
		tb_show('interview02Mov','interview02Mov.html?TB_iframe=true&height=464&width=784');
	}
}