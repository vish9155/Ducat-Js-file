//String->A String is a collection of character or sequence or array;
//-------> String index is always start from 0
//------> it is imutable we can't perfome any operation like updation
//ex----"vishal","kushal"

//string constant -> it can't we change
//-------how to write string type--------

// let a='vishal kumar'
// let b="vishal kumar"
// let c=`
// vishal
// kumar
// yadav
// `

// console.log(a,typeof(a))
// console.log(b,typeof(b))
// console.log(c,typeof(c))

// for(let i=0;i<a.length;i++)
// {
//     console.log(`${i}:${a[i]}`)
// }

// let i=0
// while(i<a.length)
// {
//  console.log(`${i}:${a[i]}`)
//  i++
// }


// let i=0
// do
// {
//  console.log(`${i}:${a[i]}`)
//  i++
// }while(i<a.length)


// for(i in a)
// {
//     console.log(`${i}:${a[i]}`)
// }

// for(i of a)
// {
//     console.log(`${i}`)
// }

//string methods

//1.CharAt-> it can return the character of any specific index

// console.log(a.charAt(6))

// for(i in a)
// {
//     console.log(`${i} : ${a[i].charAt()}`)
// }

//2.charCodeAt-> it return the unicode of a character 

// console.log(a.charCodeAt("v"))

// for(i in a)
// {
//     console.log(`${a[i]} = ${a[i].charCodeAt()}`)
// }

//3.fromCharCode()-> it return the unicode of number

// console.log(String.fromCharCode(56))
// let b=[1,2,3,4,5]

// for( i in b)
// {
     
//     console.log(String.fromCharCode(i))
   
// }

//4.IndexOf()-> it return the index of substring in string

// console.log(a.indexOf("vishal kumar"))

// //5.LastIndexOf()-> it return the index of substring in string

// console.log(a.lastIndexOf("vishal kumar"))

//6.search()-> it same as a indexof()->it also return substring in string

// console.log(a.search("vishal kumar"))

//7.includes()-> if substring is exist in a string or not

//  console.log(a.includes("vish"))

//copy string into another string

// let b=a
// console.log(`orignal string:${a}`)
// console.log(`copied string:${b}`)


//8.concat-> to conacat one and more than one string in the string;

// let b=" kushal kumar student of Mba 1st semester"
// let c=" shalini kumari student of bsc finalist";

// let e=a.concat(b,c)

// console.log(e)

//9.startwith()-> check that a string is start with specific substring or not;
//10.Endwith()-> check that a string is end with specific substring or not;

// let str=prompt("enter a string")

// if(str.startsWith("www."))
// {
//     document.writeln(`this is a domain  : ${str}`)
// }
// else if(str.endsWith(".com"))
// {
//     document.writeln(`this is a email address  : ${str}`)
// }
// else{
//     document.writeln(`this is a normal string : ${str}`)
// }


//11.toUpperCase() or toLocalUpperCase

// console.log(a.toUpperCase())
// console.log(a.toLocalUpperCase())


//12.toLowerCase() or toLocalLowerCase

// console.log(a.toLowerCase())
// console.log(a.toLocalLowerCase())

//12.substr()-> it is return the substring from position to number of character;
//13.substring()-> it return the substring from position to position
//14.slice()-> it return the copy of substing in string;

// var a="JavaScript is High level langauge"

// console.log(a.substr(10,10))// return 10th index to 10 character
// console.log(a.substring(10,15))//return 10th index to 14th index character
// console.log(a.slice(10,15))//return 10th index to 14th index character
// console.log(a.slice(15))//return all character after 15th elment
// console.log(a.slice(-1))//return last 1 caharacter
// console.log(a.slice(-2))//return last 2 caharacter
// console.log(a.slice(-15))//return last 15 caharacter


//note-> negative indexing se last element print hote hai


//15.replace()-> to replace one substring to other substing in one time only
//16.replaceAll()->to replace one substing to othr substring every time

//NOTE-> we can't change the orignal string

// var a="JavaScript is High level langauge"

// console.log(a.replace(" ","/"))
// console.log(a.replace("JavaScript","/"))
// console.log(a) //it can't replace javaScript to / in orignal string

// console.log(a.replaceAll(" ","/"))


//17.trim()-> it remove all white space from both side
//18.trimStart()-> it remove all white space from left side;
//19.trimRight()-> it remove all white space from right side;

// let a="        Education Noida   "

// let b=a.trim()
// let c=a.trimStart()
// let d=a.trimEnd()
// console.log(a.length)
// console.log(b.length)
// console.log(c.length)
// console.log(d.length)

//20.localCompare()-> to compare two srtring

// var a="vishal"
// var b="vivek"

// console.log(a.localeCompare(b))
// console.log(a.localeCompare(a))
// console.log(b.localeCompare(a))

//21.split()-> it covert sting into array

let a="vishal kumar"
console.log(a.split("").reverse().join(""))
// console.log(a.split()) //it return array in line
// console.log(a.split(""))//it return array in letter
// console.log(a.split(" "))//it return array in word
