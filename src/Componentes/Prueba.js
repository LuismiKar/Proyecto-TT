import React from 'react';

var Prueba = function({ cambiarEstado }){
  return(
    <>
      <button onClick={ function(){ cambiarEstado(1) } }>Uno: 1</button>
    </>
  );
};

export default Prueba;