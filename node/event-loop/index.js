const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');
const huh = () => console.log('huh');
const start = () => {
  console.log('start');

  setImmediate(baz);
  setTimeout(huh, 0);

  new Promise((resolve, reject) => {
    resolve('bar');
  }).then((resolve) => {
    console.log(resolve);
    process.nextTick(zoo);
  });

  process.nextTick(foo);
};
start();
