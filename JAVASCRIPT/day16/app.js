//window as an object
console.log(window);
console.log(document);

//dir for descriotive,list of objects
console.dir(document);
console.dir(document.all);
console.dir(document.all[8]);
console.dir(document.all[8].innerText);

//modify using this object
document.all[8].innerText="Iron Man";
console.dir(document.all[8].innerText);

//element tag
let x=document.getElementById("mainImg");
console.dir(x);

//prints id source
console.dir(document.getElementById("mainImg").src);
console.dir(x.src);

//modify src
x.src="creation_1.png";
console.log(x.src);

//null if element not found
let x1=document.getElementById("abc");
console.dir(x1);

//get element by class name
let x2=document.getElementsByClassName("oldImg");
console.dir(x2);

for(let i=0;i<x2.length;i=i+1){
    console.dir(x2[i]);
    console.dir(x2[i].src);
    x2[i].src="spiderman_img.png";

}

//if class not found then an empty collection is shown
console.dir(document.getElementsByClassName("abcs"));

//get elelment by tag name
let x3=document.getElementsByTagName("p");
console.dir(x3);
x3[1].innerText="Hello Public";

//query selector
//select one
console.dir(document.querySelector("p"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector("div a"));

//select all
console.dir(document.querySelectorAll("p"));
console.dir(document.querySelectorAll(".oldImg"));
console.dir(document.querySelectorAll("div a"));

//properties and methods
let x4=document.querySelector("p");
console.dir(x4);
console.dir(x4.innerText);
console.dir(x4.innerHTML);
console.dir(x4.textContent);
//modify
x4.innerText="my name is ronik";
x4.innerHTML="my name is <b>Ronik<b>"

//manipulating attributes
let img12=document.querySelector("img");
console.dir(img12);
//id
// console.log(img12.getAttribute("id"));
// img12.setAttribute("id","spiderman");
//setting class attribute value
console.dir(img12.getAttribute("class"));
img12.setAttribute("class","ook");
console.dir(img12.getAttribute("class"));

//manipulating style
let heading=document.querySelector("h1");
console.dir(heading);
console.dir(heading.style);
heading.style.color="purple";
heading.style.backgroundColor="yellow";

//style for anchor tags in box class
let links=document.querySelectorAll(".box a");
console.dir(links);
for(let i=0;i<links.length;i=i+1){
    links[i].style.color="yellow";
    links[i].style.backgroundColor="grey";
}

//manipulating style ,classList-tells number of class present

let img=document.querySelector("img");
console.dir(img);
console.dir(img.classList); //1 class ook

let heading1=document.querySelector("h1");
console.dir(heading1.classList); //0 class present

//add a class
heading1.classList.add("add1");
heading1.classList.add("add2");
console.dir(heading1.classList); //2 class added add1 and add2

//remove class
heading1.classList.remove("add1");
console.dir(heading1.classList); //1 class present add2

//to check if class present
let x11=heading1.classList.contains("add1"); //false
let x12=heading1.classList.contains("add2"); //true
console.log(x11,x12);

//toggle,if present delete and write false,if not present add and write true
let x21=heading1.classList.toggle("add1"); //it will add and write true
let x22=heading1.classList.toggle("add2"); //it will delete and write flase
console.log(x21,x22);

//question to make box backgroun-color to yellow
//create boxone in style.css after box with background-color yellow
let box22=document.querySelector(".box");
box22.classList.add("boxone");

//navigation
//parent element
let h4=document.querySelector("h4");
console.dir(h4.parentElement); //box class of div tag

//div wth class=box
let box=document.querySelector(".box");
console.dir(box.parentElement); //body tag
console.dir(box.children); //h4, ul
console.dir(box.childElementCount); //2

let ul=document.querySelector("ul");
console.dir(ul.parentElement); //box
console.dir(ul.children);     //li,li,li 
console.dir(ul.childElementCount); //3
console.dir(ul.children[0].nextElementSibling); //it will display li-1
console.dir(ul.children[1].previousElementSibling); //it will display li-0

//access h1 with help of img
let img2=document.querySelector("img");
console.dir(img2.parentElement); //body
console.dir(img2.previousElementSibling); //h1
console.dir(img2.previousElementSibling.style.color="red"); 

//adding element in html
//para is added at last,append body
let newpara=document.createElement("p");
console.dir(newpara);
newpara.innerText="Hi ,i am new paragraph";

let body=document.querySelector("body");
body.appendChild(newpara);

//para added at last of box
let box34=document.querySelector(".box");
box34.appendChild(newpara);

//create button and add at end of body and box
let btn=document.createElement("button");
btn.innerText="Click Me";
let body1=document.querySelector("body");
body1.appendChild(btn);
let box343=document.querySelector(".box");
box343.appendChild(btn);

let newparagraph=document.createElement("p");
newparagraph.innerText="hellobachoo";
newparagraph.append("hello");
let body54=document.querySelector("body");
body54.append(newparagraph);

//similar to append we can use prepend ,that adds at first

//insertAdjacent beforebegin,afterbegin,beforeend,afterend
let btn32=document.createElement("button");
btn32.innerText="Click Me Please";
let p=document.querySelector("p");
p.insertAdjacentElement("afterend",btn32);

let btn321=document.createElement("button");
btn321.innerText="Click Me Please once";
let body22=document.querySelector("body");
body22.appendChild(btn321);
body.removeChild(btn321);
body.remove();




















