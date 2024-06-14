/* openwin.js
   Copyright(c) Nintendo Co., Ltd. All Rights Reserved.
*/

function openWin(filename, wid, hei, option){
	var optionStr = 'width=' + wid + ',' + 'height=' + hei + ',' + option;
	NewWin = window.open(filename, "TaikenWin", optionStr);
}

