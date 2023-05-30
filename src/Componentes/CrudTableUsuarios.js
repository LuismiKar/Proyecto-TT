import React from 'react';
import Usuario from './Usuario';


function CrudTableUsuarios({ data }) {
  return(
    <div>
      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre de usuario</th>
            <th>email</th>
            <th>Tipo de usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? 
          (
            <tr><td colSpan='4'>Sin datos</td></tr>
          ) : (
            data.map(el => <Usuario key={el.id} el={el}/>)
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CrudTableUsuarios;