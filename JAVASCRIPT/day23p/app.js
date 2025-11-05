//json to Java script object
let x1='{"fact":"The lightest cat on record is a blue point Himalayan called Tinker Toy, who weighed 1 pound, 6 ounces (616 g). Tinker Toy was 2.75 inches (7 cm) tall and 7.5 inches (19 cm) long.","length":178}';
let x2=JSON.parse(x1);
console.log(x2);

//Java script object to json
let student={
    name:"ronik",
    usn:"251"
};
let x3=JSON.stringify(student);
console.log(x3);

//our first request
let url="https://catfact.ninja/fact";
fetch(url)
.then((res)=>{
    console.log(res);
    console.log(res.json());
    return res.json();
.then((data)=>{
        console.log(data);
    })

})
.catch((err)=>{
console.log(err);
})