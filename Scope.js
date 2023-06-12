`use-strict`;
//========================================================

//BLOCK SCOPE: it is introduce by let and const after 2015(ES6)
//It means that variable declear inside the {} can not be access from outside the {}
// variable declear with var do not have Block scope
{
  var v = "V";
  console.log(v);

  let l = "L";
  console.log(l);

  const c = "C";
  console.log(c);
}

console.log(v);

// console.log(l); //l is not defined
// console.log(c); //c is not defined

// ==========================================================

//LOCAL SCOPE
const fn = () => {
  let localScope = "variable decleare within the function....LOCAL SCOPE";
  console.log(localScope);
};

fn();

// console.log(localScope); //x is not defined

//=================================================================
//FUNCTIONAL SCOPE: it is quite similar to local scope but all local variable have functional scope.
//Important things is that variable declear inside the functional scope can not be access from outside.
//variable are created only when function is creacted and deleted when the function is deleted.

var x4 = "x4";
let x5 = "x5";
const x6 = "x6";

const functionalScope = () => {
  var x1 = "x1";
  let x2 = "x2";
  const x3 = "y3";
};

// console.log(x1, x2, x3); //ReferenceError
// console.log(x4, x5, x6);

//===========================================================
//GLOBAL SCOPE: Variable declear outside of the function are global scope.
//The above x4, x5, x6 are Global scope

// =====================================================

//ALL SCOPE
let gs = "global scope";

const localFunScope = () => {
  let localFun = "localfun";
  {
    var varBlockscope = "varBlockScope";
    let blockscope = "blockScope";
  }
};

//OTHER SCOPE ARE
// 1.MODULE SCOPE {type: "module"}
// 2.GLOBEL OBJECT (window) / (node.js=> process, require, globel, setInterval, Buffer)
