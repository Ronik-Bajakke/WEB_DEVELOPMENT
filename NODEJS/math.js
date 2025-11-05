let sum=function(a,b){
    console.log(a+b);
}
let mul=function(a,b){
    console.log(a*b);
}
const g=9.8;
const pi=3.14;

let obj={
    sum1:sum,
    mul:mul,
    g:g,
    pi:pi
};

module.exports=obj;