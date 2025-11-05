let marks=[40,55,76,85,90];
console.log(marks);
console.log(marks[1]);
console.log(marks.length);
console.log(typeof marks);
marks[1]=65;
console.log(marks);

let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let x=numbers.length;
for(let k=0;k<=x;k=k+1){
    console.log(numbers[k]);
}

//for of loop
for(let j of numbers){
    console.log(j);
}

//question 1 normal method
 let studentMarks=[85,97,44,37,76,60];
 let avg=studentMarks[0]+studentMarks[1]+studentMarks[2]+studentMarks[3]+studentMarks[4]+studentMarks[5];
 let avg2=avg/6;
 console.log(avg2);

 //question 1 using for loof
 let marksStudent=[85,97,44,37,76,60];
 let length=marksStudent.length;
 let sum=0;
 for(let l=0;l<length;l=l+1){
sum=sum+marksStudent[l];
 }
 let average=sum/length;
 console.log(average);

 //question 1 using for of loop
 let marksStudent2=[85,97,44,37,76,60];
 let len=marksStudent2.length;
 let sum1=0;
 for(let m of marksStudent2){
    sum1=sum1+m; 
 }
 let ave=sum1/len;
 console.log(ave);

 //question 2 using for loop
 let price=[250,645,300,900,50];
 let y=price.length;
 for(let i=0;i<y;i=i+1){
    price[i]=price[i]- price[i]/10;
 }
 console.log(price);

 //push
 let fruits=["Apple","Mango","Orange"];
 console.log(fruits);
 let add=fruits.push("Banana");
 console.log(fruits);
 let add1=fruits.push("Pineapple","Pompgranade","Watermillon");
 console.log(fruits);
 let delete1=fruits.pop();
 console.log(fruits);
 console.log(delete1);
 let change=fruits.toString();
 console.log(change);

 //concat,unshift,shift
 let x1=[1,2,3];
 let x2=[4,5,6];
 let x3=x1.concat(x2);
 console.log(x3);
 let x4=x1.shift();
 console.log(x1);
 let x5=x1.unshift(10,20,30);
 console.log(x1);

 //slice 
 let animals=["Cat","Dog","Tiger","Lion","Donkey","Horse"];
 console.log(animals);
 let sliceFunction=animals.slice(1,3);
 console.log(sliceFunction);
 console.log(animals);

 //splice
 let birds=["sparrow","Crow","Peapock","Pigeon","Parrot"];
 console.log(birds);
 //normal
 let spliceFuntion=birds.splice(1,"KingFisher","Nightangle");
 console.log(birds);

//addd
// let spliceAdd=birds.splice(1,0,"KingFisher");
// console.log(birds);

//delete
// let deletesplice=birds.splice(2,1);
// console.log(birds);

//delete
// let replacesplice=birds.splice(2,1,"KingFisher");
// console.log(birds);

//question of companies
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
let deleteshift=companies.shift();
console.log(companies);
let replacesplice1=companies.splice(1,1,"Ola");
console.log(companies);
let addAmazon=companies.push("Amazon");
console.log(companies);







 