//this keyword
let student={
    name:"ronik",
    age:23,
    eng:10,
    math:30,
    phy:40,
    getAvg(){
        let avg=(this.eng + this.math + this.phy)/3;
        console.log(avg);
        console.log(this.name);
        console.log(this.phy);
        console.log(this);
    }
};
console.log(student.name);
console.log(student.getAvg());

//try catch
try{
    console.log(a);
}
catch(err){
    console.log("a is not defined");
    console.log(err);
}

//arrow function
//normal function
function hello(){
    console.log("hello world");
}
hello();
//function expression
let hello1=function(){
    console.log("Hello World 2");
}
hello1();
//arrow function 
let hello2=()=>{
    console.log("Hello World 3");
}
hello2();

//arrow function to calculate sum of 2 numbers
// function sum(num1,num2){}
//     let sum=function(num1,num2){}
    let sum=(num1,num2)=>{
    let add=num1+num2;
    console.log(add);
}
sum(2,5);

//arrow return
let mul=(e,f)=>(
    e*f);
    //here its return type so

let ooq=mul(3,4);
console.log(ooq);

//set timeout
// function printHello(){
    let printHello=function(){
    console.log("Krutika:Hello Rohit");
}
setTimeout(printHello,3000);

//set interval
let printHello1=function(){
    console.log("Rohit:hellooooo....");
}
let id1=setInterval(printHello1,4000);
//in console write this to stop from running clearInterval(id1);

//practice question

//q1 square of a number
// function square(n){}
//     let square=function(n){}
    let square=(n)=>{
        console.log(n**2);
    }
    square(6);

//q2 prints hello world 5 time at a interval of 2 sec
let print2=function(){
    console.log("o a");
}
let id2=setInterval(print2,2000); 

let funcTime=function(){
    clearInterval(id2);
}
setTimeout(funcTime,10000);

    
