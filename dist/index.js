// Level 1
// Question 1:
/* Declare an array that accepts only number and boolean values.*/
//Answer...
var twoArrayTypes;
////////////////////////////////////////////////////////////////
//Question 2:
/*Declare a tuple that takes 3 values: a boolean, a string, and a number*/
//Answer...
var tuple;
////////////////////////////////////////////////////////////////
//Question 3:
/*Set the Type for the arguments and return value for this function.
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
*/
//Answer...
function getFullName(firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName);
}
var username = getFullName("Nunsinee", "Viken");
console.log(username);
////////////////////////////////////////////////////////////////
//Question 5:
/*Create a numeric enum that has 3 members: Paid, Unpaid, Unknown.*/
//Answer...
var PayStatus;
(function (PayStatus) {
    PayStatus[PayStatus["Paid"] = 0] = "Paid";
    PayStatus[PayStatus["Unpaid"] = 1] = "Unpaid";
    PayStatus[PayStatus["Unknown"] = 2] = "Unknown";
})(PayStatus || (PayStatus = {}));
////////////////////////////////////////////////////////////////
//Question 6: Create a Person class.
/*The class's constructor should set a `name` property when instantiated,
 and the class should contain a method that returns the string:
 "My name is " + the value of the name property.*/
//Answer...
var Person = /** @class */ (function () {
    function Person(firstName) {
        this.name = firstName;
    }
    Person.prototype.displayName = function () {
        return "My name is " + this.name;
    };
    return Person;
}());
var newPerson = new Person("Nunsinee");
var personName = newPerson.displayName();
console.log(personName);
function getDetails(name, details) { }
////////////////////////////////////////////////////////////////
