import React from 'react';
import '../Hojas-de-estilo/Boton.css';

function Boton({ name, calcularEstimacion, texto }) {

  return (
    <button
      className={name}
      onClick={calcularEstimacion} >
      {texto}
    </button>
  );
}

export default Boton;