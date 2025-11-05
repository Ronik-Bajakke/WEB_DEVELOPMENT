let express=require("express");
let app=express();
let path=require("path");


let port=8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    // res.send("this is home");
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("hello");
})

app.get("/rolldice",(req,res)=>{
    res.render("rolldice.ejs");
})

app.get("/rolldice1",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1
    res.render("rolldice1.ejs",{num:diceVal});
})

app.get("/ig/:username",(req,res)=>{
    let followers=["josh","pat","nathon","mitchel"];
    let{username}=req.params;
    res.render("instagram.ejs",{username,followers});
});

app.get("/insta/:username",(req,res)=>{
    let {username}= req.params;
    let instaData =require("./data.json");
    let data=instaData[username];
    // console.log(data);
    if(data){
        res.render("instagram1.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }

});



app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});
