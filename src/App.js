import React, { useEffect } from 'react';
import './App.css';
import PaginaPrincipal from './Componentes/PaginaPrincipal';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import PaginaPrincipalAdmin from './Componentes/PaginaPrincipalAdmin';
import Registro from './Componentes/Registro';
import InicioSesion from './Componentes/InicioSesion';


function App() {

  useEffect(() => {
    document.title = 'Trabajo terminal A-089';
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/paginaprincipal" Component={PaginaPrincipal} />
          <Route exact path="/paginaprincipalAdmin" Component={PaginaPrincipalAdmin} />
          <Route exact path="/registro" Component={Registro} />
          <Route exact path="/inicioSesion" Component={InicioSesion} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
