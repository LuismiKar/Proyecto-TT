import React from 'react';
import { FiXSquare , FiEdit , FiPlusSquare } from "react-icons/fi";

function Usuario({ el }) {
  return(
      <tr>
        <td>{el.username}</td>
        <td>{el.email}</td>
        <td>{el.tipo}</td>
        <td>
          <FiEdit/>
          <FiXSquare/>
          <FiPlusSquare/>
        </td>
      </tr>
  );
}

export default Usuario;