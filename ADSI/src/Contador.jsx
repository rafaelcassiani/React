import { useState } from "react"

const Contador=()=>{
    var [pantalla, setValor] = useState(0)
    var pantalla2
    var operador

    const sumar =()=>{setValor(valor+1) }
    const restar =()=>{setValor(valor-1) }
    

    const siete=()=>{
        setValor(pantalla=7)
    }
    const seis=()=>{
        setValor(pantalla=6)
    }
    const ocho=()=>{
        setValor(pantalla=8)
    }
    const nueve=()=>{
        setValor(pantalla=9)
    }
    const cero=()=>{
        setValor(pantalla=0)
    }
    const uno=()=>{
        setValor(pantalla=1)
    }
    const dos=()=>{
        setValor(pantalla=2)
    }
    const tres=()=>{
        setValor(pantalla=3)
    }
    const cuatro=()=>{
        setValor(pantalla=4)
    }
    const cinco=()=>{
        setValor(pantalla=5)
    }
    const mas=()=>{
        pantalla2 = pantalla
        
        operador="suma"
        pantalla=" "
    }
    const menos=()=>{
        pantalla2 = pantalla
        
        operador="resta"
        pantalla=" "
    }
    const multiplicacion=()=>{
        pantalla2 = pantalla
        
        operador="multiplicacion"
        pantalla=" "
    }
    const divicion=()=>{
        pantalla2 = pantalla
        operador="division"
        pantalla=" "
    }
    const igual=()=>{
        if(operador=="suma"){
            setValor(pantalla+pantalla2)
        }else if(operador=="resta"){
            setValor(pantalla2-pantalla)
        }else if(operador=="multiplicacion"){
            setValor(pantalla*pantalla2)
        }else if(operador=="division"){
            setValor(pantalla/pantalla2)
        }
    }

    return (
        <>
            <h3>Calculadora</h3>
            <p>{pantalla}</p>
            <p className="invisible">{}</p>
            <button type="button" className="btn btn-outline-success" onClick={siete}>7</button>
            <button type="button" className="btn btn-outline-success" onClick={ocho}>8</button>
            <button type="button" className="btn btn-outline-success" onClick={nueve}>9</button>
            <button type="button" className="btn btn-outline-success" onClick={divicion}>/</button><br />
            <button type="button" className="btn btn-outline-success" onClick={cuatro}>4</button>
            <button type="button" className="btn btn-outline-success" onClick={cinco}>5</button>
            <button type="button" className="btn btn-outline-success" onClick={seis}>6</button>
            <button type="button" className="btn btn-outline-success" onClick={multiplicacion}>*</button><br />
            <button type="button" className="btn btn-outline-success" onClick={uno}>1</button>
            <button type="button" className="btn btn-outline-success" onClick={dos}>2</button>
            <button type="button" className="btn btn-outline-success" onClick={tres}>3</button>
            <button type="button" className="btn btn-outline-success" onClick={menos}>-</button><br />
            <button type="button" className="btn btn-outline-success" onClick={cero}>0</button>
            <button type="button" className="btn btn-outline-success" onClick={mas}>+</button>
            <button type="button" className="btn btn-outline-success" /*onClick={borrar}*/>x</button>
            <button type="button" className="btn btn-outline-success" onClick={igual}>=</button>
        </>
    )
}

export default Contador