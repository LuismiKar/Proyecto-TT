import React, { useState } from 'react';
import '../../Hojas-de-estilo/CocomoII.css';
import Input from '../Input';
import Boton from '../Boton';
import Select from 'react-select';

var PuntosObjeto = function({ cambiarPtsObj }){

  const [ nPantallas , setPantallas ] = useState(0);
  const [ nReportes , setReportes ] = useState(0);
  const [ nServidores , setServidores ] = useState(0);
  const [ complejidadPant , setComplejidadPant ] = useState('');
  const [ complejidadRep , setComplejidadRep ] = useState('');
  const [ complejidad3gl , setComplejidad3gl ] = useState(0);
  const [ totalPtsObj , setTotalPtsObj ] = useState(0);

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
        Ingresa el número de pantallas: 
        <Input 
          attribute={{
            id: 'pantallas',
            name: 'pantallas',
            type: 'number',
            placeholder: ''
          }}
          handleChange={handleChange}/>
        Ingresa el número de reportes: 
        <Input 
          attribute={{
            id: 'reportes',
            name: 'reportes',
            type: 'number',
            placeholder: ''
          }}
          handleChange={handleChange}/> 
        Ingresa el número de servidores: 
        <Input 
          attribute={{
            id: 'servidores',
            name: 'servidores',
            type: 'servidores',
            placeholder: ''
          }}
          handleChange={handleChange}/> <br />{complejidadPant}<br />{complejidadRep}<br />
      </div>
      <div>
        Complejidad 3GL
        <Select 
          options={ comp3gl } 
          defaultValue={ comp3gl[1] }
          onChange={ handleSelectChangeCom3gl } />{complejidad3gl}
      </div>
      <div>
        <Boton
          name='boton-ptsobj'
          funcion={calcularPtsObj}
          texto='Calcular'
          onMouseOver={enviarDatos(totalPtsObj)} />
        <br />Puntos objeto: {totalPtsObj}
      </div>
    </div>
  );
}

export default PuntosObjeto;