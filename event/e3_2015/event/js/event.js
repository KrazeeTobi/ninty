$(function(){
	if(Polaris.html.hasWebgl){
		var animation = new E3.Triangles('#back', {
			num : 1
			,background: '#ffffff'
			,speed : 0.01
			,minAlpha : 0.09
			,maxAlpha : 0.19
			,boundsX : 800
			,boundsY : 600
			,colors : ['#0096c8', '#00c8c8']
			,webgl : true
		});
			animation.start();
	}
});

$(function(){
	var item = $('.report__item:nth-child(3n)');
	item.addClass('line_last');
});