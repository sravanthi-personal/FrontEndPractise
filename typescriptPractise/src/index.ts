// let age:number = 20;

// if(age < 50){
//     age += 10;
// }

// console.log(age)


let age = 123_456_789;
let uname ='hello';
let isValid = true;

let level;


let numbers: number[] = []

numbers[0] = 1
// numbers[1] = '1'

numbers.forEach(n => n.toFixed());

//tuples

let user: [number,string] = [1,'sravanthi'];

// user.push(1); // issue




// enums 
const small = 1;
const medium = 2;
const large = 3;

//PascalCase
const enum Size { Small= 1, Medium, Large}

let mySize : Size = Size.Medium;
console.log(mySize);


//function arguments and return types

// function calcuateTax(income: number,taxYear?: number): number{

//     if((taxYear || 2022) < 2022){
//         return income * 1.2;
//     }

//     return income * 1.3;
// }

function calcuateTax(income: number,taxYear = 2022): number{

    if(taxYear< 2022){
        return income * 1.2;
    }
    
    return income * 1.3;
}

calcuateTax(10_000,2022);

calcuateTax(10_000);

//working with objects

type Employee = {
    readonly id: number,
    name? : string //optional,
    retire: (date: Date) => void
}

let employee: Employee = {
    id:1,
    name:'sravanthi', 
    retire : (date: Date) => {console.log(date)}
}


//Union types

function kgToLbs(weight : number | string): number {

    if(typeof weight === 'number'){
        return weight * 2.2
    }   

    else{
        return parseInt(weight) * 2.2;
    }

}


// Intersection 

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable; // intersection

let textBox: UIWidget = { // implement all methods of both draggable and resizable
    drag:() => {},
    resize:() => {}
}


//Literal 

type Quantity = 50 | 100 // any specifice values withint this range can be used

let quantity: Quantity = 100;


// null 

function greet(msg: string | null): void{
    if(msg)
        console.log('hello' , msg)
    else
        console.log('hola')
}

greet(null);


//optional property access operator 

type Customer= {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined{
    return id==0 ? null: { birthday : new Date()}
}

const customer = getCustomer(1);

console.log(customer?.birthday?.getFullYear());


//optional element access operator 
// customers?.[0]

//optional call
let log : any = null;
log?.('a');