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

  const handleSelectChangeReuso = ( name , value ) => {
    if(name==='reuso'){
      console.log("Reuso: " + value);
      setReuso(value);
    }
  }

  const handleSelectChangeEcDes = ( { value } ) => {
    console.log("EcDes: " + value);
    setEcDes(value);
  }

  const handleSelectChangeMcIcase = ( { value } ) => {
    console.log("McIcase: " + value);
    setMcIcase(value);
  }

  function calcularPm(){
    setNptsobj( ptsObj * ( 100 - reuso ) / 100 ); 
    console.log(NptsObj);
    setProd( (ecDes + mcIcase) / 2 );
    console.log(prod);
    setPm( NptsObj / prod );
    console.log( pm );
  }

  return(
    <div>
      <hr/>
      <h3>Puntos objeto</h3> 
      <PuntosObjeto cambiarPtsObj={ cambiarPtsObj }/>
      Puntos objeto: { ptsObj }
      <hr/>
      <div className='contenedor-principal2'>
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
            handleChange={ handleSelectChangeReuso }/></td>
          </tr>
          <tr>Productividad</tr>
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
              texto='Calcular PM' />
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