type Point2DAssert = { x: number; y: number };
type Point3DAssert = { x: number; y: number; z: number };
type PersonAssert = { name: string; email: string };

let point2: Point2DAssert = { x: 0, y: 0 };
let point3: Point3DAssert = { x: 10, y: 10, z: 10 };
let person: PersonAssert = { name: "test", email: "test@gmail.com" };

point2 = point3;
// point3 = point2; // ERROR
point3 = point2 as Point3DAssert;

// person = point3;  // ERROR
// point3 = person; // ERROR
// point3 = person as Point3DAssert; // ERROR, I don't trust you enough
point3 = person as unknown as Point3DAssert; // Ok. I doubly trust you
