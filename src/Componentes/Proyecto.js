import React from 'react';
import { FiXSquare , FiEdit } from "react-icons/fi";

function Proyecto({ el , eliminarProyecto , modificarProyecto }){
  return(
    <tr>
      <td>{el.nombre}</td>
      <td>{el.tipo}</td>
      <td>{el.esfuerzo}</td>
      <td>
        <FiEdit size='20px' onClick={() => modificarProyecto(el)}/>
        <FiXSquare size='20px' onClick={() => eliminarProyecto(el.id)}/>
      </td>
    </tr>
  );
}

export default Proyecto;