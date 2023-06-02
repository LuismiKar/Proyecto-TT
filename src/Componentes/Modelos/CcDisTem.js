import React, { useState } from 'react';
import { useModal } from '../Hooks/useModal';
import '../../Hojas-de-estilo/CocomoII.css';
import Select from 'react-select';
import Input from '../Input';
import Boton from '../Boton';
import Modal from '../Modal';
import PuntosFuncion from './PuntosFuncion';
import { FiHelpCircle } from "react-icons/fi";
import CuadroInfo from '../CuadroInfo';
import ComponenteInput from '../ComponenteInput';

function CcDisTemp(){

  const A = 2.94;

  const [ B , setB ] = useState(1.1997);
  const [ metrica , setMetrica ] = useState('');
  const [ pmNom , setPMnom ] = useState(0);
  const [ pmEst , setPMest ] = useState(0);
  const [ Arcpx , setRcpx ] = useState(1);
  const [ Aruse , setRuse ] = useState(1);
  const [ Apdif , setPdif ] = useState(1);
  const [ Apers , setPers ] = useState(1);
  const [ Aprex , setPrex ] = useState(1);
  const [ Afcil , setFcil ] = useState(1);
  const [ Asced , setSced ] = useState(1);
  const [ Aprec , setPrec ] = useState(3.72);
  const [ Aflex , setFlex ] = useState(3.04);
  const [ Aresl , setResl ] = useState(4.24);
  const [ Ateam , setTeam ] = useState(3.29);
  const [ Apmat , setPmat ] = useState(4.68);
  const [ Ksloc , setKsloc ] = useState(0);
  const [nombreProyecto,setNombreProyecto] = useState({campo:'', valido: null});

  const [isOpenModal,openModal,closeModal] = useModal(false);
  const [isHoveringTitulo, setIsHoveringTitulo] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);
  const [isHovering6, setIsHovering6] = useState(false);
  const [isHovering7, setIsHovering7] = useState(false);
  const [isHovering8, setIsHovering8] = useState(false);
  const [isHovering9, setIsHovering9] = useState(false);
  const [isHovering10, setIsHovering10] = useState(false);
  const [isHovering11, setIsHovering11] = useState(false);
  const [isHovering12, setIsHovering12] = useState(false);
  const [isHovering13, setIsHovering13] = useState(false);
  const [isHovering14, setIsHovering14] = useState(false);
  const [isHovering15, setIsHovering15] = useState(false);
  const [isHovering16, setIsHovering16] = useState(false);

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
  }

  //Multiplicadores de esfuerzo

  const rcpx = [
    { label:"xlo", value:0.73 },
    { label:"vlo", value:0.81 },
    { label:"lo", value:0.98 },
    { label:"nom", value:1 },
    { label:"hi", value:1.3 },
    { label:"vhi", value:1.74 },
    { label:"xhi", value:2.35 }
  ]
  
  const ruse = [
    { label:"lo", value:0.95 },
    { label:"nom", value:1 },
    { label:"hi", value:1.07 },
    { label:"vhi", value:1.15 },
    { label:"xhi", value:1.24 }
  ]
  
  const pdif = [
    { label:"lo", value:0.87 },
    { label:"nom", value:1 },
    { label:"hi", value:1.29 },
    { label:"vhi", value:1.81 },
    { label:"xhi", value:2.61 }
  ]
  
  const pers = [
    { label:"xlo", value:2.12 },
    { label:"vlo", value:1.62 },
    { label:"lo", value:1.26 },
    { label:"nom", value:1 },
    { label:"hi", value:0.83 },
    { label:"vhi", value:0.63 },
    { label:"xhi", value:0.5 }
  ]
  
  const prex = [
    { label:"xlo", value:1.59 },
    { label:"vlo", value:1.33 },
    { label:"lo", value:1.12 },
    { label:"nom", value:1 },
    { label:"hi", value:0.87 },
    { label:"vhi", value:0.71 },
    { label:"xhi", value:0.62 }
  ]
  
  const fcil = [
    { label:"xlo", value:1.43 },
    { label:"vlo", value:1.3 },
    { label:"lo", value:1.1 },
    { label:"nom", value:1 },
    { label:"hi", value:0.87 },
    { label:"vhi", value:0.73 },
    { label:"xhi", value:0.62 }
  ]
  
  const sced = [
    { label:"vlo", value:1.43 },
    { label:"lo", value:1.14 },
    { label:"nom", value:1 },
    { label:"hi", value:1 },
    { label:"vhi", value:1 }
  ]
  
  //Factores de escala

  const prec = [
    { label:"vlo", value:6.2 },
    { label:"lo", value:4.96 },
    { label:"nom", value:3.72 },
    { label:"hi", value:2.48 },
    { label:"vhi", value:1.24 },
    { label:"xhi", value:0 }
  ]

  const flex = [
    { label:"vlo", value:5.07 },
    { label:"lo", value:4.05 },
    { label:"nom", value:3.04 },
    { label:"hi", value:2.03 },
    { label:"vhi", value:1.01 },
    { label:"xhi", value:0 }
  ]
  
  const resl = [
    { label:"vlo", value:7.07 },
    { label:"lo", value:5.65 },
    { label:"nom", value:4.24 },
    { label:"hi", value:2.83 },
    { label:"vhi", value:1.41 },
    { label:"xhi", value:0 }
  ]
  
  const team = [
    { label:"vlo", value:5.48 },
    { label:"lo", value:4.38 },
    { label:"nom", value:3.29 },
    { label:"hi", value:2.19 },
    { label:"vhi", value:1.1 },
    { label:"xhi", value:0 }
  ]

  const pmat = [
    { label:"vlo", value:7.8 },
    { label:"lo", value:6.24 },
    { label:"nom", value:4.68 },
    { label:"hi", value:3.12 },
    { label:"vhi", value:1.56 },
    { label:"xhi", value:0 } 
  ]

  var enviarSloc = function(numActual){ setKsloc(numActual/1000); }

  const handleSelectChangeRcpx = ( { value } ) => {
    console.log("Rcpx: " + value);
    setRcpx(value);
  }

  const handleSelectChangeRuse = ( { value } ) => {
    console.log("Ruse: " + value);
    setRuse(value);
  }

  const handleSelectChangePdif = ( { value } ) => {
    console.log("Pdif: " + value);
    setPdif(value);
  }

  const handleSelectChangePers = ( { value } ) => {
    console.log("Pers: " + value);
    setPers(value);
  }

  const handleSelectChangePrex = ( { value } ) => {
    console.log("Prex: " + value);
    setPrex(value);
  }

  const handleSelectChangeFcil = ( { value } ) => {
    console.log("Fcil: " + value);
    setFcil(value);
  }

  const handleSelectChangeSced = ( { value } ) => {
    console.log("Sced: " + value);
    setSced(value);
  }

  const handleSelectChangePrec = ( { value } ) => {
    console.log("Prec: " + value);
    setPrec(value);
  }

  const handleSelectChangeFlex = ( { value } ) => {
    console.log("Flex: " + value);
    setFlex(value);
  }

  const handleSelectChangeResl = ( { value } ) => {
    console.log("Resl: " + value);
    setResl(value);
  }

  const handleSelectChangeTeam = ( { value } ) => {
    console.log("Team: " + value);
    setTeam(value);
  }

  const handleSelectChangePmat = ( { value } ) => {
    console.log("Pmat: " + value);
    setPmat(value);
  }

  const handleSelectChangeMetrica = ( { value } ) => {
    console.log("Metrica: " + value);
    setMetrica(value);
  }

  function handleChange(name,value) {
    switch(name){
      case 'ksloc':
        setKsloc(value);
        console.log('Ksloc: ' + Ksloc);
        break;
      case 'nombre-proyecto':
        console.log("Nombre: " + value);
        setNombreProyecto(value);
        break;
      default:
        break;
    }
  };

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

  const handleMouseOver7 = () => {
    setIsHovering7(true);
  };

  const handleMouseOut7 = () => {
    setIsHovering7(false);
  };

  const handleMouseOver8 = () => {
    setIsHovering8(true);
  };

  const handleMouseOut8 = () => {
    setIsHovering8(false);
  };

  const handleMouseOver9 = () => {
    setIsHovering9(true);
  };

  const handleMouseOut9 = () => {
    setIsHovering9(false);
  };

  const handleMouseOver10 = () => {
    setIsHovering10(true);
  };

  const handleMouseOut10 = () => {
    setIsHovering10(false);
  };

  const handleMouseOver11 = () => {
    setIsHovering11(true);
  };

  const handleMouseOut11 = () => {
    setIsHovering11(false);
  };

  const handleMouseOver12 = () => {
    setIsHovering12(true);
  };

  const handleMouseOut12 = () => {
    setIsHovering12(false);
  };

  const handleMouseOver13 = () => {
    setIsHovering13(true);
  };

  const handleMouseOut13 = () => {
    setIsHovering13(false);
  };

  const handleMouseOver14 = () => {
    setIsHovering14(true);
  };

  const handleMouseOut14 = () => {
    setIsHovering14(false);
  };

  const handleMouseOver15 = () => {
    setIsHovering15(true);
  };

  const handleMouseOut15 = () => {
    setIsHovering15(false);
  };

  const handleMouseOver16 = () => {
    setIsHovering16(true);
  };

  const handleMouseOut16 = () => {
    setIsHovering16(false);
  };

  function calculoB(){
    setB(1.01 + 0.01 * ( Aprec + Aflex + Aresl + Ateam + Apmat ));
    console.log('B: ' + B);
  }

  function calculoPMnominal(){
    calculoB();
    setPMnom( A * Math.pow(Ksloc,B) );
    console.log('A: ' + A);
    console.log('Ksloc: ' + Ksloc);
    console.log('Exponente' + Math.pow(Ksloc,B))
    console.log('pmNom: ' + pmNom);
  }

  const calcularEstimacion = () => {
    
    calculoPMnominal();
    setPMest( pmNom * ( Arcpx * Aruse * Apdif * Apers * Aprex * Afcil * Asced ) );
    console.log('pmEst: ' + pmEst);
  }

  return(
    <div className='contenedor-principal'>
      <div className='titulo'>
        <h2>
          <FiHelpCircle onMouseOver={handleMouseOverTitulo} onMouseOut={handleMouseOutTitulo} color='#000'/>
          Diseño Temprano
        </h2>{isHoveringTitulo && (
            <CuadroInfo texto={'Proyectos de software en etapa temprana'}/>
          )}
      </div><br/>
      <div className='contenedor-nombreProyecto'>
        <h4>Nombre del proyecto: </h4>
        <ComponenteInput
            attribute={{
              id: 'nombreProyecto',
              name: 'nombreProyecto',
              type: 'text',
              placeholder: ''
            }}
            name='Nombre del proyecto:'
            estado={nombreProyecto}
            handleChange={setNombreProyecto}
            expresionRegular={expresiones.nombre}
            leyendaerror='Nombre inválido'
            nombreMostrado={false}
        />
      </div>
      <div className='descripcion2'>
        A continuación, ingresa los datos que se indican, de acuerdo a las características de tu proyecto:
      </div>
      <div className='contenedor-diseñotemprano'>
        <div>
          <h3>
            <FiHelpCircle onMouseOver={handleMouseOver15} onMouseOut={handleMouseOut15} color='#000'/>
            Multiplicadores de esfuerzo
          </h3>
          {isHovering15 && (
            <CuadroInfo texto={'Factores que tienen un efecto multiplicativo sobre el esfuerzo'} valor='corto'/>
          )}
          <table>
            <tbody>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} color='#146C94'/> Confiabilidad y Complejidad del producto (RCPX):
                  {isHovering && (
                    <CuadroInfo texto={'Confiabilidad y complejidad del producto'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ rcpx } defaultValue={ rcpx[3] } onChange={ handleSelectChangeRcpx } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} color='#146C94'/> Reusabilidad Requerida (RUSE):
                  {isHovering2 && (
                    <CuadroInfo texto={'Construcción de componentes reutilizables en el mismo o diferente proyecto'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ ruse } defaultValue={ ruse[1] } onChange={ handleSelectChangeRuse }/></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3} color='#146C94'/> Dificultad de la Plataforma (PDIF):
                  {isHovering3 && (
                    <CuadroInfo texto={'Dificultad de la plataforma'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ pdif } defaultValue={ pdif[1] } onChange={ handleSelectChangePdif } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut4} color='#146C94'/> Aptitud del Personal (PERS):
                  {isHovering4 && (
                    <CuadroInfo texto={'Aptitud del personal'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ pers } defaultValue={ pers[3] } onChange={ handleSelectChangePers } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver5} onMouseOut={handleMouseOut5} color='#146C94'/> Experiencia del Personal (PREX):
                  {isHovering5 && (
                    <CuadroInfo texto={'Experiencia del personal'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ prex } defaultValue={ prex[3] } onChange={ handleSelectChangePrex } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver6} onMouseOut={handleMouseOut6} color='#146C94'/> Facilidades (FCIL):
                  {isHovering6 && (
                    <CuadroInfo texto={'Facilidades'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ fcil } defaultValue={ fcil[3] } onChange={ handleSelectChangeFcil } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver7} onMouseOut={handleMouseOut7} color='#146C94'/> Cronograma de Desarrollo Requerido (SCED):
                  {isHovering7 && (
                    <CuadroInfo texto={'Restricción en los plazos de tiempo impuesta al equipo de trabajo'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ sced } defaultValue={ sced[2] } onChange={ handleSelectChangeSced }/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>
            <FiHelpCircle onMouseOver={handleMouseOver16} onMouseOut={handleMouseOut16} color='#000'/>
            Factor exponencial de escala
          </h3>
          {isHovering16 && (
            <CuadroInfo texto={'Resultado de factores que influyen en la productividad y esfuerzo de un proyecto'} valor='corto'/>
          )}
          <table>
            <tbody>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver8} onMouseOut={handleMouseOut8} color='#146C94'/> Precedencia (PREC):
                  {isHovering8 && (
                    <CuadroInfo texto={'Grado de experiencia previa'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ prec } defaultValue={ prec[2] } onChange={ handleSelectChangePrec } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver9} onMouseOut={handleMouseOut9} color='#146C94'/> Flexibilidad en el desarrollo (FLEX):
                  {isHovering9 && (
                    <CuadroInfo texto={'Exigencia en el cumplimiento de los requerimientos'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ flex } defaultValue={ flex[2] } onChange={ handleSelectChangeFlex } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver10} onMouseOut={handleMouseOut10} color='#146C94'/> Arquitectura/Resolución de riesgo (RESL):
                  {isHovering10 && (
                    <CuadroInfo texto={'Conocimiento de los ítems de riesgo crítico y el modo de abordarlos dentro del proyecto'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ resl } defaultValue={ resl[2] } onChange={ handleSelectChangeResl } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver11} onMouseOut={handleMouseOut11} color='#146C94'/> Cohesión de equipo (TEAM):
                  {isHovering11 && (
                    <CuadroInfo texto={'Dificultades de sincronización entre los participantes del proyecto'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ team } defaultValue={ team[2] } onChange={ handleSelectChangeTeam } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver12} onMouseOut={handleMouseOut12} color='#146C94'/> Madurez del proceso (PMAT):
                  {isHovering12 && (
                    <CuadroInfo texto={'Nivel de madurez de la organización'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ pmat } defaultValue={ pmat[2] } onChange={ handleSelectChangePmat } /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='contenedor-ksloc'>
          <div className='descripcion2'>
            Si no cuentas con la cantidad de líneas de código, selecciona <b>Puntos de función</b>
            <Select options={ [ { label:"Puntos de función", value:'PF' },
                                { label:"Líneas de código", value:'KSLOC' }] } 
                    placeholder= 'Selecciona la métrica'
                    onChange={ handleSelectChangeMetrica } />
          </div>
          <table>
            <tbody>
              <tr>
                {metrica==='KSLOC' && <><td>
                  Ingresa la cantidad de <b>miles</b> de líneas de código: 
                </td>
                <td>
                  <Input
                    attribute={{
                      id: 'ksloc',
                      name: 'ksloc',
                      type: 'number'
                    }}
                    handleChange={handleChange}
                />
                </td></>}
                {metrica==='PF' && <><td>
                  <Boton 
                    name='boton-Modal'
                    funcion={openModal}
                    texto='Puntos de funcion'/>
                  <Modal isOpen={isOpenModal} closeModal={closeModal}>
                    <PuntosFuncion enviarSloc={enviarSloc} />
                  </Modal>
                </td>
                </>}
              </tr>
            </tbody>
          </table>
        </div>
        <div className='contenedor-ksloc'>
          <FiHelpCircle onMouseOver={handleMouseOver13} onMouseOut={handleMouseOut13} color='#146C94'/> KSLOC: {Ksloc}
          {isHovering13 && (
            <CuadroInfo texto={'Miles de líneas de código del software a desarrollar'} valor='corto'/>
          )}
        </div>
      </div>
      <Boton
        name='boton'
        funcion={calcularEstimacion}
        texto='Calcular' />
      <hr/>
      <FiHelpCircle onMouseOver={handleMouseOver14} onMouseOut={handleMouseOut14} color='#146C94'/>          
      Esfuerzo: {pmEst}
      
      {isHovering14 && (
        <CuadroInfo texto={'Representa los meses de trabajo de una persona fulltime, requeridos para desarrollar el proyecto'}/>
      )}
    </div>
  );
}

export default CcDisTemp;