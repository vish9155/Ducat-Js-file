// lexixal scoping-> it mean's the inner function can be get varible of outer function and global scope;
            // -> Outer function cam't get the inner function variable. it get global scope varible;

            
            
// let a=10
// let b=20
// function abc()
// {
//     let c=30
//     let d=40
//     function inner()
//     {
//         let e=50;
//         console.log(a,b,c,d,e)
//     }
//     inner()
//     console.log(a,b,c,d)
// }

// console.log(a,b)
// abc()




// clouser-> it is a combination of function and lexicall scoping enviroment within the function is called.clouser allow the inner function to retain varible of outer function,after event the outer function is execute;




// let a=10
// let b=20
// function abc()
// {
//     let c=30
//     let d=40
//     function inner()
//     {
//         let e=50;
//         console.log(a,b,c,d,e)
//     }
//      console.log(a,b,c,d)
//      return inner
   
// }

// console.log(a,b)
// let c=abc()
// c()

// function currying-> it is evaluate the function with multiple argument with the a function at single argument;



// function abc(num1)
// {
// return function(num2){
    
//     return function(num3){
     
//         return function(num4){
      
//             return function(num5){

//                 return num1+num2+num3+num4+num5
      
//     }
//     }
        
//     }

//     }

// }


// let abc=(num1)=>(num2)=>(num3)=>(num4)=>(num5)=>num1+num2+num3+num4+num5


// console.log(abc(100)(200)(300)(4000)(5000))

