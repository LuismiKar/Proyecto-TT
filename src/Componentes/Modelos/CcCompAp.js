import React, { useState } from 'react';
import '../../Hojas-de-estilo/CocomoII.css';
import Select from 'react-select';
import Input from '../Input';
import Boton from '../Boton';
import PuntosObjeto from './PuntosObjeto';

function CcCompAp(){

  const [ pm , setPm ] = useState(0);
  const [ NptsObj , setNptsobj ] = useState(0);
  const [ ptsObj , setPtsobj ] = useState(0);
  const [ reuso , setReuso ] = useState(0);
  const [ prod , setProd ] = useState(0);
  const [ ecDes , setEcDes ] = useState(0);
  const [ mcIcase , setMcIcase ] = useState(0);
  const [ nombreProyecto , setNombreProyecto ] = useState('');


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
        <h2>Composición de Aplicación</h2>
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
          <h3>Puntos objeto</h3> 
        </div>
        <PuntosObjeto cambiarPtsObj={ cambiarPtsObj }/>
      </div>
      <div className='contenedor-composicionaplicacion'>
      <table>
        <tbody>
          
          <tr>Porcentaje de reuso: 
          <td><Input 
            attribute={{
              id: 'reuso',
              name: 'reuso',
              type: 'number',
              placeholder: ''
            }}
            handleChange={ handleSelectChange }/></td>
          </tr>
          <tr><h3>Productividad</h3></tr>
          <tr>
            <td>Experiencia y capacidad de los desarrolladores: </td>
            <td>
              <Select 
                options={ Tablaprod } 
                defaultValue={ Tablaprod[2] } 
                onChange={ handleSelectChangeEcDes } /></td>
          </tr>
          <tr>
            <td>Madurez y capacidad del ICASE: </td>
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