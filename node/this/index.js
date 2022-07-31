console.log('global this reference: ', this); // an empty object

const object1 = {
  a: 1,
  function: () => {
    console.log(this);
  },
};

object1.function(); // an empty object, because arrow function takes parent's context

const object2 = {
  b: 2,
  function() {
    console.log(this);
  },
};

object2.function(); // object2, because functions context of object that belongs to

function func1() {
  console.log(this);
}

func1(); // global object, because func does not have any object context so it takes the closes one, so global object

const func2 = function () {
  console.log(this);
};

func2(); // global object, same as previous example

const func3 = () => {
  console.log(this);
};

func3(); // an empty object, arrow function takes parent's context

(() => {
  console.log(this); // an empty object
})();

(function() {
  console.log(this); // global object
})();

const a = 1;

module.exports.a = a;

console.log(this); // { a: 1 }, this === module.exports

new func2(); // func2, new object is created with its own context

/**
Explanation of the empty object
 https://stackoverflow.com/a/12682645
 https://stackoverflow.com/a/22771432
**/