// -------assignment--------
const people = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 20 },
      { name: 'David', age: 35 },
      { name: 'Eve', age: 28 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);

// 2. Given a nested array, convert it into a single array.
const nestedArray = [1, [2, [3, [4]], 5], 6];
console.log(nestedArray.flat(Infinity));

// Convert an Array to a String
let numbers = [1, 2, { a: "123" }, 4, 5];
// Output: '1,2,3,4,5'
console.log("", numbers.toString());

let number = [1, 2, 3, 4, 5];
// Output: [2, 3, 4]
console.log(number.slice(1, 4));

// 6. Create an array from a string.

let str = 'hello';
// Output: ['h', 'e', 'l', 'l', 'o']
console.log(str.split(""));

const uniqueArray = [1, 1, 2, 3, 4, 2, 5];
console.log("111", uniqueArray.indexOf(6), uniqueArray.findIndex((ele) => ele > 2));
//find unique value of it's index
//output:2
// const result = uniqueArray.reduce((acc,curr)=>{
//       if(acc[curr]){
//             acc[curr]+=1;
//       }
//       else{
//             acc[curr]=1;
//             // console.log(acc);
//       }
//       return acc;
// },{})
// console.log(result);

const data11 = [10, 11, 17, 8, 14]
function checkEven(num) {
      return num % 2 === 0
}
console.log("Every", data11.every(checkEven))
// returns true if every element in an array pass a function test

console.log("some", data11.some(checkEven))

// ----------Boolean-----------
// console.log("Boolean",Boolean(100));
// console.log("Boolean",Boolean(3.14));
// console.log("Boolean",Boolean(-15));
// console.log("Any (not empty)string is true",Boolean("Hello"));
// console.log("Boolean",Boolean('false'));
// console.log("Zero",Boolean(0));

// Boolean()
// false=0,"",undefined,null,NaN,false,-0

console.log(null > 0);  //false
console.log(null >= 0);  //true
console.log(undefined >= 0);  //false

// The Nullish Coalescing Operator (??)
let num1;
let num2 = 10;
// console.log("Nullish",num1 ?? null ?? num2)

// if-else condition
if (console.log("Hi")) {
      console.log("Hello");
}
else {
      console.log("Hi");
}
age = undefined;
if (age > 18) console.log("You are above 18");
else if (age < 18) console.log("you are less than 18");
else {
      console.log("Please enter a valid age");
}

let fruit = 'Apple';

switch (fruit) {
      case 'Apple':
            console.log('Apple is red.');
            break;
      case 'Banana':
            console.log('Banana is yellow.');
            break;
      case 'Orange':
            console.log('Orange is orange.');
            break;
      default:
            console.log('Unknown fruit.');
}

let evenNum = [1, 2, 3, 5];
for (let i = 0; i < evenNum.length; i++) {
      if (evenNum[i] % 2 === 0) {
            console.log(evenNum[i])
            break
      }
}
// ------Logical Operator-------
let userName = "Ritik";
let email = "ritiksahoo133@gmail.com";
if (userName && email) {
      console.log("valid User");
}
else {
      console.log("Not a valid user");
}
console.log("" || email);
console.log(null || "hello");

// NOT operator
// console.log(!"Hello");
console.log("abb" > "ba");

//-----for loop------
cars = ["BMW", "Volvo", "Saab"]
for (let i = 0; i < cars.length; i++) {
      console.log(cars[i]);
}
for (let i = 0; i < cars.length; i++) {
      if (cars[i] === "BMW") {
            console.log("for-loop break", "BMW")
            break
      }
}

let person = { fname: "Ritik", lname: "sahoo", age: 23 };
for (let i in person) {
      console.log(i, person[i]);
}
let i = 0;
while (i < 10) {
      if (i % 2 == 0){
            console.log(i);
      }
      i++
}


