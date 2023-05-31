import React, {useState} from 'react';
import '../../Hojas-de-estilo/CocomoII.css';
import FormularioCosmic from './FormularioCosmic';
import PuntoFuncionCosmic from './PuntoFuncionCosmic';
import Input from '../Input';
import Boton from '../Boton';
import { FiHelpCircle } from "react-icons/fi";
import CuadroInfo from '../CuadroInfo';


/*
Entradas
Salidas
Lecturas
Escrituras
*/

function PuntosCosmic(){

  const [pfcs, setPfcs] = useState([]);
  const [tasaEntrega, setTasaentrega] = useState(0);
  const [totalPfC, setTotalPfC] = useState(0);
  const [pmEst, setPmEst] = useState(0);

  //Variables de los cuadros de informacion 
  const [isHoveringTitulo, setIsHoveringTitulo] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);
  const [isHovering6, setIsHovering6] = useState(false);

  var enviarTotalPf = function(numActual){ setTotalPfC( Number(totalPfC) + numActual); }

  const agregarPfc = pfc => {
    if(pfc.nombre.trim() && pfc.totalPF!==0 ) { //Se verifica que la cadena no esta vacia
      pfc.nombre = pfc.nombre.trim(); //Se le quitan los espacios del principio y del final a la cadena
      const pfcsActualizados = [pfc, ...pfcs];//El operador ... convierte los upfs de un arreglo a upfs individuales
      setPfcs(pfcsActualizados);
    }
  };

  //Funcion de los cuadros de informacion

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

  const handleMouseOver5 = () => {
    setIsHovering5(true);
  };

  const handleMouseOut5 = () => {
    setIsHovering5(false);
  };

  const handleMouseOver6 = () => {
    setIsHovering6(true);
  };

  const handleMouseOut6 = () => {
    setIsHovering6(false);
  };

  //Función para ver los cambios del campo de texto
  function handleChange(name,value) {
    switch(name){
      case 'tasaEntrega':
        setTasaentrega(value);
        console.log(value);
        break;
      default:
        break;
    }
  };

  function calcularEsfuerzo(){
    setPmEst(tasaEntrega * totalPfC);
  }

  return(
    <div className='contenedor-principal'>
      <div className='titulo'>
        <h2>
          <FiHelpCircle onMouseOver={handleMouseOverTitulo} onMouseOut={handleMouseOutTitulo} color='#000'/>
          COSMIC
        </h2>
        {isHoveringTitulo && (
          <CuadroInfo texto={'Determina el tamaño del software a partir de las funcionalidades'}/>
        )}
      </div>
      <div className='contenedor-nombreProyecto'>
        <h4>Nombre del proyecto: </h4>
        <Input 
            attribute={{
              id: 'nombre-proyecto',
              name: 'nombre-proyecto',
              type: 'text',
              placeholder: 'Ingrese nombre'
            }}
            handleChange={ handleChange }/>
      </div>
      <div className='contenedor-cosmic'>
        <div>
          <FormularioCosmic onSubmit={ agregarPfc } enviarTotalPf={ enviarTotalPf } />
          
        </div>
        <div>
        <h4>
          <FiHelpCircle onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} color='#000'/>
          Tasa de entrega: 
        </h4>
        {isHovering && (
          <CuadroInfo texto={'Valor de ajuste para los puntos de función COSMIC'} valor='corto'/>
        )}
        <div className='descripcion3'>
          Acontinuación se debe agregar la tasa de entrega del proyecto
        </div>
          <Input 
            attribute={{
              id: 'tasaEntrega',
              name: 'tasaEntrega',
              type: 'number',
              placeholder: ''
            }}
            handleChange={handleChange}/>
          
        </div>
        {pfcs.length!==0 &&<>
        <div className='descripcion'>
          <b>Tabla de puntos de función</b>
        </div>
        <table cellPadding='10' className='tabla' border='1' cellSpacing='0'  align='center'>
            <thead>
            <tr>
              <td>Nombre</td>
              <td>Entradas</td>
              <td>Salidas</td>
              <td>Escrituras</td>
              <td>Lecturas</td>
              <td>Cantidad Total</td>
            </tr>
          </thead>
          <tbody>
            {
            pfcs.map((pfc) => 
              <PuntoFuncionCosmic 
                key={pfc.id}
                id={pfc.id}
                nombre={pfc.nombre}
                ent={pfc.ent}
                sal={pfc.sal}
                esc={pfc.esc}
                lec={pfc.lec} 
                totalPF={pfc.totalPF} />
              )
            }
          </tbody>
        </table>
        </> }
        
        
      </div>
      
      <Boton 
            name='calcularUFP-boton' 
            funcion={calcularEsfuerzo}
            texto='Calcular UFP' />
      <hr/>
      <FiHelpCircle onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} color='#146C94'/>          
      Esfuerzo: {pmEst}
      
      {isHovering2 && (
        <CuadroInfo texto={'Representa los meses de trabajo de una persona fulltime, requeridos para desarrollar el proyecto'}/>
      )}
    </div>
  );
}

export default PuntosCosmic;