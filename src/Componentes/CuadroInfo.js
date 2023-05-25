import React from 'react';
import '../Hojas-de-estilo/CuadroInfo.css'

//Selector para elegir el metodo con el cual se va a trabajar
function CuadroInfo({ texto , onMouseOver , onMouseOut}) {
  return(
    <div className='contenedor-cuadro' onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      {texto}
    </div>
  );
}

export default CuadroInfo;