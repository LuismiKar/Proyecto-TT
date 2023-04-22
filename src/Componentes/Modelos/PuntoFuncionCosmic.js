import React from 'react';

function PuntoFuncionCosmic({ id , nombre , ent , sal , esc , lec , totalPF }){
  return(
    <div 
      className='puntofuncioncosmic-contenedor' >
        {nombre} {ent} {sal} {esc} {lec} {totalPF}
    </div>
  );
}

export default PuntoFuncionCosmic;