// -------assignment--------
const people = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 20 },
      { name: 'David', age: 35 },
      { name: 'Eve', age: 28 }
    ];
people.sort((a,b)=>a.age-b.age);
console.log(people);

// 2. Given a nested array, convert it into a single array.
const nestedArray = [1, [2, [3, [4]], 5], 6];
console.log(nestedArray.flat(Infinity));

// Convert an Array to a String
let numbers = [1, 2, 3, 4, 5];
// Output: '1,2,3,4,5'
console.log(numbers.join(','));


let number = [1, 2, 3, 4, 5];
// Output: [2, 3, 4]
console.log(number.slice(1,4));

// 6. Create an array from a string.

let str = 'hello';
// Output: ['h', 'e', 'l', 'l', 'o']
console.log(str.split(""));





