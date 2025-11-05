//for each using function name
let array=[1,2,3,4,5];
function print(el){
    console.log(el);
    }

array.forEach(print);

//for each using function defination
// function print(el){}
// print=function(el){}
// print=(el)=>{}

let array1=[1,2,3,4,5];
array1.forEach((el)=>{
    console.log(el);
    });

//array of objects
let arr=[{
    name:"ronik",
    marks:20
},{
    name:"rohit",
    marks:30
},{
    name:"rohul",
    marks:40
}];
// console.log(arr); 
// arr.forEach((el)=>{
//     console.log(el);
//     console.log(el.marks);
// }) 
//by using name
function ook(el){
    console.log(el);
    console.log(el.marks);
}
arr.forEach(ook);

//map with function defination
let num=[1,2,3,4];
let double=num.map((el)=>{
    return el*2;
});
console.log(double);

//map with function name
let num1=[1,2,3,4,5];
function ok(el){
    return el*2;
}
let double1=num1.map(ok);
console.log(double1);

//map for object using function name
let student=[{
    name:"ronik",
    marks:89
},{
    name:"rohit",
    marks:90
},{
    name:"rohul",
    marks:64
}];

function cgp(el){
    return el.marks/10;
}
let newcgp=student.map(cgp);
console.log(newcgp);

//map for object using function defination
let student1=[{
    name:"ronik",
    marks:89
},{
    name:"rohit",
    marks:98
},{
    name:"rohul",
    marks:78
}];

// function cgp1(el){}
// let cgp1=function(el){}
// let cgp1=(el)=>{}
let newcgp1=student1.map(el=>{
    return el.marks/10;
});
console.log(newcgp1);

//filter
//using function name
let nums=[1,2,3,4,5,6,7,8,9,10];

function even(el){
    return el%2==0;
}
let neweven=nums.filter(even);
console.log(neweven);

//using function defination
let nums1=[1,2,3,4,5,6,7,8,9,10];
// function even(el){}
// let even=function(el){}
// let even=(el)=>{}
 let neweven1=nums1.filter((el)=>{
    return el%2==0;
 });   
 console.log(neweven1);

 //Every 
 //function name
 let array2=[1,2,3,4,5,6,7,8];
 function truee(el){
    return el%2==0;
 }
 let n1=array2.every(truee);
 console.log(n1);

 //function defination
 let array21=[2,4,6,8];
//  function truee1(el){}
//  let truee1=function(el){}
//  let truee1=(el)=>{}
 let n2=array21.every((el)=>{
    return el%2==0
 });
 console.log(n2);

 //some
 //function name
 let array211=[1,2,3,4,5,6,7,8];
 function truee(el){
    return el%2==0;
 }
 let n11=array2.some(truee);
 console.log(n11);

  //function defination
  let array212=[2,4,6,8];
  //  function truee1(el){}
  //  let truee1=function(el){}
  //  let truee1=(el)=>{}
   let n21=array21.some((el)=>{
      return el%2==0
   });
   console.log(n21);

   //reduce
   //function name
   let arr3=[1,2,3,4];
   function ooa(res,el){
    return res+el;
   }
   let b1=arr3.reduce(ooa);
   console.log(b1);

   //function defination
   let arr31=[1,2,3,4,5];
//    function ooa1(){}
//    let ooa1=function(){}
//    let ooa=(res,el)=>{}
    let b2=arr31.reduce((res,el)=>{
        return res+el;
    });
    console.log(b2);

 //reduce to find maximum of given array numbers
 //using function name
 let array4=[3,4,5,7,8,9,12,45,15];
 function findMax(max,el){
    if(el>max){
        return el;
    }
    else{
        return max;
    }
 } 
 let b3=array4.reduce(findMax);
 console.log(b3);

 //using function defination
 let array41=[3,4,5,7,8,9,12,45,15];
//  function findMax(){}
//  let findMax1=function(){}
//  let findMax1=(max,el)=>{}
let b4=array41.reduce((max,el)=>{
    if(el>max){
        return el;
    }
    else{
        return max;
    }
});    
console.log(b4);

