import React from 'react';

function PuntoFuncionCosmic({ id , nombre , ent , sal , esc , lec , totalPF }){
  return(
    <tr>
      <td>{nombre}</td>
      <td>{ent}</td>
      <td>{sal}</td>
      <td>{esc}</td>
      <td>{lec}</td>
      <td>{totalPF}</td>
    </tr>
  );
}

export default PuntoFuncionCosmic;