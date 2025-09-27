/*

Q:what is array in js?

->Array is a hertogenious (different item) collection of item  agrrangement in contiguous order;
-> In js array can contain duplicate item;
-> In js array can contain different datatype value;
->It is mutable datatype which mean's we have to to updation like insertion ,deletion etc;
-> array length-> last index + 1
->Array Index is always start from 0 
           syntax
           ..............

           let arrobj=[itme1,item2......,itemN]
    
           Example
      ........................
 
let arr = [10, 20, 30.45, "vishal", true, false]
//  console.log(`array item is ${arr}`)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
----------------------------------------------------------------------------------------------------
      100  104  108  112  116  120
     [10 , 20 , 30 , 40 , 50 , 60]


     Index=(Address of disere element - Address of Base element)/sizeof(element)

     exx-
     -------------
     Index of 10 -> (100 -100)/2->0/4->0 
     Index of 20 -> (104 -100)/2->4/4->1 
     Index of 30 -> (108 -100)/2->8/4->2 
     Index of 40 -> (112 -100)/2->12/4->3 
     Index of 50 -> (116 -100)/2->16/4->4 
-------------------------------------------------------------------------------
     arr[0]->10 but why-> 
     
                         here-> arr->is base address
                                [ -> Lower bound
                                ] -> Upper bound
                                0-> index
-----------------------------------------------------------------------------
                              | 
                              |  Address->base address + index*sizof(element)
                            ------------------------------------------------------------------     

       Address of a[0]->100+0*4->100      
       Address of a[1]->100+1*4->104    
       Address of a[2]->100+2*4->108    
       Address of a[3]->100+3*4->112    
       
                            
*/


//1.to create a array using array literal's type;

// let arr=[10,209,333,5556]
// console.log(arr.length)
// console.log(arr)

//2. to create a array using array constructon

//////////////NOTE---------------????????

// let a=Array(10)//Single value can create 10 empty item in array
// console.log(a.length)//length is 10
// console.log(a)
//---------------------------------------------------------------------
// let b=Array(10,203,3333,44,53,true)//more than one item is create normal array
// console.log(b)
// console.log(b.length)

// 3. create a array using empty array 

// let a = []
// a[0] = 12
// a[1] = 122
// a[2] = 50
// console.log(a)
// //or using push to add multiple item in arrray

// a.push(10,40,50,"vishal",true,false,47.554)

// console.log(a)

//4. create a array using empty array constructor

// let a=Array()
// a[0]=1
// a[1]=2
// a[2]=3
// a[3]=4
// console.log(a)
// a.push(10,304,44,2)
// console.log(a)
//--------------------------------------------------------------------------------------------
// Tricky Question

// let arr=[10,20,30];
// arr[100]=2000// because array length is ( last index + 1 )

// console.log(arr.length)
// console.log(arr)
//-----------------------------------------------------------------------------------------------

//1.Accessing array item from for loop

// let a=[10,20,30,40,50];
// for(let i=0;i<a.length;i++)
// {
//     a[i]

// }

// console.log(a);

//2.access array item using while loop

// let a=[10,20,30,40,50,true];
// let i=0;
// while(i<a.length)
// {
//     a[i]
//    i++
// }

// console.log(a);

//3.Access array item using do while loop

// let a = [10, 20, 30, 40, 50, true, false];
// let i = 0;
// do {
//     a[i]
//     i++
// }while (i < a.length)

// console.log(a);

//4.accessing array element through for in loop

// let a=[10,20,30,40,50,60,80]
// for(let i in a)
// {
//      console.log(i)//print index
//      console.log(a[i])
// }

//5.accessing array element through for of loop
let a=[10,20,30,40,50,60,80]
for(let i of a)
{
     console.log(i)//print value
   
}
// How to add and remove item in array
//1.push()->to add multiple item in array at last index
//2.pop()->to delete item in array at last index 

//example..

// let arr=["vishal","kushal","ajay"]
// console.log(arr)
// arr.push("Raghav")
// console.log(arr)
// arr.push("ajay","dipu","singh")
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.pop()
// console.log(arr)


//3.shift()-> it remove 1st element in array;

//4.unshift()-> it add multiple item at 1st index

// let a=[10,30,490,34,2,4]
// a.shift()
// console.log(a)
// a.unshift("Hello","hello2")
// console.log(a)


//5. splice(a,b)-> to remove multiple item in array at specific index

// let arr=[20,40,30,80,50]
// arr.splice(1,2)
// console.log(arr)