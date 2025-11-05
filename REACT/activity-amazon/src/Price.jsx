function Price({oldPrice,newPrice}){
    let oldStyle={
        textDecorationLine:"line-through",
    }
    let newStyle={
        fontWeight:"bold"
    }
    let priceStyle={
        backgroundColor:"yellow",
        borderBottomLeftRadius:"15px",
        borderBottomRightRadius:"15px",
        height:"30px",
        width:"200px",
    }
    return (
        <div style={priceStyle}>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    );
}

export default Price;