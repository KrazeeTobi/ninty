$(function(){

	var ul      = $('.list_thumb').css({position:'relative'});
	var items   = ul.find('img').toArray();
	var lineNum = 5;
	var itemNum = items.length;
	var winW;

	Shared.util.srand(+new Date());
	Shared.util.shuffle(items, true);

	if(itemNum/lineNum != Math.ceil(itemNum/lineNum)){
		itemNum = Math.ceil(itemNum/lineNum)*lineNum;
	}

	var numPerLine = itemNum/lineNum;

	ul.find('li').remove();

	for(var i=0; i<lineNum; i++){
		var li = $('<li></li>').css({position:'relative', left:0, width:(100*numPerLine)+'%'});
		ul.append(li);
	}

	var lines = ul.find('li');

	for(var i=0; i<itemNum; i++){
		if(i < items.length){
			items[i].style.width = 50/numPerLine+'%';
			lines.eq(i%lineNum).append(items[i]);
		}else{
			lines.eq(i%lineNum).append(items[i-items.length].cloneNode());
		}
	}
	lines.each(function(i){
		lines.eq(i).find('img').each(function(j){
			if(j < numPerLine){
				lines.eq(i).append(this.cloneNode());
			}
		});
	});


	Shared.util.addResizeListener(function(w, h){
		winW = w;
	});

	function startSlide(){
		for(var i=0; i<lineNum; i++){
			(function move(n){
				if(Shared.css.hasTransition && Shared.ua.isiOS && 0){
					lines.eq(n).transition('all', 0).transform('translate3d(0%,0,0)');
					lines.eq(n).stop(true).delay(10).transit({transform:'translate3d(-50%,0,0)'}, winW*numPerLine*15, 'linear', function(){
						lines.eq(n).transition('all', 0).transform('translate3d(0%,0,0)');
						move(n);
					});
				}else{
					lines.eq(n).stop(true).css({left:'0%'}).animate({left:(-50*numPerLine)+'%'}, winW*numPerLine*15, 'linear', function(){
						move(n);
					});
				}
			})(i);
		}
	}
	if(!Shared.ua.is3DS){
		startSlide();
		
		$(window).bind('orientationchange', startSlide);
	}
});