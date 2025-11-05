//q1
// let array1=[1,2,3,4,5];
// function square(el){
//     return el*el;
// }
// let double1=array1.map(square);
// console.log(double1);

// function sum(el,res){
//     return res+el;
// }
// let double2=array1.reduce(sum);
// console.log(double2);

// let avg=double2/array1.length;
// console.log(avg);

let array1=[1,2,3,4,5];
// function square(){}
// let square=function(){}
// let square=()=>
let double1=array1.map((el)=>{
    return el*el;
});
console.log(double1);

let double2=array1.reduce((res,el)=>{
    return res+el;
});
console.log(double2);

let avg=double2/array1.length;
console.log(avg);

//q2
let array2=[1,2,3,4,5];
let double3=array2.map((el)=>{
    return el+5;
});
console.log(double3);

//q3
let array3=["ronik","rohit","rahul"];
let double4=array3.map((el)=>{
    return el.toUpperCase();
});
console.log(double4);

//q4 and q5 dont know


