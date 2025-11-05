const express=require("express");
const app=express();
const ExpressError=require("./ExpressError");

//middleware here
// app.use((req,res,next)=>{
//     // let {query}=req.query;
//     // console.log(query);
//     console.log("Hi,I am Middleware 1");
//     // res.send("MiddleWare finished");
//     return next();
//     console.log("after next");
// });
// app.use((req,res,next)=>{
//     console.log("Hi,i am middleware 2");
//     next();
// })

// app.use((req,res,next)=>{
//     // req.time=Date.now();
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// })

const checkToken=(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    else{
        throw new ExpressError(401,"ACCESS DENIED");
    }
};
app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})

app.get("/wrong",(req,res)=>{
    abcd=abcd;
});

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is forbidden");
})

// app.use((err,req,res,next)=>{
//     console.log("---Error---");
//     res.send(err);
// })
// app.use((err,req,res,next)=>{
//     console.log("---Error2---");
//     res.send(err);
// })
app.use((err,req,res,next)=>{
    let{status,message}=err;
    res.status(status).send(message);
})


app.get("/",(req,res)=>{
    res.send("Hi,I am root");
});
app.get("/random",(req,res)=>{
    res.send("This is a random page");
});
// app.use((req,res)=>{
//     res.send("Page not found");
// })

app.listen(8080,()=>{
    console.log("server listining to port 8080");
});


