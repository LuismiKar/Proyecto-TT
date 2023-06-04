import React, { useState } from 'react';
import { useModal } from './Hooks/useModal';
import '../Hojas-de-estilo/ListaUsuarios.css'
import Proyecto from './Proyecto';
import ComponenteInput from './ComponenteInput';
import { FiPlusSquare } from "react-icons/fi";
import Modal from './Modal';
import Boton from './Boton';

//Tipos de proyecto
//COCOMO II Composición de Aplicación
//COCOMO II Diseño Temprano
//COCOMO II Post Arquitectura
//COSMIC

const proyectos = [
  {id: '1', nombre: 'proyecto uno', tipo:'COCOMO II Post Arquitectura', esfuerzo: 123},
  {id: '2', nombre: 'proyecto dos', tipo:'COCOMO II Diseño Temprano', esfuerzo: 345},
  {id: '3', nombre: 'proyecto tres', tipo:'COSMIC', esfuerzo: 345}
];

//Selector para elegir el metodo con el cual se va a trabajar
function ListaProyectos() {

  const [db,SetDb] = useState(proyectos);
  const [id,setId] = useState({campo:'', valido: null});
  const [nombre,setNombre] = useState({campo:'', valido: null});
  const [esfuerzo,setEsfuerzo] = useState({campo:'', valido: null});
  const [tipo,setTipo] = useState('');
  const [isOpenModal1,openModal1,closeModal1] = useModal(false);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    numeros: /^\d*$/ //Numeros positivos con decimales
  }

  const limpiarSets = () => {
    setId({campo:'',valido:null});
    setNombre({campo:'',valido:null});
    setTipo('');
    setEsfuerzo({campo:'',valido:null});
  }

  const handleSelectChange2 = ( e ) => {
    setTipo(e.target.value);
  }

  const modificarProyecto = (el) => {

    setId({campo: el.id, valido: true});
    setNombre({campo: el.nombre, valido: true});
    setEsfuerzo({campo: el.esfuerzo, valido: true});
    setTipo(el.tipo);
      
    openModal1();

  }

  const cambiarProyecto = (e) => {
    e.preventDefault();
    
    const NuevoProyecto = {
      id: id.campo,
      nombre: nombre.campo, 
      tipo: tipo,
      esfuerzo: esfuerzo.campo
    }

    if(toString(NuevoProyecto.id).trim()) { //Se verifica que la cadena no esta vacia
      const proyectosActualizados = [...db,NuevoProyecto];//El operador ... convierte los upfs de un arreglo a upfs individuales
      SetDb(proyectosActualizados);
    }

    limpiarSets();
      
    closeModal1();

  }

  const eliminarProyecto = (id) => {
    const proyectosActualizados = db.filter(proyecto => proyecto.id !== id);//Se genera una copia nueva del arreglo, sin incluir al que tiene id que se manda a esta funcion
    SetDb(proyectosActualizados);
  }

  return(
    <div>

      {/*Tabla de usuarios*/}
      <div className='tabla-usuarios'>
        <h3>Proyectos registrados</h3>
        <table cellPadding='10' className='tabla' border='1' cellSpacing='0'  align='center'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Esfuerzo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {db.length === 0 ? 
            (
              <tr><td colSpan='4'>Sin datos</td></tr>
            ) : (
              db.map(el => <Proyecto key={el.id} el={el} eliminarProyecto={eliminarProyecto} modificarProyecto={modificarProyecto}/>)
            )}
          </tbody>
        </table>
      </div>
      {/*Formulario para modificar usuarios*/}
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <div className='modificar-proyecto'>
          <h3>Modificar proyecto</h3>
          <form onSubmit={cambiarProyecto}>
            <table>
              <tbody>
                <tr>
                  <td>Nombre del proyecto:</td>
                  <td><ComponenteInput
                        attribute={{
                          id: 'nombre',
                          name: 'nombre',
                          type: 'text',
                          placeholder: 'Ingresa el nombre'
                        }}
                        estado={nombre}
                        handleChange={setNombre}
                        expresionRegular={expresiones.nombre}
                        leyendaerror='Nombre inválido'
                        nombreMostrado={false}
                      />
                  </td>
                </tr>
                <tr>
                  <td>Esfuerzo del proyecto:</td>
                  <td><ComponenteInput
                        attribute={{
                          id: 'esfuerzo',
                          name: 'esfuerzo',
                          type: 'text',
                          placeholder: 'Ingresa el esfuerzo'
                        }}
                        estado={esfuerzo}
                        handleChange={setEsfuerzo}
                        expresionRegular={expresiones.numeros}
                        leyendaerror='Esfuerzo inválido'
                        nombreMostrado={false}
                      />
                  </td>
                </tr>
                <tr>
                  <td>Tipo de proyecto:</td>
                  <td>
                    <select value={tipo} onChange={handleSelectChange2} >
                      <option value="COCOMO II Composición de Aplicación">COCOMO II Composición de Aplicación</option>
                      <option value="COCOMO II Diseño Temprano" selected>COCOMO II Diseño Temprano</option>
                      <option value="COCOMO II Post Arquitectura" selected>COCOMO II Post Arquitectura</option>
                      <option value="COSMIC" selected>COSMIC</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td colSpan='2'>
                    <Boton
                      name='modificar-proyecto'
                      texto='Modificar Proyecto'
                      funcion={()=>eliminarProyecto(id.campo)}
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

export default ListaProyectos;