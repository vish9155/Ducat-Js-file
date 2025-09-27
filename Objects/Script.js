/*

Objects-> it store the information in key value pairs,it can store duplicate value , it key is unique, it is mutable data types ;

Objects Literals->

let object-name={
key:value,
------
-----
}

empty objects literals->

let object-name={}

object-name.key=value
object-name['key']="value"
object-name["key"]="value"
object-name[`key`]="value"

new objects literals->

let object-name=Objects()


object-name.key=value
object-name['key']="value"
object-name["key"]="value"
object-name[`key`]="value"


*/



// let emp={
//     name:"vishal kumar",
//     id:101,
//     city:"patna",
//     state:"Bihar",
//     Phone:9155014125
// }

// console.log(emp)
// console.log(emp.name)
// console.log(emp[`id`])
// console.log(emp['city'])
// console.log(emp[`state`])

// let emp={}

// emp.name="vishal"
// emp.id=101
// emp['city']='patna'
// emp[`salary`]=`100023`
// emp["dsg"]="trainner"

// console.log(emp)
// console.log(emp.name)
// console.log(emp["dsg"])
// console.log(emp['city'])
// console.log(emp[`salary`])

// let emp=new Object()

// emp.name="vishal"
// emp.id=101
// emp['city']='patna'
// emp[`salary`]=`100023`
// emp["dsg"]="trainner"

// console.log(emp)
// console.log(emp.name)
// console.log(emp["dsg"])
// console.log(emp['city'])
// console.log(emp[`salary`])

// Accessing object value from key

// console.log(emp)
// console.log(emp.name)
// console.log(emp["dsg"])
// console.log(emp['city'])
// console.log(emp[`salary`])

// Accessing Object value from loop

// for(let key in emp)
// {
//     console.log(`${key}:${emp[key]}`)
// }

//Adding item to existing object 

// emp.brothername="kushal"
// emp.village="Dayalpur"
// emp['Studey']='Mba'
// emp[`college`]=`Galgotias University`

// console.log(emp)

// //Deleting item from object

// delete emp.brothername
// delete emp.dsg
// delete emp["name"]
// delete emp[`college`]

// console.log(emp)

//Nesting of object


// let emp={

//     name:"vishal",
//     id:101,
//     dsg:"Trainner",
//     salary:1030442,
//     Address:{
//         addressline1:{
//             houseno:10,
//             galino:"02"
//         },
//         addressline2:{
//             locallity:"Village Dayalpur",
//             nearby:"pani tanki"
//         },
//         addressline3:{
//             state:"Bihar",
//             city:"HAjipur",
//             pin:844502
//         }
//     }

// }

// console.log(emp)
// console.log(emp.Address)
// console.log(emp.Address.addressline3)
// console.log(emp.Address.addressline3.state)

//Day1 practices------

// let emp = {
//     name: "vishalkumar",
//     id: 101,
//     dsg: "software developer",
//     Address: {
//         addressline1: {
//             House_no: 30,
//             building_no: "30E"
//         },
//         addressline2: {
//             city: "Hajipur",
//             state: "bihar"
//         }
//         ,
//         addressline3: {
//             nearby: "pani tanki"
//         }
//     }
// }

// for(let key in emp)
// {
//     console.log(`${key}:${emp[key]}`)
// }

// console.log(`${emp["dsg"]}`)
// console.log(`${emp['name']}`)
// console.log(`${emp[`id`]}`)
// console.log(emp.id)

// emp.name="raju"
// emp['id']='09'
// console.log(emp.name,emp.id)

// console.log(emp.Address.addressline1.House_no)

// emp.cmp = "ducat"
// console.log(emp)

// delete emp.cmp
// console.log(emp)

//function in objects

// let emp = {
//     id: 101,
//     name: "vishal kumar",
//     dsg: 'trainner',
//     salary: 190000,
//     displpay() {

//         console.log("this is display 1 function" + this.dsg, this.name, this.id)
//     },
//     display2() {
//         console.log(`this is display2 function ${emp.dsg}
//             ${emp.id}
//             ${emp.salary}
//             `)
//     },
//     display3: function () {
//         console.log(`thi is display3 anonymous function 
//             ${emp.dsg}
//              ${emp.name} 
//              ${emp.id}`)
//     },
//     display4: function () {
//         console.log(`this is display 4 function
//              ${this.id} 
//             ${this.name} 
//             ${this.salary}`)
//     },
//     display5: () => {
//         console.log(`this is display 5 function 
//             ${emp.name} 
//             ${emp.dsg} 
//             ${emp.id}
//              ${emp.salary}
//              `)
//     },
//     display6: () => {
//         console.log(`this is display 5 function 
//             ${this.displpay} 
//             ${this.display3} 
//             ${this.id} 
//             ${this.salary} `)
//     }
// }

// emp.displpay()
// emp.display2()
// emp.display3()
// emp.display4()
// emp.display5()
// emp.display6()
// console.log(emp)

//we can write only function name in objects.
// we can access the object value through this keyword or object name.
// In arrow function we can't use this keyword to prin object data  because it say globalthis so value is undefined   .

//why need function in obj-> we can need function in object for calculation

// let emp={
//     name:'vishal kumar',
//     id:101,
//     dsg:'trainner',
//     salary:20000,
//     calculation()
//     {
//         this.da=this.salary*10/100,
//         this.ta=this.salary*5/100,
//         this.ma=this.salary*12/100,
//         this.hra=this.salary*15/100 
//         this.gross=this.salary+this.da+this.ta+this.ma+this.hra
//         this.tax=this.salary*13/100
//         this.netsalary=this.gross - this.tax
//     },
//     display()
//     {
//         console.log(`

