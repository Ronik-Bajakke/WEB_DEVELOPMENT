import './App.css'
import ProductTab from "./ProductTab.jsx";
import Hello from "./Hello.jsx";


function App() {
  return(
    <>
    <ProductTab/>
    <Hello userName="Ronik" textColor="skyblue"/>
    <Hello userName="Ronik" textColor="orange"/>
    <Hello userName="Ronik" textColor="green"/>

    </>
  )
}


export default App;
