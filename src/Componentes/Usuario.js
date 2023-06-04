import React from 'react';
import { FiXSquare , FiEdit } from "react-icons/fi";

function Usuario({ el , eliminarUsuario , modificarUsuario }) {
  return(
      <tr>
        <td>{el.username}</td>
        <td>{el.email}</td>
        <td>{el.tipo}</td>
        <td>
          <FiEdit size='20px' onClick={() => modificarUsuario(el)}/>
          <FiXSquare size='20px' onClick={() => eliminarUsuario(el.email)}/>
        </td>
      </tr>
  );
}

export default Usuario;