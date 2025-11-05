//string
//trim
let string1="     ronik ";
console.log(string1);
console.log(string1.trim());

//toUpperCase toLowerCase
let string2="Ronik Bajakke";
console.log(string2);
console.log(string2.toUpperCase());
console.log(string2.toLowerCase());

//slice
let string3="apna college";
console.log(string3.slice(3));//a college
console.log(string3.slice(2,5)); //na 
console.log(string3.slice(0,string3.length)); //apna college
console.log(string3.slice(-4));//12-4=8 lege (or last 4 letters)

//repeat
let string4="I Love Coding ";
console.log(string4.repeat(4));

//replace
let string5="this is me";
console.log(string5.replace("this","it"));

//indexof
let string6="Hitler rulled over germany";
console.log(string6.indexOf("Hitler")); //0
console.log(string6.indexOf("i")); //1
console.log(string6.indexOf("ver")); //15

//arrays
//indexing
let array1=[0,1,2,3,4];
console.log(array1[0]); //0
console.log(array1[2]); //2
console.log(array1[3]); //3
 
let array2=["ronik","rohit","revan"];
console.log(array2[0]); //ronik
console.log(array2[0][2]); //n

//methods push pop unshift shift
let array3=["tata","alto","maruti"];
array3.push("swift");
console.log(array3);
array3.pop();
console.log(array3);
array3.unshift("bugati");
console.log(array3);
array3.shift();
console.log(array3);

//indexOf
let array4=["hello","hi","bye"];
console.log(array4.indexOf("hello")); //0
console.log(array4.indexOf("bye")); //2
console.log(array4.indexOf("i")); //-1

//includes
let array5=["o","my","god"];
console.log(array5.includes("o")); //true
console.log(array5.includes("god"));//true
console.log(array5.includes("d")); //false

//concat
let array6=["how","are","you"];
let array7=[1,2,4];
let array8=array6.concat(array7);
console.log(array8);

//reverse
let array9=["o","my","god",1,6];
console.log(array9.reverse());

//slice
let array10=["our","college","is","not","good"];
console.log(array10.slice(2)); 
console.log(array10.slice(1,3));
console.log(array10.slice(0,array10.length));
console.log(array10.slice(-2));

//splice
let array11=["my","name","is","ronik"];
array11.splice(0,0,"ok");
console.log(array11);
array11.splice(0,1);
console.log(array11);
array11.splice(0,1,"hoe");
console.log(array11);

//sort
let array12=["my","name","is","ronik"];
console.log(array12.sort());

//practice question

//q1
let arrayq1=[0,1,2,3,4,5,6,7,8];
let n=prompt("enter the n till which you want output array");
console.log(arrayq1.slice(0,n));


//q2
let arrayq2=[0,1,2,3,4,5,6,7,8];
let m=prompt("enter the n backward elements till which you want output array");
console.log(arrayq2.slice(-m));


//q3
let stringq3="";
if(stringq3.length==0){
    console.log("string is empty");
}
else{
    console.log("string is not empty")
}

//q4
let stringq4="GoodWork";
let stringq41=stringq4.toLowerCase();
let op=prompt("enter the index at which you want to search");
if(stringq4[op]==stringq41[op]){
    console.log("these are  in lower case");
}
else{
    console.log("not lower case");
}

//q5
let newstring=prompt("enter a string");
console.log(newstring.trim());

//q6
let arrayq12=["hi","bye","ok","over"];
let string34=prompt("enter a string hi bye ok over");
for(let i=0;i<=arrayq12.length;i=i+1){
    if(string34==arrayq12[i]){
        console.log("same")
    }
    else{
        console.log("no present");
    }
}












