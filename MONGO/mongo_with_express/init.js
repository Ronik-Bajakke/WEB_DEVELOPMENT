const mongoose=require("mongoose");
const Chat = require("./models/chat");

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));
async function main(){
    await mongoose.connect("mongodb://url");
}

let AllChats=[
    {
    from:"abhi",
    to:"cr",
    msg:"how are you",
    created_at:new Date()
},    
{
    from:"mahesh",
    to:"suresh",
    msg:"i am fine",
    created_at:new Date()
},
    {
    from:"ramesh",
    to:"naresh",
    msg:"where are you going",
    created_at:new Date()
},
    {
    from:"deepak",
    to:"rampal",
    msg:"its sunny today",
    created_at:new Date()
},
]
Chat.insertMany(AllChats);