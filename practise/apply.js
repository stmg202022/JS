// ======================================================================================
// Note:   Call do not used the []/square brackets to pass the arguments
// ======================================================================================

const obj = {
  firstName: "Samson",
  lastName: "Tamang",
};

const printFullName = function (address) {
  const { firstName, lastName } = this;

  console.log(firstName, lastName, address);
};

printFullName.apply(obj, ["from Dhading"]);

const obj2 = {
  firstName: "Sagar ",
  lastName: "Kapali",
};

printFullName.apply(obj2, ["from ktm"]);

printFullName.apply(obj, [{ name: "samson", age: 24 }]);

// ======================================================================================
// Note: Use the []/square brackets to pass the arguments in apply method()
// ======================================================================================
