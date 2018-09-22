var bj = document.getElementById('bj');
var zk = document.getElementById('zk');
$("#bj").click(function(event) {
	if (bj.innerText == "更多") {
		zk.style.height = "auto";
		bj.innerText = "折叠";
	} else {
		zk.style.height = "30px";
		bj.innerText = "更多";
	}
});
var btn1 = document.getElementById('btn');
var nav1 = document.getElementById('nav');
$("#btn").click(function(event) {
	if (btn1.innerText == "≡") {
		nav1.style.width = '100%';
		btn1.innerText = "×";
	} else {
		nav1.style.width = '0%';
		btn1.innerText = "≡";
	}
});
