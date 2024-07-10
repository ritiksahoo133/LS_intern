const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((acc, curr) => {
  //   console.log({ acc: acc, curr: curr });
  return (acc += curr);
}, 0);
// console.log(result);

// Sum of Values in an Object array

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce((acc, curr) => {
  return (acc += curr.x);
}, 0);
console.log(sum);
