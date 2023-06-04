import React from 'react';
import '../Hojas-de-estilo/Boton.css';

function Boton({ name, funcion, texto, onMouseOver, onBlur, onFocus, onMouseOut }) {

  return (
    <button
      className={name}
      onClick={funcion}
      onMouseOver={onMouseOver}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseOut={onMouseOut}>
      {texto}
    </button>
  );
}

export default Boton;