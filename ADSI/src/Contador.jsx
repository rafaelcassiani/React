import { useState } from "react"

const Contador=()=>{
    var [Pantalla1, setPantalla1] = useState(0)
    var pantalla2
    var operador
    var numero 
    // var [numero, setnumero] = useState(0)

    function Botones(props){
        return(
            <button type="button" className="btn btn-outline-success" onClick={()=> setPantalla1(Pantalla1+numero)}>{props.boton}</button>
    )
    }
    function Pantalla(props){
        return(
            <p>{Pantalla1}</p>
        )
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
             <Pantalla></Pantalla>
             <Botones boton="7">{numero}</Botones>
             <Botones boton="8">{numero = 8}</Botones>
             <Botones boton="9">{numero = 9}</Botones>
             <Botones boton="/"></Botones><br />
             <Botones boton="4">{numero = 4}</Botones>
             <Botones boton="5">{numero = 5}</Botones>
             <Botones boton="6">{numero = 6}</Botones>
             <Botones boton="*"></Botones><br />
             <Botones boton="1">{numero = 1}</Botones>
             <Botones boton="2">{numero = 2}</Botones>
             <Botones boton="3">{numero = 3}</Botones>
             <Botones boton="-"></Botones><br />
             <Botones boton="0">{numero = 0}</Botones>
             <Botones boton="."></Botones>
             <Botones boton="+"></Botones>
             <Botones boton=">"></Botones>
             
        </>
    )
}

export default Contador