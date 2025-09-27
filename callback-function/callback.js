//callback-> A function passed as argument to another funtion;
/*
    syntax

    function fun1(f)
    {
      --------------------
      -----------------
      f()//call abc function
    }
    function abc()
    {
      ---------
      ------------
    }
    fun1(abc)  

    */

    //1. simple example

    // function xyz(x)
    // {
    //     console.log("hello")
    //     x()//call the abc function
    // }
    // function abc()
    // {
    //     console.log("Coder's")
    // }
    // xyz(abc)//abc passed as a argumnet in xyz function;

    //2.example

    // function fun(a,b,x)
    // {
    //     document.writeln("hello")
    //     x(a,b)
    // }
    // function add(a,b)
    // {
    //     document.writeln(a+b)
    // }

    // fun(50,10,add)

    //3.Example using setTimeout() 

    // function fun(a,b,x)
    // {
    //     document.writeln("hello")
    //     x(a,b)
    // }
    // function add(a,b)
    // {
    //     document.writeln(a+b)
    // }

    // setTimeout(fun,2000,50,80,add)

    //

    // function fun(a,b,x)
    // {
    //     document.writeln("hello")
    //     setTimeout(()=>{
    //         x(a,b)
    //     },2000)
    // }
    // function add(a,b)
    // {
    //     document.writeln(a+b)
    // }

    // setTimeout(fun,2000,50,80,add)


    //4.Example using setTimeout method or arrow function

    // function fun(a,b,x)
    // {
    //     document.writeln("hello")
    //     x(a,b)//x is call to the callback function 
    // }
    
    // fun(50,70,(val,val1)=>{document.writeln(val+val1)})

    //  function fun(a,b,x)
    // {
    //     document.writeln("hello")
    //    setTimeout(()=>{
    //   x(a,b)//x is call to the callback function 
    //    },3000)
        
    // }
    
    // fun(50,70,(val,val1)=>{document.writeln(val+val1)})

    //callback Hell -> which mean's nesting of callback function-----

    // function fun(a,b,x)
    // {
    //     document.writeln("hello")
    //     setTimeout(()=>{
    //         x(a,b)
    //     },2000)
    // }
    // function fun2(m,y)
    // {
    //     setTimeout(()=>{
    //       y(m)
    //     },2000)
    // }
    // function nam(age,z)
    // {
    //     setTimeout(()=>{
    //         z(age)
    //     },2000)
    // }

    // fun(70,80,(val,val1)=>{document.writeln(val+val1);
    //  fun2(1,(data)=>{
    //     document.writeln(data);

    //     nam(18,(ages)=>{
    //   document.writeln(ages)
    //     })
    //  })

    // })
    
function getdata(dataupdate,nextdata)
{
    //document.writeln(dataupdate)
    setTimeout(()=>{
       if(nextdata)
       {
        nextdata(dataupdate)
       }
       else{
        document.writeln("Error")
       }
    },2000)
}

getdata(1,(data)=>{
    document.writeln(data);
    getdata(2,(data2)=>{
        document.writeln(data2);
        getdata(3,(data3)=>{
            document.writeln(data3)
        })
    })
})