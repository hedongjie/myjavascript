//toString();把对转成字符串 继承Object对象
//constructor:当前对象对应的构造函数,只是构造函数
//初始化该对象的构造函数
//hasOwnProperty():非继承的属性返回真
//hasOwnProperty : 如果是自己的属性，就返回真，如果不是自己的属性就返回假
//instanceof运算符，查看对旬是否是某个类的实例，对象和构造函数的关系 
//in操作符无论是在实例对象中还是原型中都会返回 true
//
var arr = [1,2,4];
console.log(arr.toString());
//alert(arr.constructor === Array);//arr的构造函数是 Array
// alert(arr.hasOwnProperty('toString'));
var arr = [];
alert(arr instanceof Array);
alert(arr instanceof Object);//所有的对象 instanceof Object都会返回真
alert(Function instanceof Object);
alert(Object instanceof Function);
