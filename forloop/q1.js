// for(let i=1;i<=100;i++)
// {
//     console.log(`${i}`)
// }
//....................................................
// for(let i=1;i<=100;i++)
// {
//     if(i%2==0)
//     {
//         console.log(`${i}`)
//     }
// }
//..........................................................
// for(let i=1;i<=100;i++)
// {
//     if(i%2!=0)
//     {
//         console.log(`${i}`)
//     }
// }
//.........................................................
// for(let i=1;i<=10;i++)
// {
//     console.log(i*5)
// }
//............................................................
// let sum=0
// for(let i=1;i<=20;i++)
// {
// sum+=i;//0+1=1+2=3+4=7........210
// }
// console.log(sum)
//...........................................................
// let f=1;
// for(let i=1;i<=5;i++)
// {
//     f*=i;//1*1=1*2=2*3=6*4=24*5=120
// }
// console.log(f)
//.........................................................
// let square;
// for(let i=1;i<=10;i++)
// {
// console.log(`squae of ${i} is ${i*i}`)    
// console.log(Math.pow(i,2))
// }
//.......................................................
// for(let i=10;i>=1;i--)
// {
//     console.log(`${i}`)
// }
//.............................................................
// for(let i=1;i<=30;i++)
// {
//     if(i%3==0)
//     {
//         console.log(`All multiple of 1-30 is: ${i}`)
//     }
// }
//.................................................................
// let a=0
// let b=1;
// let c;
// for(let i=0;i<=10;i++)
// {
//     console.log(`${a}`);
//     c=a+b//c=0+1=1//1+1=2
//     a=b//a=1//1
//     b=c//1//2
// }

//.....................................................

// let sum=0;
// for(let i=0;i<=5;i++)
// {
//     sum+=i;
// }
// console.log(`${sum}`)

//.........................................................

// let sum_even=0;
// let even_count=0
// let odd_count=0
// let sum_odd=0;
// for(let i=0;i<=100;i++)
// {
//     if(i%2==0)
//     {
//         sum_even+=i;
//         even_count++;
//     }
//     else{
//         sum_odd+=i;
//         odd_count++;
//     }
// }
// console.log(`total even number of 1-100 is ${even_count} and there sum is: ${sum_even}`)
// console.log(`total odd number of 1-100 is ${odd_count} and there sum is: ${sum_odd}`)
//..........................................................................................................

//perfect->A number that factor sum is equal to number 
// let n=6;
// let sum=0;
// for(let i=1;i<=n/2;i++)
// {
//     if(n%i==0)
//     {
//         sum+=i;
//     }
  
// }
// if(sum==n)
//     {
//         console.log(`number is perfect`)
//     }
//     else{
//         console.log(`Not a perfect number`)
//     }

//prime number->A number can be divided 1 or itself;

// let n=17;
// let flag=0;//true

// for(let i=2;i<n;i++)
// {
//     if(n%i==0)
//     {
//         flag=1//false
//         break;
//     }
// }
// if(flag==0)
// {
//     console.log(`prime number`)
// }
// else{
//     console.log(`composite number`)
// }

