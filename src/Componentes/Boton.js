import React from 'react';
import '../Hojas-de-estilo/Boton.css';

function Boton({ name, funcion, texto, onMouseOver }) {

  return (
    <button
      className={name}
      onClick={funcion}
      onMouseOver={onMouseOver} >
      {texto}
    </button>
  );
}

export default Boton;