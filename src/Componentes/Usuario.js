import React from 'react';

function Usuario({ texto , onMouseOver , onMouseOut}) {
  return(
    <div className='contenedor-usuario' onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      {texto}
    </div>
  );
}

export default CuadroInfo;