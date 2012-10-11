function startMove(obj, attr, iTarget) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var iCur = 0;
		if (attr == 'opacity') {
			if (Math.round(parseFloat(getStyle(obj, attr)) * 100) == 0) {
				iCur = 0;
			}
			else {
				iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100) || 100;
			}
		}
		else {
			iCur = parseInt(getStyle(obj, attr)) || 0;
		}
		var iSpeed = (iTarget - iCur) / 8;
		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
		if (iCur == iTarget) {
			clearInterval(obj.timer);
		}
		else {
			if (attr == 'opacity') {
				obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
				obj.style.opacity = (iCur + iSpeed) / 100;
			}
			else {
				obj.style[attr] = iCur + iSpeed + 'px';
			}
		}
	},
	30);
}
function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}
	else {
		return getComputedStyle(obj, false)[attr];
	}
}

