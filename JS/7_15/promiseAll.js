const promise1 = Promise.resolve(3);
// const promise2 = Promise.reject("Error");
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "foo");
});
const promise4 = Promise.resolve(4);
Promise.all([promise1, promise3, promise4])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
