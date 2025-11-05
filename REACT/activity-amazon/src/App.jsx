import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ProductTab from "./ProductTab.jsx";
import Button from "./Button.jsx";
import Form from "./Form.jsx";

let styles1={
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:"flex-start",
  textAlign:"center",
  minHeight:"100vh",
  minWidth:"100vw"

}

function App() {
  return (
    // <div style={styles1}>
    // <h2>Blockbuster Deals Shop Now</h2>
    // <ProductTab/>
    // </div>
    <div>
      <Button/>
      <Form/>
    </div>
  )
}

export default App
