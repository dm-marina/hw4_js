let operation = prompt("What you want to do?");
let a = prompt("Enter first number:");
let b = prompt("Enter second numder:");
//  add="+";
//  sub ="-";
//  mult ="*";
//  div = "/";

if(operation == "sub"){
    let operation = "-";
    let result = Number(a) - Number(b);
    alert(`${a} ${operation} ${b} = ${result}`); 
}
if(operation== "add"){
    let operation = "+";
    let result = Number(a) + Number(b); 
    alert(`${a} ${operation} ${b}=${result}`);
}
if(operation== "mult"){
    let operation ="*";
    let result = Number(a) * Number(b); 
    alert(`${a} ${operation} ${b}=${result}`);
}
if(operation== "div"){
    let operation ="/";
    let result = Number(a) / Number(b); 
    alert(`${a} ${operation} ${b}= ${result}`);
}
