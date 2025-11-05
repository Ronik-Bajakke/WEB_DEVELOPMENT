let express=require("express");
let app=express();
let port=8080;
let path=require("path");
let {v4:uuidv4}=require("uuid");
let methodOverride=require("method-override");


app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        id:uuidv4(),
        username:"apnacollege",
        content:"i Love Coding"
    },
    {
        id:uuidv4(),
        username:"ronik",
        content:"hard wordk is important to achieve sucess"
    },
    {
        id:uuidv4(),
        username:"rahul kumar",
        content:"i got my first intership"
    },
]


app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let{username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let{id}=req.params;
    // console.log(id);
    let post=posts.find((p)=>id==p.id);
    // console.log(post);
    // res.send(`request working ${id}`);
    res.render("show.ejs",{post});
})

app.patch("/posts/:id",(req,res)=>{
    let{id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    console.log(post);
    res.redirect("/posts");
 
});

app.get("/posts/:id/edit",(req,res)=>{
    let{id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
});

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    // let post=posts.find((p)=>id===p.id);
    // res.send("delete success");
    posts=posts.filter((p)=>id!==p.id);
    res.redirect("/posts");
})


app.listen(port,()=>{
    console.log("listening to port:8080");
})
