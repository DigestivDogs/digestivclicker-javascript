var digestives = 0;
var cursors = 0;

function digestiveClick(number) {
  digestives = digestives + number;
  document.getElementById("digestives").innerHTML = prettify(digestives);
}

function buyCursor() {
	var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));
	if (digestives >= cursorCost) {
		cursors = cursors + 1;
		digestives = digestives - cursorCost;
		document.getElementById("cursors").innerHTML = cursors;
		document.getElementById("digestives").innerHTML = digestives;
	}
	var nextCost = Math.floor(10 * Math.pow(1.1, cursors));
	document.getElementById("cursorCost").innerHTML = nextCost;
}

window.setInterval(function() {
	digestiveClick(cursors);
}, 3000);

function prettify(input) {
	var output = Math.round(input * 1000000) / 1000000;
	return output;
}
