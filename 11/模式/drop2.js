//混合模式
function drop() {
	this.disX = 0;
	this.disY = 0
}
drop.prototype.init = function(obj) {
	var that = this;
    this.obj = obj;
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
var box = document.getElementById('box');
var box1 = document.getElementById('box1');
var dropDrag = new drop();
dropDrag.init(box);
var dropDrag1 = new drop();
dropDrag1.init(box1);

