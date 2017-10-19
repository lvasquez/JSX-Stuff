
class _Main {
	static function main(args : string[]) : void {
		
		var person = new Person("Luis", 30);
		person.hobby = "videogames";


		log person.hobby;
	} 
}


class Person {

	var name = "";
	var age = 0;

	var hobby : string;

	function constructor() { }

	function constructor(name : string, age : number) {
		this.set(name, age);
	}

	function set(name: string, age : number) : void {
		this.name = name;
		this.age = age;

		log "My names is " + name + " and my age is " + age;
	}

}


