const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");
const express=require("express");
const app=express();
let port=8080;
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
const methodOverride=require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));


const connection=mysql.createConnection({
  host:"localhost",
  user:"root",
  database:"write your databse name",
  password:"database password"
});
let getRandomUser=()=> {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
}
// console.log(getRandomUser());
// let q="INSERT INTO user(id,username,email,password) VALUES ?";
// let user=["124","13_newuser","abcd@gmail.com","abcd"];
// let user1=[["3","3name","3@gmail.com","33"],["4","4name","4@gmail.com","44"]];
// let data=[];
// for(let i=1;i<=100;i=i+1){
//   data.push(getRandomUser());
// }

// try{
//   connection.query(q,[data],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
//     // console.log(result.length);
//     // console.log(result[0]);
//     // console.log(result[1]);
//   });
// }
// catch(err){
//   console.log(err);
// }
// connection.end();

app.get("/",(req,res)=>{
  let q="SELECT count(*) FROM user";
  try{
  connection.query(q,(err,result)=>{
    if(err) throw err;
    // console.log(result[0]);
    // console.log(result[0]["count(*)"]);
    let count=result[0]["count(*)"];
    res.render("home.ejs",{count});
  });
}
catch(err){
  console.log(err);
  res.send("some error in data base");
}
// connection.end();
  // res.send("welcome to home page");
})

app.get("/user",(req,res)=>{
  let q="SELECT * FROM user";
  try{
  connection.query(q,(err,users)=>{
    if(err) throw err;
    res.render("showusers.ejs",{users});
  });
}
catch(err){
  console.log(err);
  res.send("some error in data base");
}
})

app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`SELECT * FROM user WHERE id='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user=result[0];
      res.render("edit.ejs",{user});
    });
  }
  catch(err){
    console.log(err);
    res.send("some error in data base");
  }
});

app.patch("/user/:id",(req,res)=>{
  let {id}=req.params;
  let{password:formPass,username:newUsername}=req.body;
  let q=`SELECT * FROM user WHERE id='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user=result[0];
      if(formPass!=user.password){
        res.send("Wrong Password");
      }
      else{
        let q2=`update user set username='${newUsername}' where id='${id}'`;
        connection.query(q2,(err,result)=>{
          if(err) throw err;
          res.redirect("/user");
        })
      }
    })
  }
  catch(err){
    console.log(err);
    res.send("some error in database");
  }
})



let createRandomUser=()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}
console.log(createRandomUser());

app.listen(port,()=>{
  console.log(`server is listening at ${port}`);
});

