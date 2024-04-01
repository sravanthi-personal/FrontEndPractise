
let myName = {
    firstName : 'Sravanthi',
    lastName : 'Reddy',
}

let printFunction = function(homeTown,city,country){
    console.log(this.firstName + " " + this.lastName + " " + homeTown + " " + city + " " + country);
}

printFunction.call(myName,"Narsampet" ,"Warangal");

printFunction.apply(myName, ["Narsampet" ,"Warangal"]);

let myNamePrintFunction = printFunction.bind(myName, "Narsampet" ,"Warangal");

myNamePrintFunction("India");


//polyfill bind 
Function.prototype.myBind = function (...args){
    let obj = this; // printFunction will be there in this 
    let params = args.splice(1); // rest of the params like "Narsampet" ,"Warangal" will be there 
    return function(...args2){ // india will be there here 
        // args[0] -> myName
        obj.apply(args[0],[...params,...args2]);
    }
}

let myNamePrintFunction2 = printFunction.myBind(myName);

myNamePrintFunction("india");

/*
call - the call() allows to invoke a function with a specified `this` value and individual arguments 
passed in separate parameters. It takes the context object as the first argument followed by function 
arguments. 

apply - the apply() is similar to call() but it accepts arguments as an array or an array-like object.

bind - the bind() creates a new function that has a specified `this` value and optionally pre-defined 
arguments. It allows you to create a function with a fixed execution context that can be called later. 
*/