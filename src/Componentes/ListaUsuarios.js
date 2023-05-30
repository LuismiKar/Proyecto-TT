import React, { useState } from 'react';
import CrudTableUsuarios from './CrudTableUsuarios';

const usuarios = [
  {id: 1, username: 'karen baeza', email: 'bcnerick@gmail.com', tipo:'administrador', password: '123456'},
  {id: 2, username: 'karen baeza', email: 'karenbaeza@gmail.com', tipo:'estudiante', password: '12345'}
];

function ListaUsuarios() {
 
  const [db,SetDb] = useState(usuarios);

  const updateData = (data) => {

  }

  const deleteData = (id) => {
    
  }

  return(
    <div>
      <CrudTableUsuarios />
    </div>
  );
}

export default ListaUsuarios;