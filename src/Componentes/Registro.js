import React from 'react';
import { useState } from 'react';
import ComponenteInput from './ComponenteInput';
import { Link } from 'react-router-dom';
import '../Hojas-de-estilo/Registro.css'
import { FiXCircle , FiCheck , FiAlertCircle } from "react-icons/fi";

function Registro(){

  const [username,setUsername] = useState({campo:'', valido: null});
  const [password,setPassword] = useState({campo:'', valido: null});
  const [password2,setPassword2] = useState({campo:'', valido: null});
  const [email,setEmail] = useState({campo:'', valido: null});



  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }

  function handleChange(name,value) {
    switch(name){
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'password2':
        setPassword2(value);
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
    
    
  }
  
  return(
    <main>
      <div className='inicio-sesion-principal'>
        <h2>Crear Cuenta</h2>
        <form className='contenedor-formulario' onSubmit={validarRegistro}>
          <div>
              <ComponenteInput
                attribute={{
                  id: 'username',
                  name: 'username',
                  type: 'text',
                  placeholder: 'Ingresa tu usuario'
                }}
                name='Nombre de usuario:'
                estado={username}
                handleChange={setUsername}
                expresionRegular={expresiones.usuario}
                leyendaerror='tas mal, pa'
            />
          </div>
          <div>
            <ComponenteInput
                attribute={{
                  id: 'email',
                  name: 'email',
                  type: 'email',
                  placeholder: 'Ingresa tu email'
                }}
                name='Correo electronico:'
                estado={email}
                handleChange={setEmail}
                expresionRegular={expresiones.correo}
                leyendaerror='tas mal, pa'
            />
          </div>
          <div>
            <ComponenteInput
                attribute={{
                  id: 'password',
                  name: 'password',
                  type: 'text',
                  placeholder: 'Ingresa tu contraseña'
                }}
                name='Contraseña:'
                estado={password}
                handleChange={setPassword}
                expresionRegular={expresiones.password}
                leyendaerror='tas mal, pa'
            />
          </div>
          <div>
            <ComponenteInput
                attribute={{
                  id: 'password2',
                  name: 'password2',
                  type: 'text',
                  placeholder: 'Ingresa tu contraseña'
                }}
                name='Confirma contraseña:'
                estado={password2}
                handleChange={setPassword2}
                expresionRegular={expresiones.password}
                leyendaerror='tas mal, pa'
            />
          </div>
          {false && <div className='mensaje-error'>
            <p>
              <FiAlertCircle/>
              <b>Error: </b>Por favor rellena el formulario correctamente.
            </p>
          </div>}
          <div className='contenedor-boton'>
            <button className='boton-registro'>
              Registrarse
            </button>
            ¿Ya tienes una cuenta? <Link>Iniciar Sesión</Link>
            <p className='mensaje-exito'>Formulario enviado exitosamente</p>
          </div>
        </form>
        
      </div>
    </main>
  );
}

export default Registro;