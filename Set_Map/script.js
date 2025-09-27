// //Set()-> it is a collection of unique item. it do not support the indexing andl it also not contain duplicate item

// // we have to create a Set using new keyword;


// let a=[10,20,30,20,0,30,40,40,40,50,30,40,60,70,50,40,80,90,40,40,100]
// // console.log(a)
// let s= new Set(a);
// console.log(s)

// //form()-> it convert set into array using Array keyword;

// console.log(Array.from(s))

// //size -> it return the size of set

// console.log(s.size)

// // //add()-> used to add item in set if  item is already exist do nothing

// // s.add(100)
// // s.add(200)
// // s.add(300)
// // s.add();//  to add() empty  it print undefined
// // s.add()
// // console.log
// // console.log(s)
// // console.log(s.size)


// // //delete()-> used to delete item in set if or item is not exist do nothing
// // s.delete(100)
// // s.delete()
// // s.delete(100)
// // s.delete(500)

// // console.log(s)
// // console.log(s.size)

// //has()-> it return true and fallse if item is exist or not

// // console.log(s.has(100))
// // console.log(s.has(200))
// // console.log(s.has(300))

// //values()-> it return the value
// //keys()-> it return the value because there are no any keys;
// //enterirs()-> it return th pairs of value and value because there are no any keys;

// // console.log(s.values())
// // console.log(s.keys())
// // console.log(s.entries())

// //clear-> it is used to clear all set values
// s.clear()
// console.log(s)

// MAP-> it is collection of key values pair.it key is unique but value is duplicate;
//-> if you enter duplicate key the last entered key are used;

// How to make a MAp-> using new keyword;


let m = new Map([
    ["id", 101],
    ["name", "vishal kuamr"],
    ["dsg", "trainner"],
    ["salary", 20000]
])

console.log(m)

// Set()-> using set() we can add data in Map if item is already exist it update the value 

//  m.set("salary",30000)
//  m.set("gmail","vishal@gmail.com")

//  console.log(m)


//size->it return the size of map

// m.size
// console.log(m)

// has()-> it return if item is exist or not in a map

// console.log(m.has("name"))
// console.log(m.has("email"))
// console.log(m.has("salary"))

// delete()-> it is delete the paticular key in map do nothing if item is not exist

// m.delete("name")
// m.delete("salary")
// m.delete("email")

// console.log(m)
// console.log(m.size)

//values() -> it return the all values in map
//keys()-> it return the all keys in map
//enteries -> it return the all key values pairs in map

// console.log(m.values())
// console.log(m.keys())
// console.log(m.entries())

//clear()-> it clear all item in a map

m.clear()

console.log(m)