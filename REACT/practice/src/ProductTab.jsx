import Product from "./Product.jsx";

function ProductTab(){
    return(
        <>
        <Product title="Harry Poter" price={200} features={[<li>"hi"</li>,<li>"hello"</li>,<li>"bye"</li>]}/>
        <Product title="Alice" />
        </>
    )
}

export default ProductTab;