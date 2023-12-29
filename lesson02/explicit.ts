//explicit types
let character2: string;
let age: number;
let isLoggedIn: boolean;
age = 45;
character2 = "say hello";
isLoggedIn = false;

console.log(character2);
console.log(isLoggedIn);

let arrays2: string[];

arrays2 = []; //empty array
arrays2.push("pushy");

console.log(arrays2);

//union type
let mixed: (string | number | boolean)[] = []; //mixed aray with three data types

mixed.push(20);
mixed.push("arrays");
mixed.push(true);
console.log(mixed);

let uuid: number | string;
uuid = "DDDADADA";
console.log(uuid);

let nato2: {
  name: string;
  age: number;
  address: string;
  isUnderAge: boolean;
};

nato2 = { name: "Atul", isUnderAge: true, address: "Karachi", age: 12 };
console.log(nato2);

//Any type
let age4: any;

age4 = 25;
age4 = "twenty five";
console.log(age4);
age4 = { age: 25, agestring: "Damascus" };
console.log(age4);

//function types
const kamal = (a: number, b: number, c: string, d: void): void => {
  console.log(a + b);
  console.log(c);
  console.log(d);
};

kamal(2, 12, "stringy");

//type aliases
type stringOrNumber = string | number;

const againAgain = (uid: stringOrNumber, age: number) => {
  console.log(`${uid} has a giraffe aged ${age}`);
};

againAgain("Ananya", 46);

type objectWithName = { name: string; address: stringOrNumber };

const reconfirm = (user: objectWithName) => {
  console.log(`${user.name} lives in ${user.address}`);
};

reconfirm({ name: "Antuli", address: "Delhi" });

const reconfirm2 = (user: objectWithName) => {
  console.log(`${user.name} seems to be in ${user.address}`);
};

reconfirm2({ name: "Mitti", address: "Ananda" });

////FUNCTION SIGNATURES
let greet: (a: string, b: string) => void;
greet = (name: string, address: string) => {
  console.log(`${name} ${address}`);
};

greet("Anand", "Mumbai");

let calculate: (a: number, b: number, c: string) => number;

calculate = (num1: number, num2: number, action: string) => {
  if (action === "add") {
    return num1 + num2;
  } else {
    return (num1 * 2) / num2;
  }
};

console.log(calculate(2, 3, "add"));
console.log(calculate(4, 6, "food"));

//
let logDetails: (obj: { name: string; age: number }) => boolean;

logDetails = (ninja: { name: string; age: number }) => {
  if (ninja.age > 45 && ninja.name === "Atishay") return true;
  else return false;
};

console.log(logDetails({ name: "Atishay", age: 48 }));
console.log(logDetails({ name: "Moty", age: 36 }));
