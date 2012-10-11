window.onload = function () {
    zhao.drag.dragDrop.init('login2');
    }

var zhao = {};
zhao.drag = {};
zhao.drag.dragDrop = {
    disX: 0,
    disY: 0,
	login : null,
	init: function(obj) {
			this.login = document.getElementById(obj);
			var that = this;
			this.login.onmousedown = function(event) {
				var oEvent = event || window.event;
				that.dragDown(oEvent);
				return false;
			}
		},
		dragDown: function(oEvent) {
			this.disX = oEvent.clientX - this.login.offsetLeft;
			this.disY = oEvent.clientY - this.login.offsetTop;
			var that = this;
			document.onmousemove = function(event) {
				var oEvent = event || window.event;
				that.dragMove(oEvent);
			}
			document.onmouseup = this.dragUp;
		},
		dragMove: function(oEvent) {
			//alert(1);
			this.login.style.left = oEvent.clientX - this.disX + 'px';
			this.login.style.top = oEvent.clientY - this.disY + 'px';
		},
		dragUp: function() {
			document.onmousemove = document.onmouseup = null;
		}
};


