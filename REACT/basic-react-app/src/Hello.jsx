function Hello({userName,textColor}){
    let styles={color:textColor};
    return (
        <p style={styles}>hello my friend,{userName}</p>
    )
}

export default Hello;