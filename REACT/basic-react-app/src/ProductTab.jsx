import Product from "./Product.jsx";

function ProductTab(){
    // let options1=[<li>"quality"</li>,<li>"durable"</li>,<li>"fast"</li>];
    let options1=["quality","durable","fast"];
    let options2={a:"hi",b:"hello",c:"bye"};
    return(
        <>
        <Product title="Phone" price={30000} features={options1} features2={options2.a}/>
        <Product title="laptop" price={40000}/>
        <Product title="pen" price={10}/>
        </>
    )
}

export default ProductTab;