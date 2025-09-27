// Array methods
//1.toString()->it convert the array into string as , seprated


// let a=[10,30,40,50,60,70,80];
// console.log(a)

//2.join()->to convert array into string and you can specify the seprator;
//   let a=[10,30,40,50,60,70,80];
// console.log(a.join())
// console.log(a.join(""))
// console.log(a.join(" "))
// console.log(a.join("|"))

//3.concat-> it concat one or more array and return a new array;

// let a=[10,30,40,50,60,70,80];
// let b=[true,false,true,false]
// let c=["vishal","kushal","yadav"]
// let d=a.concat(b,c)
// console.log(d)

//4.push()-> to add one and more then one element in the last of array and give updated length

// let a=[10,30,40,50,60,70,80];
// console.log(a)

// a.push(800);
// console.log(a)
// a.push(900);
// console.log(a)
// a.push(100,2000,3000,4000)
// console.log(a)


//5.pop()-> to delete the element in the last of array and return updated length of array


// let a=[10,30,40,50,60,70,80];
// console.log(a)
// console.log(`after delete a element ${a.pop()} updated array is :${a}`)
// console.log(`after delete a element ${a.pop()} updated array is :${a} `)
// console.log(`after delete a element ${a.pop()} updated array is : ${a}`)

//6.unshift()-> to add element at the begining of array and return the updated lenf=gth of array;

// let a=[10,30,40,50,60,70,80];
// console.log(a)
// a.unshift(100,200,300,400,500,600,700)
// console.log(a)
// a.unshift(800)
// console.log(a)

//7.shift()-> to delete the the array element at the begining

// let a=[10,30,40,50,60,70,80];
// console.log(a)
// a.shift();
// console.log(a)
// a.shift()
// console.log(a)

//8.splice()-> to add and delete the array elemet in specific position
// syntax---> arr.splice(start,delte item position, add the item )

// let a=[10,30,40,50,60,70,80,90,100,110,120,130];
// console.log(a)

// a.splice(2,5)
// console.log(a)
// a.splice(2,0,200,300,400,500,600)
// console.log(a)
// a.splice(1,3)
// console.log(a)

//9.icludes()-> it return true if item exist else return false

// let a=[10,30,40,50,60,70,80,90,100,,70,110,120,130,70];
// console.log(a)
// console.log(a.includes(70))
//console.log(a.includes(70))

//10.Indexof()-> it give the index of item else return -1

//11.lastindexof()-> it retirn last index of element else return -1

// let a=[10,30,40,50,60,70,80,90,100,110,120,130,70];
// console.log(a)
// console.log(a.indexOf(70))
// console.log(a.indexOf(111))
// console.log(a.lastIndexOf(70))
// console.log(a.lastIndexOf(111))
// console.log(a.includes(7))

//12.reverse()-> to reverse the array item 
// let a=[10,30,40,50,60,70,80,90,100,110,120,130,70];
// console.log(a)
// console.log(a.reverse())

//13.slice()-> it is return the copy of array position for specific index

// let a=[10,30,40,50,60,70,80,70,3290,100,110,120,130,70];
// console.log(a)
// console.log(a.slice(2,10))

//14.enteries()-> it generate the iterator which contains key(index) and value of item (generate key value pair)


// let a=[10,30,40,50,60,70,80,70,3290,100,110,120,130,70];
// console.log(a)

// for(let itr of a.entries())
// {
// console.log(itr)
// }


//---------------------------------------------------------------------------------------------------------------------//

//.................................HIGHER ORDER METHODS.................................................................

//1.Find()-> it return 1st item in the array. which is pass a test otherwise return undefined
//2.findlast()-> it return last item in the array.which is pass a test otherwise return undefined
//3.findIndex()-> it return the 1st index of item is exist in  array;
//4.findlastIndex()->it return the last index of item in array;
//5.filter()-> it return array of item;

// let a = [11, 20, 40, 565, 32, 445, 690.40, 90, 50, 77, 66, 444, 33, 40]
// console.log(a)

// function check(item) {

//     return item % 5 == 0
// }

// console.log(a.find(check), "\n")
// console.log(a.findLast(check), "\n")
// console.log(a.findIndex(check), "\n")
// console.log(a.findLastIndex(check), "\n")
// console.log(a.filter(check))

// console.log(a.map(check))

//forEach()-> it take call back  function for Each element ,that not return any thing;

// let a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// a.forEach((x) => {
//     // console.log(a) //it run ten times because it run each element
//     // console.log(a[0])//it print 1st element 10 time in array
//     console.log(x)//it print all element in array
// })

//reduce()-> it call the specific callback funtion for all element in array

// let a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// console.log(a.reduce((previous,curr)=>previous+curr))

//sort()->it sort the  array of character directly but not in number we can take a two argumnet in funtion then print 
//->ascending or decending order 

// let ch=["a","z","w","m","b","c","d"]
// console.log(ch)
// console.log(ch.sort())

// let num=[110,9992,33,455,77,1,3,4,2,7,5,6]

// console.log(num.sort((x,y)=>x-y))
// console.log(num.sort((x,y)=>y-x))

//Destructuring-> Unpacking the array element as variable

//syntax-> let []=var_name;
let employee=[1,"vishal kumar","FullStack Developer",19030,"vishal@test.com",915501322,"Hajipur","Bihar"]
let [id, name, dsg, salary, email, phone, city, state] = employee

console.log(`
    id        : ${id}
    Name      : ${name}
    dsg       : ${dsg}
    salary    : ${salary}
    email     : ${email}
    phone     : ${phone}
    city      : ${city}
    state     : ${state}

    `)

    function check(item)
    {
        return item=="vishal kumar"
    }

    console.log(employee.find(check))
     console.log(employee.findLast(check))
      console.log(employee.findIndex(check))
     console.log(employee.findLastIndex(check))
      console.log(employee.filter(check))
       console.log(employee.map(check))

       //map-> it call callback function one time for each element that return array of  containnig the result for all array element