function handleFormSubmit(){
    event.preventDefault();
    console.log("submitted the form");
}


function Form(){
    return(
        <>
        <form onSubmit={handleFormSubmit}>
        <label for="name">Username</label>
        <input type="text" placeholder="enter name" id="name"></input>
        <button>Submit</button>
        </form>
        </>
    )
}

export default Form;