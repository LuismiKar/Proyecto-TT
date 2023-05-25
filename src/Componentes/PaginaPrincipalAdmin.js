import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import '../Hojas-de-estilo/PaginaPrincipal.css'
import BarraAdmin from './BarraAdmin';

//Selector para elegir el metodo con el cual se va a trabajar
function PaginaPrincipalAdmin() {

  return(
    <div className='contenedor-pagina-principal'>
      <ProSidebarProvider>
        
      </ProSidebarProvider>
    </div>
  );
}

export default PaginaPrincipalAdmin;