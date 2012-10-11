function ajax(method, url, data, fnSuc, charset) {
	if (!charset) {
		charset = 'utf-8';
	}
	if (method == 'jsonp') {
		var oScript = document.createElement('script');
		if (data) {
			url += '?' + data;
		}
		oScript.src = url;
		oScript.charset = charset;
		fnSuc && fnSuc();
		document.body.appendChild(oScript);
		return ;
	}
	var oAjax = null;
	if (window.XMLHttpRequest) {
		oAjax = new XMLHttpRequest();
	} else {
		oAjax = new ActiveXObject('Microsoft.XMLHTTP');
	}
	if (method == 'get') {
		url += '?' + data;
	}
	oAjax.open(method, url, true);
	if (method == 'get') {
		oAjax.send();
	} else {
		oAjax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		oAjax.send(data);
	}
	oAjax.onreadystatechange = function() {
		if (oAjax.readyState == 4) {
			if (oAjax.status == 200) {
                alert(oAjax.responseText);
				fnSuc && fnSuc(oAjax.responseText);
			}
		}
	}
}

