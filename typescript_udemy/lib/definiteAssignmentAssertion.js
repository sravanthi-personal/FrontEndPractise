"use strict";
let dice; //Variable 'dice' is used before being assigned. Use ! to fix this
function rollDices() {
    dice = Math.floor(Math.random() * 6) + 1;
}
rollDices();
console.log("Current dice value ", dice);
rollDices();
console.log("After another roll ", dice);
class Poiint {
    constructor() {
        this.moveRandom();
    }
    moveRandom() {
        this.x = Math.random();
        this.y = Math.random();
    }
}
