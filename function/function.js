/*

*function-> A function is a block of code or group of statement or block of statement to perform a particular task;

-> A function can provide the feature of code reusebility and increase code readability;

*space complexity--->

1.data space-> to require a memory to store variable and constant;
2.instruction space-> to required to store program instruction;
3.enviroment space-> to required to store arguments and return value of function;

*Advantage->
1.it's provide the feature of code reusablity and incease the code readability;

2.it's decrease the data space and instruction space;

                synatx

                function function_name(argument)
                {
                ------------
                -------------
                n of statements
                -------------
                --------------
                return value
                }

             function_name(argument)

*/

//function within a function

// function fun() {
//     console.log("hello1")
//     fun2()
//     console.log(" back to fun function ")
// }
// function fun2() {
//     console.log("hello2")
//     fun3()
//     console.log("back to a fun2 function")
// }
// function fun3() {
//     console.log("Hello3")
// }
// console.log("This is main block")
// fun()
// console.log("Back to the main block")

// function fun() {
//     console.log("hello1")
//     console.log(" back to fun function ")
// }
// function fun2() {
//     console.log("hello2")
//     console.log("back to a fun2 function")
// }
// function fun3() {
//     console.log("Hello3")
// }
// console.log("This is main block")
// fun3(fun())
// console.log("Back to the main block")


// function demo()
// {
//     console.log("hello everyone")
// }
// function demo2()
// {
//     console.log("special hello vishal")
// }

// demo2(demo())


// Types of function based on return or argument;

//1.no return no parameter;

// function add()
// {
//     var a=20;
//     var b=30;
//     var sum=a+b;
//     console.log(sum)
// }
// add()

//2.method function within a function;

// function add()
// {
//     var a=10;
//     var b=30;
//     var sum=a+b;
//     console.log(sum)
// }
// function test()
// {
//     add()
// }
// test()

//------------------------------------------------------------------------------------------------------------------------

//2.return without parameter

// function add()
// {
//     var a=10;
//     var b=20;
//     sum=a+b
//     return sum
// }
// let s=parseInt(add())
// console.log(s)

//2.method

// function add()
// {
//     var a=10;
//     var b=30;
//     var sum=a+b;
//     return sum
// }

// function test()
// {
//     let s=add()
//     console.log(s)
// }
// test()

//------------------------------------------------------------------------------------------------------------------------

//3.no return with argument;

// function add(a,b)
// {
//     sum=a+b
//     console.log(sum)
// }
// add(20,50)

//2.method

// function add(a,b)
// {
//     var sum=a+b;
//     console.log(sum)
// }
// function test()
// {
//     var x=40;
//     var y=90;
//     // add(x,y);
// }
// test(add(10,22))


//-----------------------------------------------------------------------------------------------------------------------

//4. return with argument

// function add(a,b)//formal parameter
// {
//     var sum=a+b;
//     return sum;
// }

// let s=add(50,60);// actual parameter
// console.log(s)

//2.Method

// function add(a,b)
// {
//     var sum=a+b;
//     return sum;
// }

// function test()
// {
//     var x=30;
//     var y=50;
//     // let s=add(x,y)
//       console.log(add(50,y))
// }
// test()
//---------------------------------------------------------------------------------------------------------------

//Default parameter-> we have give a default parameter;

// function add(a=0,b=0,c=0,d=0)//default parameter
// {
// console.log(`${a} ${b} ${c} ${d}`)
// console.log(`${a} ${b} ${c}`)
// console.log(`${a} ${b}`)
// console.log(`${a}`)
// return (`${a+b}`)
// }
// console.log(add(10,20,30,40))
// console.log(add(10,20,30))
// console.log(add(10,20))
// console.log(add(10))

// function add(a,b,c,d)//default parameter
// {
// console.log(`${a} ${b} ${c} ${d}`)  //A varible should have no any value is say undefined
// console.log(`${a} ${b} ${c}`)
// console.log(`${a} ${b}`)
// console.log(`${a}`)

// }

// add(1,2,3,4)
// add(1,2,3)
// add(1,2)
// add(1)

// A function can return array

// function arr()
// {
//    return [10,20,30,40]
// }

// console.log(arr())

//Anonymous function-> A function should have no any name ;

// var s=function(a,b)
// {
//    //var sum=(a+b)
//    return  a+b
// }

// console.log(s(10,20))

// var a=function()
// {
//  console.log(`We have always store anonymous function in varible to call`)
// }
// // a()



// var add=function()
// {
//    var a=20;
//    var b=30
//    var sum=a+b
//    console.log(sum)
// }
// add()

// var add=function()
// {
//    var a=20;
//    var b=30
//    var sum=a+b
//  return sum
// }
// console.log(add())

//Arrow function or fat Arrow function-> it stand for a fat arrow => function introduce in Es6;
//-> it write a function definition more readable and shorter;

// var s=()=>{
//    console.log("helo")
// }                                     

// s()

// var s=(a,b)=>{
//    return a+b
// }

// console.log(s(12,33))

// var s=(a,b)=>{

//    console.log(a+b)

// }
// s(100,22)

// var s=()=>{
//    var a=10
//    var b=20;
//    return a+b
// }

// console.log(s())

//callback function -> A function give as an argument in other function


// function abc()
// {
//    console.log(`hello`)
// }
// function xyz()
// {
//    console.log(`hello2`)
// }

// abc(xyz)

// function abc()
// {
//    console.log("Hello1")
//    console.log("back to abc function")
// }
// function xyz(n)
// {
//    console.log("Hello2")
//     n()
//     console.log("back to xyz function")
// }
// function mnp()
// {
//    console.log("Hello3")


// }
// abc(xyz(mnp))

// console.log("Back to main")

