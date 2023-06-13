//what is JS CLOSURE ?
//EVERY CLOSURE SCOPE HAVE THREE SCOPE
//GLOBAL SCOPE,OUTER SCOPE AND LOCAL SCOPE

//LEXICAL SCOPE

//GLOBAL SCOPE
const fn = () => {
  let name = "samson"; //OUTER SCOPE

  const fn2 = (x) => {
    console.log(name, x); //LOCAL SCOPE
  };

  console.log("fn called");

  return fn2;
};

//This called the fn function only
// fn();

//This called the fn and fn2 boths
// fn()();
// fn()(5);

// const fn2_inner = fn();
// fn2_inner(3);  // THE fn2 is the CLOSURE FUNCTION

let a = 1;
const fn3 = () => {
  let b = 2;
  return (fn4 = () => {
    let c = 3;
    return (fn5 = () => {
      let d = 4;
      // console.log(a + b + c + d);
    });
  });
};

fn3()()(); //chaining of closure scope //

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // displayName() uses variable declared in the parent function
  }
  displayName();

  return displayName;
}

// init();
// init()();  //chaining

const fun3 = () => {
  let a = 5;

  console.log(a);

  const fun4 = () => {
    const b = 6;
    console.log(b);
  };

  // fun4();

  return fun4;
};

// fun3()();

// =======================================================================
let count = 0;
(funCall = () => {
  if (count === 0) {
    let count = 1; //;local scope// block scope can not exit outside the brackets
    // console.log(count); //output: 1
  }

  // console.log(count); // output: 0
})();

// ========================================

const createBase = (num) => {
  console.log(num);

  return (innerNum) => {
    console.log(num + innerNum);
  };
};

// const addSix = createBase(6);
// addSix(6);
// createBase(7);

// =====================================================

const incNum = () => {
  const a = [];

  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }

  const indexNum = (index) => {
    console.log(a[index]);
  };

  return indexNum;
};

// console.time("6");

// console.log(typeof incNum);
// incNum()(7);
// console.timeEnd("6");

// console.time("start");

const indexNum = incNum();
// indexNum(6);

// console.timeEnd("start");

// ==============================================================tricky questions========================

//This is due to var. that means time remain running but
// i value finished up to  increases & become  3 before timeup in each consoling.
// var does not have block scope and have functional scope so
// js engine print current value

const timeFun = () => {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      // console.log(i);
    }, 100);
  }
};

timeFun();

const timeFun2 = () => {
  //
  for (var i = 0; i < 3; i++) {
    //
    const innerFun = (i) => {
      //
      setTimeout(function log() {
        // console.log(i);
      }, 100);
      //
    };
    innerFun(i);
    //
  }
};

timeFun2();

// ====================================================================================

// private counter ?
// => if we do not manupulate the counter var and use a function to manupulate the counter then that type of counter is called private counter

// ======================================================================================

// What is a module pattern ?

const Module = (() => {
  //
  const privateMethod = () => {
    console.log("PrivateMethod called.");
  };

  //
  return {
    publicMethod: function () {
      console.log("Public Method Called.");
      // privateMethod();
    },
  };
})();

// Module.publicMethod();
// Module.privateMethod(); //outPut: error

// ========================================================================

// const Module = () => {
//   return {
//     publicMethod: function () {
//       console.log("Public Function");
//     },
//   };
// };

// Module().publicMethod();

// const Module = (() => {
//   //
//   const privateMethod = () => {
//     console.log("PrivateMethod called.");
//   };

//   //
//   return {
//     publicMethod: (function () {
//       console.log("Public Method Called.");
//       // privateMethod();
//     })(),
//   };
// })();

// Module.publicMethod;
// // Module.privateMethod(); //outPut: error

// =================================================================================================================

// Make this run only once

// let run;
// const runOnce = () => {
//   run = "first run";

//   console.log("This is first run", run);
// };

// runOnce();
// runOnce();
// runOnce();

// ==>Ans

let run;
function runOnce() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("Already run.");
    } else {
      run = "first run";

      console.log("This is ", run);

      called++;
    }
  };
}

let isRunOnce = runOnce(); //this read the let called = 0
// Run Only once time
// isRunOnce(); //This is  first run
// isRunOnce(); // Already run.
// isRunOnce(); //Already run.

//dont use this type of called
// runOnce()(); //this do not read let called = 0
// runOnce()();
// runOnce()();

// ============================================================================

// Once Polyfill

const once = (func, context) => {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);

      func = null;
    }
    return ran;
  };
};

const hello = once((a, b) => console.log("Hello world", a, b));

// Run Only once time
// hello(2, 3);
// hello(4, 5);
// hello(7, 7);

// =========================================================================

function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);

    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }

    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 1000000; i++) {}

  return num1 * num2;
};

const memoizedClumzyProduct = myMemoize(clumsyProduct);

console.time("First called.");
console.log(memoizedClumzyProduct(3425454, 54365));
console.timeEnd("First called.");
