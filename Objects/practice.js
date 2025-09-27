//Object -> it store the information of key value pairs.it is mutable it store duplicate item .it key is unique

// let obj = {
//     name: "vishal",
//     id: 1,
//     course: "mca"
// }
// console.log(obj)
// // console.log(obj.name)
// // console.log(obj.id)
// // console.log(obj.course)
// // console.log(obj['name'])
// // console.log(obj["id"])
// // console.log(obj[`course`])

// obj.marks=90
// obj.city="hajipur"
// obj['state']="Bihar"
// obj["Pincode"]=844502
// obj[`block`]="Bidupur"

// console.log(obj)

// obj['name']="Rahul"
// console.log(obj)
// //using for in loop -> it give index
// for(let i in obj)
// {
//     console.log(`${i}:${obj[i]}`)
// }


///nested array

let student = {
    name: "vishal",
    id: 30,
    course: "maca",
    marks: 67,
    address: {
        address1: {
            residentAddress: {
                village: "Dayalpur Dhamauli",
                Block: "HAjipur",
                ps: "rajapaker"
            },
            address2: {
                permanentAddress: {
                    village: "Mithanpura chowk , Muzzafarpur",
                    Block: "Mushari",
                    ps: "Mithanpura op"
                }
            }
        }
    }
}

// console.log(student)
// console.log(student.address)
// console.log(student.address.address1)
// console.log(student.address.address1.address2)

// // for (let i in student)
// // {
// //     console.log(`${i}:${student[i]}`)
// // }
// console.log(`
//     Name               : ${student.name}
//     id                 :${student.id}
//     course             :${student.course}
//     marks              :${student.marks}
//     Residental Address : Block : ${student.address.address1.residentAddress.Block} , village : ${student.address.address1.residentAddress.village} , Police Station : ${student.address.address1.residentAddress.ps}
//     permanent Address :Block : ${student.address.address1.address2.permanentAddress.Block} , village : ${student.address.address1.address2.permanentAddress.village} , Police Station : ${student.address.address1.address2.permanentAddress.ps}


//     `
// )

// delete student.address.address1.residentAddress.Block
// delete student.address.address1.residentAddress

// console.log(student.address)

// console.log(student.address.address1.residentAddress)

// destructring objects

// let obj={
//     name:'vishal',
//     roll:39,
//     course:"Bca",
//     city:'hajipur',
//     state:"bihar",
//     block:"HAjipur Block"
// }

// let {name,roll,course,city,state,block}=obj

// console.log(name,roll,course,city,state,block)

// let emp = {
//     name: 'vishal',
//     id: 2003,
//     dsg: 'trainner',
//     set calculate(salary) {
//         this.salary = salary
//         this.ta = this.salary * 10 / 100
//         this.ma = this.salary * 16 / 100
//         this.hra = this.salary * 12 / 100
//         this.da = this.salary * 14 / 100

//         this.gross = this.salary + this.ta + this.ma + this.hra + this.da;
//         this.tax = this.salary * 15 / 100;
//         this.netSalary = this.gross - this.tax
//     },
//     get display() {
//         console.log(
//             `
//         Name                  :${this.name} 
//         Id                    :${this.id}
//         Dsg                   :${this.dsg}
//         Salary                :${this.salary}
//         ta                    :${this.ta}
//         da                    :${this.da}
//         ma                    :${this.ma}
//         hr                    :${this.hra}
//         gross                 :${this.gross}
//         tax                   :${this.tax}
//         Total Salary          :${this.netSalary}

//         `
//         )
//     }
// }

// // emp.calculate()
// // emp.display()

// emp.calculate = 120000
// emp.display

//object constructor->

// let employee=function(name,roll,course,city,state)
// {
//     this.name=name
//     this.roll=roll
//     this.course=course
//     this.city=city
//     this.state=state
// }

// let emp1=new employee("vishal",1,"Bca","hajipur","bihar")
// let emp2=new employee("kushal",2,"Mca","Patna","Bihar")
// console.log(emp1,emp2)

// let employee={
//     id:10,
//     dsg:"Trainner",
//     FullName:function()
//     {
//         this.FirstName="vishal",
//         this.LastName="Kumar"
//         this.fullname=this.LastName+this.FirstName
//     },
//     Display:function()
//     {  
//          console.log(this.)
//         console.log(this.fullname)
//     }

// }


// let employee = {
//     id: 10,
//     dsg: "Trainner",
//     FullName: () => {
//         this.FirstName = "vishal",
//             this.LastName = "Kumar"
//         this.fullname = this.LastName + this.FirstName
//     },
//     Display: () => {

//         console.log(this.fullname)
//         console.log(this.id)
//     }

// }

// employee.FullName()
// employee.Display()