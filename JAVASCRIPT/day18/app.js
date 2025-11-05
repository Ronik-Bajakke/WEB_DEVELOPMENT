//onclick with 1 button
let btn1=document.querySelector("#btn1");
function hello(){
    console.log("button was clicked");
}
btn1.onclick=hello;

//onclick with n buttons
let classbut=document.querySelectorAll(".classbut");
function hello1(){
    console.log("hello kaka");
}
for(item of classbut){
item.onclick=hello1;
}

//onmouseenter button
let btn2=document.querySelector("#btn2");
function hello2(){
    console.log("you entered a button");
}
btn2.onmouseenter=hello2;
 //on mouse and on click together on a button
btn2.onclick=hello1;

//single button applying 2 onclick at a time
let btn3=document.querySelector("#btn3");
function hello2(){
    console.log("hello");
}
function hello3(){
    console.log("ok");
}
btn3.onclick=hello2;
btn3.onclick=hello3;

//event listener
let btn4=document.querySelector("#btn4");
function hello4(){
    console.log("output 1");
}
btn4.addEventListener("click",hello4);

//even listener with 2 times addevents,2 functions at a time
let btn5=document.querySelector("#btn5");
function hello5(){
    console.log("output one");
}
function hello6(){
    console.log("output two");
}
btn5.addEventListener("click",hello5);
btn5.addEventListener("click",hello6);

//activity
let btn6=document.querySelector("#btn6");


btn6.addEventListener("click",function (){
    let h3=document.querySelector("h3");
    let randomcol=getrandomcol();
    h3.innerText=randomcol;
    console.log("color updated");

    let insidebox=document.querySelector("#insidebox");
    insidebox.style.backgroundColor = randomcol;

});


function getrandomcol(){
    let red=Math.floor(Math.random()*255)+1;
    let green=Math.floor(Math.random()*255)+1;
    let blue=Math.floor(Math.random()*255)+1;
    let color=`rgb(${red},${green},${blue})`;
    return color;
}

//event listener for an paragraph tag
let para=document.querySelector("#para");
function hello7(){
    console.log("para tag");
}
para.addEventListener("click",hello);

//event listener for an div tag
let box=document.querySelector("#box");
function hello8(){
    console.log("you entered box");
}
box.addEventListener("mouseenter",hello8);

//this testing with single tag
let para1=document.querySelector("#para1");
function hello9(){
    console.log(this);
    console.dir(this);
    console.log(this.innerText);
    this.style.backgroundColor="blue";
}
para1.addEventListener("click",hello9)

//this testing with multiple tag
let para2=document.querySelector("#para2");
let div2=document.querySelector("#div2")
let h21=document.querySelector("#h21");

function hello10(){
    console.log(this);
    console.log(this.innerText)
    this.style.backgroundColor="yellow";
}
para2.addEventListener("mouseenter",hello10)
div2.addEventListener("mouseenter",hello10)
h21.addEventListener("mouseenter",hello10)

//default event
let para3=document.querySelector("#para3");
function hello11(event){
    console.log(event);
}
para3.addEventListener("click",hello11);

//keyboard input dag keydown
let inp1=document.querySelector("#inp1");
function hello12(event){
    console.log("key pressed");
    console.log(event);
    console.log(event.code);
    console.log(event.key);
}
inp1.addEventListener("keydown",hello12);

//arrow game
let inp2=document.querySelector("#inp2");
function hello13(event){
    console.log(event.code);
    if(event.code=="ArrowLeft"){
        console.log("move left");
    }
    else if(event.code=="ArrowRight"){
        console.log("move right");
    }
    else if(event.code=="ArrowUp"){
        console.log("move up");
    }
    else if(event.code=="ArrowDown"){
        console.log("move down");
    }
}
inp2.addEventListener("keydown",hello13)

//form event
let form1=document.querySelector("#form1");
function hello14(event){
    alert("form submitted");
    console.log("form submitted succesfully");
    event.preventDefault(); //to stop going to action website
}
form1.addEventListener("submit",hello14);

//form event extracting data
let form2=document.querySelector("#form2");
function hello15(event){
    event.preventDefault();
    let inp4=document.querySelector("#inp4");
    let inp5=document.querySelector("#inp5");
    console.log(inp4.value);
    console.log(inp5.value);
    alert(`hi${inp4.value},your password is ${inp5.value}`);
    console.dir(form2.elements[0]);
}
form2.addEventListener("submit",hello15);

//more events
let form3=document.querySelector("#form3");
let inp6=document.querySelector("#inp6");

function hello16(){
    event.preventDefault();
}
function hello17(){
    console.log("input changed");
    console.log(inp6.value);
}
form3.addEventListener("submit",hello16);
inp6.addEventListener("change",hello17);//in place of change try("input")

//text editor creating paragraph content as we type in input box
let para4=document.querySelector("#para4");
let inp7=document.querySelector("#inp7");

function hello18(){
    console.log(inp7.value);
     para4.innerText=inp7.value;
}
inp7.addEventListener("input",hello18);










