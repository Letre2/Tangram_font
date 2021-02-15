// Helper Functions
var activeColor = 255;

function getRandomColor(activeColor) {
	// console.log(activeColor);
	// console.log(colorData);

	if (colorData == 'red') {
		return color(random(150, activeColor), random(0, 10), random(0, 10));
	}
	else if (colorData == 'blue') {
		return color(random(0, 10), random(0, 10), random(150, activeColor));
	}
	else if (colorData == 'green') {
		return color(random(0, 10), random(150, activeColor), random(0, 10));
	}
}

// Objects
class MyTriangleL {
	constructor() {
		this.myColor = getRandomColor(activeColor);
	}
	display(r, x, y, tX, tY, g) { //funktion für objektzeichnung
		push();
		x = (x) * g;
		y = (y) * g;
		fill(this.myColor);
		// noStroke();
		stroke(1);
		translate(tX + x, tY + y);
		rotate(r);
		triangle(0 * g, 0 * g, 2 * g, -2 * g, 4 * g, 0 * g);
		pop();
	}
}
class MyTriangleM {
	constructor() {
		this.myColor = getRandomColor(activeColor);
	}
	display(r, x, y, tX, tY, g) { //funktion für objektzeichnung
		push();
		x = (x) * g;
		y = (y) * g;
		fill(this.myColor);
		// noStroke();
		stroke(1);
		translate(tX + x, tY + y);
		rotate(r);
		triangle(0 * g, 0 * g, Math.sqrt(Math.pow(1 * g, 2) + Math.pow(1 * g, 2)), -Math.sqrt(Math.pow(1 * g, 2) + Math.pow(1 * g, 2)), Math.sqrt(Math.pow(1 * g, 2) + Math.pow(1 * g, 2)) * 2, 0 * g);
		pop();
	}
}
class MyTriangleS {
	constructor() {
		this.myColor = getRandomColor(activeColor);
	}
	display(r, x, y, tX, tY, g) { //funktion für objektzeichnung
		push();
		x = (x) * g;
		y = (y) * g;
		fill(this.myColor);
		// noStroke();
		stroke(1);
		translate(tX + x, tY + y);
		rotate(r);
		triangle(0 * g, 0 * g, 1 * g, -1 * g, 2 * g, 0 * g);
		pop();
	}
}
class MyRect {
	constructor() {
		this.myColor = getRandomColor(activeColor);
	}
	display(r, x, y, tX, tY, g) { //funktion für objektzeichnung
		push();
		x = (x) * g;
		y = (y) * g;
		fill(this.myColor);
		stroke(1);
		translate(tX + x, tY + y);
		rotate(r);
		rect(0 * g, 0 * g, Math.sqrt(Math.pow(1 * g, 2) + Math.pow(1 * g, 2)), -Math.sqrt(Math.pow(1 * g, 2) + Math.pow(1 * g, 2)));
		pop();
	}
}
class MyQuad1 {
	constructor() {
		this.myColor = getRandomColor(activeColor);
	}
	display(r, x, y, tX, tY, g) { //funktion für objektzeichnung
		push();
		x = (x) * g;
		y = (y) * g;
		fill(this.myColor);
		stroke(1);
		translate(tX + x, tY + y);
		rotate(r);
		quad(0 * g, 0 * g, 1 * g, -1 * g, 3 * g, -1 * g, 2 * g, 0 * g); //Paralellogramm
		pop();
	}
}
class MyQuad2 {
	constructor() {
		this.myColor = getRandomColor(activeColor);
	}
	display(r, x, y, tX, tY, g) { //funktion für objektzeichnung
		push();
		x = (x) * g;
		y = (y) * g;
		fill(this.myColor);
		stroke(1);
		translate(tX + x, tY + y);
		rotate(r);
		quad(0 * g, 0 * g, 1 * g, 1 * g, 3 * g, 1 * g, 2 * g, 0 * g); //Paralellogramm
		pop();
	}
}
