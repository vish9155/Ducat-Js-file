// // // currying-> it is a technique of evaluating function with multiple arguments in sequence of function with single arguments; it take all argument at time ; it take first args and return function,it take second args and return function 

// // // function fun(num1) {
// // //     return function (num2) {
// // //         return function (num3) {
// // //             return function (num4) {
// // //                 return function (num5) {
// // //                     return num1 + num2 + num3 + num4 + num5
// // //                 }
// // //             }
// // //         }
// // //     }
// // // }

// // // console.log(fun(100)(200)(300)(400)(500))

// // // let sum = (num1) => (num2) => (num3) => (num4) => (num5) => num1 + num2 + num3 + num4 + num5;

// // // console.log(sum(100)(200)(300)(500)(400))

// // // // callback function()-> A function can pass as a argument in other function is callled callback;


// // // // function abc(fun)
// // // // {
// // // //     console.log(`hello  vishal abc `)
// // // //     fun()
// // // //     console.log(`end abc`);

// // // // }

// // // // function sample()
// // // // {
// // // //     console.log(`hello samople`)
// // // // }

// // // // abc(sample)



// // // // function abc(a,fun)
// // // // {
// // // //     console.log(`hello  vishal abc `)

// // // // setTimeout(() => {

// // // //     fun(a)

// // // // }, 2000);



// // // // }

// // // // abc(1,(val)=>{console.log(val)})

// // // function abc(x, y, fun) {

// // //     console.log("hello")


// // //     setTimeout(() => {
// // //         fun(x, y)
// // //     }, 2000)

// // // }

// // // function mnc(x, y, fun) {

// // //     console.log("hello")


// // //     setTimeout(() => {
// // //         fun(x, y)
// // //     }, 2000)

// // // }

// // // function mnp(x, y, fun) {

// // //     console.log("hello")


// // //     setTimeout(() => {
// // //         fun(x, y)
// // //     }, 2000)

// // // }

// // // abc(10, 20, (val, val2) => { console.log(val + val2), mnc(10, 20, (val3, val4) => { console.log(val3 - val4), mnp(10, 10, (val5, val6) => { console.log(val5 * val6) }) }) })


// // let a = [10, 2, 5, 16, 20, 25, 30, 35, 55, 44, 66, 99, 100, 1, 2, 3, 4, 5, 620, 50, 44, 88];

// // // function check(item)
// // // {
// // //     // if(item%5===0)
// // //     // {               aise mai value dega map function mai
// // //     //     return item
// // //     // }
// // //     return item%5===0
// // // }

// // // console.log(a.find(check));
// // // console.log(a.findLast(check))
// // // console.log(a.findIndex(check));
// // // console.log(a.findLastIndex(check));
// // // console.log(a.map(check))
// // // console.log(a.filter(check));

// // function check(item) {

// //     let flag = false
// //     for (let i = 2; i < item; i++) {
// //         if (item % i === 0) {
// //             flag = true
// //             break;
// //         }
// //     }

// //     return flag === false && item >= 2 ? true : false

// // }

// // function findmy(arr, fun) {
// //     for (let i = 0; i < arr.length; i++) {
// //         if (fun(arr[i])) {
// //             return arr[i]
// //         }
// //     }
// // }


// // function findlastmy(arr, fun) {
// //     for (let i = arr.length - 1; i > 0; i--) {
// //         if (fun(arr[i])) {
// //             return arr[i]
// //         }
// //     }
// // }


// // function findindexmy(arr, fun) {
// //     for (let i = 0; i < arr.length; i++) {
// //         if (fun(arr[i])) {
// //             return i
// //         }

// //     }
// // }


// // function findlastindexmy(arr, fun) {
// //     for (let i = arr.length - 1; i > 0; i--) {
// //         if (fun(arr[i])) {
// //             return i
// //         }
// //     }
// // }


// // function mymap(arr, fun) {
// //     let output = []

// //     for (let i = 0; i < arr.length; i++) {
// //         if (fun([i])) {
// //             output.push(i)
// //         }
// //     }
// //     return output
// // }


// // function firltermy(arr, fun) {


// //     for (let i = 0; i < arr.length; i++) {
// //         if (fun(arr[i] != arr[i])) {
// //             return arr[i]
// //         }
// //     }

// // }


// // console.log(findmy(a, check))
// // console.log(findlastmy(a, check))
// // console.log(findindexmy(a, check))
// // console.log(findlastindexmy(a, check))
// // console.log(mymap(a, check))
// // console.log(firltermy(a, check))

// // //console.log(a.find(check));
// // // console.log(a.findLast(check))
// // // console.log(a.findIndex(check));
// // // console.log(a.findLastIndex(check));
// // // console.log(a.map(check))
// // // console.log(a.filter(check));


// // lexicall scoping-> lexicall scoping means the inner function can be access the variable of outer function and global scope,outer function can't access the inner function variable it can access only global ;

// // clouser function -> it is a combination of function or lexically scoping enviroment when function is declared and the clouser allow inner function can be retain the variable of outer function event after the outer function is exexuted;


// // let a=10
// // function abc()
// // {
// //     let b=20;

// //     function xyz()
// //     {
// //         let c=30;

// //         console.log(a,b,c)
// //     }
// //     xyz()
// //     console.log(a,b)
// // }

// // abc()
// //    console.log(a)

// let a=10
// function abc()
// {
//     let b=20;

//     function xyz()
//     {
//         let c=30;

//         console.log(a,b,c)
//     }
//     console.log(a,b)
//      return xyz
// }



// let c=abc()
// c()
//    console.log(a)


//Ajax-> it is asynchronous js and xml.it is combination of xmlHttpRequest and js dom;

// XMLHttpRequest->it is object which help to communicate the website to transfer the data;

// how to ajax work->

// event occur like button click body load from submit etc;

// new XMLHttpRequest-> it is create a new object;
// abort()   -> It  is cancell the current request;
// open()    -> It is generate the request; parameter like 1.method 2.url 3.async
// send()    -> it send the request to the server and use get method  by default;
// Response Text: 1.xml data 2 json data 


function getdata()
{
    let img=document.querySelector("img");
    let title=document.querySelector("#title")
    let desc=document.querySelector("#desc")
   
    let req=new XMLHttpRequest()
    req.open("get","https://dummyjson.com/products");
    req.send();
    req.addEventListener("load",()=>{

        let data=JSON.parse(req.responseText);
        console.log(data.products)

        data.productsx.map((item)=>{
            console.log(item)

        img.src=`${item.thumbnail}`
        title.innerHTML=`${item.title}`;
        desc.innerHTML=`${item.description}`


        })


    })
    
    
}