//             name      :   ${this.name}
//             id        :   ${this.id}
//             dsg       :   ${this.dsg}
//             salary    :   ${this.salary}
//             da        :   ${this.da}
//             ma        :   ${this.ma}
//             hra       :   ${this.hra}
//             ta        :   ${this.ta}
//             gross     :   ${this.gross}
//             tax       :   ${this.tax}
//             netsalary :   ${this.netsalary}

//             `)
//     }

// }

// console.log(emp)
// emp.calculation()
// emp.display()



//getter setter :it is special method of js to encapsulate(hide) the internal representation of  a  object property and  define custom behaviour to getting or setting value

// getter ->using  get keyword the method is execute to access the property and read;
//setter -> using set kewordd the method is execute when property is assign value ;

let emp = {
    name: 'vishal kumar',
    id: 101,
    dsg: 'trainner',

    set calculation(salary) {
            this.salary = salary
            this.da = this.salary * 10 / 100
            this.ta = this.salary * 5 / 100
            this.ma = this.salary * 12 / 100
            this.hra = this.salary * 15 / 100
            this.gross = this.salary + this.da + this.ta + this.ma + this.hra
            this.tax = this.salary * 13 / 100
            this.netsalary = this.gross - this.tax
    },
    get display() {
        console.log(`

            name      :   ${this.name}
            id        :   ${this.id}
            dsg       :   ${this.dsg}
            salary    :   ${this.salary}
            da        :   ${this.da}
            ma        :   ${this.ma}
            hra       :   ${this.hra}
            ta        :   ${this.ta}
            gross     :   ${this.gross}
            tax       :   ${this.tax}
            netsalary :   ${this.netsalary}

            `)
    }

}

console.log(emp)
emp.calculation=190000
emp.display

//distructuring the object

// let std={
//     id:"38c2022",
//     name:'vishal kumar',
//     course:"BCA",
//     reg_no:"4842402345c",
//     city:"hajipur",
//     state:"Bihar"
// }
// let std=[
//     "38c2022",
//     "vishal kumar",
//     "BCA",
//     "4842402345c",
//      "hajipur",
//      "Bihar"
// ]

// let [id,name,course,reg_no,city,state]=std;  // this is array destructuring
// // let {id,name,course,reg_no,city,state}=std;     // this is object destructuring
// console.log(
//     `
//     id               :${id}
//     name             :${name}
//     course           :${course}
//     registration no  :${reg_no}
//     city             : ${city}
//     state            : ${state}
//     `
// )

//object constructor

// var employee = function (id, name, roll, clg) {
//     this.name = name,
//         this.id = id,
//         this.clg = clg,
//         this.roll = roll
//     this.marks = "86%"

// }

// var emp1 = new employee(1, "vishal", "38c2022", "VIBRM")

// console.log(emp1)

//bulit-in-method in objects-----------

// 1.object.keys()->it return array containing result all key of objects;

// console.log(Object.keys(emp))

// // 2.object.values()-> it return array containning result all value of objects

// console.log(Object.values(emp));

// //3.objects.enteries()-> it return array containing result of key value pairs;

// console.log(Object.entries(emp))

// // 4.assign()-> it return the copy of objects elements in other objects;

// let c=Object.assign(emp)
// console.log(c)

// 5.objects.create()->it create new object  it makes already exsit object as prototype on newly created object.

// let d=Object.create(emp);
// console.log(d)
// console.log(d.id)
// console.log(d.name)

//6.object.isfreeze()->it check wheather and objects is freezen or not
//7.object.freeze()-> it freeze the object prevent provide insertion deletion or updation

// console.log(Object.freeze(emp))
// console.log(Object.isFrozen(emp))
// emp.dsg = 'software developer 2.0';
// emp.fruit = "apple";
// delete emp.name

// console.log(emp)

//  console.log(b)

//8.object.issealed()-> check wheather object is sealed or not;
//9.object.sealed()->it sealed object not prevent insertion deletion but updation are possible;

//  console.log(Object.seal(emp))
//  console.log(Object.isSealed(emp))
//  emp.dsg='software developer 2.0';
//  emp.fruit="apple";
//  delete emp.name

//  console.log(emp)

//object.getOwnPropertyDescriptor(object,property)->it return the description of particular proprty

// console.log(Object.getOwnPropertyDescriptor(emp,"name"))

//
//   value: 'vishal kumar',
//   writable: true,
//   enumerable: true,
//   configurable: true

//objects.setprototypeof(object,prototype)->to set any object as prototype

// let obj={
//     cmp:"Ducat India"
// }
// Object.setPrototypeOf(emp,obj)
// console.log(emp.cmp)

//object.getprototype(object)->used to get prototype of any object;

// console.log(Object.getPrototypeOf(emp))

//objects.defineProperties(object,{property 1 :description 1 }, {property 2 : description 2})-> used to set the properties with details

// Object.defineProperties(emp,{"name":{
//     value:"vishal  yadav",
//     Writable:false,
//    configurable:true,
//    enumerable:false
// },"phone":{
//     value:"9155014125",
//     writable:false,
//     enumerable:false,
//     configurable:true
// }})

// console.log(emp.name) 