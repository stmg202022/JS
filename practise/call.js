//call
const obj = {
  name: "samson",
  age: 24,
  isAdmin: true,
  myinfo: function () {
    const { name, age } = this;

    if (age > 20 && age < 30) {
      console.log("young boy", name);
    } else {
      console.log("old boy", name);
    }
  },
};

// obj.myinfo();

const obj2 = {
  name: "Sagar",
  age: 40,
};

// obj.myinfo.call(obj2);

const student = {
  fName: "Sam",
  lName: "tmg",
};

//===========================HERE WE ARE DOING IN A TWO WAYS

// const fullName = function (data, city) {
//   //
//   const { fName, lName } = this;
//   //
//   const { address } = data;
//   //
//   console.log(fName, lName, "from", address, ",", city);
// };

// fullName.call(student, { address: "nepal" }, "ktm");

// const myFun = (std, city) => {
//   const { fName, lName } = std;

//   console.log(fName, lName, city);
// };

// myFun(student, "from ktm");
// ====================================================================
