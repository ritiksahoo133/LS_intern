// console.log(Number("123"));  //123
// console.log(Number(true));  //1
// console.log(Number(false));  //0
// console.log(Number(null)); //0
// console.log(Number(undefined)); //NaN
// console.log(Number("hello"));  //NaN
// console.log(Number({}));  //NaN
// console.log(Number("10 "));

// // ------parseInt------
console.log("check data =====>>", typeof parseInt("123"));
// console.log(parseInt("123hello"));
// console.log(parseInt("123.45")); //decimal point and everything after it is ignored
// console.log(parseInt("hello")); //NaN

// //------parseFloat------
// // console.log(parseFloat("123"));       
// // console.log(parseFloat("123.45"));   
// // console.log(parseFloat("3.14"));      
// // console.log(parseFloat("10.5 meters"));  
// // console.log(parseFloat("hello"));

// // -------Number Properties--------
// // console.log(Number.MAX_VALUE);
// // console.log(Number.MIN_VALUE);
// // console.log(Number.NEGATIVE_INFINITY);
// // console.log(Number.NaN);
// // console.log(Number.POSITIVE_INFINITY);

// //------Array are Objects---------
// console.log(typeof [1, 2, 3]);

let restrictWord = ["abc", "zzy", "xyz"];
let replaceWord = [{ name: 'kiran', newName: "debnath" },
{ name: "Ritik", newName: "pratik" }
]
let str = "I am kiran abc kiran abc Ritik xyz"

let result = []
let newStr = "";

for (let i = 0; i < restrictWord.length; i++) {
      str = str.replaceAll(restrictWord[i], "");
}
console.log(str);
for (let i = 0; i < replaceWord.length; i++) {
      str = str.replaceAll(replaceWord[i].name, replaceWord[i].newName);
}
// console.log(str);

let newArray = ['thor', "Ironman", "spiderman"];
// console.log(newArray.length);
// console.log(newArray.sort());
newArray.push(["xyz", "abc"]);
console.log(newArray);

// newArray[newArray.length] = "Venom";
// console.log(newArray);

dcHeros = ["superman", "flash", "batman"];
const allHeros = newArray.concat(dcHeros)
console.log(allHeros);

// ------isArray------
// console.log(Array.isArray("Hitesh"));
// console.log(Array.isArray(["vineet"]));

console.log(dcHeros instanceof Array);

let arrLength = 10;
let arr=[];
arr.length=10;
let res = arr.fill(0);
console.log(res);
array = Array(10).fill(0);
console.log(array);
console.log(0.2+0.2);

let arr2=[1,2,3];
arr2.unshift();



























