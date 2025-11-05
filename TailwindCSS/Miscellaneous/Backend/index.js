let express=require("express");
let app=express();
let port=8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user,pass}=req.query;
    res.send(`standard get response ${user}`);
});

app.post("/register",(req,res)=>{
    // console.log(req.body);
    let{user,pass}=req.body;
    res.send(`standard post response ${user}`);
});


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});
