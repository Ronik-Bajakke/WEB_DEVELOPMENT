console.log("hello world");
console.log("apna college");
let a=10;
let b=5;
console.log("aum is",a+b);

let pencilPrice=10;
let eraserPrice=5;
console.log("the total price is",pencilPrice+eraserPrice,"in rupees");
let output=`total price is  ${pencilPrice} in rupees`;
//arithmatic operators
let num1=10;
let  num2=5;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1/num2);
console.log(num1*num2);
console.log(num1%num2);
console.log(num1**num2);

//unary operator
let num3=10;
console.log(a++);
console.log(++a);

//assignment operator
let num4=4;
console.log(num4);
num4+=5;
console.log(num4);

//comparision operator
let num5=16;
console.log(num5>18);
10>8;

let n=5;
let str="5";
console.log(n==str);
console.log(n===str);

console.log("a"<"A");

//if 
let age=2;
if(age>18){
    console.log("adult");
}

//practice
let color="yellow";
if(color=="red"){
    console.log("Stop")
}
if(color=="yellow"){
    console.log("Slow down")
}
if(color=="green"){
    console.log("Go")
}

//else if and else
let age1=15;
if(age1>=18){
    console.log("adult");
}
else if(age1==17){
    console.log("num is 17");
}
else{
    console.log("num less then 17")
}

//practice
let size="M";
if(size=="XL"){
    console.log("250");
}
else if(size=="L"){
    console.log("200");
}
if(size=="M"){
    console.log("100");
}
else{
    console.log("50");
}

//nested if else
let age2=30;
if(age2>=18){
    console.log("adult");
    if(age>=40){
        console.log("sineor citizen");
    }
    else{
        console.log("youth")
    }
}
else{
    console.log("child");
}

//logical operator
if(10>5 && 10<20){
    console.log("and");
}
if(10>5 || 10>20){
    console.log("or");
}
if(!(10<5)){
    console.log("not");
}
//practice
let string1="apple";
if(string1[0]=="a" && string1.length>3){
    console.log("good striing");
}
else{
    console.log("bad string");
}

//switch
let alpha="z";
switch(alpha){
    case "a": console.log("small a");
    break;
    case "b": console.log("small b");
    break;
    case "c": console.log("small c");
    break;
    case "d": console.log("small d");
    break;
    default:console.log("other alphabet");
}

let day=5;
switch(day){
    case 1:console.log("sunday");
    break;
    case 2:console.log("monday");
    break;
    case 3:console.log("tueday");
    break;
    case 4:console.log("wednesday");
    break;
    case 5:console.log("thurday");
    break;
    case 6:console.log("friday");
    break;
    case 7:console.log("saturday");
    break;
    default:console.log("not a valid date");
}

//alert and prompt
alert("something is wrong");

prompt("please enter your usn");

let name=prompt("enter name");
console.log(name);

//console.error
console.error("this is an error");

//console.warn
console.warn("this is an warning");

