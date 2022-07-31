const simulateFetch = (value) => {
  if (value === 'error') {
    return Promise.reject('error');
  }

  return Promise.resolve(value);
};

(async () => {
  const resultOfSinglePromise = await simulateFetch(1);

  console.log(typeof simulateFetch(1)); // object, Promise is an object
  console.log(typeof resultOfSinglePromise); // number

  console.log(resultOfSinglePromise);

  const resultOfPromiseAll = await Promise.all([
    simulateFetch(1),
    simulateFetch(2),
    simulateFetch(3),
  ]);

  console.log(typeof resultOfPromiseAll); // object, array is an object

  console.log(resultOfPromiseAll); // Promises in Promise.all invokes randomly, but the result is always in order how the promises were defined

  try {
    await Promise.all([
      simulateFetch(1),
      simulateFetch('error'),
      simulateFetch(2),
    ]);
  } catch (error) {
    console.log(error); // Promise.all rejects when at least one promise rejects
  }

  const resultOfPromiseAllSettled = await Promise.allSettled([
    simulateFetch(1),
    simulateFetch('error'),
    simulateFetch(2),
  ]);

  console.log(resultOfPromiseAllSettled); // returns an array of objects with items like: { status: '', value: '' }. does not throw as Promise.all

  try {
    const resultOfPromiseRace = await Promise.race([
      // simulateFetch(1),
      simulateFetch('error'),
      simulateFetch(2),
    ]);

    console.log(resultOfPromiseRace); // returns result of promise that is fulfilled first, the rest is ignored
  } catch (error) {
    console.log(error); // unlike Promise.allSettled if a promise rejects then an error is thrown
  }

  const resultOfPromiseAny = await Promise.any([
    simulateFetch('error'),
    simulateFetch('error'),
  ]);

  console.log(resultOfPromiseAny); // returns first fulfilled (not rejected) value of a promise, if all of them are rejected then we will get "all promises were rejected" error
})();

/*
Promises have three states:
- pending
- fulfilled
- rejected

Docs: https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */