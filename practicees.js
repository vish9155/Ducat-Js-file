// 1.Array()-> it collection of hertoginious item in the contigious order,it is mutable,it store duplicate item;

const { stringify } = require("querystring");



// let arr = ['vishal', 'kushal', 'rama', 'arjun', 'ananad', 'krishna', 'karali'];
// console.log(arr)
// for(let i=0;i<arr.length;i++)
// {
//     console.log(`${i}:${arr[i]}`)
// }
// let a=0;
// while(a<arr.length)
// {
//     console.log(`${a}:${arr[a]}`)
//     a++
// }

// for(let i in arr)
// {
//     console.log(`${i}:${arr[i]}`)
// }


// for(let i of arr)
// {
//     console.log(`${i}`)
// }


// toString()-conver array into string with , sepreted
// join()->convert array into string with specific seprator;
//Concat()-> it concate two array;
//indexOf()-> it give 1st index ;
//lastIndexOf()-> it gove last index
//reverse()->it reverse the array;
//includes()-> if item is exist return true;
//enteries-> it generate the iterator of key value pair
//slice()->to copy the portion of array in position to specififc index
//pop()-> delete item at last;
//shift()-> delete item at first index;
//push*()-> add multipe item in last;
//unshift()-> add item at the beigning;
//splice(pos,pos)-> it take two args to delete itemen
//splice(pos,pos,pos)-> it take more than two args to add item to speciffic index
//find()-> to find 1st element in array;
//findlast()-> to find last element in array;
//forEach()-> it call callback function for each element return nothing
//map()-> it call one callback funtion for each element
//filter()-> it give the array containning result
//reduce()->it call callback function of all element and take two args like prev or current val and  give the accumullated result

let arr=['vishal','kushal','arjun','anand','arvind','ram','lakshaman','bharat','karn','vishal']
let b=['varun','arun']
let c=[1,2,3,4,5]
// console.log(arr.length)
// console.log(arr)
// console.log(arr.toString())
// console.log(arr.join())
// console.log(arr.join(""))
// console.log(arr.join(" "))
// console.log(arr.join(","))
// console.log(arr.indexOf('vishal'))
// console.log(arr.lastIndexOf('vishal'))
// console.log(arr.push(10,20,30))
// console.log(arr.pop());
// console.log(arr.shift())
// console.log(arr.unshift('vivek','bandana','sarwan','shantnu'))
// console.log(arr)
// console.log(arr.slice(2,9))
// console.log(arr.concat(b))
// console.log(arr.splice(1,3))
// console.log(arr.splice(3,0,20,40,'vivek'))
// console.log(arr.includes('vishal'))
// for(let i of arr.entries())
// {
//     console.log(i)
// }
// arr.reverse()

// arr.forEach((item,index)=>{
//     if(arr)
//     {
       
//          console.log(`${index}:${item}}`)
//     }
   
//     else{
//     console.log("error")
//     }

// })

// arr.filter((item,index)=>{
//     if(arr[0 ]&& arr[1])
//     {
//         console.log(`${index}:${item}`)
//     }
// })
// console.log(c.reduce((prev,curr)=>prev+curr))
// arr.map((item,index)=>{
//     if(item)
//     {
//         console.log(item)
//     }
// })
// arr.find((item)=>{
//     if(arr[0])
//     {
//         console.log(arr[0])
//     }
// })

// function check(item)
// {
//     return item?arr[0]:arr
// }

// console.log(arr.find(check))
// console.log(arr.findLast(check))
// console.log(arr.findIndex(check))
// console.log(arr.findLastIndex(check))
// console.log(arr.map(check))
// console.log(arr.forEach(check))


// console.log(arr)

// 2.object-> it store information on key value pairs, it is mutable it id is unique but value is duplicate

// let obj = {
//     name: 'vishal',
//     dsg: 'trainneer',
//     id: 101,
//     // salry: 300033,
//     set calulation(salry) {
//         this.salry=salry
//         this.ta = this.salry * 10 / 100
//         this.ma = this.salry * 12 / 100
//         this.da = this.salry * 14 / 100
//         this.ha = this.salry * 15 / 100
//         this.gross = this.salry +this.ta+this.ma+this.ha+this.da
//         this.tax = this.salry * 10 / 100
//         this.netsal =this.gross-this.tax
//     },
//    get employee(){
//       console.log(
//         `
//          name         :${this.name}
//          id           :${this.id}
//          salary       :${this.salry}
//          dsg          :${this.dsg}
//          ta           :${this.ta}
//          ma           :${this.ma}
//          ha           :${this.ha}
//          da           :${this.da}
//          gross        :${this.gross}
//          tax          :${this.tax}
//          netsalary    :${this.netsal}


//         `
//       )
//     },
//     display() {
//         this.a = 10
//         this.b = 20
//         this.sum = this.a + this.b
//     },
//     display2() {
//         console.log(`sum is : ${this.sum}`)
//     },
//     address: {
//         address1: {
//             city: 'patna',
//             pin: 844502,
//             residental: {
//                 vill: 'dayalpur'
//             }
//         }
//     }
// }

