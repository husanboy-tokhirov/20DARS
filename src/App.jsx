import './App.css'
import Product from './components/product/Product'
import { createPortal } from 'react-dom';
import {useRef} from "react";
import Modal from './components/modal/Modal'
function App() {
  
  const modal = useRef()
  return (
    <>
        {createPortal(<Modal modal={modal}/> , document.getElementById("portal"))}
      <Product modal={modal}/>
    </>
  )
}

export default App
