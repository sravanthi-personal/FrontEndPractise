

// use includes to check for multiple criteria

const rgbColors = ["red","green","blue"];

const isRGBColor = (color) => {
    return rgbColors.includes(color);
}

console.log(isRGBColor("white"));
console.log(isRGBColor("red"));

//remove duplicates from an array using set 

const numbers = [1,2,4,5,2,4,9,11,4,11];
const colors = ["red","pink","red","blue","black","pink"];

const uniqueNumbers = [...new Set(numbers)];
const uniqueColors = [...new Set(colors)];

console.log(uniqueNumbers);
console.log(uniqueColors);


// use spread operator to shallow copy arrays and objects 
const scores = [10,20,40,60];
const group = {id:1,name:'sravanthi'};

const newScores = [...scores];
newScores.push(70);
const newGroup = {...group};
newGroup.salary = '5000';

console.log("scores : " , scores , " newScores: " , newScores);
console.log("group : " , group , " newGroup : " , newGroup);


//use Array.isArray to determine the array 
let names = ["aa","bb","cc"];
console.log(Array.isArray(names));

let user = {'id' :1,'name' :'sa'};
console.log(Array.isArray(user));


//use of falsy bouncer. 
const numbersWithFalsyValues = [7,null,10,17,false,NaN];
console.log(numbersWithFalsyValues.filter(Boolean));


const namesWithFalsyValues = ["raj","","Joy",undefined,false];
console.log(namesWithFalsyValues.filter(Boolean));

const mixDataWithFalsyValues = [2,0,"","Joy",null,undefined,false];
console.log(mixDataWithFalsyValues.filter(Boolean));

//use array.some to check occurence in array. 
const assets=[
    {'id' :1, type: "video"},
    {'id' :2, type: "video"},
    {'id' :3, type: "audio"}
];

const hasVideoAsset = assets.some(asset => asset.type === "video");
console.log(hasVideoAsset);




