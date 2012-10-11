var chackReg = {
	telReg: /^0?(13|14|15|18)[0-9]{9}$/,
	emailReg: /^\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
	passReg: /^(?![a-z]+$)(?!\d+$)[a-z0-9]{8,20}$/i,
	qqReg: /^[1-9]\d{4,10}$/,
	nameReg: /[\u4e00-\u9fa5]/,
	nickNameReg: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,
	idRge: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/
}
var register = document.getElementById('register');
register.onsubmit = function() {
	return regs('current');
}

function chack(obj, message, fun, click) {
	var btn = true;
	obj.onfocus = function() {
		if (btn) {
			next(this.parentNode).innerHTML = message
			next(this.parentNode).style.display = 'block';
		}
	}
	obj.onblur = function() {
		if (fun(this.value)) {
			next(this.parentNode).innerHTML = '输入正确';
			btn = false;
		} else {
			next(this.parentNode).innerHTML = '输入错误';
		}
	}
	if (click == 'current') {
		obj.onfocus();
		obj.onblur();
	}
}
window.onload = regs;
function regs(current) {
	var d = document;
	var stat = true;
	var nameText = register.getElementsByTagName('input');
	chack(nameText[0], '请输入Email帐号', function(val) {
		if (chackReg.emailReg.test(val)) {
			return true;
		} else {
			stat = false;
			return false;
		}
	},
	current)
	chack(nameText[1], '请输入密码[数字、字母，长度8－20]', function(val) {
		if (chackReg.passReg.test(val)) {
			return true;
		} else {
			stat = false;
			return false;
		}
	},
	current)
	chack(nameText[2], '请确认密码', function(val) {
		if (chackReg.passReg.test(val) && val == nameText[2].value) {
			return true;
		} else {
			stat = false;
			return false;
		}
	},
	current)
	chack(nameText[3], '请输入昵称', function(val) {
		if (chackReg.nickNameReg.test(val) ) {
			return true;
		} else {
			stat = false;
			return false;
		}
	},
	current)
	chack(nameText[4], '请输入中文真实姓名', function(val) {
		if (chackReg.nameReg.test(val)) {
			return true;
		} else {
			stat = false;
			return false;
		}
	},
	current)
	chack(nameText[5], '请输入18位身份证', function(val) {
		if (chackReg.idRge.test(val)) {
			return true;
		} else {
			stat = false;
			return false;
		}
	},
	current)
	return stat;
}

//兼容获取元素的子元素
function first(obj) {
	return obj.firstElementChild || obj.firstChild;
}
function last(obj) {
	return obj.lastElementChild || obj.lastChild;
}
function next(obj) {
	return obj.nextElementSibling || obj.nextSibling;
}
function pre(obj) {
	return obj.previousElementSibling || obj.previousSibling;
}

