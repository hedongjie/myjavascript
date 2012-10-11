/*function foo() {
	var a = b = 0;
	//delete b;
}
foo()
alert(a);
var global = (function() {
	return this
})();
alert(global);
//单一var模式
function func() {
	var a = 1,
	b = 2,
	sum = a + b,
	myObject = {},
	i, j;
	function funcMain() {
	}
}
function updateElement(obj){
    var el = document.getElementById(obj);
    style = el.style;
}
myname = 'zhaoshuai';
function func() {
	//var myname == var myname = undefined
	alert(myname); //因为myname被看做是声明的本地变量
	var myname = 'local';
	alert(myname);
}
func();
myarray = [1, 2, 3, 4];

for (var i = 0; i < myarray.length; i++) {
	alert(myarray[i])
};
var man = {
	hands: 1,
	legs: 2,
	heads: 1
};
if (typeof Object.prototype.clone === 'undefined') {
	Object.prototype.clone = function() {}
}
for (var property in man) {
	console.log(property + '-------' + man[property]);
}
for (var property in man) {
	if (man.hasOwnProperty(property)) {
		console.log(property + '----' + man[property]);
	}
}
for (var property in man) {
	if (Object.prototype.hasOwnProperty.call(man, i)) {
		console.log(i + '---' + man[i])
	}
}*/
//自定义方法
if (typeof Object.prototype.myMethod !== 'function') {
	Object.prototype.myMethod = function() {
        alert('fuck you');
        };
}
var obj = {};
obj.myMethod();

