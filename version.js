// Rest operator-> it allow to function to accept  indefinit number of arguments as array

// function abc(a, b, c, ...x) {
//     console.log(`${a}${b}${c}
//         ${x}`)
// }

// abc(10, 20, 30, 40)
// abc(10, 20, 30, 40, 50, 60)
// abc(10, 20, 30, 40, 50, 60, 70, 80)

// function abc(a,b,c,d)
// {
//     console.log(a,b,c,d)
// }
// let arr=[10,20,30,40]

// abc(...arr)

// shallow copy-> noraml array copy

// let arr=[10,30,40,50]
// let b=arr;
// console.log(b)

// deep copy-> using spread operator;

// let arr=[10,30,40,50]
// let b=[...arr];
// b[1]=400;
// console.log(b)

//generators:  it is a process that can be paused resumed and yield multiple values

// function*test()
// {
//     console.log('hello world1')
//     yield 1
//     console.log('hello world2')
//     yield 2
//     console.log('hello world3')
//     yield 3
//     console.log('hello world4')
//     yield 4
// }
//     for(let i of test())
//     {
//         console.log(i)
//     }

// var a = "ducat education"
// console.log(a.replace("u","/"))
// console.log(a.replaceAll("u","/"))
// console.log(a.split("").reverse().join())
// console.log(a.charAt(2))
// console.log(a.charCodeAt(3))
// console.log(String.fromCharCode(65))
// console.log(a.substr(3,6))
// console.log(a.substring(3,5))
// console.log(a.padStart(50,"/"))
// console.log(a.padEnd(50,"/"))

// async function* test() {
//     setTimeout(() => {
//         console.log("hello world1")

//     }, 2000)
//     yield 1
//     setTimeout(() => {
//         console.log("hello world2")

//     }, 4000)
//     yield 2
//     setTimeout(() => {
//         console.log("hello world3")

//     }, 6000)
//     yield 3
//     setTimeout(() => {
//         console.log("hello world4")

//     }, 8000)
//     yield 4
// }
// async function sample() {

//     for await (let i of test()) {
//         console.log(i)
//     }

// }
// sample()

// async function getdata() {

//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("hello India")
//         },3000)
//         res("success")
//         rej("reject")
//     })

// }

// // console.log(getdata())
// getdata()
// .then((values)=>{console.log(values)})
// .catch((error)=>{console.log(error)})
// .finally((val)=>console.log("heloo"))

//object rest properties

// var emp={
//     id:101,
//     name:"vishal",
//     city:"patna",
//     state:"bihar",
//     dsg:'trainner'
// }

// let {id,name,...x}=emp

//     console.log(name,id,x)

// array flat:

// let arr=[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[1,2,3,5]],[[293,4,5,6]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// console.log(arr)
// // console.log(arr.flat(3))
// // console.log(arr.flat(3).map((item)=>item*5))
// console.log(arr.flat(Infinity))
// console.log(arr.flat(Infinity).map(x=>x*2))

// flat map->

//var a=[10,20,30,40,50];

// console.log(a.map((x)=>[x*2]))
// console.log(a.flatMap(x=>[[[[[[[[[[[[[[[[[[x*2]]]]]]]]]]]]]]]]]]))

// object.fromEnteries()

// let data=[
//     ['id',101],
//     ['name','vishal'],
//     ['salary',20000],
//     ['dsg','trainner'],
//     ['city','hajipur']
// ]

// console.log(data)
// console.log(Object.fromEntries(data))


// let data= new Map([
//     ['id',101],
//     ['name','vishal'],
//     ['salary',20000],
//     ['dsg','trainner'],
//     ['city','hajipur']
// ])
// console.log(data)
// console.log(data.set('age',20))
// console.log(data.has('age'))
// console.log(data.get('age'))
// console.log(data.size)
// console.log(data.values())
// console.log(data.keys())
// console.log(data.entries())
// // data.delete('age')
// // console.log(data)
// // data.clear()
// // console.log(data)
// data.forEach((x,y)=>{
//     console.log(x,y)
// })

// let arr=[10,30,40,10,1,2,3,1,2,3]
// console.log(arr)

// let set=new Set(arr)
// console.log(set)
// console.log(set.size)

// nullish coalecing;-> this operator execute only second statement if only first statement is undefined or null else only first statement are execute;

// syntax 
// statement1??statement2

// let a = {
//     id: 101,
//     name: 'vishal'
// }

// console.log(`
//     name : ${a.name ?? 'N/A'}
//     id   : ${a.id ?? 'N/A'}
//     city : ${a.city ?? 'N/A'}
//     state : ${a.state ?? 'N/A'}
//     pin : ${a.address?.pin ?? 'N/A'}
//     `)


// Promise.allSetlled([])

// function abc()
// {
// return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("hello")
//     },2000)
//     res("success")
// })
// }

// function xyz()
// {
// return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("hello2")
//     },4000)
//     res("success")
// })
// }

// function mnp()
// {
// return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("hello3")
//     },6000)
//     res("success")
// })
// }

// function dmp()
// {
// return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("hello4")
//     },8000)
//     res("success")
//     rej("reject")
// })
// }

// Promise.allSettled([abc(),xyz(),mnp(),dmp()])
// .then((val)=>{console.log(val)})

// Promise.any([])


// function abc()
// {
// return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("hello")
//     },2000)
//     res("success")
// })
// }

// function xyz()
// {
// return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("hello2")
//     },4000)
//     res("success")
// })
// }

// function mnp()
// {
// return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("hello3")
//     },6000)
//     res("success")
// })
// }

// function dmp()
// {
// return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("hello4")
//     },8000)
//     res("success")
//     rej("reject")
// })
// }

// Promise.any([abc(),xyz(),mnp(),dmp()])
// .then((val)=>{console.log(val)})


// Object.hasOwn()-> this properite of object are used to check which property are available ite give true or false;

// let obj={
//     name:"vishk",
//     id:"101"
// }


//  console.log( Object.hasOwn(obj,"city"))
//   console.log( Object.hasOwn(obj,"id"))

// object.groupby(o,()=>)
// map.groupby(o,()=>)


let data=[
    {
        name:"vishal"
        ,
        id:"101"
        ,
        city:"patna"
    },
     {
        name:"vishal",
        id:"101",
        city:"danapur"
    },
     {
        name:"vishal"
        ,
        id:"101"
        ,
        city:"darbhanga"
    },
     {
        name:"vishal"
        ,
        id:"101"
        ,
        city:"hajipur"
    },
     {
        name:"vishal"
        ,
        id:"101"
        ,
        city:"hajipur"
    }
]

console.log(Object.groupBy(data,(item)=>item.city))
console.log(Map.groupBy(data,(item)=>item.city))


// let data= {
//         name:"vishal"
//         ,
//         id:"101"
//         ,
//         city:"hajipur"
//     }
// console.log(data)
// var a={}
// console.log(Object.setPrototypeOf(a,data))
// console.log(a.name)
// console.log(Object.getPrototypeOf(a))

