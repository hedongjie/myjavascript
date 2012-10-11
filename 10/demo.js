var list = document.getElementById('list');
var item = document.getElementsByTagName('li');
var itemInput = document.getElementsByTagName('input');
var arr = [];
//布局转换
for (var i = 0; i < item.length; i++) {
	arr.push({
		left: item[i].offsetLeft,
		top: item[i].offsetTop
	});
	console.log(arr[i].left + '----' + arr[i].top);

};
for (var i = 0; i < arr.length; i++) {
	item[i].style.position = "absolute";
	item[i].style.left = arr[i].left + 'px';
	item[i].style.top = arr[i].top + 'px';
};

for (var i = 0; i < itemInput.length; i++) {
	itemInput[i].index = i;
	itemInput[i].onclick = function() {
		if (this.index % 2 == 0) {
			if (this.parentNode != first(list)) {
				startMove(this.parentNode, {
					top: pre(this.parentNode).offsetTop
				}); //将当前的li运动到上一个元素的top位置
				startMove(pre(this.parentNode), {
					top: this.parentNode.offsetTop
				}); //将上一个元素运动到当前元素top位置
				list.insertBefore(this.parentNode, pre(this.parentNode));
			} else {
				alert('到头了');
			}
		} else {
			if (this.parentNode != last(list)) {
				startMove(this.parentNode, {
					top: next(this.parentNode).offsetTop
				}); //同上
				startMove(next(this.parentNode), {
					top: this.parentNode.offsetTop
				});
				list.insertBefore(next(this.parentNode), this.parentNode);
			} else {
				alert('结尾了');
			}
		}
	}
};
function first(obj) {
	return obj.firstElementChild || obj.firstChild;
}
function last(obj) {
	return obj.lastElementChild || obj.lastChild;
}
function pre(obj) {
	return obj.previousElementSibling || obj.previousSibling;
}
function next(obj) {
	return obj.nextElementSibling || obj.nextSibling;
}

