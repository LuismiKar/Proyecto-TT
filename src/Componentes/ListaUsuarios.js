import React, { useState } from 'react';
import { useModal } from './Hooks/useModal';
import '../Hojas-de-estilo/ListaUsuarios.css'
import Usuario from './Usuario';
import ComponenteInput from './ComponenteInput';
import { FiPlusSquare } from "react-icons/fi";
import Modal from './Modal';
import Boton from './Boton';

//Considerando el id como email. Si se elimina un registro que tenga el mismo email que otro se eliminan los dos
const usuarios = [
  {username: 'karen baeza', email: 'bcnerick@gmail.com', tipo:'Administrador', password: '123456'},
  {username: 'karen baeza', email: 'karenbaeza@gmail.com', tipo:'Estudiante', password: '12345'}
];

function ListaUsuarios() {
 
  const [db,SetDb] = useState(usuarios);
  const [username,setUsername] = useState({campo:'', valido: null});
  const [password,setPassword] = useState({campo:'', valido: null});
  const [email,setEmail] = useState({campo:'', valido: null});
  const [tipo,setTipo] = useState('');
  const [isOpenModal,openModal,closeModal] = useModal(false);
  const [isOpenModal1,openModal1,closeModal1] = useModal(false);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }

  const limpiarSets = () => {
    setUsername({campo:'',valido:null});
    setTipo('Estudiante');
    setEmail({campo:'',valido:null});
    setPassword({campo:'',valido:null});
  }

  const handleSelectChange2 = ( e ) => {
    setTipo(e.target.value);
  }

  const agregarUsuario = (e) => {
    e.preventDefault();
    const NuevoUsuario = {
      username: username.campo, 
      tipo: tipo,
      email: email.campo,
      password: password.campo
    }

    if(NuevoUsuario.email.trim()) { //Se verifica que la cadena no esta vacia
      NuevoUsuario.email = NuevoUsuario.email.trim(); //Se le quitan los espacios del principio y del final a la cadena
      const usuariosActualizados = [...db,NuevoUsuario];//El operador ... convierte los upfs de un arreglo a upfs individuales
      SetDb(usuariosActualizados);
    }


    closeModal();
    limpiarSets();

  }

  const modificarUsuario = (el) => {

    setUsername({campo: el.username, valido: true});
    setEmail({campo: el.email, valido: true});
    setPassword({campo: el.password, valido: true});
    setTipo(el.tipo);
      
    openModal1();

  }

  const cambiarUsuario = (e) => {
    e.preventDefault();
    
    const NuevoUsuario = {
      username: username.campo, 
      tipo: tipo,
      email: email.campo,
      password: password.campo
    }

    if(NuevoUsuario.email.trim()) { //Se verifica que la cadena no esta vacia
      NuevoUsuario.email = NuevoUsuario.email.trim(); //Se le quitan los espacios del principio y del final a la cadena
      const usuariosActualizados = [...db,NuevoUsuario];//El operador ... convierte los upfs de un arreglo a upfs individuales
      SetDb(usuariosActualizados);
    }

    limpiarSets();
      
    closeModal1();

  }

  const eliminarUsuario = (email) => {
    const usuariosActualizados = db.filter(usuario => usuario.email !== email);//Se genera una copia nueva del arreglo, sin incluir al que tiene id que se manda a esta funcion
    SetDb(usuariosActualizados);
  }

  return(
    <div>
      {/*Formulario para agregar usuarios*/}
      <div className='boton-agregarusuario'>
        <FiPlusSquare className='icon' size='25px' onClick={openModal} />
        Agregar usuario
        
      </div>
      
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <div className='agregar-usuario'>
          <h3>Agregar usuario</h3>
          <form onSubmit={agregarUsuario}>
            <table>
              <tbody>
                <tr>
                  <td>Nombre de usuario:</td>
                  <td><ComponenteInput
                        attribute={{
                          id: 'username',
                          name: 'username',
                          type: 'text',
                          placeholder: 'Ingresa el usuario'
                        }}
                        estado={username}
                        handleChange={setUsername}
                        expresionRegular={expresiones.nombre}
                        leyendaerror='Nombre de usuario inválido'
                        nombreMostrado={false}
                      />
                  </td>
                </tr>
                <tr>
                  <td>Email del usuario:</td>
                  <td><ComponenteInput
                        attribute={{
                          id: 'email',
                          name: 'email',
                          type: 'text',
                          placeholder: 'Ingresa el email'
                        }}
                        estado={email}
                        handleChange={setEmail}
                        expresionRegular={expresiones.email}
                        leyendaerror='Email inválido'
                        nombreMostrado={false}
                      />
                  </td>
                </tr>
                <tr>
                  <td>Contraseña del usuario:</td>
                  <td><ComponenteInput
                        attribute={{
                          id: 'password',
                          name: 'password',
                          type: 'password',
                          placeholder: 'Ingresa la contraseña'
                        }}
                        estado={password}
                        handleChange={setPassword}
                        expresionRegular={expresiones.password}
                        leyendaerror='Contraseña inválida'
                        nombreMostrado={false}
                      />
                  </td>
                </tr>
                <tr>
                  <td>Tipo de usuario:</td>
                  <td>
                    <select value={tipo} onChange={handleSelectChange2} >
                      <option className='option' value="Administrador">Administrador</option>
                      <option className='option' value="Estudiante" selected>Estudiante</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td colSpan='2'>
                    <Boton 
                      name='agregar-usuario'
                      texto='Agregar usuario'
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </Modal>
      
      {/*Tabla de usuarios*/}
      <div className='tabla-usuarios'>
        <h3>Usuarios registrados</h3>
        <table cellPadding='10' className='tabla' border='1' cellSpacing='0'  align='center'>
          <thead>
            <tr>
              <th>Nombre de usuario</th>
              <th>Email</th>
              <th>Tipo de usuario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {db.length === 0 ? 
            (
              <tr><td colSpan='4'>Sin datos</td></tr>
            ) : (
              db.map(el => <Usuario key={el.email} el={el} eliminarUsuario={eliminarUsuario} modificarUsuario={modificarUsuario}/>)
            )}
          </tbody>
        </table>
      </div>
      {/*Formulario para modificar usuarios*/}
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <div className='modificar-usuario'>
          <h3>Modificar usuario</h3>
          <form onSubmit={cambiarUsuario}>
            <table>
              <tbody>
                <tr>
                  <td>Nombre de usuario:</td>
                  <td><ComponenteInput
                        attribute={{
                          id: 'username',
                          name: 'username',
                          type: 'text',
                          placeholder: 'Ingresa el usuario'
                        }}
                        estado={username}
                        handleChange={setUsername}
                        expresionRegular={expresiones.nombre}
                        leyendaerror='Nombre de usuario inválido'
                        nombreMostrado={false}
                      />
                  </td>
                </tr>
                <tr>
                  <td>Email del usuario:</td>
                  <td><ComponenteInput
                        attribute={{
                          id: 'email',
                          name: 'email',
                          type: 'text',
                          placeholder: 'Ingresa el email'
                        }}
                        estado={email}
                        handleChange={setEmail}
                        expresionRegular={expresiones.email}
                        leyendaerror='Email inválido'
                        nombreMostrado={false}
                      />
                  </td>
                </tr>
                <tr>
                  <td>Contraseña del usuario:</td>
                  <td><ComponenteInput
                        attribute={{
                          id: 'password',
                          name: 'password',
                          type: 'password',
                          placeholder: 'Ingresa la contraseña'
                        }}
                        estado={password}
                        handleChange={setPassword}
                        expresionRegular={expresiones.password}
                        leyendaerror='Contraseña inválida'
                        nombreMostrado={false}
                      />
                  </td>
                </tr>
                <tr>
                  <td>Tipo de usuario:</td>
                  <td>
                    <select value={tipo} onChange={handleSelectChange2} >
                      <option className='option' value="Administrador">Administrador</option>
                      <option className='option' value="Estudiante" selected>Estudiante</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td colSpan='2'>
                    <Boton
                      name='modificar-usuario'
                      texto='Modificar usuario'
                      funcion={()=>eliminarUsuario(email.campo)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </Modal>

      
    </div>
  );
}

export default ListaUsuarios;