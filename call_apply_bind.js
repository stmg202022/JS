// const obj = {
//   firstName: "Samson",
//   lastName: "Tamang",
//   printFullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// obj.printFullName();

// const obj2 = {
//   firstName: "Sagar ",
//   lastName: "Kapali",
// };

// obj.printFullName.call(obj2);

// ======================================================================================
// Note: Borrowing once obj's function to another obj  /  Do not accept arrow function
// ======================================================================================

// const obj = {
//   firstName: "Samson",
//   lastName: "Tamang",
// };
// const printFullName = function (address) {
//   console.log(this.firstName + " " + this.lastName + " from " + address);
// };

// printFullName.call(obj, "Dhading");

// const obj2 = {
//   firstName: "Sagar ",
//   lastName: "Kapali",
// };

// printFullName.call(obj2, "ktm");

// ======================================================================================
// Note:   Call do not used the []/square brackets to pass the arguments
// ======================================================================================

// const obj = {
//   firstName: "Samson",
//   lastName: "Tamang",
// };
// const printFullName = function (address) {
//   console.log(this.firstName + " " + this.lastName + " from " + address);
// };

// printFullName.apply(obj, ["Dhading"]);

// const obj2 = {
//   firstName: "Sagar ",
//   lastName: "Kapali",
// };

// printFullName.apply(obj2, ["ktm"]);

// ======================================================================================
// Note: Use the []/square brackets to pass the arguments in apply method()
// ======================================================================================

const obj = {
  firstName: "Samson",
  lastName: "Tamang",
};
const printFullName = function (address) {
  console.log(this.firstName + " " + this.lastName + " from " + address);
};

const printMyName = printFullName.bind(obj, "Dhading");
console.log(printMyName); // return a functions

// printMyName(); //call

// ======================================================================================
// Note: bind return a copyed functions which we can invoke/call later which return a result according to passed obj.
// ======================================================================================

const multiply = function (x, y) {
  return x * y;
};

const multipleOfTwo = multiply.bind(this, 2);
// console.log(multipleOfTwo(3));

const nestFuns = function (x) {
  return function (y) {
    return x * y;
  };
};

const xFun = nestFuns.bind(this, 2);
console.log(xFun()(30));

const yFun = xFun();
console.log(yFun(30));

// conversion of myfunc(a, b) to myFun(a)(b) is called curryying. So this can be done  by using bind method

const myfun = (a) => {
  return function (b) {
    return a * b;
  };
};

const bindMyFun = myfun.bind(this, 3);
const multipleOfThree = bindMyFun()(4);
console.log(multipleOfThree);
