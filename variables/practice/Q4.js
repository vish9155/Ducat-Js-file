//*---Print area of circle square and rectangle---*/


let r=parseFloat(prompt("enter radius of circle"));
let side=parseInt(prompt("enter side of square"));
let l=parseInt(prompt("enter length "));
let w=parseInt(prompt("enter breadth "));
let h=parseInt(prompt("enter height"))
let base=parseInt(prompt("enter base"))

document.writeln(`Area of circle is: ${3.141*r*r}`);
document.writeln(`Area of square is:${side*side}`);
document.writeln(`Area of rectangle is:${l*w}`);
document.writeln("Area of cuboid is:"+2*(l*w+w*h+h*l))
document.writeln(`Area of right angle trangle is :${(base*h)/2}`)