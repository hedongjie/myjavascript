//背景遮罩
//滚动事件
window.onload = function() {
	var one = new dialogBox();
	one.init({
		id: "one",
	});
	var two = new dialogBox();
	two.init({
		id: "two",
		toMove: function() {
			two.crea.style.left = two.MaxWidth + 'px';
			two.crea.style.top = two.MaxHeight + 'px';
		},
		toScroll: function() { (window.onscroll = function() {
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				two.crea.style.top = (document.documentElement.clientHeight - two.crea.offsetHeight) + scrollTop + 'px';
			})()
		}
	});
	var three = new dialogBoxMove();
}
function dialogBox() {
	this.scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
	this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	this.settings = { //默认信息 this.default
		toMove: function() {},
		toScroll: function() {}
	};
}
dialogBox.prototype.init = function(opt) {
	var that = this;
	this.onBtn = document.getElementById(opt.id);
	copy(this.settings, opt);
	this.crea = document.createElement('div');
	this.creaContent = document.createElement('div');
	this.creaContent.innerHTML = '一个简单的dialog';
	this.creaTitle = document.createElement('h3');
	this.creaColse = document.createElement('a');
	this.creaColse.innerHTML = 'X';
	this.creaColse.className = 'title-colse';
	this.creaTitle.appendChild(this.creaColse);
	this.creaTitle.className = 'dialog-title';
	this.crea.className = 'dialog';
	this.crea.appendChild(this.creaTitle);
	this.crea.appendChild(this.creaContent);
	this.onBtn.onclick = function() {
		that.clickShow();
		that.keepOut();
	}

}
dialogBox.prototype.keepOut = function() {
	this.keep = document.createElement('div');
	this.keep.id = 'keep';
	this.keep.style.height = Math.max(document.documentElement.clientHeight, document.body.offsetHeight) + 'px';
	this.keep.style.width = Math.max(document.documentElement.clientWidth, document.body.offsetWidth) + 'px';
	document.body.appendChild(this.keep);
}
dialogBox.prototype.clickShow = function() {
	document.body.appendChild(this.crea);
	var that = this;
	this.MaxWidth = document.documentElement.clientWidth - this.crea.offsetWidth;
	this.MaxHeight = document.documentElement.clientHeight - this.crea.offsetHeight;
	this.crea.style.left = this.MaxWidth / 2 + this.scrollLeft + 'px';
	this.crea.style.top = this.MaxHeight / 2 + this.scrollTop + 'px';
	this.creaColse.onclick = function() {
		that.diaClose();
	}
	that.settings.toMove();
	that.settings.toScroll();
}
dialogBox.prototype.diaClose = function() {
	document.body.removeChild(this.crea);
	document.body.removeChild(this.keep);
}
function copy(obj1, obj2) { //浅拷贝 extend
	for (var attr in obj2) {
		obj1[attr] = obj2[attr];
	}
	return obj1;

}
function dialogBoxMove() {
	dialogBox.call(this);
	this.init({
		id: 'three'
	});
	var that = this;
	this.crea.onmousedown = function(event) {
		var oEvent = event || window.evevt;
		that.dialogDown(oEvent);
		return false;
	}
}
for (var fn in dialogBox.prototype) {
	dialogBoxMove.prototype[fn] = dialogBox.prototype[fn];
}
dialogBoxMove.prototype.dialogDown = function(oEvent) {
	this.crea.style.opacity = '.7';
	this.disX = oEvent.clientX - this.crea.offsetLeft;
	this.disY = oEvent.clientY - this.crea.offsetTop;
	var that = this;
	document.onmousemove = function(event) {
		var oEvent = event || window.event;
		that.dialogMove(oEvent);
	}
}
dialogBoxMove.prototype.dialogMove = function(oEvent) {
	this.creaL = oEvent.clientX - this.disX;
	this.creaT = oEvent.clientY - this.disY;
	if (this.creaL < 0) {
		this.creaL = 0;
	} else if (this.creaL > this.MaxWidth) {
		this.creaL = this.MaxWidth;
	}
	if (this.creaT < 0) {
		this.creaT = 0;
	} else if (this.creaT > this.MaxHeight) {
		this.creaT = this.MaxHeight
	}
	this.crea.style.left = this.creaL + 'px';
	this.crea.style.top = this.creaT + 'px';
	var that = this;
	document.onmouseup = function() {
		that.dialogUp(this);
	}
}
//dialogBoxMove.prototype.keepOut = null;
	dialogBoxMove.prototype.dialogUp = function() {
		document.onmousemove = document.onmouseup = null;
		this.crea.style.opacity = '1';
	}

