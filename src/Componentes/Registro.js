import React from 'react';
import { useState } from 'react';
import ComponenteInput from './ComponenteInput';
import { Link } from 'react-router-dom';
import '../Hojas-de-estilo/Registro.css'
import { Formulario , ContenedorBotonCentrado , Boton, MensajeError, MensajeExito } from '../Elementos/InicioSesionElementos';
import { FiXCircle , FiCheck , FiAlertCircle } from "react-icons/fi";

function Registro(){

  const [username,setUsername] = useState({campo:'', valido: null});
  const [password,setPassword] = useState({campo:'', valido: null});
  const [password2,setPassword2] = useState({campo:'', valido: null});
  const [email,setEmail] = useState({campo:'', valido: null});
  const [formularioValido,setFormularioValido] = useState(null);


  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
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

  const validarPassword2 = () => {
    if(password.campo.length > 0){
      if(password.campo !== password2.campo){
        setPassword2((prevState) => {
          return {...prevState, valido:'false'}
        });
        console.log('Las contraseñas no son iguales');
      } else {
        setPassword2((prevState) => {
          return {...prevState, valido:'true'}
        });
        console.log('Las contraseñas son iguales');
      }
    }
  }

  const onSubmit = (e) =>{
    e.preventDefault();

    if(username.valido === 'true' && email.valido === 'true' && password.valido === 'true' && password2.valido === 'true'){
      setFormularioValido(true);
      setUsername({campo: '',valido: null});
      setEmail({campo: '',valido: null});
      setPassword({campo: '',valido: null});
      setPassword2({campo: '',valido: null});
    } else {
      setFormularioValido(false);
    }

  }

  
  return(
    <main>
      <div className='inicio-sesion-principal'>
        <h2>Crear Cuenta</h2>
        <Formulario onSubmit={onSubmit}>
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
                leyendaerror='Nombre de usuario inválido'
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
                  id: 'password',
                  name: 'password',
                  type: 'text',
                  placeholder: 'Ingresa tu contraseña'
                }}
                name='Contraseña:'
                estado={password}
                handleChange={setPassword}
                expresionRegular={expresiones.password}
                leyendaerror='Contraseña inválida'
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
                leyendaerror='Contraseña inválida'
                funcion={validarPassword2}
            />
          </div>
          {formularioValido === false && <MensajeError>
            <p>
              <FiAlertCircle/>
              <b>Error: </b>Por favor rellena el formulario correctamente.
            </p>
          </MensajeError>}
          <ContenedorBotonCentrado>
            <Boton>
              Registrarse
            </Boton>
            ¿Ya tienes una cuenta? <Link>Iniciar Sesión</Link>
            {formularioValido === true &&
              <MensajeExito><b>Formulario enviado exitosamente</b></MensajeExito>
            }
          </ContenedorBotonCentrado>
        </Formulario>
        
      </div>
    </main>
  );
}

export default Registro;