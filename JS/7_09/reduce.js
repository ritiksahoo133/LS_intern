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
// console.log(sum);

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
const TotalVote = voters.reduce((acc, curr) => {
  if (curr.voted === true) {
    acc = acc + 1;
  }
  return acc;
}, 0);
console.log(TotalVote);
