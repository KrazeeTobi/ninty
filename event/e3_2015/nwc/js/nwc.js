$(function() {

	var animation = new E3.Bands('#back', {

		// ラインセット数
		num : 5

		// 乱数シード
		,seed : 100

		// 線の色
		,colors : ['#fad2ff', '#c2ffcd', '#c7edff']

		// アルファ値
		,alpha : 0.9

		// 背景色
		,background : '#ffffff'

		// ライン幅
		,width: 8

		// ライン間隔
		,gap : 0.03

		// 最小半径
		,minRadius : 1100

		// 最大半径
		,maxRadius : 1200

		// カメラ半径
		,camRadius : 2000

		// フォグ近距離面
		,fogNear : 10000000

		// フォグ遠距離面
		,fogFar : 10000000

		// ラインスピード
		,speed : 0.0002

		// マウスによるカメラ移動
		,mouse : false

		// スクロールによるカメラ移動
		,scroll : false

		,webgl : true
	});

	animation.start();

});
