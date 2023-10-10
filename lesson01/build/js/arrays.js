"use strict";
let stringArr = ["one", "two", "ganesh"];
let mixedData1 = ['Sun', 'Rahul', 1234];
let mixedData2 = ['EVM', 3121, true];
stringArr[0] = 'razor';
stringArr.push('david');
console.log(stringArr);
mixedData1[0] = 81;
mixedData1.push('guitar');
mixedData1.unshift('Jagannath');
console.log(mixedData1);
mixedData2.shift();
console.log(mixedData2);
mixedData2.push('chalo');
mixedData2.unshift('ghar');
console.log(mixedData2);
let testy = [];
let arms = [];
arms.push('Fine');
arms.push('Fuskhi');
console.log('arms', arms);
let tuppy = [34, 'hegde', false];
console.log(tuppy, typeof (mixedData1));
let vk = {
    name: 'virat', active: true, average: [50, 'hundred', 123.55]
};
console.log(vk);
let sd = { name: "sunil", average: [60, 36, 'thirty nine'] };
const cricky = (cricketer) => {
    return `Hello ${cricketer.name}!`;
};
console.log(cricky(sd));
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 5] = "A";
    Grade[Grade["B"] = 6] = "B";
    Grade[Grade["C"] = 7] = "C";
})(Grade || (Grade = {}));
console.log(Grade.B);
