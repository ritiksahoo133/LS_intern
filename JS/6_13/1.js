let data = "Logic square";
let res = data.replace("-1", "Squa");
// console.log(res);
let text = "Hello,world!";
// console.log(text.charAt(1));
// console.log(text.charCodeAt('e'));

var data2 = "LogicSquare";
// console.log(data2[2]);
data2[0] = "l"
console.log(data2.split(""));

// console.log(data.concat(data2));

let t = "How are you doing today?";
const myArray = t.split(" ");
console.log(myArray);

// Write a JavaScript function that takes two strings as arguments and returns true 
// if the second string is a rotation of the first string, otherwise returns false.
// For example, "hello" is a rotation of "ohell" but not of "world".

const checkNumber = 10 / "12";
console.log(checkNumber);
console.log(isNaN("123"));

let num = 2;
let num2 = num.toString();
console.log(typeof num2);
b = "10"
c = "kiran"
d = Number(b)
e = Number(c)
// const a =100/"10"
console.log(d, e);

let d5 = "logic square"
//"Logic Square"
//"LOGIC Square"
//"lOGIC sQUARE"
         
let arr = d5.split(" ");
console.log(arr);

let firstWord = arr[0][0].toUpperCase() + arr[0].slice(1) 
let lastWord = arr[1][0].toUpperCase() + arr[1].slice(1)
console.log(firstWord + " " + lastWord);
let LOGIC = arr[0].toUpperCase() 
console.log(LOGIC + " " + lastWord);
let lOGIC = arr[0][0] + arr[0].slice(1).toUpperCase();
let sQUARE = arr[1][0] + arr[1].slice(1).toUpperCase();
console.log(lOGIC + " " + sQUARE);

let result=[];
for(i=0;i<arr.length;i++){
      result.push(arr[i][0].toUpperCase()+arr[i].slice(1));
}
console.log(result.join(' '));

 




