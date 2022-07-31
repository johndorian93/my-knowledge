// freeze
const object1 = { a: 1, object2: { x: 9 } };

Object.freeze(object1);

object1.b = 2;
object1.object2.y = 8;

console.log(object1); // does not have b property, because of the freeze, it has the y because freeze does not work deeply

const array1 = [1];

Object.freeze(array1);

array1[1] = 2;

console.log(array1); // does not have the second item because of the freeze


// shallow vs deep

/*
shallow copy/clone of object uses the same references as the root object

deep copy/clone of object uses a new reference so if we change the second one then the first one is not affected
 */

// shallow copy
const objectA = { a: 1 };
const objectB = objectA;

objectB.b = 2;

console.log(objectA); // { a: 1, b: 2 }
console.log(objectB); // { a: 1, b: 2 }

// deep copy
const objectC = { a: 1, inner: { z: 9 } };
const objectD = { ...objectC };

objectC.b = 2;

console.log(objectC); // { a: 1, b: 2 }
console.log(objectD); // { a: 1 }

objectC.inner.y = 8; // it affects both object because the spread operator does not deep copying the nested objects



// object creation

const simpleObject = {};

const objectObject = Object({});

function base() {
  this.name = 'name';
}

base.prototype.toString = function() { console.log(this.name) };

const createObject = Object.create(base.prototype); // ???

console.log(createObject.toString());