// function abc(x){
//    console.log("hello 1")
//    x()
//    console.log("back abc")
// }

// function xyz(y){
//    console.log("hello 2")
//    y()
//    console.log("back xyz")
// }


// function mnp(z){
//    console.log("hello 3")
//    z()

// }

// console.log("Main start")
// abc(()=>{console.log("callback1"),xyz(()=>{console.log("callback2"),mnp(()=>{console.log("callback3")})})})
// console.log("back main")
// function abc(n,m,o,rev)
// {
//    console.log(`reverse 1 is : ${rev(n)}`)
//    console.log(`reverse 2 is : ${rev(m)}`)
//    console.log(`reverse 3 is : ${rev(o)}`)
// }

// function xyz(num)
// {
//    let s=0;

//    while(num>0)
//    {
//       let r=num%10;
//       s=s*10+r;
//       num=parseInt(num/10)
//    }
//   //onsole.log(s)
//   return s
// }

// abc(123,456,789,xyz)

// function pallidrome(n, m, o, fun) {
//    console.log(`pallidrome 1 ${fun(n)}`)
//    console.log(`pallidrome 2 ${fun(m)}`)
//    console.log(`pallidrome 3 ${fun(o)}`)
// }

// function abc(n)
// {
//    num=n
//    let s=0;
//    while(num>0)
//    {
//       let r=num%10;
//       s=s*10+r;
//       num=parseInt(num/10)
//    }
//   if(s==n)
//    return s
// else
//    return "not pallidrome"

// }

// pallidrome(12321,12312,45654,abc)

// function abc(xyz)
// {
//    xyz()
// }

// abc(()=>{
//    console.log("hello")
// })
//anonymous  
// abc(function(){
//    console.log("hello")
// })


// function abc(m) {
//    console.log("start")
//    setTimeout(() => {
//       m()
//    }, 2000)
// }
// function xyz(o) {
//    setTimeout(() => {
//       o()
//    }, 2000)
// }
// function mnp(n) {
//    setTimeout(() => {
//       n()
//    }, 2000)
// }

// abc(() => {
//    console.log("hello1");
//    xyz(() => {
//       console.log("hello2"),
//       mnp(() => { console.log("hello3") })
//    })
// })

//self invoked function or immediatly invoked funtion(IIfE)
//syntax
// ()()

// var s=(function sum(a,b){
//    return a+b;
// },(10,80))

// console.log(s)

// (function(a,b){
//    sum=a+b
//    console.log(sum)
// })(100,2)

// console.log(`Sum is: ${(function(a,b){
//    return a+b
// })(10,20)}`)

//Recursion->A function call itself .In recursion we have give a condition neccessary because function call infinite time


// function fact(f)
// {

//    if(f==0 || f==1)//base case
//    {
//        return 1;
//    }
//    else{
//        return f*fact(f-1)//recursive case
//    }

// }
// console.log(fact(5))
// let f = 6
// function fact() {
//    f--
//    if (f == 0 || f==1)//base case
//    {
//       return 1;
//    }
//    else {

//       return f * fact()//recursive case


//    }


// }
// console.log(fact())

// function sum(num)
// {
//    if(num===1)
//    {
//       return 1
//    }
//    else{
//       return num+sum(num-1)
//    }
// }

// console.log(sum(5))

// let s=6
// function add()
// {  s--
   
//    if(s==1)
//    {
//       return 1
//    }
   
//    else{
//   return s+add()
//    }
 
// }
// console.log(add())

// let a=0;
// let b=1;
// let c;
// function fibbo(num)
// {
//    if(num==0)
//    {
//       return 
//    }
//    else{

//       fibbo(num-1)
//       console.log(a)
//       c=a+b;
//       a=b
//       b=c
//    }
// }

// fibbo(10)

// let r;
// let s = 0;


// function reverse(num) {
//      r = num % 10;
//       s = s * 10 + r;
//        // console.log(s)
//        // output
//        // 3
//        // 32
//        //321 
//    // num = parseInt(num / 10)
//    if (num === 1) {
//       return  console.log(s)///retur 321 as output
//    }
//    else {
//       reverse(parseInt(num / 10))
//       // console.log(s)
//       //Output
//       //321
//       //321
//    }

// }

// reverse(123)
// let r;
// let s=0;
// let num=1234

// function reverse()
// {

//     r=num%10;
//       s=s*10+r;
//        num=parseInt(num/10)

//    if(num===0)
//    {
//       return console.log(s)
//    }
//    else{
//       reverse()
     
//    }
// }

// reverse()

// let r;
// let s = 0;


// function pallidrome(n) {
//    let num = n
//    r = num % 10;
//    s = s * 10 + r;


//    if (num === 1) {
//       return console.log(s)///retur 321 as output


//    }
//    else {

//       pallidrome(parseInt(num / 10))
//       //  if (s == n) {
//       //    console.log("pallidrome", n)
//       // }
     
//    }



// }

// pallidrome(12321)

// let r;
// let s=0;
// let num=12321;
// let n=num;
// function pallidrome()
// {
   
 
//    r=n%10;
//    s=s*10+r
//   n=parseInt(n/10);
//    if(n===0 )
//    {
//       if(s==num)
//       {
//          console.log("pallidrome",num,s)
//       }
//       else{
//          console.log("not pallidrome",num,s)
//       }
//    }
//    else{
//       pallidrome()
//    }

// }

// pallidrome()

let square;
let r;
let s=0;

function neon(num)
{
   square=num*num
    
    console.log(square)
    r=square%10;
    s=s+r;
   square=parseInt(square/10)
   console.log(s)

   if(num==9)
   {
      if(num==s)
       {
         console.log("neon",num)
       }
       else{
         console.log("not",num,s)
       }
   }
   else{
      neon()
  
   }

}

neon(9)