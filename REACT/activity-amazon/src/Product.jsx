import "./Product.css";
import Price from "./Price.jsx"

function Product({title,idx}){
    let oldPrices=["12,500","8999","5999","580"];
    let newPrices=["8,999","5000","3000","260"];
    let description=[["8,000 DPI","Processor"],["Initivie Surface","graphics"],["Designed for ipad pro","Gaming"],["Wireless","mouse"]]
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}

export default Product;