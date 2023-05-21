import React from 'react';
import { useState } from 'react';
import Input from './Input';
import '../Hojas-de-estilo/InicioSesion.css'
import { BrowserRouter as Router, Link} from 'react-router-dom';

function InicioSesion(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  

  function handleChange(name,value) {
    switch(name){
      case 'password':
        setPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const validarRegistro = e =>{
    e.preventDefault();
    console.log('email: ',email);
    console.log('password: ',password);
    
  }
  
  return(
    <>
    <div className='inicio-sesion-principal'>
      <form className='contenedor-formulario' onSubmit={validarRegistro}>
      Correo electrónico:
        <Input
          attribute={{
            id: 'email',
            name: 'email',
            type: 'email',
            placeholder: 'Ingresa tu email'
          }}
          handleChange={handleChange}
        />
        <br/>
        Contraseña: 
        <Input
          attribute={{
            id: 'password',
            name: 'password',
            type: 'text',
            placeholder: 'Ingresa tu contraseña'
          }}
          handleChange={handleChange}
        />
        <br/>
        <button className='boton-registro'>
          Iniciar Sesión
        </button>
        <br/>
        <Link>Olvidé mi contraseña</Link>
      </form>
    </div>
    </>
  );
  }
  
  export default InicioSesion;