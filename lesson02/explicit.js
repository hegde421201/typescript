//explicit types
var character2;
var age;
var isLoggedIn;
age = 45;
character2 = "say hello";
isLoggedIn = false;
console.log(character2);
console.log(isLoggedIn);
var arrays2;
arrays2 = []; //empty array
arrays2.push("pushy");
console.log(arrays2);
//union type
var mixed = []; //mixed aray with three data types
mixed.push(20);
mixed.push("arrays");
mixed.push(true);
console.log(mixed);
var uuid;
uuid = "DDDADADA";
console.log(uuid);
var nato2;
nato2 = { name: "Atul", isUnderAge: true, address: "Karachi", age: 12 };
console.log(nato2);
//Any type
var age4;
age4 = 25;
age4 = "twenty five";
console.log(age4);
age4 = { age: 25, agestring: "Damascus" };
console.log(age4);
//function types
var kamal = function (a, b, c, d) {
    console.log(a + b);
    console.log(c);
    console.log(d);
};
kamal(2, 12, "stringy");
var againAgain = function (uid, age) {
    console.log("".concat(uid, " has a giraffe aged ").concat(age));
};
againAgain("Ananya", 46);
var reconfirm = function (user) {
    console.log("".concat(user.name, " lives in ").concat(user.address));
};
reconfirm({ name: "Antuli", address: "Delhi" });
var reconfirm2 = function (user) {
    console.log("".concat(user.name, " seems to be in ").concat(user.address));
};
reconfirm2({ name: "Mitti", address: "Ananda" });
////FUNCTION SIGNATURES
var greet;
greet = function (name, address) {
    console.log("".concat(name, " ").concat(address));
};
greet("Anand", "Mumbai");
var calculate;
calculate = function (num1, num2, action) {
    if (action === "add") {
        return num1 + num2;
    }
    else {
        return (num1 * 2) / num2;
    }
};
console.log(calculate(2, 3, "add"));
console.log(calculate(4, 6, "food"));
//
var logDetails;
logDetails = function (ninja) {
    if (ninja.age > 45 && ninja.name === "Atishay")
        return true;
    else
        return false;
};
console.log(logDetails({ name: "Atishay", age: 48 }));
console.log(logDetails({ name: "Moty", age: 36 }));
