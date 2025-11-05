//object
let student={
    name:"ronik",
    age:21,
    marks:92.25
};
console.log(student);

let student1=["ronik",23,92.25];
console.log(student1);

//array inside an object
let item={
    price:100,
    gst:18,
    discount:50,
    colors:["red","yellow"]
};
console.log(item);

//object for an twitter post
let twitter={
    username:"ronik",
    content:"Indian enterpreneurs",
    likes:100,
    reposts:3,
    tags:["ronik","rohit","rahul"]
};
console.log(twitter);
//get
//string type operator
console.log(twitter["content"]);
//dot operator
console.log(twitter.content);
console.log(twitter.likes);
console.log(twitter.username[2]);
console.log(twitter.tags);
console.log(twitter.tags[0]);
console.log(twitter.tags[1][2]);

let prop="repost";

//js converts object keys to string
let obj={
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
};
console.log(obj);
console.log(obj[1]);
console.log(obj[true]);

//add update an object
let student2={
    name:"ronik",
    age:23,
    city:"bang",
    marks:[20,30,40]
};
//change city name
student2.city="mumbai";
console.log(student2);
//add new key value pair
student2.gender="male";
console.log(student2);
//change 23 to A
student2.age="A";
console.log(student2);
//delete
delete student2.marks;
console.log(student2);

//nested object
let classInfo={
    ronik:{
        grade:"A",
        city:"Belgavi"
    },
    rohit:{
        grade:"B",
        city:"Karwar"
    },
    Soham:{
        grade:"A+",
        city:"Begalkot"
    }
};
console.log(classInfo);
console.log(classInfo.ronik);
console.log(classInfo.ronik.city);

//nested array of object
let classInfo1=[
    {
        name:"ronik",
        grade:"a",
        city:"beng"
    },
    {
        name:"rohit",
        grade:"b",
        city:"karwar"
    },
    {
        name:"soham",
        grade:"c",
        city:"belgavi"
    }
];
console.log(classInfo1);
console.log(classInfo1[1]);
console.log(classInfo1[1].name);
classInfo1[1].gender="male";
console.log(classInfo1[1]);

//math objext
console.log(Math);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.pow(3,2));
console.log(Math.ceil(3.6765));
console.log(Math.floor(3.6765));
console.log(Math.random());
console.log(Math.abs(-20));

//math random
let num=Math.random();
console.log(num);
num=num*10;
console.log(num);
num=Math.floor(num);
console.log(num);
console.log("hello");
num=num+1;
console.log(num);

//short method
// Math.random()*10
console.log(Math.floor(Math.random()*5)+1);

//random numbers between 1 and 100
console.log(Math.floor(Math.random()*100+1));

//random numbers between 1 and 5
console.log(Math.floor(Math.random()*5+1));

//random numbers between 21 and 25
console.log(Math.floor(Math.random()*5+1+20));

//guessing game
let n=prompt("enter a maximum tilll which you want to guess");
console.log(n);
let number=Math.floor(Math.random()*n+1);
console.log(number);
let guess=prompt("guess your number");
while(true){  //until condition true
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    else if(guess==number){
        console.log("winner");
        break;
    }
    else{
         guess=prompt("guess your number agin");
    }
}




