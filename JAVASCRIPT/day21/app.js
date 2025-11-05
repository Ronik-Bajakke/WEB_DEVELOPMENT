//visualizing the call stack
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans=two()+one();
    console.log(ans);
}
three();

//simple  setTimeout after different delay time
let h1=document.querySelector("h1");
setTimeout(function(){
    h1.style.color="red";
},1000);
setTimeout(function(){
    h1.style.color="yellow";
},2000);
setTimeout(function(){
    h1.style.color="green";
},3000);

//setTimeout 1sec delay for next event to occur,butt all occur at a time hence final color green
let h2=document.querySelector("h2");
function hello(color,delay){
    setTimeout(function(){
        h2.style.color=color;
    },delay);
}
hello("red",1000);
hello("yellow",1000);
hello("green",1000);

//callback hell
let h3=document.querySelector("h3");

function hello1(color,delay,nextColorChange){
    setTimeout(function(){
        h3.style.color=color;
        nextColorChange();
    },delay);
}
hello1("red",1000,()=>{
    hello1("orange",1000,()=>{
        hello1("green",1000);
    })
});

// promises
function savetoDb1(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed=Math.floor(Math.random()*10)+1);
    if(internetSpeed>4){
        success();
    }
    else{
        failure();
    }
}
savetoDb1("apna college 1334",function (){
    console.log("Success grannted");
savetoDb1("Hello",function(){
    console.log("Success granted 11");
    },function(){
        console.log("failure granted 11");
    }
);

},function (){
    console.log("failure granted");
});



// function hello1(){
//     console.log("Success grannted");
// }
// function hello2(){
//     console.log("failure granted");
// }

function savetoDb(data){
    return new Promise((success,failure)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            success("success data was saved ok");
        }
        else{
            failure("weak connection ok");
        }
    });
}
// savetoDb1("hello"); in console

//then and catch
let request=savetoDb("hi hello");
request.then(()=>{
    console.log("promise fulfilled sss");
})
.catch(()=>{
    console.log("promise was rejected nooo");
})


// let request1=savetoDb("hi hello ok");
// request1.then(()=>{
//     console.log("promise fulfilled sss 2");
// })
// .then(()=>{
//     console.log("data 1 saved");
//     return savetoDb("hello ok 2");
// })
// .then(()=>{
//     console.log("data 2 saved");
// })
// .catch(()=>{
//     console.log("data is not saved");
// })
let request1=savetoDb("hi hello ok");
request1.then((result)=>{
    console.log("promise fulfilled sss 2");
    console.log(result);
})
.then((result)=>{
    console.log("data 1 saved");
    console.log(result);
    return savetoDb("hello ok 2");
})
.then((result)=>{
    console.log("data 2 saved");
    console.log(result);
})
.catch((error)=>{
    console.log(error);
    console.log("data is not saved");
})

//promises to callback
h4=document.querySelector("h4");

function changeColor1(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h4.style.color=color;
            resolve("color changed");
        },delay);
    });
}
changeColor1("red",1000)
.then(()=>{
    console.log("red color was changed");
    return changeColor1("orange",1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor1("green",1000);
})
.then(()=>{
    console.log("greeen color was changed");
})
.catch(()=>{
    console.log("blue color was changed");
});




