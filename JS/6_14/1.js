console.log(Number("123"));  //123
console.log(Number(true));  //1
console.log(Number(false));  //0
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
console.log(Number("hello"));  //NaN
console.log(Number({}));  //NaN
console.log(Number("10 "));

// ------parseInt------
console.log(parseInt("123"));
console.log(parseInt("123hello"));
console.log(parseInt("123.45")); //decimal point and everything after it is ignored
console.log(parseInt("hello")); //NaN

//------parseFloat------
// console.log(parseFloat("123"));       
// console.log(parseFloat("123.45"));   
// console.log(parseFloat("3.14"));      
// console.log(parseFloat("10.5 meters"));  
// console.log(parseFloat("hello"));

