type NameFields = {
  firstName: string;
  lastName: string;
};

function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
}

const john = addFullName({
  email: "john@gmail.com",
  firstName: "john",
  lastName: "doe",
});
console.log(john.email); //john@gmail.com
console.log(john.fullName); // john doe
