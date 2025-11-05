import "./Product.css";


function Product({title,price=300,features=[]}){
    let styles={backgroundColor:price>250?"pink":""};
    return(
        <div classNmae="Product" style={styles}>
        <h1 className="hello">Product title {title}</h1>
        <p>this is the product description</p>
        <p>price is {price}</p>
        {price>250?<p>Discount is 5%</p>:null}
        <p>{features}</p>
        </div>
    )
}

export default Product;   