

//create Phase-> we can contain the definition of  function or varible in create phase;
// excecution phase-> we can exexute the program in this phase;

// hoisting-> hoisting is a machnishm that the function and variable are declare (create phase) and they are moved on the top on their scope before execution pahse;

// Es6-> it is avoid the hoisting by using let and const keyword.let keyword instead of var we can avoid hoisting

//Example 1.

// creation phase

// console.log(a)// undefined
// var a=11;
// console.log(a)//11

// execution phase;

/* 
var a
console.log(a);// undefined
a=11;
console.log(a)//11


*/

// Example2.
/*
 
console.log(a)

let a=10;

console.log(a)
 
*/

// use Strict mode -> hoisting are not work;'

// "use strict"

// console.log(a)
// var a = 10;
// delete (a)
// console.log(a)


// lexical scoping-> which means the inner function can we access the varible of outer function or global;
//                   outer function can be access the varible of  global and but not inner function varible;


// var a=10
// function fun()
// {
//     let b=20;
  
//     function inner()
//     {
//         let c=30;
//         console.log("inner function",a,b,c)
//     }
//     inner()
//       console.log("outer function",a,b)
// } 

// fun()

// console.log("main scope",a)



/*

clouser-> it is a function or lexical scope
In JavaScript, a closure is the combination of a function and the lexical environment within which that function was declared. This means that a closure allows an inner function to retain access to the variables and parameters of its outer (enclosing) function, even after the outer function has finished executing. 

*/

// var a=10;

// function abc()
// {
//     var b=20;
//     function inner()
//     {
//         var c=30;
//         console.log(a,b,c)
//     }
//     return inner
// }

// let c=abc()
// console.log(c())

// synchrounous->one task is wait for complete previous task;

// asynchrounous-> one task does not have to await to complete previous task

// Event Propgation-> It mode determine the in which order the element request event;

// 1.Event capturing->it travels downwards to first parent element to last child element;

//2.Event Bubbling->from last child to first parent;


