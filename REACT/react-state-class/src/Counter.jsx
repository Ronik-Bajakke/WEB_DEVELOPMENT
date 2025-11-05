import {useState} from "react";

// function init(){
//     return Math.random();
// }

export default function Counter(){
let [count,setCount]=useState(0);

function incCount(){
    setCount(count+1);
    setCount(count+1);
    // setCount((count)=>{
    //     return count+1;
    // })
    //   setCount((count)=>{
    //     return count+1;
    // })
    
}

    return(
        <div>
            <h3>Count={count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}