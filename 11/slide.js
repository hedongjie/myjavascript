var arr = ['./img/t1.jpg', './img/t2.jpg', './img/t3.jpg', './img/t4.jpg', './img/t5.jpg'];
function Slide(json) {
	this.data = json.data || [];
	this.id = json.id || 'box';
	this.isIndex = json.isIndex || false;
	this.width = json.width || null;
	this.height = json.height || null;
	this.evenType = json.evenType || 'click';
	this.path = json.path || 'top';
	this.create();
}
Slide.prototype.create = function() {
	this.crea = document.createElement('div');
	this.crea.id = this.id;
	if (this.width) {
		this.crea.style.width = this.width;
	}
	if (this.height) {
		this.crea.style.height = this.height;
	}
	this.list = document.createElement('ul');
	for (var i = 0; i < this.data.length; i++) {
		this.item = document.createElement('li');
		var creImg = document.createElement('img');
		creImg.src = this.data[i];
		this.item.appendChild(creImg);
		this.list.appendChild(this.item);
	};
	this.crea.appendChild(this.list);
	if (this.isIndex) {
		this.creaIndex();
	}
	document.body.appendChild(this.crea);
}
Slide.prototype.creaIndex = function() {
	var that = this;
	var numwrap = document.createElement('div');
	numwrap.className = 'num';
	for (var i = 0; i < this.data.length; i++) {
		var numItem = document.createElement('span');
		numItem.innerHTML = i + 1;
		numItem.index = i;
		if (i == 0) {
			numItem.className = 'active';
		}
		bindEvent(numItem, this.evenType, function() {
			that.play(this);
		})
		numwrap.appendChild(numItem);
	};
	this.crea.appendChild(numwrap);
}
Slide.prototype.play = function(current) {
	var getItem = this.crea.getElementsByTagName('span');
	for (var i = 0; i < this.data.length; i++) {
		getItem[i].className = '';
	}
	current.className = 'active';
	if (this.path == 'left') {
		this.itemList = this.crea.getElementsByTagName('li');
		for (var i = 0; i < this.itemList.length; i++) {
			this.itemList[i].style.cssFloat = 'left';
			this.itemList[i].style.styleFloat = 'left';
		};
		this.list.style.width = this.itemList[0].offsetWidth * this.itemList.length + 'px';
		this.move(this.list, this.path, - current.index * parseInt(css(this.crea, 'width')))
	} else {
		this.move(this.list, this.path, - current.index * parseInt(css(this.crea, 'height')))
	}
}
Slide.prototype.move = function(obj, attr, iTarget) {
	clearInterval(obj.iTimer);
	var iSpeed = 0;
	var iCur = 0;
	obj.iTimer = setInterval(function() {
		if (attr == 'opacity') {
			iCur = Math.round(parseFloat(css(obj, attr)) * 100);
		} else {
			iCur = parseInt(css(obj, attr));
		}
		iSpeed = (iTarget - iCur) / 8;
		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
		if (iCur == iTarget) {
			clearInterval(obj.iTimer);
		} else {
			if (attr == 'opacity') {
				obj.style.opacity = (iCur + iSpeed) / 100;
				obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
			} else {
				obj.style[attr] = iCur + iSpeed + 'px';
			}
		}
	},30);
}
//TODO
Slide.prototype.autoCutover = function (){
}
new Slide({
	data: arr,
	id: 'box',
	width: '490px',
	height: '170px',
	isIndex: true,
	evenType: 'click',
	path: 'top'
})
new Slide({
	data: arr,
	id: 'box',
	width: '490px',
	height: '170px',
	isIndex: true,
	evenType: 'mouseover',
    path: 'left'
})
function bindEvent(obj, ev, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(ev, fn, false);
	} else {
		obj.attachEvent('on' + ev, function() {
			fn.call(obj);
		})
	}
}
function css(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

