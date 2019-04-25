
var sIndex =1;
showSlide(sIndex);

function nextslide(n) {
	showSlide(sIndex+=n);
}

function showSlide (n) {
	var slids = document.getElementsByClassName("myslides");
	if (n>slids.length) {
		sIndex=1;
	}
	if (n<1) {
		sIndex=slids.length;
	}
	for (var i = 0; i < slids.length; i++) {
		slids[i].style.display=" none";
	}
	slids[sIndex-1].style.display="flex"
}