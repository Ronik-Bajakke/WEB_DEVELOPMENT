//q1
let input1=document.createElement("input");
let btn1=document.createElement("button");
btn1.innerText="Click Me";
let body1=document.querySelector("body");
body1.prepend(input1);
body1.prepend(btn1);

//q2
input1.setAttribute("placeholder","Username"); //username seen in website
btn1.setAttribute("id","btn"); //see style,yellow color got applied due to #btn id

//q3
//button selection using query selector
let btn2=document.querySelector("#btn");
btn2.style.color="white"; //button successfully selected as button color is changed
btn2.style.backgroundColor="blue";

//q4
let heading=document.createElement("h1");
body1.prepend(heading);
heading.innerText="DOM Practice";
heading.style.textDecoration="underline";
heading.style.color="purple";

//q5
let para=document.createElement("p");
body1.prepend(para);
para.innerHTML="Apna college <b>Delta</b> Practice ";
