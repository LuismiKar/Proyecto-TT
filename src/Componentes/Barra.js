import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import '../Hojas-de-estilo/Barra.css';
import ContenedorModelos from './ContenedorModelos';
import InicioSesion from './InicioSesion';
import Registro from './Registro';
import CcCompAp from './Modelos/CcCompAp';
import CcDisTem from './Modelos/CcDisTem';
import CcPostArq from './Modelos/CcPostArq';
import PuntosCosmic from './Modelos/PuntosCosmic';
import PuntosFuncion from './Modelos/PuntosFuncion';

function Barra(){
  return(
    <div className='barra-principal'>
      <Router>
        <Link to="/registro">Registro</Link>
        <Link to="/inicioSesion">Inicio de Sesion</Link>
        <Link to="/contenedorModelos">Seleccion de modelo de estimacion</Link>
        <br />
        <Link to="/cocomoii/composicionAplicacion">Composición de Aplicación</Link>
        <Link to="/cocomoii/diseñoTemprano">Diseño Temprano</Link>
        <Link to="/cocomoii/postArquitectura">Post Arquitectura</Link>
        <Link to="/cosmic/puntosdeFuncion">Puntos de función Cosmic</Link>
        <Link to="/cocomoii/UPF">Puntos de función</Link>
        <Routes>
          <Route exact path="/registro" Component={Registro} />
          <Route exact path="/inicioSesion" Component={InicioSesion} />
          <Route exact path="/contenedorModelos" Component={ContenedorModelos} />
          <Route exact path="/cocomoii/composicionAplicacion" Component={CcCompAp} />
          <Route exact path="/cocomoii/diseñoTemprano" Component={CcDisTem} />
          <Route exact path="/cocomoii/postArquitectura" Component={CcPostArq} />
          <Route exact path="/cosmic/puntosdeFuncion" Component={PuntosCosmic} />
          <Route exact path="/cocomoii/UPF" Component={PuntosFuncion} />
        </Routes>
      </Router>
    </div>
  );
}

export default Barra;