//async basic
async function greet(){
    // avda.d();
    // throw "some random error"; 
    return "Hello!";
}
let x=greet();  //write greet(); directly in console
console.log(x);

//async function execution
async function greet1(){
    // throw "error bero";
    return "Hello Kaka";
}
let request1=greet1();
request1.then((result)=>{
    console.log("Promise was resolved");
    console.log(result);   //Hello Kaka
})
.catch((error)=>{
    console.log("Promise was rejected");
    console.log(error);
})

//async with wait
function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}
async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();

}
//aysnc and wait eg 2
function getNum1(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // let num=Math.floor(Math.random()*5)+1;
            // if(num>3){
            //     reject("promise rejected");
            // }
            let h1=document.querySelector("h1");
            h1.style.color=color;
            resolve("color changed");
        },delay);
    });
}
async function demo1(){
//    try{
    await getNum1("red",1000);
    await getNum1("yelloW",1000);
    await getNum1("orange",1000);
    await getNum1("blue",1000);
// } 
// catch(err){
//     console.log("error caught");
//     console.log(err);
// }

    let a=10;
    console.log(10);
}
