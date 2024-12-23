// var strObj = new String("This is a string.");
// var str = "This is a string.";
// console.log(str === strObj);
// console.log(typeof strObj);
// console.log(typeof str);

// var str1 = "This 'is' a \"string\".";
// var str2 = 'This \'is\' a "string".';
// var str3 = `This 'is' \`a\` "string".`;


// console.log(str1==str2);
// console.log(str1===str3);

// var num1 = 10;
// var num2=20;
// var result = num1+num2;
// var str = "Sum of "+num1+" & "+num2+" is "+num1+num2;
// console.log(str)
// var backTick = `Sum of ${num1} & ${num2} is ${num1+num2}`;
// console.log(backTick)

// var str = "This is a string";
//Length
// console.log(str.length);

//charAt
// console.log(str.charAt(5));

//indexOf
// console.log(str.indexOf('is'));

//lastIndexOf
// console.log(str.lastIndexOf('z'));

// toUpperCase  & toLowerCaser

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

//slice
// var str = "This is a string";

// var sliced = str.slice(-5,-1);
// console.log(sliced)

//substring
// var _sub = str.substring(1,5);
// console.log(_sub)

//substr - 
// var _sub = str.substr(1,5);
// console.log(_sub)

//trim, trimStart, trimEnd
// var str = "      This is a string      ";
// console.log(str.trimEnd())

//padding
// var a = "12";
// var b = a.padEnd(5,"1234");
// console.log(b);

//replace;
// var str = "This is a string";

// var replaced = str.replace("is","at");
// var replaced = str.replaceAll("is","at");
// console.log(replaced);

// var index = str.search('is');
// console.log(index);

// var index = str.includes("iz");
// console.log(index);

var str1 = "This is a string1 ";
var str2 = "This is a string2";
var str3 = "This is a string3";
// var str = str1.concat(str2,str3);
var str = str1+str2+str3
console.log(str)