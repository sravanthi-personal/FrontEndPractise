type PersonSign = {
  displayName: string;
  email: string;
};

type PersonSignDictonary = {
  [username: string]: PersonSign | undefined;
};
const persons: PersonSignDictonary = {
  jane: { displayName: "John Doe", email: "email@gmail.com" },
};

console.log(persons["john"]);

delete persons["john"];

const result = persons["missing"];
// console.log(result.email); // ERROR: 'result' is possibly 'undefined'

// Type '{ displayName: string; emil: string; }' is not assignable to type 'PersonSign'.
//   Object literal may only specify known properties, but 'emil' does not exist in type 'PersonSign'.
//   Did you mean to write 'email'?

// persons["john"] = { displayName: "John Doe", emil: "email@gmail.com" };
