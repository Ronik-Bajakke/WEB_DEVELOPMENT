//For loop
for(let j=1;j<=5;j=j+1){
    console.log("Hello World");
}

//to calculate sum of n natural numbers
let n=prompt("enter a number");
let count=0;
for(let k=1;k<=n;k=k+1){
    count=count+k;
}
console.log(count);

//while loop
let l=1;
while(l<=10){
console.log("l=",l);
l=l+1;
}

//do while loop
let m=1;
do{
    console.log("m=",m);
    m=m+1;
}
while(m<=5);

//for of loop
let str="RonikBajakke";
for(let n of str){
    console.log("n=",n);
}

//for of loof example
let name="Ram";
for(let n of name){
    console.log("n=",n);
}

//for of loop calculating string size
let letter="HelloWorld";
let count1=0;
for(let o of letter){
    console.log(o);
    count1=count1+1;
}
console.log(count1);

//for in loop
const student={
    name:"Ronik",
    age:20,
    cgpa:9.22,
    grade:"A"
};
for(let p in student){
    console.log(student[p]);
}

//print even numbers from 0 to 100
for(let i=0;i<=100;i=i+1){
    if(i%2==0){
        console.log(i);
    }
   
}

//keep taking input from the user until user enters correct number
let gamenum=10;
let guess=prompt("enter your guessed number");

while(guess!=gamenum){
    guess=prompt("enter your guessed number");


}
console.log("you entered correct number");

//String
let string="Apna college";
console.log(string);
console.log(string.length);
console.log(string[1]);

//string 
let string1=`this is an sentence`;
console.log(string1);
console.log(typeof string1);

//student2 
const object={
    item:"pen",
    price:10,
};
console.log("The cost of ",object.item ,"is",object.price,"rupees");

//using template literals
let output=`The cost of ${object.item} is ${object.price} rupees`;
console.log(output);

//escape character \n
let college="APNA\nCOLLEGE";
console.log(college);
console.log(college.length);

//escape statement \t
let college1="APNA\tCOLLEGE";
console.log(college1);

//using methods uppercase, lowercase and trim
let sentence="           This is an english sentence        ";
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.trim());

//slicing
let place="Sadalga";
console.log(place.slice(0,4)); //0,1,2,3 index are only taken and not 4th
console.log(place.slice(1));   //if end is not mentioned then it will print all

//concatination
let state="Karnataka";
let district="Belgavi";
let result1=state.concat(district);  //method 1 using concat
console.log(result1); 
let result2=state+district;           //method 2 using + symbol to add
console.log(result2);
let result3="I am proud to be in "+ state + district;  //method 3 by using a sentence and using + symbol
console.log(result3);

//replace
let word="Hellololololo";
console.log(word);
console.log(word.replace("H","Y"));
console.log(word.replace("Hell","K"));
console.log(word.replace("lo","p"));
console.log(word.replaceAll("lo","p"));

//charAt to see a character at a specific index
let word2="HiWorld";
console.log(word2.charAt(0));
console.log(word2.charAt(3));

//question
let fullName=prompt("Enter your full name");
let x="@";
let y=fullName.length;
let output1=x+fullName+y;
console.log(output1);


