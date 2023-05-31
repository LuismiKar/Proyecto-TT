import React, { useEffect } from 'react';
import './App.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import PaginaPrincipal from './Componentes/PaginaPrincipal';
import {UserGetById} from './Componentes/Endpoints/User';


function App() {

  useEffect(() => {
    document.title = 'Trabajo terminal A-089';
  }, []);

  return (
    <div className="App">
      <ProSidebarProvider>
        <PaginaPrincipal/>
        <UserGetById/>
      </ProSidebarProvider>
        
    </div>
  );
}

export default App;
