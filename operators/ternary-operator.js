//ternary opertaor->condition?statement1(true):Statement2(false);

//check number is even or odd;

let num = parseInt(prompt("enter a number:"));
num % 2 == 0 ? document.writeln(`${num} is even <br>`) : document.writeln(`${num} is odd <br>`)

//check two number is equal or not
let a = parseInt(prompt("enter a"))
let b = parseInt(prompt("enter b"))

a == b ? document.writeln(`${a} is equal to ${b}`) : document.writeln(`${a} is not equal to ${b} `)

//check you can give a vote or not
let age = parseInt(prompt("enter age "));
age >= 18 ? document.writeln(`<br> ${age} your age is greater than 18 now you can give a vote`) : document.writeln(`<br> ${age} your age is less than 18 you can't give a vote`)

//check number is perfect square or not 

let number = parseInt(prompt("enter a number:"));
let perfectsquare = Number.isInteger(Math.sqrt(number))
number!=0 ? document.writeln(`<br>${perfectsquare} is perfect squre root`) : document.writeln(`<br>${perfectsquare} is not perfect square root`)