
//check property exists in an object 

const employee = {
    id: 1,
    name: 'sravanthi',
    salary: 5000
}

const isSalaryExist = 'salary' in employee;
console.log(isSalaryExist);

const isGenderExist = 'gender' in employee;
console.log(isGenderExist);


//add a property to an object 

const includeSalary = true;

const newEmpl={
    id: 1,
    name: 'sravanthi',
    ...(includeSalary && {salary:5000})
}

console.log(newEmpl);


//Avoid delete keyword to remove property from object- avoid mutation
const {name, ...newEmployee} = newEmpl;
console.log("newEmployee:", newEmployee); 


//format the output of JSON.stringify
const format = JSON.stringify(employee,["name"],2);
console.log({format});

//use object.entries to access key and value 
const person = {'id': 1,'name' :'sravanthi'};

Object.entries(person).forEach(([key,value]) => {
    console.log(key,value);
});


// mask numbers using slice and padStart
const cardNumber = "8844663344221199";
const last4Digit = cardNumber.slice(-4);
const maskNumber = last4Digit.padStart(cardNumber.length, "*");
console.log({maskNumber});

//convert string to a number using + operator
const code = "440";
console.log("code: ", +code);
console.log(typeof +code)