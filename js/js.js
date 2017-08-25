window.onload = function () {
	var timer = setInterval(function (){
		var now = new Date();
		// console.log(now);
		var targetTime = new Date('2017/8/27 0:0:0');
		var time = parseInt((targetTime  - now)/1000); 
		var s = time % 60;
		var m = parseInt((time % 3600) / 60);
		var h = parseInt(time % (3600*24) / 3600);
		var day = parseInt(time / (3600 * 24));
		document.getElementById('timess').innerHTML= '距离抢购开始还有 '+ day + ' 天 ' + h + ' 小时 ' + m + ' 分钟 ' + s + ' 秒 ';
		if (time == 0) {
			document.getElementById('timess').innerHTML = "开始抢购啦";
			clearInterval(timer);
		}
	},500);

	// var imtop = document.getElementById("imge_top");
	var ims = $('#ims');
	console.log(ims);
	var box = ims.getElementsByTagName("img");
	console.log(box);

	var currentIndex = 0;

	var boxwidth = '771';
	// console.log(boxwidth);
	for (var i = 0; i < box.length; i++) {
		 var imgDiv = box[i];
		 // console.log(imgDiv);
		 imgDiv.style.left = boxwidth + 'px';
		 // console.log(imgDiv.style.left);
		box[0].style.left = '0';

		function nextImage() {
			animate(box[currentIndex],{
				left:-boxwidth
			});
			currentIndex++;
		if (currentIndex >= box.length) {
			currentIndex = 0;
		}
		box[currentIndex].style.left = boxwidth + 'px';
		animate(box[currentIndex],{
			left:0
		});
		// refreshControlBar();
	}
	function prveImage() {
	animate(box[currentIndex],{
				left:boxwidth
			});
		currentIndex--;
		if (currentIndex < 0) {
			currentIndex = box.length - 1;
		}
		box[currentIndex].style.left = -boxwidth + 'px';
		animate(box[currentIndex],{
			left:0
		});
		// refreshControlBar();
	}
}
		$('#prve').onclick = nextImage;
		$('#next').onclick = prveImage;
}