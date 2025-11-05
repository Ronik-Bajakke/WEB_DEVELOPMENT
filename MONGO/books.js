const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"Price is to low for selling"],
    },
    discount:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"]
    },
    genre:[String],
});

const Book=mongoose.model("Book",bookSchema);

// let book1=new Book({
//     title:"Atomin Habits",
//     price:"700",
//     genre:["discipline","conscistence","focus","mindset"],
// });
// book1.save()
// .then(res=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// Book.findByIdAndUpdate("686170f86e603dee6e0f0a72",{price:-500})
// .then(res=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

Book.findByIdAndUpdate("686170f86e603dee6e0f0a72",{price:-500},{runValidators:true})
.then(res=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
});