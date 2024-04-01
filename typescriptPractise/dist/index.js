"use strict";
var _a;
let age = 123456789;
let uname = 'hello';
let isValid = true;
let level;
let numbers = [];
numbers[0] = 1;
numbers.forEach(n => n.toFixed());
let user = [1, 'sravanthi'];
const small = 1;
const medium = 2;
const large = 3;
let mySize = 2;
console.log(mySize);
function calcuateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calcuateTax(10000, 2022);
calcuateTax(10000);
let employee = {
    id: 1,
    name: 'sravanthi',
    retire: (date) => { console.log(date); }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(msg) {
    if (msg)
        console.log('hello', msg);
    else
        console.log('hola');
}
greet(null);
function getCustomer(id) {
    return id == 0 ? null : { birthday: new Date() };
}
const customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map