const map = new Map(); // can story any values, keys can be not-primitive (function, objects) unlike Object where keys can be only primitive or Symbol

map.set('a', '1');

console.log(typeof map); // object

const weakMap = new WeakMap(); // can story pairs where their keys are only objects

const object = { a: 1 };

weakMap.set(object, 1);

console.log(weakMap.get(object));

const set = new Set(); // story only unique values

set.add(1);
set.add(1);

console.log(set.values());

console.log(Array.from(set));

const weakSet = new WeakSet(); // stores only unique objects references

weakSet.add(object);
// weakSet.add({ a: 1 });

console.log(weakSet.has(object)); // true