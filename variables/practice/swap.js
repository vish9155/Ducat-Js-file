let a=parseInt(prompt("enter a"));
let b=parseInt(prompt("enter b"));

document.writeln(`1. Before swaping a: ${a} b: ${b}`);
let temp;
temp=a;//temp=a==>temp=5;
a=b;//a=b==>a=8
b=temp;//b=temp==>b=5
document.writeln(`After swaping a: ${a} b: ${b} using third variable.....</br>` );


document.writeln(`1. Before swaping a: ${a} b: ${b} `);
a=a+b///a=5+6=a=11;
b=a-b///b=11-6=5;
a=a-b///a=11-5=6;
document.writeln(`After swaping a: ${a} b: ${b} without using third variable.....` );

