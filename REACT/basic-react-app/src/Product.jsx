import "./Product.css";

function Product({title,price,features=[],features2}){
    let styles={backgroundColor:price>20000?"pink":""};
    return (
        <div className="Product" style={styles}>
        <h2>{title}</h2>
        <h3>Price:{price}</h3>
        <p>{features.map((feature)=><li>{feature}</li>)}</p>
        <p>{features2}</p>
        {price>20000 &&<p>Discount of 5%</p>}
        </div>
    )
}

export default Product; 