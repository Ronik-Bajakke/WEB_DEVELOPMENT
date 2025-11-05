//practice questions
//q1
let array=[0,1,2,3,4,5];
// function avg(){}
// let avg=function(){}
let avg=()=>{
    let aveg=0;
    for(let i=0;i<array.length;i=i+1){
        aveg=aveg+array[i];
    }
    console.log(aveg);
}
avg();

//q2
let even=(num)=>{
    if(num%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
even(19);

//q3
const object={
    message:"hello ",
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);