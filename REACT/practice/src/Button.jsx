function hello(){
    console.log("this is a hello message");
}
function para(event){
    console.log("para tag clicked");
    console.log(event);
}

function Button(){
    return(
        <>
        <button onClick={hello}>Click me </button>
        <p onDoubleClick={para}>this is a para</p>
        </>
    )
}
export default Button;