import React , { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import '../Hojas-de-estilo/Barra.css';
import InicioSesion from './InicioSesion';
import CcCompAp from './Modelos/CcCompAp';
import CcDisTem from './Modelos/CcDisTem';
import CcPostArq from './Modelos/CcPostArq';
import PuntosCosmic from './Modelos/PuntosCosmic';
import GuiaUsuario from './GuiaUsuario'
import ListaProyectos from './ListaProyectos';
import Logo from '../Imagenes/logo4.png';
import { SlMenu } from "react-icons/sl";
import { FiPlusCircle, FiList, FiHelpCircle } from "react-icons/fi";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import Modal from './Modal';
import { useModal } from '../Componentes/Hooks/useModal';
import ListaUsuarios from './ListaUsuarios';

function Barra(){

  const { collapseSidebar } = useProSidebar();
  const [valor,setValor] = useState('administrador');
  const [username,setUsername] = useState(null);
  const [isOpenModal,openModal,closeModal] = useModal(false);

  const usuarios = {
    'bcnerick@gmail.com': 'administrador',
    'karenbaeza@gmail.com': 'estudiante',
    usuario3: '1234567'
  }

  function cerrarSesion(){
    setValor(null);
    window.location.reload();
    setUsername(null);
  }

  var recibirUsuario = function(nombreUsuario){ 
    setUsername('Karen'); 
    closeModal();
    setValor(usuarios[nombreUsuario]);
  }

  function registrarUsuario(){
    
  }

  return(
    <body id='body-barra'>

    <Modal isOpen={isOpenModal} closeModal={closeModal}>
      <InicioSesion enviarUsuario={recibirUsuario}/>
    </Modal>
   
    <div className='barra-principal'>
        <header>
          <div className='contenedor'>
            <div className='contenedor-logo'>
              <img src={Logo} />
            </div>
            <div className='menu'>
              {username !== null && <Link onClick={cerrarSesion}>Cerrar Sesión</Link>}
              {username === null && <Link onClick={openModal}>Iniciar Sesión</Link>}
            </div>
            
          </div>
        </header>
        
          <div className='contenedor-prosidebar'>
            
              <Sidebar className='sidebar'>
                <Menu>
                  <MenuItem icon={<SlMenu/>} onClick={() => collapseSidebar()}><h4>{username}</h4></MenuItem>
                    <SubMenu label='Crear Proyecto' icon={<FiPlusCircle/>}>
                      <SubMenu label='COCOMO II'>
                        <MenuItem component={<Link to="/cocomoii/composicionAplicacion" className='link'/>}>Composición de Aplicación</MenuItem>
                        <MenuItem component={<Link to="/cocomoii/diseñoTemprano" className='link'/>}>Diseño temprano</MenuItem>
                        <MenuItem component={<Link to="/cocomoii/postArquitectura" className='link'/>}>Post Arquitectura</MenuItem>
                      </SubMenu>
                      <MenuItem component={<Link to="/cosmic/puntosdeFuncionCosmic" className='link'/>}>Puntos de función COSMIC</MenuItem>
                    </SubMenu>
                  {valor === 'estudiante' && <MenuItem icon={<FiList/>} component={<Link to="/listaProyectos" className='link'/>} >Proyectos creados</MenuItem>}
                  <MenuItem icon={<FiHelpCircle/>} component={<Link to="/guiaDeUsuario" className='link'/>} >Guía de usuario</MenuItem>
                  {valor === 'administrador' && <MenuItem icon={<FiList/>} component={<Link to="/listaUsuarios" className='link'/>} >Usuarios registrados</MenuItem>}
                  {valor === 'administrador' && <MenuItem icon={<FiList/>} component={<Link to="/listaProyectos" className='link'/>} >Proyectos registrados</MenuItem>}
                </Menu>
              </Sidebar>
              
              <section>
                
                <Routes>
                  <Route exact path="/cocomoii/composicionAplicacion" element={<CcCompAp/>} />
                  <Route exact path="/cocomoii/diseñoTemprano" Component={CcDisTem} />
                  <Route exact path="/cocomoii/postArquitectura" Component={CcPostArq} />
                  <Route exact path="/cosmic/puntosdeFuncionCosmic" Component={PuntosCosmic} />
                  <Route exact path="/listaProyectos" Component={ListaProyectos} />
                  <Route exact path="/guiaDeUsuario" Component={GuiaUsuario} />
                  <Route exact path="/listaUsuarios" Component={ListaUsuarios} />
                </Routes>
              </section>
            
          </div>
    </div>
    </body>
  );
}

export default Barra;