// let {name,id,dsg,}=obj
// console.log(obj)

// obj.display()
// obj.display2()
// obj.calulation=90000
// obj.employee
// console.log(`
//         ${name}
//         ${id}
//         ${dsg}
//         ${salry}
//     `)

// let employee = function(id,name,dsg,salary,city)
// {
//     this.id=id
//     this.name=name;
//     this.dsg=dsg
//     this.salary=salary
//     this.city=city
// }

// let obj1=new employee(101,'vishal','trainner',10000,'patna')
// let obj2=new employee(102,'kushal','trainner',20000,'delhi')
// console.log(obj1)
// console.log(obj2)

// let obj = {
//     name: 'vishal',
//     dsg: 'trainneer',
//     id: 101,
//     city: 'patna',
//     state: 'bihar'
// }
// let temp = {}

//  console.log(Object.keys(obj))
//  console.log(Object.values(obj))
//   console.log(Object.entries(obj))
//   console.log(temp)
// temp=Object.assign(obj,temp)
// console.log(temp)

// temp=Object.create(obj)
// console.log(temp.id)

// Object.freeze(obj)
//  console.log(Object.isFrozen(obj))
//  obj.pack='pant'
//  obj.id=203;
//  delete obj.city

//  console.log(obj)

// Object.seal(obj)
// console.log(Object.isSealed(obj))
// obj.pack = 'pant'
// obj.id = 203;
// obj.email="vishal@test.com"
// obj.pin=844502
// delete obj.city

// console.log(obj)

// console.log(Object.getOwnPropertyDescriptor(obj,"name"))

// let temp2={cmp:"vihal"}
// Object.setPrototypeOf(obj,temp2)
// console.log(obj.cmp)

// console.log(Object.getPrototypeOf(obj))


// for(let i in obj)
// {
//     console.log(`${i}:${obj[i]}`)
// }

// console.log(obj.address.address1.residental.vill)


// 3.string-> string is a collection of character or sequence or array;
// it is imutable it not update value

// let str="om durga shiva bhdra bhdrkali bhavani katyani chamunda karali vijyani jaya adhya mahalaksmi durge dudasknamkam"
// for (let i in str)
// {
//     console.log(i+":"+str[i])
// }

// for(let i of str)
// {
//     console.log(i)
// }

//charAt()-> it print caharcter of specific index;
//charcodeAt()-> it conver unicode of character through index;
//fromCharcodeAt-> it give unicode of character using string().;
//trim->
//trimright()
//trimleft()
//slice()
//substr()-> it give character pop to pos ;
//substring()-> it give character pops to specific  index
//split()-> it convert string into array()
// toLowecase()->
//TouPPercase()->
//replace()->
//replaceAll()->
//EndWith()->
//startWith()->


let str="vande vanchitlabhaya chandraadhaakiritimaheshwaram vrishaaroodham suldharam sailputreem yashswamineem";

// console.log(str)
// console.log(str.length)
// console.log(str.charAt(10))
// console.log(str.charCodeAt(10))
// for(let i in str)
// {
//     console.log(str.charCodeAt(i))
// }

// for(let i in str)
// {
// console.log(String.fromCharCode(i))
// }

console.log(String.fromCharCode(65))
// 4.Set()-> it is collection of unique item; it dont contain duplicate item;

// let item=[10,20,30,40,50,30,20,10,101,10,20,50,60,70,80,90,80,70,100]
// console.log(item)

// let s=new Set(item)
// console.log(s)

//Array.from(s)-> it covert the set into array

// let sa=Array.from(s)
// console.log(sa)
// let size=s.size;
// console.log(size)
// s.add(100)
// s.add()
// s.add(200)
// let size2=s.size
// console.log(s)
// console.log(size2)

// s.delete(100)
// s.delete(3000)
// s.delete()
// console.log(s)



// console.log(s.has(100),s.has(200),s.has())


// console.log(s.keys())

// console.log(s.values())

// console.log(s.entries())

// s.clear()
// console.log(s)

// s.forEach((i)=>{
//     let count=0
//     if(i)
//     {
//         count++
//     }
//     console.log(count)
// })

// 5.Map()-> map is collection of item int key value pairs;

// let m = new Map([['id', 101],['name', 'vishal']])
// console.log(m)

// m.set("salary",20000)
// console.log(m)


// console.log(m.size)

// console.log(m.has("id"))

// console.log(m.values())
// console.log(m.keys())
// console.log(m.entries())

// // m.delete("salary")
// // console.log(m)

// // m.clear()
// // console.log(m)


// // console.log(m.get("id"))

// // m.forEach((i,k)=>{
// //     if(i && k)
// //     {
// //         console.log(`${k}:${i}`)
// //     }
// // })


