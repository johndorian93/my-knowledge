// always by value! https://www.javascripttutorial.net/javascript-pass-by-value/

const func1 = (parameter) => { // it is passed by value, but parameter is an object and his value is reference, but it is still passed by value, nevertheless because function changes the a property outside the function
  parameter.a = 2;
};

const object = { a: 1 };

func1(object);


const func2 = (parameter) => { // by values (same as above) because array is object
  parameter[1] = 2;
};

const array = [1];

func2(array);

console.log(array);

const func3 = (parameter) => { // by value because it is primitive value
  parameter = 10;
};

const variable = 1;

func3(variable);

console.log(variable);

