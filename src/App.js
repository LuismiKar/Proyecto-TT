import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import PaginaPrincipal from './Componentes/PaginaPrincipal';
import InicioSesion from './Componentes/InicioSesion';
import Registro from './Componentes/Registro';
import PaginaPrincipalAdmin from './Componentes/PaginaPrincipalAdmin';
import CcCompAp from './Componentes/Modelos/CcCompAp';
import CcDisTem from './Componentes/Modelos/CcDisTem';
import CcPostArq from './Componentes/Modelos/CcPostArq';
import PuntosCosmic from './Componentes/Modelos/PuntosCosmic';
import GuiaUsuario from './Componentes/GuiaUsuario'
import ListaProyectos from './Componentes/ListaProyectos';
import {UserGetById} from './Componentes/Endpoints/User';


function App() {

  useEffect(() => {
    document.title = 'Trabajo terminal A-089';
  }, []);

  return (
    <div className="App">
      <ProSidebarProvider>
        <PaginaPrincipal/>
        <Routes>
          <Route exact path="/paginaprincipal" Component={PaginaPrincipal} />
          <Route exact path="/paginaprincipalAdmin" Component={PaginaPrincipalAdmin} />
          <Route exact path="/registro" Component={Registro} />
          <Route exact path="/inicioSesion" Component={InicioSesion} />
        </Routes>
      <UserGetById/>
      </ProSidebarProvider>
        
    </div>
  );
}

export default App;
