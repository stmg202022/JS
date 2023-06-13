//Currying in js is done in two ways
// i.e by closures and by using bind() method
//So, it is related to the closures and bind

//Currying is the conversion of f(a, b) to f(a)(b)

const sum = (a) => {
  return function (b) {
    return function (c) {
      return `sum: ${a + b + c}`;
    };
  };
};

// console.log(sum(2));
// console.log(sum(2)(4)(6));

// =================================================================================

const evaluate = (operations) => {
  return function (a) {
    return function (b) {
      if (operations === "sum") return a + b;

      if (operations === "multiply") return a * b;

      if (operations === "divide") return a / b;

      return "Invalid Operation";
    };
  };
};

// console.log(evaluate("sum")(3)(4));
// console.log(evaluate("multiply")(3)(4));
// console.log(evaluate("divide")(3)(4));
// console.log(evaluate()(3)(4));

// =============================================================

// add(1)(2)(3)()....(n) ?

const add = (a) => {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
};

// console.log(add(2)(3)(7)());

// =====================================================================

// curring vs partial applications
// ===================================================

// Number of return fn = number of arguments passed. => currying
const mul = (a) => {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
};

// const y = mul(10);
// const z = y(20);
// const result = z(10);
// console.log(result);

// ===============================
// Number of return fn !== number of arguments passed. => currying

const mul2 = (a) => {
  return function (b, c) {
    return a * b * c;
  };
};

// const x = mul2(10);
// console.log(x(3, 4));

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function updateElementText(id) {
//   return function (content) {
//     document.querySelector("#" + id).textContent = content;
//   };
// }

// const updateHeader = updateElementText("heading");

// updateHeader("Hello Nepal");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Convert fn(a, b, c) into fn(a)(b)(c) ?

const curry = (func) => {
  return function curriedFunc(...args) {
    // console.log(args.length);
    // console.log(func.length);

    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
};

const addFn = (a, b, c, d) => a + b + c + d;

// curry(addFn)(2, 7, 6);

const totalSum = curry(addFn);

console.log(totalSum(1)(2)(9)(6));
