# Workflow 2 Module Assignment 1

## Instructions

Configure this project to use TypeScript with a `tsconfig.json` file.

The JavaScript file should be outputted to a `dist` folder.

## Level 1

### Question 1

Declare an array that accepts only number and boolean values.

### Question 2

Declare a tuple that takes 3 values: a boolean, a string, and a number

### Question 3

Set the Type for the arguments and return value for this function.

```ts
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
```

### Question 4

Create an interface that could be used for these objects.

```js
[
	{ name: "Burt", age: 77, jobTitle: "Magician" },
	{ name: "Walt", age: 11 },
	{ name: "Spencer", age: 107, jobTitle: "Bus conductor" },
];
```

## Question 5

Create a numeric enum that has 3 members: Paid, Unpaid, Unknown.

## Question 6

Create a Person class.

The class's constructor should set a `name` property when instantiated, and the class should contain a method that returns the string: "My name is " + the value of the name property.

## Question 7

Create type aliases for the arguments in this function.

```ts
function getDetails(name: string | boolean, details: { id: number | string, status: string | boolean }){}
```

## Submission

Submit the link to your repo. Keep the repo private.
