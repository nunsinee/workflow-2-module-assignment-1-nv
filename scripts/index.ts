// Level 1

// Question 1:
/* Declare an array that accepts only number and boolean values.*/

//Answer...
let twoArrayTypes: (number | boolean)[];

////////////////////////////////////////////////////////////////

//Question 2:
/*Declare a tuple that takes 3 values: a boolean, a string, and a number*/

//Answer...
let tuple: [boolean, string, number];

////////////////////////////////////////////////////////////////

//Question 3:
/*Set the Type for the arguments and return value for this function.
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
*/
//Answer...
function getFullName(firstName: string, lastName: string) {
	return `${firstName} ${lastName}`;
}

const username = getFullName("Nunsinee", "Viken");
console.log(username);

////////////////////////////////////////////////////////////////

//Question 4:
/*Create an interface that could be used for these objects.

[
	{ name: "Burt", age: 77, jobTitle: "Magician" },
	{ name: "Walt", age: 11 },
	{ name: "Spencer", age: 107, jobTitle: "Bus conductor" },
]*/

//Answer...
interface UserProfile {
	name: string;
	age: number;
	jobTitle?: string;
}

////////////////////////////////////////////////////////////////

//Question 5:
/*Create a numeric enum that has 3 members: Paid, Unpaid, Unknown.*/

//Answer...
enum PayStatus {
	Paid,
	Unpaid,
	Unknown,
}

////////////////////////////////////////////////////////////////

//Question 6: Create a Person class.
/*The class's constructor should set a `name` property when instantiated,
 and the class should contain a method that returns the string: 
 "My name is " + the value of the name property.*/

//Answer...
class Person {
	name: string;
	constructor(firstName: string) {
		this.name = firstName;
	}

	displayName() {
		return "My name is " + this.name;
	}
}

const newPerson = new Person("Nunsinee");
const personName = newPerson.displayName();
console.log(personName);

////////////////////////////////////////////////////////////////

//Question 7: Create type aliases for the arguments in this function.
/*
function getDetails(name: string | boolean, details: 
    { id: number | string, status: string | boolean }){}
*/

//Answer...

type StrBoo = string | boolean;
type NumStr = number | string;
type Details = { id: NumStr; status: StrBoo };

function getDetails(name: StrBoo, details: Details) {}

////////////////////////////////////////////////////////////////
