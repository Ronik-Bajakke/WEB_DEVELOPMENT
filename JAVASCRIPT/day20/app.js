//event bubbling
let div1=document.querySelector("#div1");
let ul1=document.querySelector("#ul1");
let lis=document.querySelectorAll(".lis");

function hello(){
    console.log("div was clicked");
}
function hello1(){
    console.log("ul was clicked");
    event.stopPropagation();
}
function hello2(){
    console.log("li was clicked");
    event.stopPropagation();

}

div1.addEventListener("click",hello);
ul1.addEventListener("click",hello1)
for(item of lis){
    item.addEventListener("click",hello2);
}

//todo app
let input=document.querySelector("input");
let btn1=document.querySelector("#btn1");
let ul2=document.querySelector("#ul2");



function hello3(){
    let lists=document.createElement("li");
    lists.classList.add("lis1")
    lists.innerText=input.value;
    ul2.appendChild(lists);
    input.value="";
    let btn2=document.createElement("button");
    btn2.innerText="Delete";
lists.appendChild(btn2);
btn2.classList.add("del1");
}
btn1.addEventListener("click",hello3);

function hello5(event){
    console.dir(event);
    console.dir(event.target);
    console.dir(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement;
        par.remove();
    }



}

ul2.addEventListener("click",hello5);















// let lis1=document.querySelectorAll(".lis1");
// let del1=document.querySelectorAll(".del1");
// function hello4(){
//     let par=this.parentElement;
//     par.remove();
// }
// for(detet of del1){
//     detet.addEventListener("click",hello4);
// }

