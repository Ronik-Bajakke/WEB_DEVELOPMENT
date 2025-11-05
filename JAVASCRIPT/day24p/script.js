//Normal function
function myFunction(){
    console.log("Well  Come To Apna COllege");
    console.log("Hello Java Script");
}
myFunction();

//function using parameter
function parameterFuntion(msg){
    console.log(msg);
}
parameterFuntion("I Love Java Script");

//function to calculate the sum
function sum(a,b){
    console.log(a+b);
}
sum(2,3);

//function with the return type
function substract(c,d){
    let sub=c-d;
    return sub;
}

sub=substract(5,2);  //instead of sub you can use any other variable
console.log(sub);

//Arrow Functions example 1
const division=(e,f)=>{
    console.log(e/f);
}

//Arrow function example 2
const printHello=()=>{
    console.log("Print Hello");
}
printHello();

// Question vowel
function vowel(){
    let string=prompt("enter any string");
    let length=string.length;
    let count=0;
    for(let i=0;i<length;i=i+1){
        if(string[i]=='a'||string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u'||string[i]=='A'||string[i]=='E'||string[i]=='I'||string[i]=='O'||string[i]=='U'){
            count=count+1;
        }

    }
    console.log(count);
}
vowel();

// Question vowel using arrow method
const vowel1=()=>{
    let string1=prompt("Enter your string here");
    let count1=0;
    let length1=string1.length;
    for(let j=0;j<length1;j=j+1){
        if(string1[j]=='a'||string1[j]=='e'||string1[j]=='i'||string1[j]=='o'||string1[j]=='u'||string1[j]=='A'||string1[j]=='E'||string1[j]=='I'||string1[j]=='O'||string1[j]=='U'){
            count1=count1+1;
        }
    }
    console.log(count1);
    
}

vowel1();

//for each in array using function
let arrr=[1,2,3,4,5];
arrr.forEach(function printval(val){
    console.log(val);
})

//for each in array using arrow function
let arrr1=[10,20,30,40,50];
arrr1.forEach((val1)=>{
    console.log(val1);
})




