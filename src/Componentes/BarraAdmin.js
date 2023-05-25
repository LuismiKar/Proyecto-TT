import React from 'react';
import { BrowserRouter , Link, Route, Routes} from 'react-router-dom';
import '../Hojas-de-estilo/Barra.css';
import InicioSesion from './InicioSesion';
import Registro from './Registro';
import CcCompAp from './Modelos/CcCompAp';
import CcDisTem from './Modelos/CcDisTem';
import CcPostArq from './Modelos/CcPostArq';
import PuntosCosmic from './Modelos/PuntosCosmic';
import GuiaUsuario from './GuiaUsuario'
import ListaProyectos from './ListaProyectos';
import Logo from '../Imagenes/logo4.png';
import { SlMenu , SlArrowLeft , SlArrowRight} from "react-icons/sl";
import { FiPlusCircle, FiList, FiHelpCircle , FiEdit } from "react-icons/fi";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";

function BarraAdmin(){

  const { collapseSidebar } = useProSidebar();

  return(
    <div className='barra-principal'>
        <header>
          <div className='contenedor'>
            <div className='contenedor-logo'>
              <img src={Logo} />
            </div>
            <div className='menu'>
              <Link>Cerrar Sesión</Link>
            </div>
            
          </div>
        </header>
        
          <div className='contenedor-prosidebar'>
            
              <Sidebar className='sidebar'>
                <Menu>
                  <MenuItem icon={<SlMenu/>} onClick={() => collapseSidebar()}><h4>Nombre de usuario</h4></MenuItem>
                    <SubMenu label='Crear Proyecto' icon={<FiPlusCircle/>}>
                      <SubMenu label='COCOMO II'>
                        <MenuItem component={<Link to="/cocomoii/composicionAplicacion" className='link'/>}>Composición de Aplicación</MenuItem>
                        <MenuItem component={<Link to="/cocomoii/diseñoTemprano" className='link'/>}>Diseño temprano</MenuItem>
                        <MenuItem component={<Link to="/cocomoii/postArquitectura" className='link'/>}>Post Arquitectura</MenuItem>
                      </SubMenu>
                      <MenuItem component={<Link to="/cosmic/puntosdeFuncionCosmic" className='link'/>}>Puntos de función COSMIC</MenuItem>
                    </SubMenu>
                  <MenuItem icon={<FiList/>} component={<Link to="/listaProyectos" className='link'/>} >Lista de usuarios</MenuItem>
                  <MenuItem icon={<FiHelpCircle/>}>Guía de usuario</MenuItem>
                  <MenuItem icon={<FiEdit/>}>Modificar tablas</MenuItem>
                </Menu>
              </Sidebar>
              <section>
                <Routes>
                  <Route exact path="/registro" Component={Registro} />
                  <Route exact path="/inicioSesion" Component={InicioSesion} />
                  <Route exact path="/cocomoii/composicionAplicacion" Component={CcCompAp} />
                  <Route exact path="/cocomoii/diseñoTemprano" Component={CcDisTem} />
                  <Route exact path="/cocomoii/postArquitectura" Component={CcPostArq} />
                  <Route exact path="/cosmic/puntosdeFuncionCosmic" Component={PuntosCosmic} />
                  <Route exact path="/listaProyectos" Component={ListaProyectos} />
                  <Route exact path="/guiaDeUsuario" Component={GuiaUsuario} />
                </Routes>
              </section>
            
          </div>
    </div>
  );
}

export default BarraAdmin;