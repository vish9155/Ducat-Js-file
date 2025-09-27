/*OOOPs-> it is stand for a object oriented programing structure. it is computer scieence term which help us to achive a programing approch like------
1.Data Abstraction-> Hinding data,which mean's we can hide data using access accesifier like public private or protected but js does not support;

2.Encapsulation-> Binding or Wraping the data with the function

3.Polymerphism-> many entity in single form which means different task can be perform single metthod;

i.Mthod overloading-> the more than one method having a same name but different parameter or data types 
   can perform multple task is called method overloading.But js does't support this concept;

ii.method overrriding->the parent class and child class member have same name the child class override the parent class member js does not support this concept;

iii.operator overloading-> the user can define the definition of operator js does not support this concept

iv.Contructer-> it is a special member function of a class. it is same name as a  class name but in js we have use constructor keyword to define the constructor.it is automatically invoked when the object is created.We have use user defined contructor in js

v. js does not support destructor;

4.Inheritance-> it is a process to reuse the parent class in a child class and the child class can inherit all property of a parent class;

 */

//Class without Contructor;

// class add{
//     data(a,b)
//     {
//         this.a=a;
//         this.b=b;
//         this.sum=a+b;
//     }
//     show()
//     {
//         console.log(`${this.a}+${this.b}=${this.sum}`)
//     }
// }

// let obj=new add()

// obj.data(20,50);
// obj.show()


// class magical{
//     data(num){
//        let n=num;
//        let sum=0;
//         while(n>0)
//         {
//             let r=n%10;
//             sum=sum+r;
//             n=parseInt(n/10)
//         }
//         n=sum
//         let rev=0
//         while(n>0)
//         {
//             let r=n%10;
//             rev=rev*10+r;
//             n=parseInt(n/10)
//         }

//         if(sum*rev==num)
//         {
//             console.log(`number is magical:${num}`)
//         }
//         else{
//             console.log(`number is not magical:${num}`)
//         }
//     }
// }

// let obj=new magical();
// obj.data(1458)

// class neon{
//     data(n)
//     {
       
//         let square=n*n
//         let s=0;
//         // console.log(square)
//         while(square>0)
//         {
//             let r=square%10;
//             s=s+r;
//             square=parseInt(square/10)
            
//         }
//         if(s===n)
//         {
//             console.log(`number is neon:${n}==${s}`)
//         }
//         else{
//             console.log(`number is not neon:${n}==${s}`)
//         }
       
//     }
// }

// let obj=new neon()
// obj.data(9)

// class perfect{
//     data(n)
//     {
//         let sum=0;
//         for(let i=1;i<=n/2;i++)
//         {
//             if(n%i==0)
//             {
//                 sum+=i
//             }
//         }
//         if(n===sum)
//         {
//             console.log(`number is perfect :${n}`)
//         }
//         else{
//              console.log(`number is not a perfect :${n}`)
//         }
//     }
// }

// var obj=new perfect()
// obj.data(7)

// class prime{
//     data(n)
//     {
//         let flag=false;
//         let sum=0;
//         for(let i=2;i<n;i++)
//         {
//             if(n%i==0)
//             {
//                 flag=true;
//                 break
//             }
//         }
//         if(flag===false)
//         {
//             console.log(`number is prime : ${n}`)
//         }
//         else{
//              console.log(`number is not a prime : ${n}`)
//         }
//     }
// }

// var b=new prime()
// b.data(3)

//Class with constructor-----------

// class test{
//     constructor(a,b)
//     {
//      this.a=a;
//      this.b=b
//      this.sum=a+b
//     };
//     display()
//     {
//         console.log(`${this.a}+${this.b}=${this.sum}`)
//     }

// }

// let n=new test(10,20);
// n.display()

// class sum{
//    constructor(a,b,sum)
//    {
//       this.a=a;
//       this.b=b;
//       this.sum=this.a+this.b
//       console.log(this.sum)
//    }
//    display()
//    {
//       console.log(this.a-this.b);
//    }
// }

// let obj=new sum(29,1)
// obj.display(  )

// js provide the feature of inhritance it is reuse the class .
  // the child class B can inherit all the  property of parent class A;
  // child class override the propert of parent class when the both method and member are same name;
  // to access override member or method through super keyword;
  // to declear the constructor they still run But they declare the constructor in child class use super constructor class;
  /*
  class Parent class{
  ------
  ------
  }
  class child extend parent class name{
  ------
  ------
  }
  */

//   class sum{
//    display(a,b)
//    {
//        this.a=a;
//        this.b=b;
//    }
//   }

//   class add extends sum{
//    display2()
//    {
//       this.display(90,20)
//       console.log(this.a+this.b);
      
//    }
//   }

//   let obj=new add()
//   obj.display2()

// class sum{
//     a=10;
//     b=20;
// }
// class add extends sum{
//    display()  {
//       console.log(this.a+this.b)
//    }
// }

// let obj=new add()
// obj.display()


// class sum{
//     a=10;
//     b=20;
// }
// class add extends sum{
 
//  display(a=90,b=44)
//  {
//     console.log(a+b);
//  }
  
// }

// let obj=new add()
// obj.display()

// class test {
//    constructor(a,b)
//    {
//       this.a=a;
//       this.b=b;
//    }
// }

// class add extends test{
//    display()
//    {
//       console.log(this.a+this.b)
//    }
// }

// let obj=new add(100,22)
// obj.display()


class test {
   data(a,b)
   {
      this.a=a;
      this.b=b;
   }
}
class add extends test{
   constructor()
   {

super()
this.data(20,44)
console.log(this.a+this.b)

   }
}

let obj=new add()
