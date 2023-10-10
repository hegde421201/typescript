let stringArr = ["one", "two", "ganesh"];

let mixedData1 = ['Sun','Rahul',1234]

let mixedData2 = ['EVM',3121,true]

stringArr[0] = 'razor'
stringArr.push('david')
console.log(stringArr)

mixedData1[0] = 81
mixedData1.push('guitar')
mixedData1.unshift('Jagannath')
console.log(mixedData1)

mixedData2.shift()

console.log(mixedData2)

mixedData2.push('chalo')
mixedData2.unshift('ghar')
console.log(mixedData2)

let testy = []
let arms : string[] = []

arms.push('Fine')
arms.push('Fuskhi')
console.log('arms',arms)

let tuppy : [number,string,boolean] = [34,'hegde',false]
console.log(tuppy,typeof(mixedData1))

type Cricketer = {
    name:string,
    active?:boolean,
    average:(string|number)[]
}

let vk:Cricketer = {
    name:'virat',active:true,average:[50,'hundred',123.55]
}

console.log(vk)

let sd:Cricketer = {name:"sunil",average:[60,36,'thirty nine']}

const cricky = (cricketer:Cricketer) =>{
    return `Hello ${cricketer.name}!`
}

console.log(cricky(sd))

enum Grade{
    A = 5,B,C
}

console.log(Grade.B)