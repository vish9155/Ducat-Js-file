
// for(let n=1;n<=100;n++)
// {
//     let d=n;
//     let flag=0//true
// for(let i=2;i<d;i++)
//     {
//         if(d%i==0)
//         {
//             flag=1//false
//             break
//         }
//     }    
// if(flag==0)
// {
//     console.log(n)
// }
// }
//...........................................................

// for(let n=1;n<=10000;n++)
// {
//     let sum=0;
//     for(let i=1;i<=n/2;i++)
//     {
//         if(n%i==0)
//         {
//             sum+=i;
//         }
//     }
//     if(sum==n)
//     {
//         console.log(n)
//     }
// }

//...........................................................


// for(let i=1;i<=10000;i++)
// {
//     let n=i;
//     let digit=0;
//     while(n>0)
//     {
//         digit++;
//         n=parseInt(n/10)
//     }
//     n=i;
//     let r;
//     let s=0;
//     while(n>0)
//     {
//         r=n%10;
//         s=s+r**digit;
//         n=parseInt(n/10)
//     }
//     if(s==i)
//     {
//         console.log(i)
//     }
// }

//...............................................................................................

// for(let i=1;i<10000;i++)
// {
//     let n=i;
//     let r;
//     let s=0;
//     let rev=0;
//     while(n>0)
//     {
//      r=n%10;
//      s=s*10+r;
//      n=parseInt(n/10)
//     }
//     if(s==i)
//     {
//         console.log(i)
//     }
// }
//----------------------------------------------------------------------------
// let a = 6;
// let b = 15;
// let hcf = 1
// let min = a < b ? a : b
// for (let i = 1; i <= min; i++) {
//     if (a % i == 0 && b % i == 0) {
//         hcf = i;
//     }
// }
// let lcm = a * b / hcf;
// console.log(lcm)
// console.log(hcf)

//------------------------------------------------------------------------------

// for(let i=1;i<=20;i++)
// {
//     for(let j=1;j<=10;j++)
//     {
//         console.log(`${i}*${j}=${i*j}\n`)
//     }
    
// }


//----------------------------------------------------------------------------------------

//neone number -> a number there sum of didgit of square equal to number 
// let sum=0
// let n=9;//1 9
//  let r;
//  let sq=n*n
//  while(sq>0)
//  {  
//     r=sq%10//81%10=1
//     sum=sum+r;
//     sq=parseInt(sq/10)
//  }
// console.log(sum)

//  if(sum==n)
//  {
//     console.log("number is neon number")
//  } 
//  else{
//     console.log("not neone number")
//  }
//------------------------------------------------------------------------------

//magical number-> a number there sum of digits and reverse of sum then multiply and equal to number;

// let num=148;
// let n=num;
// let sum=0;
// while(n>0)
// {
//     let r=n%10;
//     sum=sum+r;
//     n=parseInt(n/10)
// }
// let rev=0;
// n=sum;
// while(n>0)
// {
//     let r=n%10;
//     rev=rev*10+r;
//     n=parseInt(n/10)
// }

// if(sum*rev===num)
// {
//     console.log("number is magical");
// }
// else
// {
//     console.log("not a magical number");
// }


