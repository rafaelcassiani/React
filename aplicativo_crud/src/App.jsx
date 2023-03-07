import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function App() {
  const url = "https://localhost:7259/api/USUARIOs";
  const [datos, setdatos] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [usuario, setusuario] = useState({
    usU_ID: '',
    usU_NOMBRE:  '',
    usU_APELLIDO:  '',
    usU_TIPO_DOCUMENTO:  '', 
    usU_NUM_DOCUMENTO:  '',
    usU_TELEFONO:  '',
    usU_CORREO: ''
  });
  const handleChange=e=>{
    const {name, value}=e.target;
    setusuario({
      ...usuario,
      [name]: value
    });
    console.log(usuario);
  }

  const toggleEditar = () => {
  setModalEditar(!modalEditar);
  }
  const toggleInsertar = () => {
  setModalInsertar(!modalInsertar);
  }
  const toggleEliminar = () => {
  setModalEliminar(!modalEliminar);
  }


  const Cargardatos = async()=>{
    await axios.get(url)
    .then(Response=>{
      setdatos(Response.data)
    })
  }
  const seleccionar=(dato, caso)=>{
    setusuario(dato);
    (caso ==="Editar")?
    toggleEditar(): toggleEliminar();
  }
  useEffect(()=>{
    Cargardatos();
  },[])

  const Registrar = async()=>{
    delete usuario.usU_ID;
    usuario.usU_NUM_DOCUMENTO=parseInt(usuario.usU_NUM_DOCUMENTO);
    usuario.usU_TELEFONO=parseInt(usuario.usU_TELEFONO);
    await axios.post(url, usuario).then(response=>{
      setdatos(datos.concat(response.data));
      toggleInsertar();
    }).catch(error=>{
      console.log(error);
    })
  }
  const editar = async()=>{
    usuario.usU_NUM_DOCUMENTO=parseInt(usuario.usU_NUM_DOCUMENTO);
    usuario.usU_TELEFONO=parseInt(usuario.usU_TELEFONO);
    await axios.put(url+"/"+usuario.usU_ID, usuario)
    .then(response=>{
      var respuesta = response.data;
      var dataAuxiliar= datos;
      dataAuxiliar.map(user=>{
        if(user.usU_ID === usuario.usU_ID){
          user.usU_NOMBRE=respuesta.usU_NOMBRE;
          user.usU_APELLIDO=respuesta.usU_APELLIDO;
          user.usU_TIPO_DOCUMENTO=respuesta.usU_TIPO_DOCUMENTO;
          user.usU_NUM_DOCUMENTO=respuesta.usU_NUM_DOCUMENTO;
          user.usU_TELEFONO= respuesta.usU_TELEFONO;
          user.usU_CORREO= respuesta.usU_CORREO;
        }
      });
      toggleEditar();
    }).catch(error=>{
      console.log(error);
    })
  }
  const eliminar=async()=>{
    await axios.delete(url+"/"+usuario.usU_ID)
    .then(response=>{
     setdatos(datos.filter(usu=>usu.usU_ID!==response.data));
     toggleEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }

  return (
    <>
      <button type="button" className="btn btn-primary"  onClick={toggleInsertar}>Registrar</button><br /><br />
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Tipo Documento</th>
            <th scope="col">Nº Documento</th>
            <th scope="col">Telefono</th>
            <th scope="col">Correo</th>
          </tr>
        </thead>
        <tbody>
          {datos.map(dato =>(
            <tr key={dato.usU_ID}>
              <th scope="row">{dato.usU_ID}</th>
              <td>{dato.usU_NOMBRE}</td>
              <td>{dato.usU_APELLIDO}</td>
              <td>{dato.usU_TIPO_DOCUMENTO}</td>
              <td>{dato.usU_NUM_DOCUMENTO}</td>
              <td>{dato.usU_TELEFONO}</td>
              <td>{dato.usU_CORREO}</td>
              <td><button type="button" className="btn btn-primary" onClick={()=>seleccionar(dato, "Editar")}>Editar</button></td>
              <td><button type="button" className="btn btn-danger" onClick={()=>seleccionar(dato, "Eliminar")}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
      <Modal isOpen={modalInsertar} toggle={toggleInsertar} className="modal-dialog modal-lg">
        <ModalHeader toggle={toggleInsertar}>Registrar Usuario</ModalHeader>
        <ModalBody>
          <div className='form-group'>
            <label >Nombre: </label>
            <input type="text" className='form-control'  name="usU_NOMBRE" onChange={handleChange} /><br />
            <label >Apellidos: </label>
            <input type="text" className='form-control'  name="usU_APELLIDO" onChange={handleChange} /><br />
            <label >Tipo De Documento</label>
            <input type="text" className='form-control'   name="usU_TIPO_DOCUMENTO" onChange={handleChange}/><br />
            <label >Nª Documento: </label>
            <input type="text" className='form-control'  name="usU_NUM_DOCUMENTO" onChange={handleChange} /><br />
            <label >Telefono: </label>
            <input type="text" className='form-control'  name="usU_TELEFONO" onChange={handleChange} /><br />
            <label >Correo: </label>
            <input type="email" className='form-control'  name="usU_CORREO" onChange={handleChange} /><br />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>Registrar()}>
            Registrar
          </Button>{' '}
          <Button color="secondary" onClick={toggleInsertar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      </div>
      <Modal isOpen={modalEditar} toggle={toggleEditar} className="modal-dialog modal-lg">
        <ModalHeader toggle={toggleEditar}>Editar Usuario</ModalHeader>
        <ModalBody>
        <div className='form-group'>
            <label >ID: </label>
            <input type="number" className='form-control' readOnly name='usU_ID'  value={usuario && usuario.usU_ID}/><br />
             <label >Nombre: </label>
            <input type="text" className='form-control'  name="usU_NOMBRE" onChange={handleChange} value={usuario && usuario.usU_NOMBRE}/><br />
            <label >Apellidos: </label>
            <input type="text" className='form-control'  name="usU_APELLIDO" onChange={handleChange} value={usuario && usuario.usU_APELLIDO} /><br />
            <label >Tipo De Documento</label>
            <input type="text" className='form-control'   name="usU_TIPO_DOCUMENTO" onChange={handleChange}  value={usuario && usuario.usU_TIPO_DOCUMENTO}/><br />
            <label >Nª Documento: </label>
            <input type="text" className='form-control'  name="usU_NUM_DOCUMENTO" onChange={handleChange}  value={usuario && usuario.usU_NUM_DOCUMENTO}/><br />
            <label >Telefono: </label>
            <input type="text" className='form-control'  name="usU_TELEFONO" onChange={handleChange} value={usuario && usuario.usU_TELEFONO} /><br />
            <label >Correo: </label>
            <input type="email" className='form-control'  name="usU_CORREO" onChange={handleChange} value={usuario && usuario.usU_CORREO} /><br />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>editar()}>
            Editar
          </Button>{' '}
          <Button color="secondary" onClick={toggleEditar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
        ¿Estás seguro que desea eliminar el Usuario {usuario && usuario.usU_NOMBRE}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>toggleEliminar()}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
    </>
    
  )
}

export default App
