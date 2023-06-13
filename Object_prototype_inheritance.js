//It is used to accessing of all the property of one object to another object
// Setting on __proto__
//It is js hidden features
//inheritance
// hirerechle

// Object.prototype
// Array.prototype
// Function.prototype

// const arr = ["Samson", "Tamang"];

// ====================================================
// arr.__proto__ = Array.prototype
// arr.__proto__.__proto__ = Object.prototype
//=====================================================

// const object = {
//   name: "Samson",
//   lastName: "Tamang",
//   getFullName: function () {
//     console.log(this.name + " " + this.lastName);
//   },
// };

// ====================================================

//never do this
// object.__proto__

// object.__proto__ = Object.prototype
// object.__proto__.__proto__ = null

//=====================================================

function fun() {
  console.log("Hello");
}
//==================================================
// fun.__proto__ = Function.prototype;  // native code
// fun.__proto__.__proto__ = Object.prototype
// ===================================================

//Eg:

// const object2 = {
//   name: "Sagar",
//   __proto__: object,
// };

// object2.__proto__ = Object.prototype;

//Now

//Trying to access all the property of the object2 from object1
// object2.__proto__ = object; //copy the all object // it is just like array.push()

// console.log(object2);

// console.log(object2.lastName);

// console.log(object.getFullName());
// console.log(object2.getFullName());

// // ===================================================================================================================================================================================================
// // ===================================================================================================================================================================================================

// //setting function into prototype

Function.prototype.myBind = () => {
  console.log("Samson Tmg from myBind ");
};

const fun2 = () => {};

const fun3 = () => {};

// console.log(fun2.__proto__.myBind());
console.log(fun2.myBind());

// console.log(__proto__);

// // =============================================================

function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

Person.prototype.printMyName = function () {
  console.log(this.name + " " + this.lastName);
};

const person = new Person("Sagar", "kapali");

console.log(person.name);

console.log(person.printMyName());

// // ====================================================================

// const student = new Object({
//   name: "Sam",
//   lastName: "Lama",
//   getFullName: function () {
//     return this.name + " " + this.lastName;
//   },
// });

// const addRoll = new Object({
//   rollNo: 22,
//   __proto__: student,
// });

// // console.log(addRoll.getFullName());

// const addAddress = new Object({
//   address: " ktm",
//   __proto__: addRoll,
// });

// const info = new Object({
//   aboutStudent: function () {
//     return this.name + " " + this.lastName + " from " + this.address;
//   },
//   __proto__: addAddress,
// });

// console.log(info);
// console.log(info.aboutStudent());

const myFun = () => {
  console.log("called myfun");
};
