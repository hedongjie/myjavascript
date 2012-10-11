//混合模式
function drop() {
	this.disX = 0;
	this.disY = 0
}
drop.prototype.init = function(obj) {
	var that = this;
	this.obj = obj || {};
	this.obj.onmousedown = function(event) {
		var oEvent = event || window.event;
		that.dropDown(oEvent);
		return false;
	}
}
drop.prototype.dropDown = function(oEvent) {
	this.disX = oEvent.clientX - this.obj.offsetLeft;
	this.disY = oEvent.clientY - this.obj.offsetTop;
	var that = this;
	document.onmousemove = function(event) {
		var oEvent = event || window.event;
		that.dropMove(oEvent);
	}
}
drop.prototype.dropMove = function(oEvent) {
	this.obj.style.left = oEvent.clientX - this.disX + 'px';
	this.obj.style.top = oEvent.clientY - this.disY + 'px';
	document.onmouseup = this.dropUp;
}
drop.prototype.dropUp = function() {
	document.onmousemove = document.onmouseup = null;
}
function dropStint() {
	drop.call(this);
}
for (var property in drop.prototype) {
	dropStint.prototype[property] = drop.prototype[property];
}
//覆盖父级方法
dropStint.prototype.dropMove = function(oEvent) {
	this.t = oEvent.clientY - this.disY;
	this.l = oEvent.clientX - this.disX;
	if (this.t < 0) {
		this.t = 0;
	} else if (this.t > document.documentElement.clientHeight - this.obj.offsetHeight) {
		this.t = document.documentElement.clientHeight - this.obj.offsetHeight;
	}
	if (this.l < 0) {
		this.l = 0;
	} else if (this.l > document.documentElement.clientWidth - this.obj.offsetWidth) {
		this.l = document.documentElement.clientWidth - this.obj.offsetWidth;
	}
	this.obj.style.top = this.t + 'px';
	this.obj.style.left = this.l + 'px';
	document.onmouseup = this.dropUp;
}
var box = document.getElementById('box');
var box1 = document.getElementById('box1');
var dropObj1 = new drop;
dropObj1.init(box1);
var dropObj = new dropStint;
dropObj.init(box);

