import React from 'react';
import { useState } from 'react';
import '../Hojas-de-estilo/Registro.css'
import { Link} from 'react-router-dom';
import { Formulario , ContenedorBotonCentrado , Boton, MensajeError, MensajeExito } from '../Elementos/UsuarioElementos';
import { FiAlertCircle } from "react-icons/fi";
import ComponenteInput from './ComponenteInput';

function InicioSesion(){
  const [password,setPassword] = useState({campo:'', valido: null});
  const [email,setEmail] = useState({campo:'', valido: null});
  const [formularioValido,setFormularioValido] = useState(null);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }

  const usuarios = {
    'bcnerick@gmail.com': '123456',
    usuario2: '12345',
    usuario3: '1234567'
  }

  const onSubmit = (e) =>{
    e.preventDefault();

    for(let i=0 ; i===usuarios.length ; i++ ){
      console.log(usuarios);
    }

    if( usuarios[email.campo] && password.campo === usuarios[email.campo]){
      setFormularioValido(true);
      setEmail({campo: '',valido: null});
      setPassword({campo: '',valido: null});
    } else {
      setFormularioValido(false);
    }

  }

  return(
    <body id='body-registro-login'>
      <main>
        <div className='contenedor-datosusuario'>
          <h2>Iniciar Sesión</h2>
          <Formulario onSubmit={onSubmit}>
            <div>
              <ComponenteInput
                  attribute={{
                    id: 'login-email',
                    name: 'email',
                    type: 'email',
                    placeholder: 'Ingresa tu email'
                  }}
                  name='Correo electrónico:'
                  estado={email}
                  handleChange={setEmail}
                  expresionRegular={expresiones.correo}
                  leyendaerror='Correo electrónico inválido'
              />
            </div>
            <div>
              <ComponenteInput
                  attribute={{
                    id: 'login-password',
                    name: 'password',
                    type: 'text',
                    placeholder: 'Ingresa tu contraseña'
                  }}
                  name='Contraseña:'
                  estado={password}
                  handleChange={setPassword}
              />
            </div>
            
            {formularioValido === false && <MensajeError>
              <p>
                <FiAlertCircle/>
                <b>Error: </b>Usuario o contraseña inválidos.
              </p>
            </MensajeError>}
            <ContenedorBotonCentrado>
              <Boton>
                Iniciar Sesión
              </Boton>
              ¿Aún no tienes cuenta? <Link>Registrate</Link>
              {formularioValido === true &&
                <MensajeExito><b>Usuario registrado</b></MensajeExito>
              }
            </ContenedorBotonCentrado>
          </Formulario>
          
        </div>
      </main>
    </body>
  );
  }
  
  export default InicioSesion;