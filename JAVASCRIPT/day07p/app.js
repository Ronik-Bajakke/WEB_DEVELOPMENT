//practice questions
//q1
let array1=[0,1,2,3,4,5,6,7,8,9,10];
let num=prompt("enter the array you want to delete")
for(let i=0;i<=array1.length;i=i+1){
    if(array1[i]==num){
        array1.splice(i,1);
    }
   
}
console.log(array1);

//q2
let number = 2871552;
let count = 0;
let copy = number;
while(copy > 0) {
count++;
copy = Math.floor(copy/10);
}
console.log(count);
//q3
let number2 = 287152;
let sum = 0;
let copy1 = number2;
while(copy1 > 0) {
digit = copy1 % 10;
sum+= digit;
copy1 = Math.floor(copy1/10);
}
console.log(sum);




//q4
let n=prompt("enter n");
let factorial=1;
for(let i=1;i<=n;i=i+1){
    factorial=factorial*i;
}
console.log(factorial);

//q5
let array5=[0,1,2,4,13,345,22,4,212,45];
let max=0;
for(let i=0;i<=array5.length;i=i+1){
    if(array5[i]>max){
        max=array5[i];
    }
    console.log(max);
}
