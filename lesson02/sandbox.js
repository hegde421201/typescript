var character = "string";
console.log(character);
var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (input, index) {
    console.log(input, index);
});
var rectangle = function (length, breadth) {
    return length * breadth;
};
console.log(rectangle(10.0, 60.8));
var arrays = ["lungi", "nanto", "dothis"];
arrays.push("example");
console.log(arrays);
console.log(arrays[6]);
var mixedArrays = ["ken", 5, 67, true, "witness"];
console.log(typeof mixedArrays);
mixedArrays.push(67.9);
console.log(mixedArrays);
//objects
var person = {
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
