//str.trim 
let msg="   hello    ";
console.log(msg);
let x=msg.trim();
console.log(x);
let password=prompt("set your password");
console.log(password.trim());

//strings are immutable

//str.UpperCase()
let str1="hello public";
console.log(str1);
let x1=str1.toUpperCase();
console.log(x1);

//str.LowerCase()
let str2="Hello MAMA";
console.log(str2);
let x2=str2.toLowerCase();
console.log(x2);

// method argument index of
//str.indexOf("a")
let str3="iloveCoding";
console.log(str3);
let x3=str3.indexOf("love");
console.log(x3);
let x4=str3.indexOf("j");
console.log(x4);
let x5=str3.indexOf("o");
console.log(x5);

//method chaining
let str4="   hi  ";
console.log(str4);
let x6=str4.toUpperCase().trim();
console.log(x6);

//slice str.slice(1);
let str5="iLoveCoding";
let x7=str5.slice(5);
console.log(x7);
let x8=str5.slice(1,4);
console.log(x8);
let x9=str5.slice(0,str5.length);
console.log(x9);
let x10=str5.slice(-2);
console.log(x10);

//replace str.replace("a","b");
let str6="ILoveCoding";
let x11=str6.replace("Love","Do");
console.log(x11);
let x12=str6.replace("o","x");
console.log(x12);

//repeat str.repeat(3);
let str7="mango";
let x13=str7.repeat(3);
console.log(x13);

//practice questiom
let msg1="help";
let x14=msg1.trim().toUpperCase();
console.log(x14);

//practice question
let name="ApnaCollege";
let x15=name.slice(4,9);
console.log(x15);
let x16=name.indexOf("na");
console.log(x16);
let x17=name.replace("Apna","our");
console.log(x17);

//practice question
let name1="ApnaCollege";
let x18=name.slice(4);
console.log(x18);
let x19=name1.replace("l","t");
console.log(x19);
let x20=x19.replace("l","t");
console.log(x20);
//or both at a time by name.replace("l","t").replace("l","t")

//array
let student1="ronik";
let student2="rohit";
let student3="rahul";

//array of string
let student=["ronik","rohit","rahul"];
console.log(student);
console.log(student[2]);
console.log(student[0][0]);
console.log(student[0].length);

//array of int
let num=[1,2,3,4];
console.log(num[2]);
console.log(typeof(num));

//array of different types together
let info=["ronik",22,"rohit",33];
console.log(info);

//empty array
let emptyarray=[];
console.log(emptyarray);
console.log(emptyarray[0]);
console.log(emptyarray.length);

//mutable strings
let fruits=["apple","mango","grappers"];
fruits[0]="banana";
console.log(fruits);

//methods
let cars=["bmw","mercedis","swift","maruti"];
console.log(cars);
let y1=cars.push("tata");
console.log(cars);
let y2=cars.pop();
console.log(cars);
let y3=cars.unshift("farari");
console.log(cars);
let y4=cars.shift();
console.log(cars);

//practice question
let month=["jan","jul","may","aug"];
let z1=month.shift();
let z2=month.shift();
let z3=month.unshift("jun");
let z4=month.unshift("jul");
console.log(month);

//indexof
let primary=["red","yellow","orange"];
let z5=primary.indexOf("yellow");
console.log(z5);
let z6=primary.indexOf("Yellow");
console.log(z6);
let z7=primary.includes("red");
console.log(z7);
let z8=primary.includes("green");
console.log(z8);

//concat
let color1=["v","i","b"];
let color2=["g","y","o"];
let z9=color1.concat(color2);
console.log(z9);
//reverse
let z10=color1.reverse();
console.log(z10);

//slice
let alphabet=["a","b","c","d","e"];
let a1=alphabet.slice();
let a2=alphabet.slice(2);
let a3=alphabet.slice(2,3);
let a4=alphabet.slice(-2);
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

//splice
let number=[0,1,2,3,4,5,6,7,8];
let b1=number.splice(7);
console.log(b1);
console.log(number);
let b2=number.splice(0,3);
console.log(b2);
console.log(number);
let b3=number.splice(0,0,"he","she");
console.log(b3);
console.log(number);

//sort
let days=["mon","tue","wed","thur"];
let d1=days.sort();
console.log(d1);

let mark=[12,13,67,89,3,56];
let d2=mark.sort();
console.log(d2);

//practice question
let start=["jan","jul","mar","aug"];
let l1=start.splice(0,1);
let l2=start.splice(1,0,"jun");
console.log(start);

//practice question
let lang=["c","c++","html","javascript","python","java","c#","sql"];
let ll1=lang.reverse();
console.log(ll1.indexOf("javascript"));

//constant
let arr1=[1,2,3];
let bb1=arr1.push(4);
console.log(arr1);

//nested srray
let nums=[[1,2],[3,4],[5,6]];
console.log(nums);
let n1=nums[0];
console.log(n1);
console.log(nums[0][1]);
console.log(nums[1].length);

//practice question
let game=[[1,null,0],[null,1,null],[0,null,1]];
console.log(game);




