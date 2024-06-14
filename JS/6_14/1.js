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