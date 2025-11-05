//simple function
function hello(){
    console.log("hello World");
}
hello();

//function with arguments
function add(a,b){
    let sum=a+b;
    console.log(sum);
}
add(2,3);

//function with return type
function mult(c,d){
    let multipli=c*d;
    return multipli;
}
let multipli=mult(2,4);  //use multipli or any other variable
console.log(multipli);

//return type with if else
function adultOr(age){
    if(age>=18){
        return "adult";
    }
    else if(age>=13){
        return "tennager";
    }
    else{
        return "child";
    }
}
let ooa=adultOr(20);
console.log(ooa);

//lexical scope
function outer(){
    let x=10;
    function inner(){
        console.log(x);
    }
    inner();
}
outer();

//function expression
// function sub(e,f){  
     let sub=function(e,f){
    substra=e-f;
    return substra;
}
let substraction=sub(10,2);
console.log(substraction);

// function printhello(){
    let printhello=function(){
    console.log("hello world again");
}
printhello();

//higher order function passing function as an argument
// function greet(){}
let greet=function(){
    console.log("hello");
}

function multigreet(func,n){
    for(let i=1;i<=n;i=i+1){
        func();
    }
}

multigreet(greet,10);

//higher order function with passing function as an return type
function checkVoter(age1){
    if(age1>=18){
        return function(){
            console.log("Can Vote");
        }
    }
    else if(age1<18){
        return function(){
            console.log("Cannot Vote");
        }
    }
  
}
let ooak=checkVoter(2);
console.log(ooak);

//object method
let calculator={
    add1:function(g,h){
        return g+h;
    },
    sub1:function(g,h){
        return g-h;
    },
    mult1:function(g,h){
        return g*h;
    },
    div1:function(g,h){
        return g/h;
    }
}
console.log(calculator.add1(3,4));
console.log(calculator.sub1(3,4));
console.log(calculator.mult1(3,4));
console.log(calculator.div1(3,4));

//practice questions
//q1
let array=[0,1,2,3,4,5,6,7];

function greater(num){
    for(let i=0;i<=array.length;i=i+1){
        if(array[i]>=num){
            console.log(array[i]);

        }
    }
}
let gre=greater(3);
console.log(gre);

//q2

//q3

//q4
//q5

