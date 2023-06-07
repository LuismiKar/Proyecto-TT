import React, { useState,useEffect } from 'react';
import '../Hojas-de-estilo/Registro.css'
import { Link } from 'react-router-dom';
import { Formulario , ContenedorBotonCentrado , Boton, MensajeError, MensajeExito } from '../Elementos/UsuarioElementos';
import { FiAlertCircle } from "react-icons/fi";
import ComponenteInput from './ComponenteInput';
import Registro from './Registro';
import Usuario from './Usuario';
import axios from 'axios';

const direccion = 'http://localhost:2000';

function InicioSesion( props ){
  const [username,setUsername] = useState({campo:'', valido: null});
  const [password,setPassword] = useState({campo:'', valido: null});
  const [password2,setPassword2] = useState({campo:'', valido: null});
  const [email,setEmail] = useState({campo:'', valido: null});
  const [formularioValido,setFormularioValido] = useState(null);
  const [valor,setValor] = useState('iniciarSesion');
  const [aux,setAux] = useState(null);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }

  const usuarios = [
    {id: 1, username: 'karen baeza', email: 'bcnerick@gmail.com', password: '123456'},
    {id: 2, username: 'karen baeza', email: 'karenbaeza@gmail.com', password: '12345'}
  ];
  
  function cambiarValorRegistro(){
    setValor('registro');
    
  }

  function cambiarValorInicioSesion(){
    setValor('iniciarSesion');
  }

  const onSubmitInicioSesion = (e) =>{
    e.preventDefault();

    //Aqui va la funcion para iniciar sesion
    //##############

    const formData = {
      email: '',
      nombreusuario:'',
      contraseña:''
    };

    axios.get(direccion+'/user/'+email.campo)
    .then(response =>{
      console.log('Ya los tienes: ',response.data[0].email);
    })
    .catch(error=>{
      console.log(error);
    })


    //#############
        
    
    if( aux === true ){
      setFormularioValido(true); 
      props.enviarUsuario(email.campo);
      setEmail({campo: '',valido: null});
      setPassword({campo: '',valido: null});
      setFormularioValido(null);
      setAux(null);
      console.log(aux);

      console.log(email.campo);
      console.log(password.campo);

    } else {
      setFormularioValido(false);
    }

  }

  const onSubmitRegistro = (e) =>{
    e.preventDefault();

    if(username.valido === 'true' && email.valido === 'true' && password.valido === 'true' && password2.valido === 'true'){
      setFormularioValido(true);
      props.enviarUsuario(email.campo);
      
      setUsername({campo: '',valido: null});
      setEmail({campo: '',valido: null});
      setPassword({campo: '',valido: null});
      setPassword2({campo: '',valido: null});
      setFormularioValido(null);


        //No tocar, es la funcion que registra usuarios
        const formData = {
          email: email.campo,
          nombreusuario: username.campo,
          contraseña : password.campo,
          idtipousuario: 1
        };

        console.log(formData);

        axios.post(direccion+'/user', formData)
        //Aqui termina la funcion para registrar usuarios



    } else {
      setFormularioValido(false);
    }
  }

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


  return(
    <body id='body-registro-login'>
      <main>
        <div className='contenedor-datosusuario'>
          <Link onClick={cambiarValorInicioSesion}>Iniciar Sesión</Link>
          <Link onClick={cambiarValorRegistro}>Registrarse</Link>
          
          {valor === 'registro' && 
            <>
              <h2>Crear Cuenta</h2>
              <Formulario onSubmit={onSubmitRegistro}>
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
                      expresionRegular={expresiones.nombre}
                      leyendaerror='Nombre de usuario inválido'
                      nombreMostrado={true}
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
                      nombreMostrado={true}
                  />
                </div>
                <div>
                  <ComponenteInput
                      attribute={{
                        id: 'password',
                        name: 'password',
                        type: 'password',
                        placeholder: 'Ingresa tu contraseña'
                      }}
                      name='Contraseña:'
                      estado={password}
                      handleChange={setPassword}
                      expresionRegular={expresiones.password}
                      leyendaerror='Contraseña inválida'
                      nombreMostrado={true}
                  />
                </div>
                <div>
                  <ComponenteInput
                      attribute={{
                        id: 'password2',
                        name: 'password2',
                        type: 'password',
                        placeholder: 'Ingresa tu contraseña'
                      }}
                      name='Confirma contraseña:'
                      estado={password2}
                      handleChange={setPassword2}
                      expresionRegular={expresiones.password}
                      leyendaerror='Contraseña inválida'
                      funcion={validarPassword2}
                      nombreMostrado={true}
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
                  {formularioValido === true &&
                    <MensajeExito><b>Formulario enviado exitosamente</b></MensajeExito>
                  }
                </ContenedorBotonCentrado>
              </Formulario>
            </>
          }
          
          {valor === 'iniciarSesion' && 
          <>
            <h2>Iniciar Sesión</h2>
            <Formulario onSubmit={onSubmitInicioSesion}>
              <div id='login-email'>
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
                    nombreMostrado={true}
                />
              </div>
              <div>
                <ComponenteInput
                    attribute={{
                      id: 'login-password',
                      name: 'password',
                      type: 'password',
                      placeholder: 'Ingresa tu contraseña'
                    }}
                    name='Contraseña:'
                    estado={password}
                    handleChange={setPassword}
                    nombreMostrado={true}
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
                {formularioValido === true &&
                  <MensajeExito><b>Usuario registrado</b></MensajeExito>
                }
              </ContenedorBotonCentrado>
            </Formulario>
          </>
        }
          
        </div>
      </main>
    </body>
  );
  }
  
  export default InicioSesion;