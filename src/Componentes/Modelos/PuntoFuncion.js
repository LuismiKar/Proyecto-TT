import React from 'react';

function PuntoFuncion({ id , nombre , det , ftr , ret , tipo , peso }){
  return(
    <div 
      className='puntofuncion-contenedor' >
        {nombre} {tipo} {det} {ftr} {ret} {peso}
    </div>
  );
}

export default PuntoFuncion;