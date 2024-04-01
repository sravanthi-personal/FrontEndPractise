"use strict";
function logger(animal) {
    console.log(`Animal ${animal.name} : ${animal.voice()}`);
}
class CatType {
    constructor(name) {
        this.name = name;
    }
    voice() {
        return "meow";
    }
}
class DogType {
    constructor(name) {
        this.name = name;
    }
    voice() {
        return "woof";
    }
}
logger(new CatType("Salem"));
logger(new DogType("lassie"));
