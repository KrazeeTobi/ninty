!function($){
	/**
	 * titlelist
	 */

	var eventItems0619 = [
		 '<dt class="contents_article_list_date font_b"><span>6.19</span></dt>'
		,'<dd class="btn_gotoarticle"><a href="../061902/index.html">Nintendo @ E3 2015 ダイジェスト</a></dd>'
		,'<dd class="btn_gotoarticle"><a href="../061901/index.html">「Nintendo Treehouse: Live @ E3 2015」3日目</a></dd>'
	];

	var eventItems0618 = [
		 '<dt class="contents_article_list_date font_b"><span>6.18</span></dt>'
		,'<dd class="btn_gotoarticle"><a href="../061801/index.html">「Nintendo Treehouse: Live @ E3 2015」2日目</a></dd>'
	];

	var eventItems0617 = [
		 '<dt class="contents_article_list_date font_b"><span>6.17</span></dt>'
		,'<dd class="btn_gotoarticle"><a href="../061702/index.html">「Nintendo Treehouse: Live @ E3 2015」1日目</a></dd>'
		,'<dd class="btn_gotoarticle"><a href="../061701/index.html">米国任天堂のプレゼンテーション「Nintendo Digital Event（日本語字幕）」を放送しました</a></dd>'
	];

	var eventItems0615 = [
		 '<dt class="contents_article_list_date font_b"><span>6.15</span></dt>'
		,'<dd class="btn_gotoarticle"><a href="../061501/index.html">任天堂ワールド・チャンピオンシップが開催されました</a></dd>'
	];

	var eventItems0614 = [
		 '<dt class="contents_article_list_date font_b"><span>6.14</span></dt>'
		,'<dd class="btn_gotoarticle"><a href="../061401/index.html">『大乱闘スマッシュブラザーズ』即日配信！<br/>新要素のお知らせ</a></dd>'
	];



	function initEventList(){

		function initLineupList($elm,list){

			$.each(list,function(i,x){
				var $li=$(x);
				var href=$li.find("a").attr("href");
				var url=$li.find("a").prop("href");
				if(href && url === location.href){
					$li.addClass("nowthispage");
				}
				$elm.append($li);
			});
		}
		initLineupList($('#eventList .day0619'),eventItems0619);
		initLineupList($('#eventList .day0618'),eventItems0618);
   	　　initLineupList($('#eventList .day0617'),eventItems0617);
		initLineupList($('#eventList .day0615'),eventItems0615);
		initLineupList($('#eventList .day0614'),eventItems0614);

	}


	$(function(){
		if(Polaris.html.hasWebgl){
			var animation = new E3.Triangles('#back', {
				num : 0
				,background: '#ffffff'
				,speed : 0.02
				,minAlpha : 0.09
				,maxAlpha : 0.19
				,boundsX : 800
				,boundsY : 600
				,colors : ['#0096c8', '#00c8c8']
				,webgl : false
			});
				animation.start();
		}
	});


	$(function(){
		initEventList();
	});


}(jQuery);
