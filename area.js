function getArea(lati) {
	a = lati[0];
	b = lati[1];

	if((lati.length == 2) && (a >= 0) && (b >= 0) && (a === parseInt(a)) && (b === parseInt(b))) {
		return a * b;
	} else {
		return -1;
	}
}
module.exports = getArea;