let express=require("express");
let app=express();
// console.dir(app);
let port=3000;
app.listen(port,()=>{
    console.log(`app is listening at port number ${port}`);
})

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request received");
//     // res.send("This is a basic response");

//     // res.send({
//     //     name:"apple",
//     //     price:21
//     // })

//     let code="<h1>Fruit<ul><li>apple</li><li>Mango</li></ul>";
//     res.send(code);

// })
app.get("/",(req,res)=>{
    res.send("You contacted root path ok done");
})
// app.get("/apple",(req,res)=>{
//     res.send("You contacted apple path");
// })
// app.get("/orange",(req,res)=>{
//     res.send("You contacted orange path");
// })
// app.get("*",(req,res)=>{
//     res.send("You contacted path does not exits");
// })
// app.post("/",(req,res)=>{
//     res.send("You contacted root path is through post");
// })

// app.get("/:username",(req,res)=>{
//     console.log(req.params);
//     res.send("hello i am root");
// });

app.get("/:username/:id",(req,res)=>{
    let{username,id}=req.params;
    let htmlstr=`<h1>Welcomr To The Page @${username}</h1>`;
    res.send(htmlstr);
});

// app.get("/search",(req,res)=>{
//     console.log(req.query);
//     res.send("no result");
// });

app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("nothing searched");
    }
    let htmlstr1=`<h1>search result ${q}</h1>`;
    res.send(htmlstr1);
});