//TODO 快点左右bug，点击向右，图片自动右滚bug
new function() {
    var content = document.getElementById('wrapper');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var list = document.getElementById('list');
	var item = list.getElementsByTagName('li');
	var minWidth = parseInt(getStyle(item[0], 'width'));
	list.innerHTML += list.innerHTML;
	list.style.width = item.length * minWidth + 'px';

	//自动
	var timer = null
	function autoPlay() {
		timer = setInterval(function() {
			trundle(minWidth);
		},
		1800);
	}
	autoPlay()
	function trundle(minWidth) {
		console.log(list.offsetLeft + '****' + minWidth);
		if (list.offsetLeft < - (list.offsetWidth / 2)) {
			list.style.left = 0;
		} else if (list.offsetLeft > minWidth) {
			list.style.left = - (list.offsetWidth / 2) + 'px';
		}
		startMove(list, {
			left: parseInt(getStyle(list, 'left')) - minWidth
		});
	}
	prev.onclick = function() {
		clearInterval(timer);
		trundle(minWidth);
	}
	next.onclick = function() {
		clearInterval(timer);
		trundle( - minWidth);
	}
    wrapper.onmouseover = function () {
        clearInterval(timer);
    }
    wrapper.onmouseout = function () {
            autoPlay();
        }
}

