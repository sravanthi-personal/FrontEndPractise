const king = "elvis";
// king = "john"; // ERROR
const upperCased = king.toUpperCase(); //king === 'elvis'

const dave = {
  name: "dave",
  role: "drummer",
  skills: ["drumming", "headbanging"],
} as const;

// dave = {
//   name: "grohl",
//   role: "singer",
//   skills: ["singing", "drumming", "headbanging"],
// };

//THrows error after adding as const to dave object
// dave.name = "grohl";
// dave.role = "singer";
// dave.skills.unshift("singing");

function layout(settings: {
  align: "left" | "right" | "center";
  padding: number;
}) {
  console.log("performing layout: ", settings);
}

const example = {
  align: "left" as const,
  padding: 0,
};

layout(example); // ERROR:  Type 'string' is not assignable to type '"left" | "right" | "center"'.
