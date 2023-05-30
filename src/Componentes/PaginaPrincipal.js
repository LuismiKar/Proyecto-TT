import React from 'react';

import Barra from './Barra';
import '../Hojas-de-estilo/PaginaPrincipal.css'

//Selector para elegir el metodo con el cual se va a trabajar
function PaginaPrincipal() {

  return(
    <div className='contenedor-pagina-principal'>
      
        <Barra/>
    </div>
  );
}

export default PaginaPrincipal;