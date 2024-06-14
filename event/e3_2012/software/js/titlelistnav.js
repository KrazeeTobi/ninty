var dirName, cntPath, titleName;

var wiiuList = new Array(9);
for ( i=0; i<wiiuList.length; i++){
	wiiuList[i] = new Array(2);
}

var n3dsList = new Array(3);
for ( i=0; i<n3dsList.length; i++){
	n3dsList[i] = new Array(2);
}

function showList(hard){
	
	if(hard == "wiiu"){
		$('#listIndexWrap').parent().append('<img src="../img/detail/ttlList_wiiu.png" width="362" height="29" alt="Wii U SOFTWARE LIST" class="ttlList" />');
		$('#listIndexWrap').append('<ul>');
		
		for ( i=0; i<wiiuList.length; i++) {
			titleName = wiiuList[i][0];
			dirName = wiiuList[i][1];
			cntPath = wiiuList[i][1] + '/index.html';
			var isCurrent = location.pathname.indexOf(dirName, 0);
		
			if (isCurrent > 0){	
				$('#listIndexWrap ul').append('<li class="cu">' + titleName + '</li>');
			} else {
				$('#listIndexWrap ul').append('<li><a href="../' + cntPath + '">' + titleName + '</a></li>');
			}
		}
	} else if(hard == "n3ds"){
		$('#listIndexWrap').parent().append('<img src="../img/detail/ttlList_3ds.png" width="484" height="29" alt="ニンテンドー3DS SOFTWARE LIST" class="ttlList" />');
		$('#listIndexWrap').append('<ul>');
		
		for ( i=0; i<n3dsList.length; i++) {
			titleName = n3dsList[i][0];
			dirName = n3dsList[i][1];
			cntPath = n3dsList[i][1] + '/index.html';
			var isCurrent = location.pathname.indexOf(dirName, 0);
		
			if (isCurrent > 0){	
				$('#listIndexWrap ul').append('<li class="cu">' + titleName + '</li>');
			} else {
				$('#listIndexWrap ul').append('<li><a href="../' + cntPath + '">' + titleName + '</a></li>');
			}
		}
	}
	$('#listIndexWrap').append('</ul>');
}


function setWiiUList() {
	wiiuList[0][0] = "Nintendo Land";
	wiiuList[0][1] = "nintendo_land";
	
	wiiuList[1][0] = "New SUPER MARIO BROS. U";
	wiiuList[1][1] = "new_super_mario_bros_u";

	wiiuList[2][0] = "Pikmin 3";
	wiiuList[2][1] = "pikmin3";
	
	wiiuList[3][0] = "Wii Fit U";
	wiiuList[3][1] = "wii_fit_u";

	wiiuList[4][0] = "Wii U Panorama View";
	wiiuList[4][1] = "panorama_view";

	wiiuList[5][0] = "SiNG";
	wiiuList[5][1] = "sing";
	
	wiiuList[6][0] = "LEGO&reg; CITY： Undercover";
	wiiuList[6][1] = "lego_city";

	wiiuList[7][0] = "Project P-100";
	wiiuList[7][1] = "project_p_100";

	wiiuList[8][0] = "GAME &amp\; WARIO";
	wiiuList[8][1] = "game_and_wario";
}


function set3DSUList() {
	n3dsList[0][0] = "New SUPER MARIO BROS. 2";
	n3dsList[0][1] = "new_super_mario_bros_2";

	n3dsList[1][0] = "Luigi's Mansion: Dark Moon";
	n3dsList[1][1] = "luigis_mansion";

	n3dsList[2][0] = "Paper Mario : Sticker Star";
	n3dsList[2][1] = "paper_mario";
}

$(function(){
		   
	if($("body").attr("class").indexOf("wiiu") >= 0){ 
		setWiiUList();
		showList("wiiu");	
	} else {
		set3DSUList();
		showList("n3ds");	
	}
	
	$('#listIndexWrap ul li:lt(3)').css( "border-top", "1px solid #bebebe");
	$("#listIndexWrap ul li a").parent("li").css( "background", "url(../img/detail/bgList.png) repeat-x -236px 50%");
	
	$("#listIndexWrap ul li a").hover(function()
	{
		$(this).stop( false, false );
		$(this).parent("li").animate( { backgroundPosition:"(left 50%)" }, 200, "easeOutQuad" ); 
	}, 
	function() 
	{
		$(this).stop( false, false );
		$(this).parent("li").animate( { backgroundPosition:"(-236px 50%)" }, 500, "easeOutQuad" ); 
	});
});