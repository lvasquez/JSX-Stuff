class _Main {

	static function main(args : string[]) : void {
		new Point(2, 3);

	}
}

class Point {
	var x = 0;
	var y = 0;

	function constructor() { }

	function constructor(x : number, y : number) {
		this.set(x, y);
	}

	function constructor(other : Point) {
		this.set(other);
	}

	function set(x : number, y : number) : void {
		this.x = x;
		this.y = y;
		log x + " - " + y;
	}

	function set(other : Point) : void {
		this.set(other.x, other.y);
	}
}