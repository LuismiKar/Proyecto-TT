import React from 'react';
import '../Hojas-de-estilo/Boton.css';

function Boton({ name, funcion, texto }) {

  return (
    <button
      className={name}
      onClick={funcion} >
      {texto}
    </button>
  );
}

export default Boton;