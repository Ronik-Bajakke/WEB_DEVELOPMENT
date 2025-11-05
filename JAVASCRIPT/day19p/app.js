//Q1
//mouseout
let para1=document.querySelector("#para1");
function hello(){
    console.log("mouse out");
}
para1.addEventListener("mouseout",hello);

//keypress
let inp1=document.querySelector("#inp1");
function hello1(){
    console.log("key press");
}
inp1.addEventListener("keypress",hello1);

//scroll for textarea
let tex1=document.querySelector("#tex1");
function hello2(){
    console.log("textarea scrolled");
}
tex1.addEventListener("scroll",hello2);
//scroll for window
function hello3(){
    console.log("window scroll");
}
window.addEventListener("scroll",hello3);

//load

// window.addEventListener("load",hello4);

//Q2
let btn1=document.createElement("button");
console.dir(btn1);
btn1.innerText="Click me";
let body1=document.querySelector("body");
body1.appendChild(btn1);

function hello5(){
    btn1.style.backgroundColor="green";
}
btn1.addEventListener("click",hello5);

//q3
let head2=document.querySelector("#head2");
let inp2=document.querySelector("#inp2");

function hello6(){
    console.log(inp2.value);
    head2.innerText=inp2.value;
}
inp2.addEventListener("input",hello6);




