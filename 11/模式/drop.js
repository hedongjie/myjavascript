//单体模式
//通用命名空间函数
var MYAPP = MYAPP || {};
MYAPP.namespace = function(ns_string) {
	var parts = ns_string.split('.'),
	parent = MYAPP,
	i;
	if (parts[0] === 'MYAPP') {
		parts = parts.slice(1);
	}
	for (i = 0; i < parts.length; i += 1) {
		if (typeof parent[parts[i]] === 'undefined') {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
}
MYAPP.namespace('MYDROP.libs.drop');
//var MYDROP = MYDROP || {};
//MYDROP.libs = {};
MYAPP.MYDROP.libs.drop = {
	disX: 0,
	disY: 0,
	obj: null,
	init: function(obj) {
		this.obj = obj;
		var that = this;
		this.obj.onmousedown = function(event) {
			var oEvent = event || window.event;
			that.dropDown(oEvent);
			return false;
		}
	},
	dropDown: function(oEvent) {
		this.disX = oEvent.clientX - this.obj.offsetLeft;
		this.disY = oEvent.clientY - this.obj.offsetTop;
		if (this.obj.setCapture) {
			this.obj.setCapture;
		}
		var that = this;
		document.onmousemove = function(event) {
			var oEvent = event || window.event;
			that.dropMove(oEvent);
		};
		document.onmouseup = function() {
			that.dropUp();
		}
	},
	dropMove: function(oEvent) {
		this.obj.style.left = oEvent.clientX - this.disX + 'px';
		this.obj.style.top = oEvent.clientY - this.disY + 'px';
	},
	dropUp: function() {
		document.onmousemove = null;
		document.onmouseup = null;
		if (this.obj.releaseCapture) {
			this.obj.releaseCapture;
		}
	}
}

var box = document.getElementById('box');
//MYAPP.MYDROP.libs.drop.init(box);
var myFunction = function() {
    //加载 drop模块
	var myObj = MYAPP.MYDROP.libs.drop;
	myObj.init(box);
}
myFunction();

