window.onload = function() {
	var drag = new dragDrop();
	drag.init({
		id: 'login',
		toDown: function() {
			document.title = 'hello';
		}
	});
}
function dragDrop() {
	this.disX = 0;
	this.disY = 0;
	this.login = null;
	this.settings = {
		toDown: function() {},
		toUp: function() {}
	}
}
//初始化
dragDrop.prototype.init = function(opt) {
	var that = this; //对象
	this.login = document.getElementById(opt.id);
	copy(this.settings, opt);
	this.login.onmousedown = function(event) { //绑定到事件函数
		var oEvent = event || window.event;
		that.settings.toDown();
		that.dragDown(oEvent);
		return false;
	}
}
//点击
dragDrop.prototype.dragDown = function(oEvent) {
	this.disX = oEvent.clientX - this.login.offsetLeft;
	this.disY = oEvent.clientY - this.login.offsetTop;
	var that = this;
	document.onmousemove = function(event) {
		var oEvent = event || window.event;
		that.dragMove(oEvent);
	}
}
//移动
dragDrop.prototype.dragMove = function(oEvent) {
	this.login.style.left = oEvent.clientX - this.disX + 'px';
	this.login.style.top = oEvent.clientY - this.disY + 'px';
	document.onmouseup = this.dragUp;
}
//抬起
dragDrop.prototype.dragUp = function() {
	document.onmouseup = document.onmousemove = null;
}
function copy(obj1, obj2) {
	for (var attr in obj2) {
		obj1[attr] = obj2[attr]
	}
	return obj1;
}

