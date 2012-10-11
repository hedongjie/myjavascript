function startMove(obj, attr, targetValue) {
	var speed = 0; //速度
	var currentValue = 0; //当前值
	clearInterval(obj.timer) //多个物体运动清空多个定时器
	obj.timer = setInterval(function() {
		//透明除理
		if (attr == 'opacity') {
			currentValue = Math.round((parseFloat(getStyle(obj, 'opacity')) * 100)); //精度除理
		} else {
			currentValue = parseInt(getStyle(obj, attr)); //获取当前值 parseInt去掉px
		}
		//缓冲公式
		speed = (targetValue - currentValue) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		//停止运动
		if (currentValue == targetValue) {
			clearInterval(obj.timer);
		} else {
			//透明除理
			if (attr == 'opacity') {
				obj.style.filter = 'alpha(opacity=' + (currentValue + speed) + ')'; //IE
				obj.style.opacity = (currentValue + speed) / 100; //FF
			} else {
				obj.style[attr] = currentValue + speed + 'px';
			}
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
	//	return obj.currentStyle ? obj.currentStyle[attr] :  getComputedStyle(obj, false)[attr];
}

