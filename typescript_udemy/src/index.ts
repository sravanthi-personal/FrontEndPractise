let message: string = "Hello world";
message += " again";

console.log(message);

//primitve types
let isPresent: boolean = true;
let magic: number = 66.6;
let hello: string = "world";

let notDefined = undefined;
let notPresent = null;

let penta = Symbol("start");
// let biggy = 24n;

//instance types
let regex: RegExp = new RegExp("ab+c");

let array: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]);

//generics
class Queue<T> {
  private data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

let queue: Queue<number> = new Queue();

let arr: number[] = [1, 2, 3]; // number array

let tuple: [number, number] = [1, 4]; // tuple to have fixed set of element types

// type alias
//advantages 1. it allows us to name our intent
//2. it allows us to remove duplication,
//resulting in the greater code maintainability in the long run

type Point = { readonly x: number; readonly y: number };
let center: Point = {
  x: 0,
  y: 0,
};

let unit: Point = {
  x: 0,
  y: 0,
};

// unit.x = 5; // restricted with readonly
// unit.y = 10; // restricted with readonly

//functions
// with arguement types
function add(a: number, b: number): number {
  return a + b;
}

//with no return type
function log(message: string): void {
  console.log("Log:", message);
}

//with array
function sum(...values: number[]) {
  return values.reduce((previous, current) => {
    return previous + current;
  });
}

//first class functions
type Add = (a: number, b: number) => number;
let newAdd: Add;
newAdd = function (a: number, b: number): number {
  return a + b;
};

//structural typing

type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 0, y: 10 };
let point3D: Point3D = { x: 0, y: 10, z: 20 };

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
const trimmed = (assertions as string).trim();

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
  public readonly animalName: string;
  constructor(animalName: string) {
    this.animalName = animalName;
  }
}

const sheep = new Animal("sheep");
// sheep.animalName = 'wolf'; // restricted

//literals with union

type CardinalDirection = "North" | "South" | "East" | "West";

let direction: CardinalDirection;

direction = "South";
// direction = 'Nrdfd';

// literals with type assertions

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice() {
  return (Math.floor(Math.random() * 6) + 1) as DiceValue; // as type assertion
}

// if (rollDice() == 7) {
//   throw new Error("Not possible");
// }

//type narrowing

function padLeft(value: string, padding: number | string) {
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
  meow = () => {
    console.log("meow");
  };
}

class Dog {
  bark = () => {
    console.log("bark");
  };
}

type NewAnimal = Cat | Dog;

function speak(animal: NewAnimal) {
  if (animal instanceof Cat) {
    animal.meow();
  }

  if (animal instanceof Dog) {
    animal.bark();
  }
}

type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

function area(shape: Shape) {
  if ("size" in shape) {
    return shape.size * shape.size;
  }

  if ("width" in shape) {
    return shape.width * shape.height;
  }
}

area({ size: 4 });
area({ width: 2, height: 3 });

//discriminated unions

type Square1 = {
  kind: "square";
  size: number;
};

type Rectangle1 = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape1 = Square1 | Rectangle1;

function area1(shape: Shape1) {
  if (shape.kind === "square") {
    return shape.size * shape.size;
  }

  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  }
}

type ValidationSuccess = {
  isValid: true;
  ValidationValue: string;
};

type ValidationFailure = {
  isValid: false;
  errorReason: string;
};

type ValidationResult = ValidationSuccess | ValidationFailure;

function logResult(result: ValidationResult) {
  if (result.isValid) {
    console.log("Success, validated value: ", result.ValidationValue);
  }

  if (result.isValid === false) {
    console.error("Failure, error reason: ", result.errorReason);
  }
}

//class parameter properties

class Person {
  constructor(public name: string, public age: number) {}
}

const adam = new Person("Adam", 120000);
console.log(adam.name, adam.age);
