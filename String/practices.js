//string->it is collection of caharacter or sequaence or array;
//it is imutable and it not support updation like insertion deletiom;
//string index is always start from 0

let str="JavaScript is High Level Progaraming Langauge"
// console.log(str)
// for(let i=0;i<str.length;i++)
// {
//     console.log(str[i])
// }
// let i=0;
// while(i<str.length)
// {
//     console.log(`${str[i]}`)
//     i++
//}

// for(let i in str)
// {
//     console.log(`${i}:${str[i]} `)
// }
// for(let i of str)
// {
//     console.log(`${i} `)
// }

//charAt()-> it give character at specific index

// console.log(str.charAt(0))
// console.log(str.charAt(1))
// console.log(str.charAt(2))

// //this is simple way to find character at specific index
// console.log(str[3])
// console.log(str[4])
// console.log(str[5])

//charCodeAt()-> it return unicode of first character you not provide any args(index);

// console.log(str.charCodeAt())
// console.log(str.charCodeAt(0))
// console.log(str.charCodeAt(5))
// console.log(str.charCodeAt(10))
// console.log(str.charCodeAt(13))

// for(let i in str)
// {
//     console.log(str.charCodeAt(i))
// }

//fromCharCode()-> it return unicode of a number 
// console.log(String.fromCharCode(97))
// console.log(String.fromCharCode(64))
// console.log(String.fromCharCode(0))
// console.log(String.fromCharCode(200))

let a=[64,65,66,77,88,99,69,66,72,73,74,11,12,13,14,15,16,17,18,19,20]

// for(let i in a)
// {
//     console.log(String.fromCharCode(a[i]))
// }
// for(let i of a)
// {
//     console.log(String.fromCharCode(i))
// }

//concat()-> to concat to string

// console.log(str.concat(a))

//starWith()-> your string start with
//endWith()-> your string end with

// let string=prompt("enter string")

// if(string.startsWith("www."))
// {
//     console.log(`domain`,string)
// }

// else if(string.endsWith(".com"))
// {
//     console.log(`email`,string)
// }
// else{
//     console.log("normal string",string)
// }

//substr()->it give the substring in the string from position to number of character

// console.log(str.substr(0,10))
// console.log(str.substr(5,10))
// console.log(str.substr(10))
// console.log(str.substr(-10))
// console.log(str.substr(-1))
// console.log(str.substr(-15))

//substring()-> it give the substring in the string from position to position;

// console.log(str.substring(0,10))
// console.log(str.substring(5,10))
// console.log(str.substring(10))
// console.log(str.substring(10,15))

//indexof()->it give the first index of  a string

// console.log(str.indexOf("i"))

//lastIndexOf()->it give the last index of a string

// console.log(str.lastIndexOf("i"))

//search()->it give the first index of a string it same work as a indexof()

// console.log(str.search("i"))

//includes()-> if substring is exist or not in string return true false

// console.log(str.includes("JavaScript"))
// console.log(str.includes("e"))
// console.log(str.includes("p"))
// console.log(str.includes("A"))

//replace()-> it rplece substring in string at once but it not change origanal string

// console.log(str.replace("","/"))
// console.log(str.replace("a","/"))
// console.log(str.replace("i","/"))

//replaceAll()-> it return substring in string at every time  but it not change origanal string;


// console.log(str.replaceAll("","/"))
// console.log(str.replaceAll("a","/"))
// console.log(str.replaceAll("i","/"))

//trim()-> it remove all white space in the string of both side

// let b="                     Ducat India    "
// console.log(b.length)
// let c=b.trim()
// console.log(c.length)
//trimStart()-> it remove all white space in the left;

// let b="                     Ducat India           "
// console.log(b.length)
// let c=b.trimStart()
// console.log(c.length)

//trimEnd()-> it remove all white in the right;

// let b="                     Ducat India           "
// console.log(b.length)
// let c=b.trimEnd()
// console.log(c.length)

//toLowerCase() or toLocaleLowerCase()-> to convert string into lowrer case;

// console.log(str.toLowerCase())
// console.log(str.toLocaleLowerCase())

//toUpperCase() or toLocaleLowerCase()-> to convert string in upper case;

// console.log(str.toUpperCase())
// console.log(str.toLocaleUpperCase())

//slice()->to copy the portion of substring in string to specific index

// console.log(str.slice(3,5))
// console.log(str.slice(5,10))
// console.log(str.slice(2,19))

//split()-> it convert string into array;

console.log(str.split())
console.log(str.split(""))
console.log(str.split(" "))
