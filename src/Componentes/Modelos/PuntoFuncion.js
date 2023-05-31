import React from 'react';

function PuntoFuncion({ id , nombre , det , ftr , ret , tipo , peso }){
  return(
    <tr>
      <td>{nombre}</td>
      <td>{tipo}</td>
      <td>{peso}</td>
    </tr>
  );
}

export default PuntoFuncion;