// 1. style- var date=new Date()-> it return current date and time



// let date=new Date()


// console.log(date) //it return current utc time 2025-09-16T06:23:05.067Z

// console.log(date.toString()) //it return current date and time to the system  

// console.log(date.toDateString())// it return current date as string

// console.log(date.toLocaleDateString())// it return current date in date format

// console.log(date.toTimeString()) //it return current time and time zone 

// console.log(date.toLocaleTimeString()) //it return current time only

/*
1--> 2025-09-16T06:25:48.338Z
2--> Tue Sep 16 2025 11:55:48 GMT+0530 (India Standard Time)
3--> Tue Sep 16 2025
4--> 16/9/2025
5--> 11:55:48 GMT+0530 (India Standard Time)
6--> 11:55:48 am
*/



// 2. style- var date=new Date(year,month,day,hours,minutes,seconds,miliseconds) ;

// let date=new Date(2025,8,2,13,30,30,2000)

// let c=new Date(2025,8,16,13,30,30)
// let d=new Date(2025,8,2,13,30)
// let e=new Date(2025,8,2,13)
// let b=new Date(2025,8,2)

// console.log(date.toLocaleString())

// console.log(b.toLocaleString())

// console.log(c.toLocaleString())

// console.log(d.toLocaleString())

// console.log(e.toLocaleString())

// 3. style- var date=new Date(milisecond)
 
// let a=new Date(2025)

// console.log(a.toLocaleString()) // it return  1/1/1970, 5:30:02 am 

// 4. style- var date=new Date(DateString)
//(year-month-date,hour,minute,second) ya (year/month/date hour:minut:second)

// let a=new Date("2025-10-15 15:39:30")
// let b=new Date("2025-10-15 15:39:")
// let c=new Date("2025-10-15 15:")
// let d=new Date("2025-10-15")
// console.log(a.toLocaleString())
// console.log(b.toLocaleString())
// console.log(c.toLocaleString())
// console.log(d.toLocaleString())

/*
15/10/2025, 3:39:30 pm
15/10/2025, 3:39:00 pm
15/10/2025, 3:00:00 pm
15/10/2025, 5:30:00 am
*/

// how to get date and time using built in method

// let date=new Date()

// console.log(date)
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDay())
// console.log(date.getDate())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())
// console.log(date.getTime())
// console.log(date.getTimezoneOffset())











