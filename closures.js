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
      console.log(a + b + c + d);
    });
  });
};

// fn3()()(); //calling closures functions

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // displayName() uses variable declared in the parent function
  }
  //   displayName();
}
init();
