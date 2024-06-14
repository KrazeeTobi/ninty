if(isWii()) {
	document.write('<link rel="stylesheet" type="text/css" href="../css/zeldaWii.css" media="all" />');
}

$(function() {
	if(isSmartPhone()) {
		$(".ftrBG").hide();		
	}
});

