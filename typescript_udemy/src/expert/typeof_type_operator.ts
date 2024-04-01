const centerType = {
  x: 0,
  y: 0,
  z: 0,
};

const unitType: typeof centerType = {
  x: centerType.x + 1,
  y: centerType.y + 1,
  z: centerType.z + 1,
};

const personResponse = {
  name: "john",
  email: "john@example.com",
  firstName: "john",
  lastName: "doe",
};

type PersonResponse = typeof personResponse;

function processResponse(person: PersonResponse) {
  console.log("Full name", `${person.firstName} ${person.lastName}`);
}
