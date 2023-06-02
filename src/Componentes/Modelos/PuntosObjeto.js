import React, { useState } from 'react';
import '../../Hojas-de-estilo/CocomoII.css';
import Input from '../Input';
import Boton from '../Boton';
import Select from 'react-select';
import { FiHelpCircle } from "react-icons/fi";
import CuadroInfo from '../CuadroInfo';
import ComponenteInput from '../ComponenteInput';

var PuntosObjeto = function({ cambiarPtsObj }){

  const [ nPantallas , setPantallas ] = useState({campo:'', valido: null});
  const [ nReportes , setReportes ] = useState({campo:'', valido: null});
  const [ nServidores , setServidores ] = useState({campo:'', valido: null});
  const [ complejidadPant , setComplejidadPant ] = useState('');
  const [ complejidadRep , setComplejidadRep ] = useState('');
  const [ complejidad3gl , setComplejidad3gl ] = useState(0);
  const [ totalPtsObj , setTotalPtsObj ] = useState(0);

  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    numeros: /^\d*\.?\d+$/
  }

  const comp3gl = [
    { label:"si", value:10 },
    { label:"no", value:0 }
  ]

  const ComplejidadPeso = {
    PSimple: 1,
    PMedia: 2,
    PDificil: 3,
    RSimple: 2,
    RMedia: 5,
    RDificil: 8,
    Componente3GL: 10
  }

  function handleChange(name,value) {
    switch(name){
      case 'pantallas':
        setPantallas(value);
        break;
      case 'reportes':
        setReportes(value);
        break;
      case 'servidores':
        setServidores(value);
        
        break;
      default:
        break;
    }
  };

  const handleSelectChangeCom3gl = ( { value } ) => setComplejidad3gl(value);

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
  
  function asignarPesoPantallas(){
    if( nPantallas<0 || nServidores<0 ){
      console.log('Los valores deben ser positivos');
    }
    if( (nPantallas<4 && nServidores<2) || (nPantallas<3 && nServidores<4) || (nPantallas>2 && nPantallas<8 && nServidores<2) ){
      console.log('Pantallas: Es simple');
      console.log(ComplejidadPeso['PSimple']);
      setComplejidadPant(ComplejidadPeso['PSimple']);
    }else if( (nPantallas<3 && nServidores>3) || (nPantallas>2 && nPantallas<8 && nServidores<4) || (nPantallas>7 && nServidores<2) ){
      console.log('Pantallas: Es media');
      console.log(ComplejidadPeso['PMedia']);
      setComplejidadPant(ComplejidadPeso['PMedia']);
    }else{
      console.log('Pantallas: Es dificil');
      console.log(ComplejidadPeso['PDificil']);
      setComplejidadPant(ComplejidadPeso['PDificil']);
    }
  }

  function asignarPesoReportes(){
    if( nReportes<0 || nServidores<0 ){
      console.log('Los valores deben ser positivos');
    }
    if( (nReportes<=1 && nServidores<2) || (nReportes<=1 && nServidores<4) || (nReportes>=2 && nReportes<4 && nServidores<2) ){
      console.log('Reportes: Es simple');
      console.log(ComplejidadPeso['RSimple']);
      setComplejidadRep(ComplejidadPeso['RSimple']);
    }else if( (nReportes<=1 && nServidores>3) || (nReportes>=2 && nReportes<4 && nServidores<4) || (nReportes>3 && nServidores<2) ){
      console.log('Reportes: Es media');
      console.log(ComplejidadPeso['RMedia']);
      setComplejidadRep(ComplejidadPeso['RMedia']);
    }else{
      console.log('Reportes: Es dificil');
      console.log(ComplejidadPeso['RDificil']);
      setComplejidadRep(ComplejidadPeso['RDificil']);
    }
  }

  function enviarDatos(Dato){ cambiarPtsObj(Dato) }

  function calcularPtsObj(){
    asignarPesoPantallas();
    asignarPesoReportes();
    setTotalPtsObj( complejidadPant + complejidadRep + complejidad3gl );
  }

  return(
    <div className='contenedor-puntoobjeto'><br />
      <div>
        <table>
          <tr>
            <td>
              <FiHelpCircle onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} color='#146C94'/>
              Ingresa el número de pantallas: 
              {isHovering2 && (
                <CuadroInfo texto={'Número de interfaces del sistema'} valor='corto'/>
              )}
            </td>
            <td>
              
              <ComponenteInput
                attribute={{
                  id: 'pantallas',
                  name: 'pantallas',
                  type: 'text',
                  placeholder: ''
                }}
                estado={nPantallas}
                handleChange={setPantallas}
                expresionRegular={expresiones.numeros}
                leyendaerror='El valor debe ser positivo'
                nombreMostrado={false}
              />
              
            </td>
          </tr>
          <tr>
            <td>
              <FiHelpCircle onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3} color='#146C94'/>
              Ingresa el número de reportes:
              {isHovering3 && (
                <CuadroInfo texto={'Número de documentos del sistema'} valor='corto'/>
              )}
            </td>
            <td>
              <ComponenteInput
                attribute={{
                  id: 'reportes',
                  name: 'reportes',
                  type: 'text',
                  placeholder: ''
                }}
                estado={nReportes}
                handleChange={setReportes}
                expresionRegular={expresiones.numeros}
                leyendaerror='El valor debe ser positivo'
                nombreMostrado={false}
              />
              
            </td>
          </tr>   
          <tr>
            <td>Ingresa el número de servidores:</td>
            <td>
              <ComponenteInput
                attribute={{
                  id: 'nombreProyecto',
                  name: 'nombreProyecto',
                  type: 'text',
                  placeholder: ''
                }}
                estado={nServidores}
                handleChange={setServidores}
                expresionRegular={expresiones.numeros}
                leyendaerror='El valor debe ser positivo'
                nombreMostrado={false}
              />
            </td>
          </tr>
        </table>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <FiHelpCircle onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} color='#146C94'/>
                Complejidad 3GL
                {isHovering && (
                  <CuadroInfo texto={'Lenguaje de tercera generación'} valor='corto'/>
                )}
              </td>
              <td>
              <Select 
                options={ comp3gl } 
                defaultValue={ comp3gl[1] }
                onChange={ handleSelectChangeCom3gl } />
              </td>
            </tr>
          </tbody>
        </table>
        <Boton
          name='boton-ptsobj'
          funcion={calcularPtsObj}
          texto='Calcular'
          onMouseOver={enviarDatos(totalPtsObj)} />

      </div>
      <div>
        
        <br />
      </div>
    </div>
  );
}

export default PuntosObjeto;