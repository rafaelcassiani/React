import { useState } from 'react'

function MostrarUsuario(props) {
    const estado = props.estado;
    const list= estado.map((estado)=>
    <p>Su nombre es{props.usuario}</p>
    )
  return (
    <>
    <p>{list}</p>
    </>
  )
}

export default MostrarUsuario