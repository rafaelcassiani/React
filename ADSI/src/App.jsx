import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contador from './Contador'

function App() {
  //const [count, setCount] = useState(0)
  const a=7
  const b=5
  const suma = a+b
  var dialogo

  const Nuevo =()=>{
    return (
      <>
        <h1>Nuevo Componente</h1>
      </>
    )
  }
  

  const Otro =()=>{
    function clik(){
      alert("ah hecho click en el boton")
    }
    return (
      <>
        <button onClick={clik}>Esto es un boton de ayuda</button>
      </>
    )
  }

  if(suma>5){
    dialogo = "Hola"
  }else{
    dialogo = "Chao"
  }
  return (
   
    <>
    {/* <h1>ADSI 2404467</h1>
    <h2>{dialogo}</h2>
    <p>Rafael Cassiani</p>
    <Nuevo/>
    <Otro/> */}
    <Contador/>
    </>
    
  )
}

export default App
