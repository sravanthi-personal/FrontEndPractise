"use strict";
let message = "Hello world";
message += " again";
console.log(message);
//primitve types
let isPresent = true;
let magic = 66.6;
let hello = "world";
let notDefined = undefined;
let notPresent = null;
let penta = Symbol("start");
// let biggy = 24n;
//instance types
let regex = new RegExp("ab+c");
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
//generics
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
let queue = new Queue();
let arr = [1, 2, 3]; // number array
let tuple = [1, 4]; // tuple to have fixed set of element types
let center = {
    x: 0,
    y: 0,
};
let unit = {
    x: 0,
    y: 0,
};
// unit.x = 5; // restricted with readonly
// unit.y = 10; // restricted with readonly
//functions
// with arguement types
function add(a, b) {
    return a + b;
}
//with no return type
function log(message) {
    console.log("Log:", message);
}
//with array
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
let newAdd;
newAdd = function (a, b) {
    return a + b;
};
let point2D = { x: 0, y: 10 };
let point3D = { x: 0, y: 10, z: 20 };
//extra info is okay
point2D = point3D;
//this is not okay, missing info
// point3D = point2D;
//type assertions
function load() {
    return "world";
}
let assertions = load();
//general appraoch
if (typeof hello === "string") {
    assertions.trim();
}
// using type approach
const trimmed = assertions.trim();
//type casting
let leet;
//later
leet = "1337";
//general js approach
// const number1 = leet as number;
// console.log(number1 === 1337); // false
// console.log(number1); // '1337'
//use as a number with typescript approach
const number = +leet;
console.log(number === 1337); // true
console.log(number); // 1337
//readonly - to enable restriction to modify
class Animal {
    constructor(animalName) {
        this.animalName = animalName;
    }
}
const sheep = new Animal("sheep");
let direction;
direction = "South";
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1); // as type assertion
}
// if (rollDice() == 7) {
//   throw new Error("Not possible");
// }
//type narrowing
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected number or string, got '${padding}'.`);
}
padLeft("Hello world", 4); // '    Hello world'
padLeft("Hello world", "  "); //'  Hello world'
padLeft("Hello world", "---"); // '---Hello world'
//class type narrowing
class Cat {
    constructor() {
        this.meow = () => {
            console.log("meow");
        };
    }
}
class Dog {
    constructor() {
        this.bark = () => {
            console.log("bark");
        };
    }
}
function speak(animal) {
    if (animal instanceof Cat) {
        animal.meow();
    }
    if (animal instanceof Dog) {
        animal.bark();
    }
}
function area(shape) {
    if ("size" in shape) {
        return shape.size * shape.size;
    }
    if ("width" in shape) {
        return shape.width * shape.height;
    }
}
area({ size: 4 });
area({ width: 2, height: 3 });
function area1(shape) {
    if (shape.kind === "square") {
        return shape.size * shape.size;
    }
    if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
}
function logResult(result) {
    if (result.isValid) {
        console.log("Success, validated value: ", result.ValidationValue);
    }
    if (result.isValid === false) {
        console.error("Failure, error reason: ", result.errorReason);
    }
}
//class parameter properties
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const adam = new Person("Adam", 120000);
console.log(adam.name, adam.age);
