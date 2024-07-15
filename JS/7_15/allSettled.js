const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "foo");
});

const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => {
    console.log(result.status);
  })
);

Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66)), 0),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => {
  values.forEach((val) => {
    console.log(val.value);
  });
});
