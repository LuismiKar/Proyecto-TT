import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input';
import Boton from '../Boton';
import '../../Hojas-de-estilo/CocomoII.css';
import { FiHelpCircle } from "react-icons/fi";
import CuadroInfo from '../CuadroInfo';
import ComponenteInput from '../ComponenteInput';

/*
Entradas
Salidas
Lecturas
Escrituras
*/

var FormularioCosmic = function( props ){

  const [nombre, setNombre] = useState({campo:'', valido: null});
  const [entradas, setEntradas] = useState({campo:'', valido: null});
  const [salidas, setSalidas] = useState({campo:'', valido: null});
  const [lecturas, setLecturas] = useState({campo:'', valido: null});
  const [escrituras, setEscrituras] = useState({campo:'', valido: null});
  const [totalPF, setTotalpf] = useState(0);

  //Variables de los cuadros de información
  const [isHoveringTitulo, setIsHoveringTitulo] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,60}$/, // Letras y espacios, pueden llevar acentos.
    numeros: /^\d*\.?\d+$/ // Al menos un numero positivo y un punto 
  }

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
    
    setTotalpf( Number(entradas.campo) + Number(salidas.campo) + Number(lecturas.campo) + Number(escrituras.campo) );
  }

  const manejarEnvio = e => {
    e.preventDefault();//Evitar que se recargue cuando se envie el formulario
    const NuevoPFCosmic = {
      id: uuidv4(),
      nombre: nombre.campo, 
      ent: entradas.campo,
      sal: salidas.campo,
      esc: escrituras.campo,
      lec: lecturas.campo,
      totalPF: totalPF 
    }
    props.onSubmit(NuevoPFCosmic);
    props.enviarTotalPf(totalPF);
    if(totalPF!==0){
      setNombre({campo:'',valido:null});
      setEntradas({campo:'',valido:null});
      setSalidas({campo:'',valido:null});
      setLecturas({campo:'',valido:null});
      setEscrituras({campo:'',valido:null});
    }
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
        En el siguiente apartado se debe agregar una por una cada funcionalidad considerada del software
        </div>
          <table>
            <tr>
              <td>Nombre: </td>
              <td><ComponenteInput
                    attribute={{
                      id: 'nombre',
                      name: 'nombre',
                      type: 'text',
                      placeholder: ''
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
              <td>Número de entradas: </td>
              <td><ComponenteInput
                    attribute={{
                      id: 'entradas',
                      name: 'entradas',
                      type: 'text',
                      placeholder: ''
                    }}
                    estado={entradas}
                    handleChange={setEntradas}
                    expresionRegular={expresiones.numeros}
                    leyendaerror='El valor debe ser positivo'
                    nombreMostrado={false}
                  /></td>
            </tr>
            <tr>
              <td>Número de salidas: </td>
              <td><ComponenteInput
                    attribute={{
                      id: 'salidas',
                      name: 'salidas',
                      type: 'text',
                      placeholder: ''
                    }}
                    estado={salidas}
                    handleChange={setSalidas}
                    expresionRegular={expresiones.numeros}
                    leyendaerror='El valor debe ser positivo'
                    nombreMostrado={false}
                  /></td>
            </tr>
            <tr>
              <td>Número de lecturas: </td>
              <td><ComponenteInput
                    attribute={{
                      id: 'lecturas',
                      name: 'lecturas',
                      type: 'text',
                      placeholder: ''
                    }}
                    estado={lecturas}
                    handleChange={setLecturas}
                    expresionRegular={expresiones.numeros}
                    leyendaerror='El valor debe ser positivo'
                    nombreMostrado={false}
                  /></td>
            </tr>
            <tr>
              <td>Número de escrituras: </td>
              <td><ComponenteInput
                    attribute={{
                      id: 'escrituras',
                      name: 'escrituras',
                      type: 'text',
                      placeholder: ''
                    }}
                    estado={escrituras}
                    handleChange={setEscrituras}
                    expresionRegular={expresiones.numeros}
                    leyendaerror='El valor debe ser positivo'
                    nombreMostrado={false}
                  /></td>
            </tr>
          </table>
        <Boton 
          name='formularioCosmic-boton' 
          texto='Agregar punto'
          onMouseOver={sumarMovimientos} />             
      </form>
    </div>
  );
}

export default FormularioCosmic;