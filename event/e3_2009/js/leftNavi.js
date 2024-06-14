

function filter(target){
	if(target=="all") {
		document.getElementById('allOn').innerHTML = '<img src="img/titlelist_btn_all_ov.gif" width="230" height="36" alt="すべてを表示" />';
		document.getElementById('wii').style.display='block';
		document.getElementById('wii').style.marginBottom=50;
		document.getElementById('wiiOn').innerHTML = '<a href="JavaScript:filter(\'wii\');void(0);"><img src="img/titlelist_btn_wii.gif" width="230" height="36" alt="Wiiのみを表示" class="hover" /></a>';
		document.getElementById('ds').style.display='block';
		document.getElementById('dsOn').innerHTML = '<a href="JavaScript:filter(\'ds\');void(0);"><img src="img/titlelist_btn_ds.gif" width="230" height="36" alt="DSのみを表示" class="hover" /></a>';
	}
	if(target=="wii") {
		document.getElementById('allOn').innerHTML = '<a href="JavaScript:filter(\'all\');void(0);"><img src="img/titlelist_btn_all.gif" width="230" height="36" alt="すべてを表示" class="hover" /></a>';
		document.getElementById('wii').style.display='block';
		document.getElementById('wii').style.marginBottom=120;
		document.getElementById('wiiOn').innerHTML = '<img src="img/titlelist_btn_wii_ov.gif" width="230" height="36" alt="Wiiのみを表示" />';
		document.getElementById('ds').style.display='none';
		document.getElementById('dsOn').innerHTML = '<a href="JavaScript:filter(\'ds\');void(0);"><img src="img/titlelist_btn_ds.gif" width="230" height="36" alt="DSのみを表示" class="hover" /></a>';
	}
	if(target=="ds") {
		document.getElementById('allOn').innerHTML = '<a href="JavaScript:filter(\'all\');void(0);"><img src="img/titlelist_btn_all.gif" width="230" height="36" alt="すべてを表示" class="hover" /></a>';
		document.getElementById('wii').style.display='none';
		document.getElementById('wiiOn').innerHTML = '<a href="JavaScript:filter(\'wii\');void(0);"><img src="img/titlelist_btn_wii.gif" width="230" height="36" alt="Wiiのみを表示" class="hover" /></a>';
		document.getElementById('ds').style.display='block';
		document.getElementById('dsOn').innerHTML = '<img src="img/titlelist_btn_ds_ov.gif" width="230" height="36" alt="DSのみを表示" />';
	}
}