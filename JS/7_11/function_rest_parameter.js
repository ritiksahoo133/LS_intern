function sum(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}
console.log(sum(2, 9, 3, 1, 5));

function findMax() {
  let max = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
// x = findMax(1, 123, 500, 115, 44, 88);

// console.log(x);

const [first, ...second] = [1, 2, 3, 4, 5];
// console.log(first, second);

const x = [1, 2, 3, 4, 5, 6];
const [y, z] = x;
// console.log(y, z);

const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a, b);
