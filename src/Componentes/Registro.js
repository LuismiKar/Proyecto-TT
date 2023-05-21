import React from 'react';
import { useState } from 'react';
import '../Hojas-de-estilo/InicioSesion.css'
import Input from './Input';
import { BrowserRouter as Router, Link} from 'react-router-dom';

function Registro(){

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');

  let erEmail = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;

  function handleChange(name,value) {
    switch(name){
      case 'username':
        setUsername(value);
        break;
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
    if(erEmail.test(email)){
      console.log('username: ',username);
      console.log('password: ',password);
      console.log('email: ',email);
    }
    else
      alert("Email invalido");
    
  }
  
  return(
    <>
    <div className='inicio-sesion-principal'>
      <form className='contenedor-formulario' onSubmit={validarRegistro}>
        <label>Nombre usuario: </label>
        <Input
          attribute={{
            id: 'username',
            name: 'username',
            type: 'text',
            placeholder: 'Ingresa tu usuario'
          }}
          handleChange={handleChange}
        />
        <br/>
        <label>Contraseña: </label>
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
        <label>Correo electrónico: </label>
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
        <button className='boton-registro'>
          Registrarse
        </button>
        <br/>
        <Link>Ya tengo una cuenta</Link>
      </form>
    </div>
    </>
  );
}

export default Registro;