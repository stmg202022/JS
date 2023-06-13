// premitive data type MEANS immutable // not changing the value of original
// Boolean
// Number
// String,
// BigInt
// null
// undefined
// Symbol

//eg

const myName = "Samson";
const nameToUpperCase = myName.toUpperCase();
console.log(nameToUpperCase);

console.log(myName); //not changing

// non premitive data types means mutable // changing the value of original
//Array
//Object
// function
//Set
//Map
//Date
//Regx

const arr = ["sam", "Ram"];
const newArr = arr;
console.log(newArr);

newArr.push("Hari");

console.log(arr); //changing
