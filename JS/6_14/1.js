// // console.log(Number("123"));  //123
// // console.log(Number(true));  //1
// // console.log(Number(false));  //0
// // console.log(Number(null)); //0
// // console.log(Number(undefined)); //NaN
// // console.log(Number("hello"));  //NaN
// // console.log(Number({}));  //NaN
// // console.log(Number("10 "));

// // // ------parseInt------
// console.log("check data =====>>", typeof parseInt("123"));
// // console.log(parseInt("123hello"));
// // console.log(parseInt("123.45")); //decimal point and everything after it is ignored
// // console.log(parseInt("hello")); //NaN

// // //------parseFloat------
// // // console.log(parseFloat("123"));       
// // // console.log(parseFloat("123.45"));   
// // // console.log(parseFloat("3.14"));      
// // // console.log(parseFloat("10.5 meters"));  
// // // console.log(parseFloat("hello"));

// // // -------Number Properties--------
// // // console.log(Number.MAX_VALUE);
// // // console.log(Number.MIN_VALUE);
// // // console.log(Number.NEGATIVE_INFINITY);
// // // console.log(Number.NaN);
// // // console.log(Number.POSITIVE_INFINITY);

// // //------Array are Objects---------
// // console.log(typeof [1, 2, 3]);

// let restrictWord = ["abc", "zzy", "xyz"];
// let replaceWord = [{ name: 'kiran', newName: "debnath" },
// { name: "Ritik", newName: "pratik" }
// ]
// let str = "I am kiran abc kiran abc Ritik xyz"

// let result = []
// let newStr = "";

// for (let i = 0; i < restrictWord.length; i++) {
//       str = str.replaceAll(restrictWord[i], "");
// }
// console.log(str);
// for (let i = 0; i < replaceWord.length; i++) {
//       str = str.replaceAll(replaceWord[i].name, replaceWord[i].newName);
// }
// // console.log(str);

// let newArray = ['thor', "Ironman", "spiderman"];
// // console.log(newArray.length);
// // console.log(newArray.sort());
// newArray.push(["xyz", "abc"]);
// console.log(newArray);

// // newArray[newArray.length] = "Venom";
// // console.log(newArray);

// dcHeros = ["superman", "flash", "batman"];
// const allHeros = newArray.concat(dcHeros)
// console.log(allHeros);

// // ------isArray------
// // console.log(Array.isArray("Hitesh"));
// // console.log(Array.isArray(["vineet"]));


// console.log(dcHeros instanceof Array);

// let arrLength = 10;
// let arr = [];
// arr.length = 10;
// let res = arr.fill(0);
// console.log(res);
// array = Array(10).fill(0);
// console.log(array);
// console.log(0.2 + 0.2);

// let arr2 = [1, 2, 3];
// // arr2.unshift();
// // arr2.splice(2,0,5);
// const arr3=arr2.splice(1, 1, [1, 2])
// console.log(arr3);
// function insertAt(array, index, number) {
//       // array.splice(index,0,number);
//       // array.splice(index,0,number);
//       array.splice(index,3,number)
//       return array;

// }
// // console.log(insertAt([1, 2, 3, 4], 2, 10)); // Output: [1, 2, 10, 3, 4]
// // console.log(insertAt([5, 6, 7], 0, 4));    // Output: [4, 5, 6, 7]
// console.log(insertAt([], 0, 1));  //[1]

// const arr5 = ["Banana", "Orange", "Apple", "Mango"];
// //output { '0': 'Banana', '1': 'Orange', '2': 'Apple', '3': 'Mango' }
// const result8={}
// const result12=[] 
// for (const [key,value] of Object.entries(arr5)) {
//       result12.push(result8[key]=value)
// }
// console.log(result8);


// function filterEvenIndices(obj){
//       let result9=[];
//       for(let [key,value] of Object.entries(obj)){
//             result9.push([key,value]);
//       }
//       return result9;
// }

// console.log(filterEvenIndices({ a: 1, b: 2, c: 3 })); //output [['a', 1], ['b', 2], ['c', 3]]


// const sales = [
//       { productId: 101, quantity: 5 },
//       { productId: 102, quantity: 7 },
//       { productId: 101, quantity: 2 },
//       { productId: 103, quantity: 3 },
//       { productId: 102, quantity: 4 }
//     ];
//     // Output
// // {
// //   101: 7, // 5 + 2
// //   102: 11, // 7 + 4
// //   103: 3
// // }

// // sales.forEach((product)=>{
// //       if(product.productId){

// //       }
// // })
// // console.log(calculateTotalSales(sales));

let data = [1, 6, 1, 7, 3, 5, 7];
console.log(data.indexOf(1));
let answer = data.filter((element, i) => {
      return data.indexOf(element) === i;
})
// // console.log(answer);
// let answer=data.reduce((acc)=>{
//       return [...new Set(acc)]
// },data)
// console.log(answer);

// console.log(Object.entries(data));
// [1,6,1,7,3,5,7];


const numbers = [5, 2, 9, 1, 5];
numbers.sort();
console.log(numbers);

numbers.sort((a, b) => { return a - b })
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.sort();
console.log(fruits);
fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits);

const students = [
      { name: 'John', age: 20 },
      { name: 'Jane', age: 25 },
      { name: 'Doe', age: 18 }
];
students.sort((a, b) => {
      return a.age - b.age;
});
console.log(students);

const number1 = [5, 7, 2, 4, 7, 8, 10];
const target = 6;

if (number1.indexOf(target) === -1) {
      console.log("Not Present");
}
else {
      console.log("Present");
}
console.log(Math.min(...number1));

// ------endsWith---------
let checkStr = "HellO";
let vowels = ["a", "e", "i", "o", "u"];

// let lastElement = checkStr.toLowerCase().charAt(checkStr.length-1)
// const output123 = vowels.includes(lastElement) ? "vowel" : "Not Vowel";
// console.log(output123);

for(let i=0;i<vowels.length;i++){
      if(checkStr.toLowerCase().endsWith(vowels[i])){
            console.log("vowel");
            break;
      }
}
// -------fill-------
// vowels.fill("kiwi",1,4)
// console.log(vowels);

// -----firstIndex-------
// const age = [1,12,8,16,22];
// const result2 = age.findIndex(checkAge);
// function checkAge(ages){
//       return ages>15;
// }
// console.log(result2);

// let text = "Mr. blue has a blue house";
// console.log(text.search("blue"));








































