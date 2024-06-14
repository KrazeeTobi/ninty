if(isWii()) {
	document.write('<link rel="stylesheet" type="text/css" href="../../css/detailWii.css" media="all" />');
}

document.write('<script type="text/javascript" src="../../js/thickbox.js"></script>');

function disableLink(e) { 
    e.preventDefault(); 
    return false; 
}

function setNavi(category,current){
	
	var dsNavi = 
			'<li><img src="../img/menuTitle3DS.png" width="206" height="16" alt="TITLE LIST(Nintendo 3DS)" /></li>' +
			
			'<li id="mk"><a href="../mario_kart/index.html"><img src="../img/menuMK.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li id="lm2"><a href="../luigis_mansion2/index.html"><img src="../img/menuLM2.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li id="kiu"><a href="../kid_icarus_uprising/index.html"><img src="../img/menuKIU.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li id="ac"><a href="../animal_crossing/index.html"><img src="../img/menuAC.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li id="sm"><a href="../super_mario/index.html"><img src="../img/menuSM.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li id="sf64"><a href="../star_fox_64_3d/index.html"><img src="../img/menuSF64.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li id="pm"><a href="../paper_mario/index.html"><img src="../img/menuPM.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li id="zot"><a href="../zelda_ocarina_of_time/index.html"><img src="../img/menuZOT.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li id="ms"><a href="../mario_and_sonic_london/index.html"><img src="../img/menuMS.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li id="trm"><a href="../rolling_western/index.html"><img src="../img/menuTRW.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li id="pl"><a href="../picture_lives/index.html"><img src="../img/menuPL.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li class="sttl" style="padding-top: 35px;"><img src="../img/menuTitleDS.png" width="206" height="16" alt="TITLE LIST(Nintendo DS)" /></li>' +
			
			'<li id="kma"><a href="../kirby_mass_attack/index.html"><img src="../img/menuKMA.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>';
	
	var wiiNavi = 
			'<li><img src="../img/menuTitle.png" width="206" height="16" alt="TITLE LIST(Nintendo 3DS)" /></li>' +
			
			'<li id="rh"><a href="../rhythm_heaven/index.html"><img src="../img/menuRH.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li id="wpm"><a href="../wii_play_motion/index.html"><img src="../img/menuWPM.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li id="zss"><a href="../zelda_skyward_sword/index.html"><img src="../img/menuZSS.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li id="mp9"><a href="../mario_party9/index.html"><img src="../img/menuMP9.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li id="mcf"><a href="../mystery_case_files/index.html"><img src="../img/menuMCF.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li id="kwii"><a href="../kirby_wii/index.html"><img src="../img/menuKWii.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>' +
			
			'<li id="ms"><a href="../mario_and_sonic_london/index.html"><img src="../img/menuMS.png" width="206" alt="" /></a></li>' +
			'<li><img src="../../img/menuLine.png" width="206" height="5" alt="" /></li>';
	
	if( category == "3ds") {
		$('#wrap #contentsWrap .menu .softlist').html(dsNavi);
	} else {
		$('#wrap #contentsWrap .menu .softlist').html(wiiNavi);
	}
	
	var currentSauce = $('#wrap #contentsWrap .menu .softlist #' + current).html().split('>');
	var currentIMG = currentSauce[1].split('.png');
	$('#wrap #contentsWrap .menu .softlist #' + current).html(currentIMG[0] + '_crt.png' + currentIMG[1] + '>');
	$('#wrap #contentsWrap .menu .softlist #' + current).addClass('ctr');
	
	$("#wrap #contentsWrap .menu .softlist a").hover(function(){ $(this).animate( { backgroundPosition:"(-206px 0)" }, {duration: 200} ); }, function() { $(this).animate( { backgroundPosition:"(-412px 0)" }, {duration: 500}); } );	
	
	
}

$(function() {
	if(isSmartPhone()) {
		$(".ftrBG").hide();		
	}
});
