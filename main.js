//part one
// Question 1
//convert to number then add
/* const value = "123";
 console.log(Number(value) + 7);*/
//================================================
//Question 2
//check falsy
/* const variable = 0;
if(Boolean(variable)==false){
    console.log("invalid");  
}*/
//=================================================
//Question 3
//print even numbers from 1 to 10
/* for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}*/
//=================================================
//Question 4
//create array and return even values
/* const arr=[1,2,3,4];
const result=arr.filter((element)=>{
    return element%2==0;
})
console.log(result);*/
//=================================================
//Question 5
//merge between 2 array
/*const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);*/
//===================================================
//Question 6
// return the day of the week given a number
/*const day = 2;
switch (day) {
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("monday");
    break;
  case 3:
    console.log("tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log("thursday");
    break;
  case 6:
    console.log("friday");
    break;
  case 7:
    console.log("saturday");
    break;
  default:
    console.log("incorrect day");
    break;
}*/
//===========================================
//Question 7
//create array of strings and return their length
/* const array = ["a", "ab", "abc"];
const output = [];
array.map((element) => {
  output.push(element.length);
});
console.log(output);*/
//============================================
//Question 8
//check if number divisible by 3 and 5
/*function checkNumber(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return "Divisible by both";
  } else {
    return "not divisible by both";
  }
}
console.log(checkNumber(15));*/
//=============================================
//Question 9
//return square of a number
/* const result=(number)=>{
return number**2;
}
console.log(result(5));*/
//==============================================
// Question 10
// destruct object and return string values format
/* const person = { name: "sama", age: 22 };
function formatPerson() {
  const { name, age } = person;
  return `'${name} is ${age} years old'`;
}
console.log(formatPerson());*/
//================================================
//Question 11
//function accept multiple parameters and return sum
/* const array = [1, 2, 3, 4, 5];
function sum(arr) {
  let sumValues = 0;
  for (let i = 0; i < arr.length; i++) {
    sumValues += arr[i];
  }
  return sumValues;
}
console.log(sum(array));*/
//==================================================
// Question 12
//fuction return promise after 3 sec
/*function delayedSuccess(){
return  new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("success")
  },3000);
}) 
}
delayedSuccess().then((message) => {
  console.log(message);
});*/
//================================================
//Question 13
//find largest number in an array
/* let array = [1, 3, 7, 2, 4];
let max = array[0];
for (let i = 0; i < array.length; i++) {
  if (max < array[i]) {
    max=array[i];
  }
}
console.log(max);*/
//================================================
//Question 14
//function take object and return array contain keys only
/* const person={name:"sama",age:22};
function returnKeys(person){
console.log(Object.getOwnPropertyNames(person))
}
returnKeys(person);*/
//==================================================
//Question 15
//function split string into an array of words based on spaces
/*function split() {
  const input="the quick brown fox";
  const output=input.split(" ");
  return output;
}
console.log(split());*/
//=======================================================================
//part two
//Question 1
/*
-forEach is an array method that calls a callback fuction once for each element in the array while for of is a loop statement that iterates over the values of an iterable object.

-when we need to loop through the values of an iterable use -> for of 
-when we need to execute a fuction for every element i an array use -> for each
*/
//=================================================
//Question 2
/*
-Hoisting is JavaScript's behavior of making declarations available before code execution, as if they were moved to the top of their scope,
Example: 
console.log(x);                var x;
var x=50;               ->     console.log(x);
output = undefined             x=50;

-Tempral dead zone (TDZ) is the time after a let or const variable is hoisted but before its declaration is executed,
Example :
console.log(x);
let x=50;
output = cannot access x before initialization
*/
//=================================================
//Question 3
/*
(==) ->  check if 2 value is equal , 5=="5" ->true
(===) -> check if 2 value is equal and datatype too 5==="5" -> false
*/
//==================================================
//Question 4
/*
-try is a statement defines the code block to run
-catch is a statement defines a code block to handle any error thrown in the try block
try catch is used to handle errors in async code such as when using async await if an awaited operaion fails execution immediately go to the catch block, where the error can be handled.
*/
//==================================================
//Question 5
/*
- conversion is explicit conversion of value from one datatype to another ,
example :
 convert number to string , String(5)   -> output "5"
 convert string to number , Number("5")   -> output 5
 convert number to boolean , Boolean(5)   -> output true
- coercion is implicit conversion of values from one datatype to another,
example:
("5"+9) output=> 59 (9 convert automatically to string)
("5"-2) output=> 3 (5 convert automatically to number)
(5+true) output=> 6 (true convert automatically to 1)
*/
//==========================================================================
