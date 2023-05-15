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
import GuiaUsuario from './GuiaUsuario'
import ListaProyectos from './ListaProyectos';
import { SlMenu , SlArrowLeft , SlArrowRight} from "react-icons/sl";

function Barra(){


  return(
    <div className='barra-principal'>
      <Router>
        <header>
          <div className='contenedor'>
            <div className='btn-menu'>
              <label for='btn-menu' ><SlMenu /></label>
            </div>
            <div className='menu'>
              <Link to="/registro">Registro</Link>
              <Link to="/inicioSesion">Inicio de Sesión</Link>
            </div>
            
          </div>
        </header>
        <main>
          <input type='checkbox' id='btn-menu' />
          <div className='contenedor-menu'>
            <div className='cont-menu'>
              
              <ul className='list'> 

              <li className='list-item'>
                  <div className='list-button'>
                    <div className='nav-link'>Crear Proyecto</div>
                  </div>
                  <ul className='list-show'>

                    <li className='list-inside'>
                      <Link className='nav-link nav-link--inside' to="/cosmic/puntosdeFuncion">Puntos de función COSMIC</Link>
                    </li>

                    <li className='list-inside'>
                      <div className='nav-link nav-link--inside'>
                        COCOMO II
                      </div>
                      <ul className='list-show'>
                        <li className='list-inside'>
                          <Link className='nav-link nav-link--inside' to="/cocomoii/composicionAplicacion">Composición de Aplicación</Link>
                        </li>
                        <li className='list-inside'>
                          <Link className='nav-link nav-link--inside' to="/cocomoii/diseñoTemprano">Diseño Temprano</Link>
                        </li>
                        <li className='list-inside'>
                        <Link className='nav-link nav-link--inside' to="/cocomoii/postArquitectura">Post Arquitectura</Link>
                        </li>
                      </ul>
                    </li>
                    
                  </ul>
                </li>

                <li className='list-item'>
                  <div className='list-button'>
                    <Link className='nav-link' to="/listaProyectos">Lista de Proyectos</Link>
                  </div>
                </li>

                <li className='list-item'>
                  <div className='list-button'>
                    <Link className='nav-link' to="/guiaDeUsuario">Guía de Usuario</Link>
                  </div>
                </li>

              </ul>
              
              {/*<ul>
                <li>
                  <div className='texto-li'>Crear proyecto</div>
                  <ul>
                    <li>{/*Seleccion de COCOMO II}
                      <div className='texto-li'>COCOMO II</div>
                      <ul>
                        <li><Link to="/cocomoii/composicionAplicacion">Composición de Aplicación</Link></li>
                        <li><Link to="/cocomoii/diseñoTemprano">Diseño Temprano</Link></li>
                        <li><Link to="/cocomoii/postArquitectura">Post Arquitectura</Link></li>
                      </ul>
                    </li>
                    <li>{/*Seleccion de COSMIC}
                      <Link to="/cosmic/puntosdeFuncion">Puntos de función COSMIC</Link>
                    </li>
                  </ul>
                </li>
                <li><Link to="/guiaDeUsuario">Guía de Usuario</Link></li>
              </ul>
              */}
              
              <label for='btn-menu' className='icon-equis'> 
                <SlArrowLeft />
              </label>
            </div>
          </div>
        </main>
        <Routes>
          <Route exact path="/registro" Component={Registro} />
          <Route exact path="/inicioSesion" Component={InicioSesion} />
          <Route exact path="/cocomoii/composicionAplicacion" Component={CcCompAp} />
          <Route exact path="/cocomoii/diseñoTemprano" Component={CcDisTem} />
          <Route exact path="/cocomoii/postArquitectura" Component={CcPostArq} />
          <Route exact path="/cosmic/puntosdeFuncion" Component={PuntosCosmic} />
          <Route exact path="/listaProyectos" Component={ListaProyectos} />
          <Route exact path="/guiaDeUsuario" Component={GuiaUsuario} />
        </Routes>
      </Router>
    </div>
  );
}

export default Barra;