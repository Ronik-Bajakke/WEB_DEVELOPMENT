function printHello(){
    console.log("Hello");
}
function printBye(){
    console.log("Bye")
}
function printhi(){
    console.log("hi");
}
function printok(){
    console.log("ok");
}

function Button(){
    return(
        <>
        <button onClick={printHello}>Click me</button>
        <p onClick={printBye}>This is an paragraph tag</p>
        <p onMouseOver={printhi}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quos deserunt dolores odio ab. Excepturi labore quae adipisci aut praesentium rerum eveniet similique eum. Optio adipisci nostrum aut consequatur. A.</p>
        <button onDoubleClick={printok}>Double click me</button>
        </>
    )
}

export default Button;