import React, { useEffect } from 'react';
import './App.css';
import PaginaPrincipal from './Componentes/PaginaPrincipal';


function App() {

  useEffect(() => {
    document.title = 'Trabajo terminal A-089';
  }, []);

  return (
    <div className="App">
      <PaginaPrincipal/>
    </div>
  );
}

export default App;
