window.onload = function() {
	var drag = new dragBox();
    	var drag1 = new dragDrop();
        drag1.init('dd');
}
function dragDrop() {
	this.move = null;
	this.disX = 0;
	this.disY = 0;
}
dragDrop.prototype.init = function(id) {
	var that = this;
	this.move = document.getElementById(id);
	this.move.onmousedown = function(event) {
		var oEvent = event || window.event;
		that.dragDown(oEvent);
		return false;
	}
}
dragDrop.prototype.dragDown = function(event) {
	var that = this;
	this.disX = event.clientX - this.move.offsetLeft;
	this.disY = event.clientY - this.move.offsetTop;
	document.onmousemove = function(event) {
		var oEvent = event || window.event;
		that.dragMove(oEvent);

	}
}
dragDrop.prototype.dragMove = function(oEvent) {
	this.move.style.left = oEvent.clientX - this.disX + 'px';
	this.move.style.top = oEvent.clientY - this.disY + 'px';
	document.onmouseup = this.dragUp;

}
dragDrop.prototype.dragUp = function() {
	document.onmousemove = document.onmouseup = null;
}
//子
function dragBox() {
	//继承
	var that = this;
	dragDrop.call(this);
	this.init('move');
	this.move.onmousedown = function(event) {
		var oEvent = event || window.event;
		that.dragCase(oEvent);
        return false;
	}
}
for (var fn in dragDrop.prototype) {
	dragBox.prototype[fn] = dragDrop.prototype[fn];
}

dragBox.prototype.dragCase = function() {
	this.crea = document.createElement('div');
	this.crea.id = 'mov2';
	var that = this;
	this.crea.style.left = this.move.offsetLeft - 1 + 'px';
	this.crea.style.top = this.move.offsetTop - 1 + 'px';
	this.crea.style.width = this.move.offsetWidth + 'px'; //offsetHeight算body
	this.crea.style.height = this.move.offsetHeight + 'px';
	document.body.appendChild(this.crea);
	document.onmousemove = function(event) {
		var oEvent = event || window.event;
		that.dragMove(oEvent)
	}
	document.onmouseup = function() {
		that.dragUp();
	}
}
dragBox.prototype.dragMove = function(oEvent) {
	this.crea.style.left = oEvent.clientX - this.disX + 'px';
	var that = this;
	this.crea.style.top = oEvent.clientY - this.disY + 'px';

}
dragBox.prototype.dragUp = function() {
	document.onmousemove = document.onmouseup = null;
	this.move.style.left = this.crea.offsetLeft + 'px';
	this.move.style.top = this.crea.offsetTop + 'px';
	document.body.removeChild(this.crea);
}

