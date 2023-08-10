const obj = {
  firstName: "Samson",
  lastName: "Tamang",
};

const printFullName = function (address) {
  const { firstName, lastName } = this;

  console.log(firstName, lastName, address);
};

const printName = printFullName.bind(obj, "Dhading");

printName();

// just differences is that bind return a functios by binding.
