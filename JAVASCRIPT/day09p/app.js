let student={
    name:"ronik",
    usn:251,
    age:21,
    marks:[10,20,30,40]
};
console.log(student.name);
console.log(student.usn);
console.log(student.age);
console.log(student.marks);
console.log(student.marks[2]);
student.age=22;
console.log(student.age);
delete student.usn;
console.log(student);

let classInfo={
    ronik:{
        age:20,
        year:2020,
        gender:"male"
    },
    rohit:{
        age:18,
        year:2024,
        gender:"male"
    },
};
console.log(classInfo.ronik.year);

let array=[
    {
        name:"ronik",
        age:21,
        year:2020
    },
    {
        name:"rohit",
        age:18,
        year:2004
    }
]
console.log(array[1]);

console.log(Math.abs(-12));
console.log(Math.pow(2,3));
console.log(Math.floor(9.28));
console.log(Math.ceil(9.68));
console.log(Math.random());
console.log(Math.floor(Math.random()*5)+20);

//practice question
//q1
console.log(Math.floor(Math.random()*6+1));

//q2
let car={
    name:"Tata",
    model:"Nexon",
    color:"black"
};
console.log(car.name);

//q3
let person={
    name:"ronik",
    age:21,
    city:"beng"
};
person.city="New York";
person.country="united state";
console.log(person);

//practicing class question
let n=prompt("enter maximum number");
let number=Math.floor(Math.random()*n+1);
console.log(number);
let guess=prompt("guess your number");
while(true){
    if(guess=="quit"){
        console.log("i quit");
        break;
    }
    else if(guess==number){
        console.log("winner");
        break;
    }
    else{
        guess=prompt("guess your number");
    }
}