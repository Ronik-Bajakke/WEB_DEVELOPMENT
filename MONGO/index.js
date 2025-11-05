const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));

async function main() {
  await mongoose.connect('mongodb://url here');
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User=mongoose.model("User",userSchema);
const Employee=mongoose.model("Employee",userSchema);
const student=mongoose.model("student",userSchema);
// const user1=new User({
//     name:"ronik",
//     email:"ronik@yahoo.in",
//     age:21
// });
// user1.save();

// const user2=new User({
//     name:"rohit",
//     email:"rohit@yahoo.in",
//     age:20
// });
// user2.save();

// const user3=new User({
//     name:"soham",
//     email:"soham@yahoo.in",
//     age:19
// });
// user3.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:50},
//     {name:"Bruce",email:"bruce@gmail.com",age:60},
//     {name:"Peter",email:"peter@gmail.com",age:70},
// ]).then((res)=>{
//     console.log(res);
// })

// User.find({})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.find({age:{$gt:40}})
// .then((res)=>{
//     console.log(res[0].name);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOne({_id:"68612874bf2c656beea05175"})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findById("68612874bf2c656beea05175")
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.updateOne({name:"Bruce"},{age:49})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.updateMany({age:{$gt:48}},{age:55})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOneAndUpdate({name:"Bruce"},{age:35})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOneAndUpdate({name:"Bruce"},{age:43},{new:true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOneAndUpdate({_id:"68595e1b7bd6a325a6a13a09"},{age:99},{new:true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findByIdAndUpdate("68595e1b7bd6a325a6a13a09",{age:199},{new:true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.deleteOne({name:"ronik"})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.deleteMany({age:55})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findByIdAndDelete("685957a6d5c6e71201ec6dd9")
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findOneAndDelete({name:"soham"})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });



