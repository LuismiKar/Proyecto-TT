import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from './Input';
import Boton from './Boton';
import Select from 'react-select';
import '../Hojas-de-estilo/ListaProyectos.css'

var FormularioProyecto = function( props ) {

  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [esfuerzo, setEsfuerzo] = useState(0);

  const tipoProyecto = [
    { label:"COCOMO II Composicion de aplicación", value:"COCOMO II Composicion de aplicación" },
    { label:"COCOMO II Diseño temprano", value:"COCOMO II Diseño temprano" },
    { label:"COCOMO II Post Arquitectura", value:"COCOMO II Post Arquitectura" },
    { label:"Puntos de función COSMIC", value:"Puntos de función COSMIC" }
  ]

  const manejarEnvio = e => {
    e.preventDefault();//Evitar que se recargue cuando se envie el formulario
    const NuevoProyecto = {
      id: uuidv4(),
      nombre: nombre, 
      tipo: tipo,
      esfuerzo: esfuerzo
    }
    props.onSubmit(NuevoProyecto);
  };

  const handleSelectChange = ( { value } ) => {
    console.log("Tipo: " + value);
    setTipo(value);
  }

  //Función para ver los cambios del campo de texto
  function handleChange(name,value) {
    switch(name){
      case 'nombre':
        setNombre(value);
        console.log(value);
        break;
      case 'esfuerzo':
        setEsfuerzo(value);
        console.log(value);
        break;
      default:
        break;
    }
  };


  return(
    <div className='contenedor-listaproyecto'>
      <form 
        className='formulario-proyecto'
        onSubmit={manejarEnvio}>

        <table>

          <tr>
            <td>Nombre del proyecto:</td>
            <td>
              <Input
                attribute={{
                  id: 'nombre',
                  name: 'nombre',
                  type: 'text',
                  placeholder: 'Ingresa el nombre'
                }}
                handleChange={handleChange}/>
            </td>
          </tr>
          <tr>
            <td>Tipo de proyecto:</td>
            <td>
              <Select options={ tipoProyecto } placeholder='Tipo de Proyecto' onChange={ handleSelectChange } />
            </td>
          </tr>
          <tr>
            <td>Esfuerzo calculado: </td>
            <td>
              <Input
                attribute={{
                  id: 'esfuerzo',
                  name: 'esfuerzo',
                  type: 'number',
                  placeholder: 'Ingresa el esfuerzo'
                }}
                handleChange={handleChange}/>
            </td>
          </tr>

        </table>

        <Boton 
              name='formulario-boton' 
              texto='Agregar Proyecto' /> 
              
      </form>
    </div>
  );

}

export default FormularioProyecto;