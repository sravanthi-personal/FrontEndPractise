/*
 Currying in javascript is 

 is implemented by two ways - bind & closures 
*/


// bind implementation to achieve closure
let multiply = function(x,y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this,3);
multiplyByTwo(5);


// closure implementation to achieve closure. 

let multiplyWithClosure = function(x) {
    return function(y){
        console.log(x * y)
    }
}

let multiplByTwo = multiplyWithClosure(2);
multiplByTwo(3);


