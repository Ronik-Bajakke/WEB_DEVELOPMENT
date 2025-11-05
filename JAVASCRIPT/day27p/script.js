//console.log("hello world");
console.log("hi");
/* this is an multi line 
comment*/

let a=20;
let b=5;

//Arithmatic operator
let c=a+b;
let d=a-b;
let e=a*b;
let f=a/b;
console.log("a+b=",c);
console.log(d);
console.log(e);
console.log(f);
console.log(a%b);

//Unary operator
console.log(a++);
console.log(a);
console.log(++a);
console.log(b--);
console.log(b);
console.log(--b)
console.log(2**5);

//Assignment operator
let x=5
x += 3;
console.log(x);
x -= 3;
console.log(x);
x *= 3;
console.log(x);
x /= 3;
console.log(x);
x %= 3;
console.log(x);
x **= 3;
console.log(x);

//comparison operator
let y=4;
let z=3;
let w="4";
console.log(y==z);
console.log(y<z);
console.log(y<=z);
console.log(y>z);
console.log(y>=z);
console.log(y!=z);
console.log(y==w);
console.log(y===w);
console.log(y!==w);

//logical operator
let g=1;
let h=2;
let i=3;
let j=4;
console.log(g<h&&i<j);
console.log(g<h||i>j)
console.log(!(g<h||i>j))

//if condition
let age=10;
if(age<=17){
    console.log("child");
}

//if else condition
let age1=20;
if(age1<18){
    console.log("cannot vote")
}
else{
    console.log("can vote for election");
}

//else if condition
let num=20;
if(num==5){
    console.log("number is eqal to five");
}
else if(num==10){
    console.log("number is equal to ten ");
}
else if(num==15){
    console.log("number is equal to 15");
}
else if(num==20){
    console.log("number is equal to 20 ")
}
else{
    console.log("number is neither equal to any number");
}

//ternary operator
let age2=18;
age2>=18?console.log("is an adult"):console.log("not an adult");

//switch case
let char=prompt("enter a character");
switch(char){
    case 'a':console.log("it is alphabet a");
    break;
    case 'b':console.log("it is alphabet b");
    break;
    case 'c':console.log("it is alphabet c");
    break;
    case 'd':console.log("it is alphabet d");
    break;
    case 'e':console.log("it is alphabet e");
    break;
    default:console.log("it is not alphabet");
}

let name=prompt("enter your name here");
console.log(name);

//question 1
let number=prompt("enter a number to check weather it is divisible by 5");
if(number%5==0){
    console.log("divisible by 5");
}
else{
    console.log("not divisible by 5");
}

//question 2
let marks=prompt("enter the marks to obtain the grade");
if(marks<=100&&marks>=80){
    console.log("A");
}
else if(marks<=89&&marks>=70){
    console.log("B");
}
else if(marks<=69&&marks>=60){
    console.log("C");
}
else if(marks<=59&&marks>=50){
    console.log("D");
}
else if(marks<=49&&marks>=0){
    console.log("E");
}
else{
    console.log("enter an valid marks");
}




