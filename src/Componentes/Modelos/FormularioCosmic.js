import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input';
import Boton from '../Boton';
import '../../Hojas-de-estilo/CocomoII.css';
import { FiHelpCircle } from "react-icons/fi";
import CuadroInfo from '../CuadroInfo';

/*
Entradas
Salidas
Lecturas
Escrituras
*/

var FormularioCosmic = function( props ){

  const [nombre, setNombre] = useState('');
  const [entradas, setEntradas] = useState(0);
  const [salidas, setSalidas] = useState(0);
  const [lecturas, setLecturas] = useState(0);
  const [escrituras, setEscrituras] = useState(0);
  const [totalPF, setTotalpf] = useState(0);

  //Variables de los cuadros de información
  const [isHoveringTitulo, setIsHoveringTitulo] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);

  //Funciones de los cuadros de información
  const handleMouseOverTitulo = () => {
    setIsHoveringTitulo(true);
  };

  const handleMouseOutTitulo = () => {
    setIsHoveringTitulo(false);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };
  
  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };

  const handleMouseOver4 = () => {
    setIsHovering4(true);
  };

  const handleMouseOut4 = () => {
    setIsHovering4(false);
  };

  function sumarMovimientos(){
    
    setTotalpf( Number(entradas) + Number(salidas) + Number(lecturas) + Number(escrituras) );
  }

  const manejarEnvio = e => {
    e.preventDefault();//Evitar que se recargue cuando se envie el formulario
    const NuevoPFCosmic = {
      id: uuidv4(),
      nombre: nombre, 
      ent: entradas,
      sal: salidas,
      esc: escrituras,
      lec: lecturas,
      totalPF: totalPF 
    }
    props.onSubmit(NuevoPFCosmic);
    sumarMovimientos();
    props.enviarTotalPf(totalPF);
  };

  //Función para ver los cambios del campo de texto
  function handleChange(name,value) {
    switch(name){
      case 'nombre':
        setNombre(value);
        console.log(value);
        break;
      case 'entradas':
        setEntradas(value);
        console.log(value);
        break;
      case 'salidas':
        setSalidas(value);
        console.log(value);
        break;
      case 'lecturas':
        setLecturas(value);
        console.log(value);
        break;
      case 'escrituras':
        setEscrituras(value);
        console.log(value);
        break;
      default:
        break;
    }
  };

  return(
    <div>
      <form 
        className='Cosmic-formulario'
        onSubmit={manejarEnvio}>
        <h4>
          <FiHelpCircle onMouseOver={handleMouseOverTitulo} onMouseOut={handleMouseOutTitulo} color='#000'/>
          Puntos de funcion Cosmic
        </h4>
        {isHoveringTitulo && (
            <CuadroInfo texto={'Funcionalidades del proyecto'} valor='corto'/>
        )}
        <div className='descripcion'>
        En el siguiente apartado se debe agregar cada funcionalidad considerada del software
        </div>
          <table>
            <tr>
              <td>Nombre: </td>
              <td><Input 
                    attribute={{
                      id: 'nombre',
                      name: 'nombre',
                      type: 'text',
                      placeholder: 'Ingresa el nombre'
                    }}
                    handleChange={handleChange}/></td>
            </tr>
            <tr>
              <td>Número de entradas: </td>
              <td><Input 
                    attribute={{
                      id: 'entradas',
                      name: 'entradas',
                      type: 'number',
                      placeholder: ''
                    }}
                    handleChange={handleChange}/></td>
            </tr>
            <tr>
              <td>Número de salidas: </td>
              <td><Input 
                    attribute={{
                      id: 'salidas',
                      name: 'salidas',
                      type: 'number',
                      placeholder: ''
                    }}
                    handleChange={handleChange}/></td>
            </tr>
            <tr>
              <td>Número de lecturas: </td>
              <td><Input 
                    attribute={{
                      id: 'lecturas',
                      name: 'lecturas',
                      type: 'number',
                      placeholder: ''
                    }}
                    handleChange={handleChange}/></td>
            </tr>
            <tr>
              <td>Número de escrituras: </td>
              <td><Input 
                    attribute={{
                      id: 'escrituras',
                      name: 'escrituras',
                      type: 'number',
                      placeholder: ''
                    }}
                    handleChange={handleChange}/></td>
            </tr>
          </table>
        <Boton 
          name='formularioCosmic-boton' 
          texto='Agregar punto' />             
      </form>
    </div>
  );
}

export default FormularioCosmic;