function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form was submitted");
}

function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder="write something"></input>
            <button>Submit</button>
        </form>
    )
}

export default Form;