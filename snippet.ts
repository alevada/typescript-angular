export {}

let message = 'Hello World';
let is_beginner: boolean = false;
let sentence: string = `My name is gabriel. 
My message to you is ${message}`;

//let sentence2: string = `My name is gabriel. 
//My message to you is ` + message;

let sentence2: string = "My name is gabriel. My message to you is " + message;

let values: number[] = [1,2,3,4, null];



function greeter (name) {
	return 'Hello ' + name;
}
var g = greeter ('gabriel');


function addNumber (n1: number, n2: number): number {
	return n1+n2;
}


class Employee {
	employeeName: string;

	constructor (name: string) {
		this.employeeName = name;
	}

	greet () {
		console.log('Hello ' + this.employeeName);
	}
}

let em = new Employee('John');
em.greet();