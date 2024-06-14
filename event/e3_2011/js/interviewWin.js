function isWii() { return (navigator.userAgent.indexOf("Wii") != -1); }
function isDSi () { return (navigator.userAgent.indexOf("Nintendo DSi") != -1); }

function isSmartPhone(){
	var devices = ['iPhone','iPad','iPod','Android'];
	var pattern = new RegExp(devices.join('|'), 'i');
	return pattern.test(navigator.userAgent);
}

function closeWin(){
	if(isWii() || isDSi() || is3DS() || isSmartPhone()){
		window.history.back();
	}
}