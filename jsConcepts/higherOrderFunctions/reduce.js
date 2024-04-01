
const users = [
    { firstName : "A", lastName: "a", age: 26 },
    { firstName : "B", lastName: "b", age: 70 },
    { firstName : "C", lastName: "c", age: 50 },
    { firstName : "D", lastName: "d", age: 26 }
];

//acc = { 26:2, 70:1, 50:1 }

const output = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{});

console.log(output);

//[A,D] age < 30's firstName

const output1 = users.filter( user => user.age < 30).map(user => user.firstName);
console.log(output1);



//[A,D] age < 30's firstName - reduce

const output2 = users.reduce(function(acc,curr){
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;

},[]);
 
console.log(output2);
