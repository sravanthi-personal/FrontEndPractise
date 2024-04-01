type PersonKeyOfTypes = {
  name: string;
  age: number;
  location: string;
};
const johnKey: PersonKeyOfTypes = {
  name: "john",
  age: 36,
  location: "Melbourne",
};

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  const value = obj[key];
  console.log("Getting ", key, value);
  return value;
}

const age = logGet(johnKey, "age");
function logSet<Obj, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
  value: Obj[Key]
) {
  console.log("Setting: ", key, value);
  obj[key] = value;
}

logSet(johnKey, "age", 36);
