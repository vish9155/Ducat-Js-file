// // // // let obj = {
// // // //     name: "vishal kumar",
// // // //     dsg: "trainner",

// // // //     id: 101,
// // // //    set getdata(salary) {
// // // //         this.salary=salary
// // // //         this.ta = this.salary * 10 / 100
// // // //         this.da = this.salary * 12/ 100
// // // //         this.hra = this.salary * 14 / 100
// // // //         this.ma = this.salary * 15 / 100
// // // //         this.gross = this.salary +this.ta+this.ma+this.da+this.hra;
// // // //         this.tax=this.salary*11/100;
// // // //         this.netsalary=this.gross-this.tax

// // // //     },
// // // //    get  display()
// // // //     {
// // // //         console.log(`

// // // //             name:         ${this.name}
// // // //             dsg:          ${this.dsg}
// // // //             id:           ${this.id}
// // // //             salary:       ${this.salary}
// // // //             ta:           ${this.ta}
// // // //             ma:           ${this.ma}
// // // //             hra:          ${this.hra}
// // // //             da:           ${this.da}
// // // //             tax:          ${this.tax}
// // // //             gross:        ${this.gross}
// // // //             netsalary     ${this.netsalary}

// // // //             `)
// // // //     }
// // // //     ,
// // // //     address: {
// // // //         address1: {
// // // //             city: "hajipur",
// // // //             state: "bihar",
// // // //             nearby: {
// // // //                 place: "kali mata mandir dhamauli",
// // // //                 landmark: "Vishal House war 07"
// // // //             }
// // // //         },
// // // //         address2: {
// // // //             pin: 844502,
// // // //             block: "hajipur"
// // // //         }
// // // //     }
// // // // }

// // // // // obj.getdata()
// // // // // obj.display()

// // // // obj.getdata=100000
// // // // obj.display

// // // // console.log(obj.address.address1.city)


// // // let obj = {
// // //     name: "vishal",
// // //     id: "101",
// // //     course: "bca",
// // //     dsg: "developer",
// // //     salary: "100000",
// // //     city: "hajipur",
// // //     state: "Bihar"
// // // }


// // // // let {name,id,course,dsg,salary,state,city}=obj;

// // // // console.log(`

// // // //     ${name}
// // // //     ${id}
// // // //     ${course}
// // // //     ${dsg}
// // // //     ${salary}
// // // //     ${state}
// // // //     ${city}

// // // //     `)


// // // // let obj=function(id,name,city,state,pin)
// // // // {
// // // // this.id=id
// // // // this.city=city
// // // // this.name=name
// // // // this.state=state;
// // // // this.pin=pin
// // // // }

// // // // let obj1=new obj(101,'vishal','patna','bihar',844502)
// // // // // console.log(obj1)

// // // // console.log(Object.keys(obj))
// // // // console.log(Object.values(obj))
// // // // console.log(Object.entries(obj));
// // // // // let obj2={};
// // // // // Object.assign(obj2,obj)
// // // // // console.log(obj2)

// // // let obj1 = {};

// // // // let obj4=Object.create(obj)

// // // // console.log(obj4.id);
// // // // Object.setPrototypeOf(obj1,obj)
// // // // console.log(obj1.id)
// // // // console.log(Object.getPrototypeOf(obj1))

// // // // console.log(Object.freeze(obj))
// // // // console.log(Object.isFrozen(obj))

// // // // Object.seal(obj);
// // // // console.log(Object.isSealed(obj))

// // // // obj.name="kushal";
// // // // obj.email="vishaljpkumar4970@gmail.com";
// // // // obj.course="Mca";
// // // // delete obj.city

// // // // console.log(obj)

// // // // let e=Object.getOwnPropertyDescriptors(obj,'id');
// // // // console.log(e)


// // // // console.log(
// // // // Object.defineProperty(obj, 
// // // //     'email',{
// // // //         value: 'vishal',
// // // //         writable: true,
// // // //         enumerable: true,
// // // //         configurable: true

// // // //     }
// // // // )) 

// // // // console.log(Object.defineProperties(obj,{
// // // //     "age":{
// // // //         value:29,
// // // //         writable:true,
// // // //         configurable:true,
// // // //         enumerable:true
// // // //     },
// // // //     "course":{
// // // //         value:"BCA",
// // // //        enumerable:true,
// // // //        configurable:true,
// // // //        writable:true
// // // //     }
// // // // }))


// // let a=[1,2,3,4,5,4,3,2,1,1,2,3,4,5,10,11,19,39,1,2,4,5,100,110,222,2,3,5,10,13]

// // // console.log(a)

// // // let b=a
// // // b.push(300,400,400,5000,500)
// // // console.log(a)
// // // console.log(a.length)

// // // b[100]=20000

// // // console.log(a.length)

// // let set=new Set(a);

// // console.log(set)
// // console.log(set.size)
// // let s=set.add(10,2002,3004,5004)
// // console.log(s)
// // console.log(set.has(110))
// // console.log(set.add(200))
// // console.log(set.delete(200))
// // console.log(set)
// // set.add(220)
// // console.log(set)
// // set.delete(220);
// // console.log(set)
// // console.log(set.values())
// // console.log(set.keys())
// // console.log(set.entries())
// // set.forEach((item)=>{
// //     console.log(item)
// // })


// let map=new Map([["name","vishal"],["id",'101'],["course",'bca'],["email",'vishaljpkumar4970@gmail.com']])

// console.log(map)
// console.log(map.size)
// console.log(map.set("phone",9155014125));
// console.log(map.get('name'))

// console.log(map.delete("name"))
// console.log(map)
// console.log(map.values())
// console.log(map.keys())
// console.log(map.has('phone'));

// map.forEach((item)=>{
//     console.log(item)
// })

// console.log(map.clear())
// map.clear()
// console.log(map)





