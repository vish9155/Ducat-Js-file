//1.increment->to incremnet 1
//i.pre-increment->firt increment then assignment ++a;
//ii.post-incremenet->first assignment then increment a++;

//2.decrement-> to decrement 1
//i.pre-decrement->firt decrement then assignment --a;
//ii.post-decrement->first assignment then decrement a--;

//question->1

// let a=10;  
// let b=a++;//a=10->11 b==10
// let c=++a;//a=12;c=12
// let d=a--;//a=12->11 c==12
// var e=--a;//a=10e==10
// console.log(a,b,c,d,e)

// question->2

// var a = 10;
// //        9   9->8
// var b = --a - a--;//b=9-9=0
// //      8->7  7->6  0->-1 -1->-2
// var c = a-- - a-- + b-- - b--//8-7+(-0+1)=>1+1=2

// //a=6,b=-2,c=2

// console.log(a,b,c)

//question->3

// var a = 10;
// a = a--;//a=10->9
// //     10->9    8
// var b = a-- + --a;//b=10-8=18
// //      7     7->6   19   20
// var c = --a + a-- + ++b - ++b//7+7+19-20=1

// console.log(a,b,c)

var a = 10;
//       9    9->8
var b = --a - a--//9-9=0->b=0
//      8->9   10   0->-1 -1->-2
var c = a++ - ++a - b-- - b--//8-10-0+1=c=-1
//    10->9 9->8 -2->-3 -3->-4 -1->0 0->1
var d = a-- - a-- + b-- - b-- + c++ + c++//10 -9 -2 +3 -1 =>1
//a=8 b=-4 c=1 d=1

console.log(a, b, c, d)