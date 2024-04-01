type Persion = {
  name: string;
  dateOfBirth?: Date;
};

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function assertDate(value: unknown): asserts value is Date {
  if (value instanceof Date) {
    return;
  } else throw new TypeError("Value is not a Date");
}

const loadPerson: Persion = () => {
  return {
    name: "Hss",
    dateOfBirth: new Date(),
  };
};
const mayBePerson = loadPerson;

assert(mayBePerson != null, "Could not load person ");
console.log("Name: ", mayBePerson.name);

assertDate(mayBePerson.dateOfBirth);
console.log("Date of Birth: ", mayBePerson.dateOfBirth.toISOString());

// user defined type guards -> Application code
// Assertion functions -> Application tests
