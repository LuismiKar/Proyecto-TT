import React, { useState } from 'react';
import '../../Hojas-de-estilo/CocomoII.css';
import Select from 'react-select';
import Input from '../Input';
import Boton from '../Boton';
import PuntosObjeto from './PuntosObjeto';
import { FiHelpCircle } from "react-icons/fi";
import CuadroInfo from '../CuadroInfo';

function CcCompAp(){

  const [ pm , setPm ] = useState(0);
  const [ NptsObj , setNptsobj ] = useState(0);
  const [ ptsObj , setPtsobj ] = useState(0);
  const [ reuso , setReuso ] = useState(0);
  const [ prod , setProd ] = useState(0);
  const [ ecDes , setEcDes ] = useState(0);
  const [ mcIcase , setMcIcase ] = useState(0);
  const [ nombreProyecto , setNombreProyecto ] = useState('');

  const [isHoveringTitulo, setIsHoveringTitulo] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  const Tablaprod = [
    { label:"vlo", value:4 },
    { label:"lo", value:7 },
    { label:"nom", value:13 },
    { label:"hi", value:25 },
    { label:"vhi", value:50 }
  ]

  var cambiarPtsObj = function(numActual){
    setPtsobj(numActual);
  }

  const handleSelectChange = ( name , value ) => {
    switch (name) {
      case 'reuso':
        console.log("Reuso: " + value);
        setReuso(value);
        setNptsobj( ptsObj * ( 100 - reuso ) / 100 ); 
        break;
      case 'nombre-proyecto':
        console.log("Nombre: " + value);
        setNombreProyecto(value);
        break;
      default:
        break;
    }
  }

  const handleSelectChangeEcDes = ( { value } ) => {
    setEcDes(value);
    console.log("EcDes: " + value);
  }

  const handleSelectChangeMcIcase = ( { value } ) => {
    setMcIcase(value);
    console.log("McIcase: " + value);
  }

  function calcularProd(){
    setProd( (ecDes + mcIcase) / 2 );
  }

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
  
  function calcularPm(){
    //setNptsobj( ptsObj * ( 100 - reuso ) / 100 ); 
    console.log('Nuevos Puntos objetos: '+NptsObj);
    console.log('Prod: ' + prod);
    setPm( NptsObj / prod );
    console.log('Esfuerzo: ' + pm );
  }

  return(
    <div className='contenedor-principal' >
      <div className='titulo'>
        <h2>
          <FiHelpCircle onMouseOver={handleMouseOverTitulo} onMouseOut={handleMouseOutTitulo} color='#000'/>
          Composición de Aplicación
        </h2>{isHoveringTitulo && (
            <CuadroInfo texto={'Desarrollos de software durante la etapa de prototipación'}/>
          )}
      </div>
      <div className='contenedor-nombreProyecto'>
        <h4>Nombre del proyecto:</h4>
          <Input 
            attribute={{
              id: 'nombre-proyecto',
              name: 'nombre-proyecto',
              type: 'text',
              placeholder: 'Ingrese nombre'
            }}
            handleChange={ handleSelectChange }/>
      </div>

      <div className='contenedor-puntosobjeto'>
        <div className='titulo'>
          {isHovering && (
            <CuadroInfo className='center' texto={'Enfoque de medición de tamaño de software'}/>
          )}
          <h3>
            <FiHelpCircle onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} color='#000'/>
            Puntos objeto
          </h3> 
        </div>
        <PuntosObjeto cambiarPtsObj={ cambiarPtsObj }/>
      </div>
      <div className='contenedor-composicionaplicacion'>
      <table>
        <tbody>
          
          <tr>
            <td>
              <FiHelpCircle onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} color='#146C94'/>
              Porcentaje de reuso:
              {isHovering2 && (
                <CuadroInfo texto={'Porcentaje de reuso que se espera lograr en el proyecto'}/>
              )} 
            </td>
            <td>
              <Input 
              attribute={{
                id: 'reuso',
                name: 'reuso',
                type: 'number',
                placeholder: ''
              }}
              handleChange={ handleSelectChange }/>
            </td>
          </tr>
          <tr><td colSpan='2'><center><h3>Productividad</h3></center></td></tr>
          <tr>
            <td>Experiencia y capacidad de los desarrolladores: </td>
            <td>
              <Select 
                options={ Tablaprod } 
                defaultValue={ Tablaprod[2] } 
                onChange={ handleSelectChangeEcDes } /></td>
          </tr>
          <tr>
            <td>
              <FiHelpCircle onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3} color='#146C94'/>
              Madurez y capacidad del ICASE: 
              {isHovering3 && (
                <CuadroInfo texto={'ICASE: Herramientas integradas'}/>
              )} 
            </td>
            <td>
              <Select 
                options={ Tablaprod } 
                defaultValue={ Tablaprod[2] } 
                onChange={ handleSelectChangeMcIcase } /></td>
          </tr>
          <tr>
            <Boton
              name='boton-'
              funcion={ calcularPm }
              texto='Calcular PM' 
              onMouseOver={calcularProd}/>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

/*
function CcCompAp(){

  const [ variable , setVariable ] = useState(0);

  var cambiarEstado = function(numActual){
    setVariable(numActual);
  }

  return(
    <div>
      <div>{variable}</div>
      <Prueba cambiarEstado = { cambiarEstado } />
    </div>
  );
}
*/
export default CcCompAp;