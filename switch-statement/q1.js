// let day=Number(prompt("enter a day"));


// switch(day)
// {
//     case 1:
//         document.writeln("monday")
//         break;
//     case 2:
//         document.writeln("tuesday")
//         break;
//     case 3:
//         document.writeln("wednessday")
//         break;
//     case 4:
//         document.writeln("thurusday")
//         break;
//     case 5:
//         document.writeln("friday")
//         break;
//     case 6:
//         document.writeln("saturtday")
//         break;
//     case 7:
//         document.writeln("sunday")
//         break;
//     default:
//        document.writeln("invalid choice")
// }

// let month=Number(prompt("enter a month"));


// switch(month)
// {
//     case 1:
//         document.writeln("january")
//         break;
//     case 2:
//         document.writeln("febuary")
//         break;
//     case 3:
//         document.writeln("march")
//         break;
//     case 4:
//         document.writeln("april")
//         break;
//     case 5:
//         document.writeln("may")
//         break;
//     case 6:
//         document.writeln("june")
//         break;
//     case 7:
//         document.writeln("july")
//         break;
//     case 8:
//         document.writeln("august")
//         break;
//     case 9:
//         document.writeln("september")
//         break;
//     case 10:
//         document.writeln("october")
//         break;
//     case 11:
//         document.writeln("november")
//         break;
//     case 12:
//         document.writeln("December")
//         break;    
        
//     default:
//        document.writeln("invalid choice")
// }

let a=Number(prompt("enter a"))
let ope=(prompt("enter operator"))
let b=Number(prompt("enter b"))

switch(ope)
{
    case '+':
        document.writeln(a+b)
        break;
    case '-':
        document.writeln(a-b)
        break;
    case '*':
        document.writeln(a*b)
        break;
    case '/':
        document.writeln(a/b)
        break;
    case '**':
        document.writeln(a**b)
        break;
    case '%':
        document.writeln(a%b)
        break;  
    default:
        document.writeln("invalid choice")      
}