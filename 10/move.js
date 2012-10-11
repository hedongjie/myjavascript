function startMove(obj, targetValue, fun) {
	clearInterval(obj.timer);
	var speed = 0;
	var currentValue = 0; //目标值
	obj.timer = setInterval(function() {
		var power = true;
		for (var attr in targetValue) { //
			if (attr == 'opacity') {
				currentValue = Math.round(parseFloat(getStyle(obj, 'opacity')) * 100);
			} else {
				currentValue = parseInt(getStyle(obj, attr));
			}
			speed = (targetValue[attr] - currentValue) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if (currentValue != targetValue[attr]) { //有一个不到目标就假
				power = false;
			}
			if (attr == 'opacity') {
				obj.style.opacity = (currentValue + speed) / 100;
				obj.style.filter = 'alpha(opacity=' + (currentValue + speed) + ')';
			} else {
				obj.style[attr] = currentValue + speed + 'px';
			}
		}
		if (power) {
			clearInterval(obj.timer); //都到达目标时停止 
            fun && fun();//链式运动
		}
	},30);
}
//获取样式
function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

