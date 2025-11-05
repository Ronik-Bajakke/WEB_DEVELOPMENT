//for loop
for(let i=0;i<=5;i=i+1){
    console.log(i);
}

//print odd numbers between 1 to 15
for(let i=1;i<=15;i=i+1){
    if(i%2==1){
        console.log(i);
    }
}
//or
for(let i=1;i<=15;i=i+2){
    console.log(i);
}

//print all even numbers between 2 and 10
for(let i=2;i<=10;i=i+2){
    console.log(i);
}
//or
for(let i=1;i<=10;i=i+1){
    if(i%2==0){
        console.log(i);
    }
}

//infinite loop
// for(let i=1;;i=i+1){
//     console.log(i);
// }
// for(let i=1;i>0;i=i+1){
//     console.log(i);
// }

//table of 5
for(let i=1;i<=10;i=i+1){
    console.log(i*5);
}
//or
for(let i=5;i<=50;i=i+5){
    console.log(i);
}

//inputing a number and printing a table
let num=prompt("enter a number");
for(let i=1;i<=10;i=i+1){
    console.log(num*i);
}
//or
let num1=prompt("enter a number");
num1=parseInt(num1);
for(let i=num1;i<= num1*10;i=i+num1){
    console.log(i);
}

//nested loop
for(let i=1;i<=3;i=i+1){
    for(let j=1;j<=3;j=j+1){
        console.log(j);
    }
}

//while loop
let i=1;
while(i<=10){
    console.log(i);
    i=i+1;
}

//favourite movie
let favMovie="avatar";
let guess=prompt("enter movie");
while((guess!=favMovie)&&(guess!="quit")){
    console.log("wrong movie");
    guess=prompt("enter movie");
}

//break
for(let i=1;i<=10;i=i+1){
    if(i==3){
        break;
    }
    console.log(i);
}

//loops with arrays
let fruits=["apple","mango","orange","banana"];
for(let i=0;i<=fruits.length;i=i+1){
    console.log(i,fruits[i]);
}

//nested loops for nested arrays
let hero=[["spider","iron","captain"],["bat","shakti","hulk"]];
for(let i=0;i<2;i=i+1){
    for(let j=0;j<=2;j=j+1){
        console.log(hero[i][j]);
    }
}

//for of loop
let fruits1=["mango","apple","orange","banana"];
    for(fruit of fruits1){
        console.log(fruit);
    }

//nested for of loop   
let heroes=[["spider","iron","captain"],["bat","shakti","hulk"]];
for(list of heroes){
    for(hero1 of list){
        console.log(hero1);
    }
}

//to do app
let todo=[];
let req =prompt("please ener your request");
console.log(req);
while(true){
    if(req=="quit"){
        console.log("quiting app");
        break;
    }
    else if(req=="list"){
        for(let i=0;i<=todo.length;i=i+1){
            console.log(i);
        }
    }
    else if(req=="add"){
        let item=prompt("please enter the task you want to add");
        todo.push(item);
        console.log("item added");
    }
    else if(req="delete"){
        let idx=prompt("enter the task index you want to delete");
            todo.splice(idx,1);
            console.log("task deleted");
    }
    else{
        console.log("request is wrong")
    }


    req =prompt("please ener your request");
}