//practice question all the numbers in an array are multiple of 10
//function name
let array5=[10,20,30,40,50];
function multi(el){
    return el%10==0;
}
let b5=array5.every(multi);
console.log(b5);

//function defination
let array51=[10,20,30,40,56];
// function multi(el){}
// let multi=function(el){}
// let multi=(el)=>{}
let b6=array51.every((el)=>{
    return el%10==0;
});  
console.log(b6);  

//practice question to find minimum number in an array
//function name
let array6=[1,2,3,4,5,6];
function findMin(min,el){
    if(el<min){
        return el;
    }
    else{
        return min;
    }
}
let b7=array6.reduce(findMin);
console.log(b7);

//function defination
let array61=[1,2,3,4,5,6];
// function findMin1(){}
// let findMin1=funtion(){}
// let findMin1=()=>{}
let b8=array61.reduce((min,el)=>{
    if(el<min){
        return el;
    }
    else{
        return min;
    }
});  
console.log(b8);

//default parameter
function sum(x,y=3){
    return x+y;
}
let oop=sum(5,6);
console.log(oop);

//spread
let array7=[10,3,4,6,7,8,10,5];
console.log(Math.min(...array7));
console.log(Math.max(...array7));
console.log(...array7);
console.log(..."Apna College");

//using spread to place elements from one array to other
let array8=[1,2,3,4,5,"ronik"];
let newArray8=[...array8];
console.log(newArray8);

//similar for string
let name="ronik bajakke";
let newname=[...name];
console.log(newname);

//combining arrays
let even1=[2,4,6,8];
let odd1=[1,3,5,7,9];
let nums2=[...odd1,...even1];
console.log(nums2);

//object
let data={
    email:"ronik@gmail.com",
    password:"abc@123"
};
let dataCopy={...data,id:123};
console.log(dataCopy);

//array to object
let array9=[1,2,3,4,5,6,7,8];
let object1={...array9};
console.log(object1);

//string to object
let string="hello";
let object2={...string};
console.log(object2);

//reset
function sum2(...args){
    for(let i=0;i<=args.length;i=i+1){
        console.log(args[i]);
    }
}
sum2(2);
sum2(3);
sum2(1,2,3,4,5);

//using reset with spread to calculate sum
function sum21(...args){
return args.reduce((sum,el)=>sum+el);
}
let ooko=sum21(1,2,3,4,5);
console.log(ooko); 

//using reset with spread to find minimum
function findmin(...args){
    return args.reduce((min,el)=>{
    if(min>el){
        return el;
    }
else{
    return min;
}
});
}
let oopo=findmin(1,2,3,4);
console.log(oopo); 

//taking message argument
function sum24(msg,...args){
    for(let i=0;i<args.length;i=i+1){
        console.log(args[i]);
    }
    console.log(msg);
}
let oopj=sum24("hello",1,2,3,4,5);
console.log(oopj);

//destructuring for arrays
let names=["ronik","rohit","revan","sagar"];
let[winner,runnerup]=names;
console.log(winner,runnerup);

let names1=["ronik","rohit","revan","sagar"];
let[winner1,runnerup1,...others]=names;
console.log(winner1,runnerup1,others); 

//destructiong for objects
let students={
    name:"ronik",
    age:21,
    class:5,
    subjects:["maths","sci","bio","eng"],
    username:"@123",
    password:123
};
//normal method
// let username=students.username;
// let password=students.password;
// console.log(username);
// console.log(password);

//method 1
// let {username,password}=students;
// console.log(username);
// console.log(password);

//method 2
// let {username:user,password:pass}=students;
// console.log(user);
// console.log(pass);

//method 3
// let {username:user,password:pass,city="Bengaluru"}=students;
//  console.log(city);

//method 4
let {username:user,password:pass ,city:loc="bangalore"}=students;
// console.log(city); not defined
console.log(loc);
 










