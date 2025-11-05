//function defination
function hello(){
    console.log("hello");
}

//function calling
hello();
hello();
hello();

//function to print name
function printName(){
   console.log("ronik");
    console.log("apna college");
}
printName();

//function with loop
function print1to5(){
    for(let i=1;i<=5;i=i+1){
        console.log(i);
    }
}
print1to5();

//function with if else
function adult(){
    let age=13;
    if(age>=18){
        console.log("adult")
    }
    else{
        console.log("not adult");
    }
}
adult();

//practice question
function poem(){
    console.log("lorem lorer mmmmmmmmmmmmmmmmmmmmmmmmmmmmm ")
    console.log("ggkk    ")
}
poem();

//practice question
function dice(){
    console.log(Math.floor(Math.random()*6+1));
}
dice();

//function with argument
function Printname(name,age){
    console.log(name,age);
}
Printname("Ronik",20);
Printname("Rohit",12);
Printname("ramesh");

//sum of 2 numbers
function sum(a,b){
    let c=a+b;
    console.log("sum is",c);
}
sum(10,12);

//average of 3 numbers
function avg(c,d,e){
    let avgerage=(c+d+e)/3;
    console.log("average is",avgerage);
}
avg(10,15,20);

//table 
function tabel(n){
    for(let i=1;i<=10;i=i+1){
        console.log(n*i);
    }
}
tabel(5);

//return
function tosum(f,g){
    let sum1=f+g;
    console.log("hi");
    return sum1;
    console.log("hello");
}

let sum2=tosum(10,5);
console.log(sum2);

//return with if else
function adultor(age){
    if(age>=18){
        return "adult";
    }
    else{
        return "child";
    }
}
let s1=adultor(20);
console.log(s1);

//practice question to retun sum of numbers from 1 to n
let n=prompt("enter n");
function sumofn(n){
    let sum=0;
    for(let i=1;i<=n;i=i+1){
        sum=sum+i
    }
    return sum;
}

let s2=sumofn(n);
console.log(s2);

//practice question concates all the strings in an array
 let str=["hi","hello","bye","ok","wow"];
 function concat(str){
    let result="";
    for(let i=0;i<str.length;i=i+1){
        result=result+str[i];
    }
    return result;
 }
 let s3=concat(str);
 console.log(s3);

//  //function scope and global scope
//  let sum222=20; //global variable
//  function sumo(j,k){
//     let sum34=j+k;   //function variable
//  }
//  console.log(sum34);

//  //block variable
//  {
//     let abc=23;
//     console.log(abc);
//  }
//  console.log(abc);

//  //lexical scope
//  function outerfun(){
//     let x=5;
//     let y=6;
//     function innfun(){
//         console.log(x);
//     }
   
//  }
//  outerfun();
//lexical scope using outer variables for inner
function outer11(){
    let x1=10;
    let y=20;
    console.log("hello kaka");
    function inner11(){
        let z=10;
        console.log(x1);
    }
    inner11();
}
outer11();
// //lexical scope using inner variables for outer
// function outer22(){
//     console.log(z);
//     function inner22(){
//         let z=3;
//     }
//     inner22();
// }
// outer22();


//practice question
let greet="hello";  //global scope
function changeGreet(){  //functional scope
    let greet="namaste";
    console.log(greet);
    function innergreet(){  //lexical scope
        console.log(greet);
    }
    innergreet();  //namaste
    
}
console.log(greet); //hello
changeGreet();   //namaste

//function expression
let sum23=function(a,b){
    return a+b;
}
console.log(sum23(2,3));

let printhello=function(){
    console.log("hello kaka kakus");
}
console.log(printhello());

//higher order function 
let greet1=function(){
    console.log("hello");
}
function multipleGreet(func,n){
    for(let i=1;i<=n;i=i+1){
        func();
    }
}
multipleGreet(greet1,2);

//return function


function oddEvenTest(request){
    if(request=="odd"){
        let odd=function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }

    else if(request=="even"){
        let even=function(n){
            console.log(n%2==0);
        }
        return even;
    }
    else{
        console.log("wrong request");
    }
}
let request="odd";
let r1=oddEvenTest(request);
console.log(r1);

//methods
let calculator={
    num:55,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
}
console.log(calculator.num);
console.log(calculator.add(1,2));
console.log(calculator.sub(1,2));
console.log(calculator.mul(1,2));







