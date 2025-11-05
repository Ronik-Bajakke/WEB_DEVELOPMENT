//operators -arithmatic,unarry,assignment,comperision,logical
//if eles,nested
//switch
//alert,prompt
//error,warn

//operators
//arithmatic +,-,*,/,%
let a=10;
let b=3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
//unarry a++,++a,a--,--a
let c=10;
c++;
console.log(c); //10,11
++c;
console.log(c); //12,12
c--;
console.log(c); //12,11
--c;
console.log(c); //10,10
//comperision <,>,<=,>=,==
let d=10;
let e=11;
console.log(d>e);
console.log(d<e);
//assignment =,+=,-=,*=,/=
let f=10;
console.log(f); //10
f+=20;
console.log(f); //30
f-=20;
console.log(f); //10
f*=20;
console.log(f);//200
f/=20;
console.log(f);//10
//logic
//and
let g=(1<0&&3<4);
console.log(g);
//or
let h=(1<0&&3<4);
console.log(h);
//not
let i=!(1<0&&3<4);
console.log(i);

//if, else if. else
let age=10;
if(age>=18){
    console.log("can vote");
}
else if(age>=13){
    console.log("tennage");
}
else{
    console.log("child")
}
//nested if else
let num=-9;
if(num>=1){
    console.log("an positive number")
    if(num%2==0){
        console.log("even")
    }
    else{
        console.log("odd number")
    }
}
else{
    console.log("negative number")
}
//switch
let day=5;
switch(day){
    case 1:console.log("sun");
    break;
    case 2:console.log("mon");
    break;
    case 3:console.log("tue");
    break;
    case 4:console.log("wed");
    break;
    case 5:console.log("thur");
    break;
    case 6:console.log("fri");
    break;
    case 7:console.log("sat");
    break;
}

//alert prompt
let j=alert("hi everyone");
let k=prompt("enter your name");
console.log(k);

//warn error
console.error("this is an erron");
console.warn("this is an warning");

//practice questio n
//q1
let num1=12;
if(num1%10==0){
    console.log("good number");
}
else{
    console.log("bad number");
}

//q2
let name=prompt("enter the name");
let age1=prompt("enter the age");
console.log(name,"is",age1,"year old");
console.log(`${name} is ${age1} year old`);

//q3
let quarter=1;
switch(quarter){
    case 1:console.log("Jan,Feb.Mar");
    break;
    case 2:console.log("apr,may.jun");
    break;
    case 3:console.log("Jul,aug.sept");
    break;
    case 4:console.log("oct,nov.dec");
    break;
}

//q4
let string="alpt";
if((string[0]=="a"||string[0]=="A")&&(string.length>=5)){
    console.log("golden string")
}
else{
    console.log("not golden");
}

//q5
let num2=1;
let num3=7;
let num4=3;
if(num2>num3&&num2>num4){
    console.log(`greatest number is${num2}`);
}
else if(num3>num2&&num3>num4){
    console.log(`greatest number is${num3}`);
}
else{
    c
    console.log(`greatest number is${num4}`);
}

//q6
let numone=25642;
let numtwo=122;
if(numone%10==numtwo%10){
    console.log("end with same digit");
}
else{
    console.log("dont end with same digit");
}