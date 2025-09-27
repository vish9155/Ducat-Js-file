//Assignment of js

//Q1 to Q5 using for loop

//Q1.Sum of number in rage;

// function add(num)
// {
//     let sum=0;
//     for(let i=1;i<=num;i++)
//     {
//    sum+=i

//     }
//     return sum
// }

// console.log(`${add(5)}`)

//Q2.sum of even or odd number

// function even_odd(num) {
//     let sum_even = 0
//     let even_count = 0
//     let odd_count = 0
//     let sum_odd = 0
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 == 0) {

//             sum_even += i

//             even_count += 1
//         }
//         else {

//             sum_odd += i

//             odd_count += 1
//         }

//     }
//     //return [sum_even,even_count,odd_count,sum_odd]
//     console.log(`sum of the total even number:${sum_even}`)
//     console.log(`Count the total even number:${even_count}`)
//     console.log(`sum of the total odd number ${sum_odd}`)
//     console.log(`Count the total odd number ${odd_count}`)
// }

// //console.log(`${even_odd(10)}`)
// even_odd(100)

//Q3.factorial

// function fact(num)
// {
//     let f=1;
//     for(let i=1;i<=num;i++)
//     {
//         f*=i
//     }
//     return f
// }

// console.log(`factorial is : ${fact(5)}`)

//Q4.perfect or not

// function perfect(num) {
//     let sum = 0
//     for (let i = 1; i <= num / 2; i++) {
//        if(i%2==0)
//    {
//  sum+=i
//    }
//     }
//     //console.log(sum)
//     if (num ==sum) {
//         console.log(`number is perfect`)
//     }
//     else {
//         console.log(`not perfect number`)
//     }
// }

// perfect(2)

//Q5.Number is prime or not

// function prime(num)
// {
//  let flag=false;
//  for(let i=2;i<num;i++)
//     {
//         if(num%i==0)
//         {
//             flag=true
//             break;
//         }
//     }   

//     if(flag==false)
//     {
//         console.log("number is prime")
//     }
//     else{
//         console.log("not prime number")
//     }
// }

// prime(5)


//Q6 to Q12 using while loop

//Q6-> sum of even and odd digit;

// function even_odd(num) {
//     let sum_even = 0;
//     let sum_odd = 0

//     while (num > 0 && num<=100) {


//         if (num % 2 == 0) {

//             sum_even +=num

//         }
//         else {


//             sum_odd += num

//         }

//         num++
//     }
//     console.log("sum of even number"+sum_even);
//     console.log("sum of odd number"+sum_odd)

// }

// even_odd(1)

//Q7.count number of even or odd

// function even_odd(num) {
//     let even_count = 0;
//     let odd_count = 0

//     while (num > 0 && num <= 100) {


//         if (num % 2 == 0) {

//             even_count += 1

//         }
//         else {


//             odd_count += 1

//         }

//         num++
//     }
//     console.log("sum of even number:" + even_count);
//     console.log("sum of odd number:" + odd_count)

// }

// even_odd(1)

//Q8->check number is neon or not

// function neon(num)
// {
//     let square=num*num;
//     let square_sum=0;
//     while(square>0)
//     {
//     let r=square%10;
//     square_sum+=r;
//     square=parseInt(square/10)
//     }
//     if(num===square_sum)
//     {
//         console.log("number is neon")
//     }
//     else{
//         console.log("not a neon number")
//     }
// }
// neon(9)


//Q9-> check number is armstrong or not

// function armstrong(num)
// {
//     if(num<0)
//     {
//         console.log(`invalid input ${num}`)
//     }
//     else if(num>0 && num<10)
//     {
//         console.log(`number is armstrong ${num}`)
//     }
//     else if(num>9 && num<100)
//     { 
//         let n=num
//         let s=0
//         while(n>0)
//         {
//          let r=n%10;
//          s=s+r*r;
//          n=parseInt(n/10)
//         }

//         if(num==s)
//         {
//             console.log("number is armstrong")
//         }
//         else{
//             console.log("not armstrong")
//         }
//     }
//     else if(num>99 && num<1000)
//     { 
//         let n=num
//         let s=0
//         while(n>0)
//         {
//          let r=n%10;
//          s=s+r*r*r;
//          n=parseInt(n/10)
//         }

//         if(num==s)
//         {
//             console.log("number is armstrong")
//         }
//         else{
//             console.log("not armstrong")
//         }
//     }
// }

// armstrong(370)

//Q.10 check number is pallidrome or not

// function pallidrome()
// {
//     let num=123432;
//     let n=num
//     let rev=0;
//     while(n>0)
//     {
//         let r=n%10
//         rev=rev*10+r;//0+1=1*10+2=3
//         n=parseInt(n/10)
//     }
//     if(num===rev)
//     {
//         console.log(`number is pallidrome ${num}`)
//     }
//     else{
//         console.log(`not pallidrome ${num}`)
//     }
// }

// pallidrome()

//Q11.Number is magical or not

// function magical() {
//     let num = 81;
//     let n = num
//     let sum_digit = 0;
//     while (n > 0) {
//         let r = n % 10;
//         sum_digit += r;
//         n = parseInt(n / 10)
//     }
//     console.log(`sum of digit is ${sum_digit}`)
//  

//     let rev = 0;
//     while (sum_digit > 0) {
//         let r = sum_digit % 10;
//         rev = rev * 10 + r;
//         sum_digit = parseInt(sum_digit / 10)
//     }
//       
//     console.log(`reverse is ${rev}`)
//     if (rev * sum_digit === n) {
//         console.log(`${num} is magical number`)
//     }
//     else {
//         console.log(`not magical number`)
//     }
// }

// magical()

//Q12 to Q13 nested loop

//Q12 ->All perfect num

// function allperfect() {

//     for (let i = 1; i <=1000; i++) {
//         let s = 0
//         for (let j = 1; j <= i / 2; j++) {
//             if (i % j == 0) {
//                 s += j
//             }
//         }
//       //console.log(s)
//         if (i==s) {
//             console.log(i)
//         }

//     }
// }

// allperfect()

//Q13->all pallidrome
// function pallidrome()
// {
//     for(let i=1;i<=1000;i++)
//     {
//         let n=i;
//         let s=0;
//        while(n>0)
//        {
//         let r=n%10;
//         s=s*10+r
//         n=parseInt(n/10)
//        }
//        if(i==s)
//        {
//         console.log(`${i}`)
//        }
//     }
// }

// pallidrome()


//Q14 print all armstrong

// function armstrong()
// {
//     for(let num=1;num<=1000;num++)
//     {
//         let n=num;
//         let s=0;
//         let digit=0;

//         while(n>0)
//         {

//             digit+=1
//             n=parseInt(n/10)
//         }
//         n=num
//         while(n>0)
//         {
//             let r=n%10
//             s=s+r**digit;
//             n=parseInt(n/10)
//         }
//         if(num==s)
//         {
//             console.log(num)
//         }
//     }
// }
// armstrong()

//Q15 print all magical number

// function magical()
// {
// for(let n=1;n<=10000;n++)
// {
//     let i=n
//     let sum_digit=0;

//     while(i>0)
//     {
//         let r=i%10;
//         sum_digit+=r;
//         i=parseInt(i/10)
//     }
//     i=sum_digit
//     let rev=0;
//     while(i>0)
//     {
//          let r=i%10;
//          rev=rev*10+r;
//         i=parseInt(i/10)
//     }

//     if(rev*sum_digit==n)
//     {
//         console.log(n)
//     }
// }
// }

// magical()

//Q16->all prime number

function prime() {
    for (let n = 1; n <= 10; n++) {
        let flag = false;

        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = true
                break
            }

        }
        if (flag == false) {
            console.log(n)
        }
    }
}
prime()