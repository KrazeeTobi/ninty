// iwatter.js for TOP (PC & SP)

var loadTwJson, setTwData, initMasonry, setTwItem, addShowItem, setAddShowItem

$(function(){
	
	var ScreenName = "Nintendo"; // リンク用スクリーンネーム
	var loadJson = "/event/e3_2015/iwatter/data/uptweet.json" // JSONファイルURL
	var loadInterval = 60; // 読込み間隔（秒）
	var showItemMax = 3; // 初期読込み件数
	var ol;
	var msnry;
	var showTwList = [];
	var loadTwList = [];
	var setItemPos = -1;
	var lastPostTime = 0;
	var maxPostTime = 0;
	var addItemMode = false;
	var addItemPos = 0;
	var addItemMaxPos = 0;
	
	//
	// load JSON
	//
	loadTwJson = function() {
		/*
		$.ajax({
			type: 'GET',
			url: loadJson,
			dataType: 'json',
			success: function(json){
				setTwData(json);
				addItemMode = true;
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log("ajax "+textStatus+"");
			}
		});
		*/
		var element = document.createElement("script");
		element.src = loadJson;
		document.body.appendChild(element);
		//setTimeout(loadTwJson, loadInterval*1000);
	}
	callback = function(json) {
		// JSONP call back
		setTwData(json);
		addItemMode = true;
	}
	
	//
	// set data
	//
	setTwData = function(json) {
		//console.log(json);//debug
		var twData = json.data
		showTwList = [];
		var addCnt = 0;
		for (var i=0;i<twData.length;i++) {
			// リツイートは除く
			if (typeof twData[i].retweeted_status !== "undefined") {
				continue;
			}
			// check date
			var created_at = twData[i]['created_at'].split(" ");
			var post_date  = created_at[0] + " " + created_at[1] + " " + created_at[2] + " " + created_at[3] + " GMT+0000 " + created_at[5];
			var d = new Date(post_date);
			var postTime = d.getTime();
			if (postTime > maxPostTime) {
				maxPostTime = postTime;
			}
			if (postTime <= lastPostTime) {
				continue;
			}
			// contents
			var li = $("<li />");
			li.addClass("tweet_item");
				// link
				var href = $("<a />");
					href.attr("href", "https://twitter.com/"+ScreenName+"/status/"+twData[i].id_str);
					href.attr("target", "_twitter");
					href.addClass("tweet_link");
				// date
				var date_container = $("<div />");
					date_container.addClass("tweet_date_container");
					var date = $("<p />");
						date.addClass("tweet_date");
						date.html(String(d.getMonth() + 1) + '.' + String(d.getDate()));
						date_container.append(date);
					var time = $("<p />");
						time.addClass("tweet_time");
						time.html(convertNum(d.getHours()) + ':' + convertNum(d.getMinutes()));
						date_container.append(time);
					href.append(date_container);
				// image
				if (typeof twData[i].entities.media !== "undefined") {
					var media = twData[i].entities.media[0];
					if (media.type == "photo") {
						var img_p = $("<p />");
							img_p.addClass("tweet_img");
									// photo
									var img = $("<img />");
									img.attr("src", media.media_url);
									var img_w = 199;
									var img_h = Math.round(media.sizes.small.h * (img_w / media.sizes.small.w));
									img.attr("width", img_w);
									img.attr("height", img_h);
									img_p.append(img);
						 href.append(img_p);
					}
				}
				// text
				var text_p = $("<p />");
					text_p.addClass("tweet_text");
					text_p.html(urlReplace(twData[i].text));
					href.append(text_p);
				li.append(href);
			// set list
			if (addItemMode) {
				loadTwList.splice(addCnt, 0, li);
				addCnt++;
			} else {
				loadTwList.push(li);
			}
			if (showTwList.length >= showItemMax) {
				continue;
			}
			showTwList.push(li);
		}
		//console.log(loadTwList.length);//debug
		if (maxPostTime > lastPostTime) {
			lastPostTime = maxPostTime;
		}
		setItemPos = showTwList.length-1;
		setTwItem();
	}
	
	//
	// apend item
	//
	setTwItem = function() {
		if (setItemPos >= 0) {
			showTwList[setItemPos].hide();
			//ol.prepend(showTwList[setItemPos]).masonry('prepended', showTwList[setItemPos]).masonry('layout');
			ol.prepend(showTwList[setItemPos]);
			showTwList[setItemPos].fadeIn(200);
			setItemPos--;
			setTimeout(setTwItem, 250);
		}
		if (setItemPos >= loadTwList.length) {
			$('.tweet_more').hide();
		}
	}
	
	//
	// add show item
	//
	addShowItem = function(e) {
		var showCnt = ol.find('.tweet_item').length;
		//console.log(showCnt);//debug
		addItemPos = showCnt;
		addItemMaxPos = showCnt + showItemMax
		setAddShowItem();
	}
	setAddShowItem = function(e) {
		if (addItemPos < loadTwList.length && addItemPos < addItemMaxPos) {
			loadTwList[addItemPos].hide();
			//ol.append(loadTwList[addItemPos]).masonry('appended', loadTwList[addItemPos]).masonry('layout');
			ol.append(loadTwList[addItemPos]);
			loadTwList[addItemPos].fadeIn(200);
			addItemPos++;
			setTimeout(setAddShowItem, 50);
		}
		if (addItemPos >= loadTwList.length) {
			$('.iwatter_btn_more').hide();
		}
	}
	
	//
	// init masonry
	//
	initMasonry = function() {
		ol.masonry({
			gutter: 13,
			itemSelector: '.tweet_item',
			//stamp: '#tweet_first'
		});
	}
	
	//
	// utility
	//
	// number format		
	//
	function convertNum(num) {
		var str = String(num);
		while (str.length < 2) {
			str = "0"+str;
		}
		return str;
	}
	//
	// replace url
	//
	function urlReplace(url) {
		//url = url.replace(/(http:\/\/[\x21-\x7e]+)/gi, "<a href='$1'>$1</a>");
		url = url.replace(/(http:\/\/[\x21-\x7e]+)/gi, "");
		url = url.replace(/(https:\/\/[\x21-\x7e]+)/gi, "");
		return url;
	}
	
	ol = $('.tweet_contents');
	ol.html("");
	$('.iwatter_body_inner').css("height","auto");
	//initMasonry();
	//loadTwJson();

  $(function() {
    $(window).load(function() {
			loadTwJson();
    });
  });
	
});