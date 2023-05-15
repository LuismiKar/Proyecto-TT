import React from 'react';
import '../Hojas-de-estilo/ListaProyectos.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Proyecto({ id , nombre , tipo , esfuerzo , eliminarProyecto }){
  return(
    <div className='contenedor-proyecto' >
      <tr className='contenedor-fila'>
        <td>{nombre}</td>
        <td>{tipo}</td>
        <td>{esfuerzo}</td>
        <td>
          <div 
            className='contenedor-icono' 
            onClick={() => eliminarProyecto(id)}>
              <AiOutlineCloseCircle className='proyecto-icono' />
          </div>
        </td>
      </tr>
    </div>
  );
}

export default Proyecto;