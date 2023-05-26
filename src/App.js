import React, { useEffect } from 'react';
import './App.css';
import PaginaPrincipal from './Componentes/PaginaPrincipal';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import PaginaPrincipalAdmin from './Componentes/PaginaPrincipalAdmin';
import Registro from './Componentes/Registro';
import InicioSesion from './Componentes/InicioSesion';
import CcCompAp from './Componentes//Modelos/CcCompAp';
import CcDisTem from './Componentes//Modelos/CcDisTem';
import CcPostArq from './Componentes//Modelos/CcPostArq';
import PuntosCosmic from './Componentes//Modelos/PuntosCosmic';
import GuiaUsuario from './Componentes//GuiaUsuario'
import ListaProyectos from './Componentes//ListaProyectos';


function App() {

  useEffect(() => {
    document.title = 'Trabajo terminal A-089';
  }, []);

  return (
    <div className="App">
      
      
        <Routes>
          <Route exact path="/paginaprincipal" Component={PaginaPrincipal} />
          <Route exact path="/paginaprincipalAdmin" Component={PaginaPrincipalAdmin} />
          <Route exact path="/registro" Component={Registro} />
          <Route exact path="/inicioSesion" Component={InicioSesion} />
        </Routes>
    </div>
  );
}

export default App;
