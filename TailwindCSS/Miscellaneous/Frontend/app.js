let arr=[1,2,3];
 arr.sayhello=function(){
    console.log("hello,i am array");
}

let arr1=[4,5,6];
let arr2=[4,5,6];
arr1.sayhello=function(){
    console.log("hello,i am array");
}
arr2.sayhello=function(){
    console.log("hello,i am array");
}

function PersonMaker(name,age){
    let person={
        name:name,
        age:age,
        talk(){
            console.log(`Hi ,my name is ${name}`);
        }
    };
    return person;
}

//new operator
function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.talk=function(){
    console.log(`my name is ${this.name}`);
}

let p11=new Person("josh",20);
let p22=new Person("hazelhood",26);

//class
class Person1{
constructor(name,age){
    this.name=name;
    this.age=age;
}

talk(){
    console.log(`my name is ${this.name}`);
}
}

let p111=new Person1("josh1",20);
let p222=new Person1("hazelhood1",26);

//inheritance
class Person2{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi i am ${this.name}`);
    }
}
class Student extends Person2{
    constructor (name,age,marks){
        super(name,age);
        this.marks=marks;
    }
}
let stu1=new Student("dell",30,95);

class Teacher extends Person2{
    constructor (name,age,subject){
        super(name,age);
        this.subject=subject;
    }
}
let tea1=new Student("wind",60,"eng");

