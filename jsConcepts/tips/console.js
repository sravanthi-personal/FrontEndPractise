//use console.time to debug performance

const label = "Forloop";
console.time(label);

const list = [];
for(let i=0;i < 2500000;i++){
    list.push(`item-${i}`);
}
console.log("list length= ", list.length);
console.timeEnd(label);

//logging using console.group

console.group("Video");
    console.log("Video uploaded");
    console.log("Video validated");
    console.log("Video published");
console.groupEnd();


//conditional log message using console.assert
const em = {id:1,name:"aaa"};
console.assert(em.salary,"Salary not found!!");
console.table(em);