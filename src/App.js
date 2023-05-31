import React, { useEffect } from 'react';
import './App.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import PaginaPrincipal from './Componentes/PaginaPrincipal';


function App() {

  useEffect(() => {
    document.title = 'Trabajo terminal A-089';
  }, []);

  return (
    <div className="App">
      <ProSidebarProvider>
        <PaginaPrincipal/>
      </ProSidebarProvider>
    </div>
  );
}

export default App;
