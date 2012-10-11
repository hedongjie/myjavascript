(function() {
	var navs = document.getElementById('nav').getElementsByTagName('dd');
	var tcs = document.getElementById('topChannel').getElementsByTagName('a');
	for (var i = 1; i < navs.length; i++) {
		tcs[i].onmouseover = navs[i].onmouseover = (function(n) {
			return function() {
				navs[n].className = "active";
			}
		})(i);
		tcs[i].onmouseout = navs[i].onmouseout = (function(n) {
			return function() {
				navs[n].className = "";
			}
		})(i)
	}
})()
//引用重新赋值是无影响的
//

