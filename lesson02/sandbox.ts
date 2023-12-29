const character = "string";

console.log(character);

const inputs = document.querySelectorAll("input");

console.log(inputs);

inputs.forEach((input, index) => {
  console.log(input, index);
});

const rectangle = (length: number, breadth: number) => {
  return length * breadth;
};
console.log(rectangle(10.0, 60.8));

let arrays = ["lungi", "nanto", "dothis"];

arrays.push("example");

console.log(arrays);
console.log(arrays[6]);

let mixedArrays = ["ken", 5, 67, true, "witness"];
console.log(typeof mixedArrays);

mixedArrays.push(67.9);
console.log(mixedArrays);

//objects
let person = {
  name: "manta",
  age: 34,
  address: "Delhi",
  skills: ["skating", "karate"],
};

person.age = 40;
person.address = "Hyderabad";

console.log(person);

person.skills = ["cooking"];
console.log(person);

person.skills.push("yoga");
console.log(person);
