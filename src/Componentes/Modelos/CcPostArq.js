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

function CcPostArq(){

  const A = 2.94;

  const [ B , setB ] = useState(1.1997);
  const [ metrica , setMetrica ] = useState('');
  const [ pmNom , setPMnom ] = useState(0);
  const [ pmEst , setPMest ] = useState(0);
  const [ nombreProyecto , setNombreProyecto ] = useState('');
  const [isOpenModal,openModal,closeModal] = useModal(false);

  const [ Arely , setRely ] = useState(1);
  const [ Adata , setData ] = useState(1);
  const [ Acplx , setCplx ] = useState(1);
  const [ Aruse , setRuse ] = useState(1);
  const [ Adocu , setDocu ] = useState(1);

  const [ Atime , setTime ] = useState(1);
  const [ Astor , setStor ] = useState(1);
  const [ Apvol , setPvol ] = useState(1);

  const [ Aacap , setAcap ] = useState(1);
  const [ Apcap , setPcap ] = useState(1);
  const [ Apcon , setPcon ] = useState(1);
  const [ Aaexp , setAexp ] = useState(1);
  const [ Apexp , setPexp ] = useState(1);
  const [ Altex , setLtex ] = useState(1);

  const [ Atool , setTool ] = useState(1);
  const [ Asite , setSite ] = useState(1);
  const [ Asced , setSced ] = useState(1);
  

  const [ Aprec , setPrec ] = useState(3.72);
  const [ Aflex , setFlex ] = useState(3.04);
  const [ Aresl , setResl ] = useState(4.24);
  const [ Ateam , setTeam ] = useState(3.29);
  const [ Apmat , setPmat ] = useState(4.68);
  const [ Ksloc , setKsloc ] = useState('');

  //Cuadros de informacion

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
  const [isHovering17, setIsHovering17] = useState(false);
  const [isHovering18, setIsHovering18] = useState(false);
  const [isHovering19, setIsHovering19] = useState(false);
  const [isHovering20, setIsHovering20] = useState(false);
  const [isHovering21, setIsHovering21] = useState(false);
  const [isHovering22, setIsHovering22] = useState(false);
  const [isHovering23, setIsHovering23] = useState(false);
  const [isHovering24, setIsHovering24] = useState(false);

  //Multiplicadores de esfuerzo

  //Producto
  const rely = [
    { label:"vlo", value:0.82 },
    { label:"lo", value:0.92 },
    { label:"nom", value:1 },
    { label:"hi", value:1.10 },
    { label:"vhi", value:1.26 }
  ]

  const data = [
    { label:"lo", value:0.90 },
    { label:"nom", value:1 },
    { label:"hi", value:1.14 },
    { label:"vhi", value:1.28 }
  ]
  
  const docu = [
    { label:"vlo", value:0.81 },
    { label:"lo", value:0.91 },
    { label:"nom", value:1 },
    { label:"hi", value:1.11 },
    { label:"vhi", value:1.23 }
  ]

  const cplx = [
    { label:"vlo", value:0.73 },
    { label:"lo", value:0.87 },
    { label:"nom", value:1 },
    { label:"hi", value:1.17 },
    { label:"vhi", value:1.34 },
    { label:"xhi", value:1.74 }
  ]
  
  const ruse = [
    { label:"lo", value:0.95 },
    { label:"nom", value:1 },
    { label:"hi", value:1.07 },
    { label:"vhi", value:1.15 },
    { label:"xhi", value:1.24 }
  ]
  
  //Plataforma
  const time = [
    { label:"nom", value:1 },
    { label:"hi", value:1.11 },
    { label:"vhi", value:1.29 },
    { label:"xhi", value:1.63 }
  ]

  const stor = [
    { label:"nom", value:1 },
    { label:"hi", value:1.05 },
    { label:"vhi", value:1.17 },
    { label:"xhi", value:1.46 }
  ]
  
  const pvol = [
    { label:"lo", value:0.87 },
    { label:"nom", value:1 },
    { label:"hi", value:1.15 },
    { label:"vhi", value:1.30 }
  ]

  //Personal
  const acap = [
    { label:"vlo", value:1.42 },
    { label:"lo", value:1.19 },
    { label:"nom", value:1 },
    { label:"hi", value:0.85 },
    { label:"vhi", value:0.71 }
  ]

  const aexp = [
    { label:"vlo", value:1.22 },
    { label:"lo", value:1.10 },
    { label:"nom", value:1 },
    { label:"hi", value:0.88 },
    { label:"vhi", value:0.81 }
  ]

  const pcap = [
    { label:"vlo", value:1.34 },
    { label:"lo", value:1.15 },
    { label:"nom", value:1 },
    { label:"hi", value:0.88 },
    { label:"vhi", value:0.76 }
  ]

  const pexp = [
    { label:"vlo", value:1.19 },
    { label:"lo", value:1.09 },
    { label:"nom", value:1 },
    { label:"hi", value:0.91 },
    { label:"vhi", value:0.85 }
  ]

  const ltex = [
    { label:"vlo", value:1.20 },
    { label:"lo", value:1.09 },
    { label:"nom", value:1 },
    { label:"hi", value:0.91 },
    { label:"vhi", value:0.84 }
  ]

  const pcon = [
    { label:"vlo", value:1.29 },
    { label:"lo", value:1.12 },
    { label:"nom", value:1 },
    { label:"hi", value:0.9 },
    { label:"vhi", value:0.81 }
  ]

  //Proyecto

  const tool = [
    { label:"vlo", value:1.17 },
    { label:"lo", value:1.09 },
    { label:"nom", value:1 },
    { label:"hi", value:0.9 },
    { label:"vhi", value:0.78 }
  ]

  const sced = [
    { label:"vlo", value:1.43 },
    { label:"lo", value:1.14 },
    { label:"nom", value:1 },
    { label:"hi", value:1 },
    { label:"vhi", value:1 }
  ]

  const site = [
    { label:"vlo", value:1.22 },
    { label:"lo", value:1.09 },
    { label:"nom", value:1 },
    { label:"hi", value:0.93 },
    { label:"vhi", value:0.86 },
    { label:"xhi", value:0.8 }
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

  //Funciones para los cuadros de informacion

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

  const handleMouseOver17 = () => {
    setIsHovering17(true);
  };

  const handleMouseOut17 = () => {
    setIsHovering17(false);
  };

  const handleMouseOver18 = () => {
    setIsHovering18(true);
  };

  const handleMouseOut18 = () => {
    setIsHovering18(false);
  };

  const handleMouseOver19 = () => {
    setIsHovering19(true);
  };

  const handleMouseOut19 = () => {
    setIsHovering19(false);
  };

  const handleMouseOver20 = () => {
    setIsHovering20(true);
  };

  const handleMouseOut20 = () => {
    setIsHovering20(false);
  };

  const handleMouseOver21 = () => {
    setIsHovering21(true);
  };

  const handleMouseOut21 = () => {
    setIsHovering21(false);
  };

  const handleMouseOver22 = () => {
    setIsHovering22(true);
  };

  const handleMouseOut22 = () => {
    setIsHovering22(false);
  };

  const handleMouseOver23 = () => {
    setIsHovering23(true);
  };

  const handleMouseOut23 = () => {
    setIsHovering23(false);
  };

  const handleMouseOver24 = () => {
    setIsHovering24(true);
  };

  const handleMouseOut24 = () => {
    setIsHovering24(false);
  };

//Asignacion de valores cada que cambia el input de seleccion

  //Producto

  const handleSelectChangeRely = ( { value } ) => {
    console.log("Rely: " + value);
    setRely(value);
  }

  const handleSelectChangeData = ( { value } ) => {
    console.log("Data: " + value);
    setData(value);
  }

  const handleSelectChangeDocu = ( { value } ) => {
    console.log("Docu: " + value);
    setDocu(value);
  }

  const handleSelectChangeCplx = ( { value } ) => {
    console.log("Cplx: " + value);
    setCplx(value);
  }

  const handleSelectChangeRuse = ( { value } ) => {
    console.log("Ruse: " + value);
    setRuse(value);
  }

  //Plataforma

  const handleSelectChangeTime = ( { value } ) => {
    console.log("Time: " + value);
    setTime(value);
  }

  const handleSelectChangeStor = ( { value } ) => {
    console.log("Stor: " + value);
    setStor(value);
  }

  const handleSelectChangePvol = ( { value } ) => {
    console.log("Pvol: " + value);
    setPvol(value);
  }

  //Personal

  const handleSelectChangeAcap = ( { value } ) => {
    console.log("Acap: " + value);
    setAcap(value);
  }

  const handleSelectChangeAexp = ( { value } ) => {
    console.log("Aexp: " + value);
    setAexp(value);
  }

  const handleSelectChangePcap = ( { value } ) => {
    console.log("Pcap: " + value);
    setPcap(value);
  }

  const handleSelectChangePexp = ( { value } ) => {
    console.log("Pexp: " + value);
    setPexp(value);
  }

  const handleSelectChangeLtex = ( { value } ) => {
    console.log("Ltex: " + value);
    setLtex(value);
  }

  const handleSelectChangePcon = ( { value } ) => {
    console.log("Pcon: " + value);
    setPcon(value);
  }

  //Proyecto

  const handleSelectChangeTool = ( { value } ) => {
    console.log("Tool: " + value);
    setTool(value);
  }

  const handleSelectChangeSite = ( { value } ) => {
    console.log("Site: " + value);
    setSite(value);
  }

  const handleSelectChangeSced = ( { value } ) => {
    console.log("Sced: " + value);
    setSced(value);
  }

//Factores de escala

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
        //console.log('Ksloc: ' + Ksloc);
        break;
      case 'nombre-proyecto':
        console.log("Nombre: " + value);
        setNombreProyecto(value);
        break;
      default:
        break;
    }
  };

  function calculoB(){
    setB(1.01 + 0.01 * ( Aprec + Aflex + Aresl + Ateam + Apmat ));
    console.log('B: ' + B);
  }

  function calculoPMnominal(){
    setPMnom( A * Math.pow(Ksloc,B) );
    console.log('A: ' + A);
    console.log('Ksloc: ' + Ksloc);
    console.log('Exponente' + Math.pow(Ksloc,B))
    console.log('pmNom: ' + pmNom);
  }

  const calcularEstimacion = () => {
    calculoB();
    calculoPMnominal();
    setPMest( pmNom * ( Arely * Adata * Adocu * Acplx * Aruse * Atime * Astor * Apvol * Aacap * Aaexp * Apcap * Apexp * Altex * Apcon * Atool * Asced * Asite ) );
    console.log('pmEst: ' + pmEst);
    //console.log('Entra a calcularEstimacion');
  }

  return(
    <div className='contenedor-principal'>
      <div className='titulo'>
        <h2>
          <FiHelpCircle onMouseOver={handleMouseOverTitulo} onMouseOut={handleMouseOutTitulo} color='#000'/>
          Post Arquitectura
        </h2>{isHoveringTitulo && (
            <CuadroInfo texto={'Proyectos de software durante la etapa del desarrollo'}/>
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
      <h3>Multiplicadores de esfuerzo</h3>
      <div className='contenedor-postarquitectura'>
        <div>
        
          <table>
            <tbody>
              <tr>Producto</tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} color='#146C94'/> Confiabilidad requerida (RELY):
                  {isHovering && (
                    <CuadroInfo texto={'El producto cumple satisfactoriamente con la función que debe realizar'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ rely } defaultValue={ rely[2] } onChange={ handleSelectChangeRely } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} color='#146C94'/> Tamaño de la base de datos (DATA):
                  {isHovering2 && (
                    <CuadroInfo texto={'Tamaño de la base de datos entre las líneas de código'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ data } defaultValue={ data[1] } onChange={ handleSelectChangeData } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3} color='#146C94'/> Documentación de las etapa del ciclo de vida (DOCU):
                  {isHovering3 && (
                    <CuadroInfo texto={'Adecuación de la documentación del proyecto a las necesidades particulares en cada etapa del ciclo de vida'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ docu } defaultValue={ docu[2] } onChange={ handleSelectChangeDocu } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut4} color='#146C94'/> Complejidad del producto (CPLX):
                  {isHovering4 && (
                    <CuadroInfo texto={'Complejidad de las operaciones empleadas en el producto'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ cplx } defaultValue={ cplx[2] } onChange={ handleSelectChangeCplx } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver5} onMouseOut={handleMouseOut5} color='#146C94'/> Requerimientos de reusabilidad (RUSE):
                  {isHovering5 && (
                    <CuadroInfo texto={'Construcción de componentes reutilizables en el mismo o diferente proyecto'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ ruse } defaultValue={ ruse[1] } onChange={ handleSelectChangeRuse }/></td>
              </tr>
              <br/>Plataforma<br/>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver6} onMouseOut={handleMouseOut6} color='#146C94'/> Restricción del tiempo de ejecución (TIME):
                  {isHovering6 && (
                    <CuadroInfo texto={'Grado de restricción de tiempo de ejecución impuesta sobre el sistema de software'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ time } defaultValue={ time[0] } onChange={ handleSelectChangeTime } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver7} onMouseOut={handleMouseOut7} color='#146C94'/> Restricción del almacenamiento principal (STOR):
                  {isHovering7 && (
                    <CuadroInfo texto={'Grado de restricción del almacenamiento principal impuesto sobre un sistema de software'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ stor } defaultValue={ stor[0] } onChange={ handleSelectChangeStor } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver8} onMouseOut={handleMouseOut8} color='#146C94'/> Volatilidad de la plataforma (PVOL):
                  {isHovering8 && (
                    <CuadroInfo texto={'Frecuencia de los cambios en la plataforma subyacente'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ pvol } defaultValue={ pvol[1] } onChange={ handleSelectChangePvol } /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table>
            <tbody>
              <tr/>Personal<tr/>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver9} onMouseOut={handleMouseOut9} color='#146C94'/> Capacidad del analista (ACAP):
                  {isHovering9 && (
                    <CuadroInfo texto={'Analista: trabaja con los requerimientos, en el diseño global y en el diseño detallado'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ acap } defaultValue={ acap[2] } onChange={ handleSelectChangeAcap }/></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver10} onMouseOut={handleMouseOut10} color='#146C94'/> Experiencia en la aplicación (AEXP):
                  {isHovering10 && (
                    <CuadroInfo texto={'Nivel de experiencia del equipo de desarrollo en aplicaciones similares'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ aexp } defaultValue={ aexp[2] } onChange={ handleSelectChangeAexp }/></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver11} onMouseOut={handleMouseOut11} color='#146C94'/> Capacidad del programador (PCAP):
                  {isHovering11 && (
                    <CuadroInfo texto={'Uso de herramientas actuales y trabajo en equipo'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ pcap } defaultValue={ pcap[2] } onChange={ handleSelectChangePcap }/></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver12} onMouseOut={handleMouseOut12} color='#146C94'/> Experiencia en la plataforma (PEXP):
                  {isHovering12 && (
                    <CuadroInfo texto={'Experiencia menor a 2 meses - Muy bajo, Experiencia de 6 años o más - Muy alto'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ pexp } defaultValue={ pexp[2] } onChange={ handleSelectChangePexp }/></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver13} onMouseOut={handleMouseOut13} color='#146C94'/> Experiencia en el lenguaje y las herramientas (LTEX):
                  {isHovering13 && (
                    <CuadroInfo texto={'Experiencia del equipo en el uso del lenguaje y herramientas a emplear'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ ltex } defaultValue={ ltex[2] } onChange={ handleSelectChangeLtex }/></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver14} onMouseOut={handleMouseOut14} color='#146C94'/> Continuidad del personal (PCON):
                  {isHovering14 && (
                    <CuadroInfo texto={'Grado de permanencia anual del personal (48% Muy bajo, 3% Muy alto)'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ pcon } defaultValue={ pcon[2] } onChange={ handleSelectChangePcon }/></td>
              </tr>
              <tr/>Proyecto<tr/>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver15} onMouseOut={handleMouseOut15} color='#146C94'/> Uso de herramientas de software (TOOL):
                  {isHovering15 && (
                    <CuadroInfo texto={'Muy bajo por el uso de herramientas sólo para codificación, edición y depuración a Muy alto por herramientas integradas al proceso de desarrollo'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ tool } defaultValue={ tool[2] } onChange={ handleSelectChangeTool }/></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver16} onMouseOut={handleMouseOut16} color='#146C94'/> Cronograma requerido para el desarrollo (SCED):
                  {isHovering16 && (
                    <CuadroInfo texto={'Restricción en los plazos de tiempo impuesta al equipo de trabajo'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ sced } defaultValue={ sced[2] } onChange={ handleSelectChangeSced }/></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver17} onMouseOut={handleMouseOut17} color='#146C94'/> Desarrollo multisitio (SITE):
                  {isHovering17 && (
                    <CuadroInfo texto={'Ubicación espacial (disposición del equipo de trabajo) y comunicación (soporte de comunicación)'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ site } defaultValue={ site[2] } onChange={ handleSelectChangeSite }/></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>Factor exponencial de escala</h3> 
          <table>
            <tbody>
            <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver18} onMouseOut={handleMouseOut18} color='#146C94'/> Precedencia:
                  {isHovering18 && (
                    <CuadroInfo texto={'Grado de experiencia previa'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ prec } defaultValue={ prec[2] } onChange={ handleSelectChangePrec } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver19} onMouseOut={handleMouseOut19} color='#146C94'/> Flexibilidad en el desarrollo:
                  {isHovering19 && (
                    <CuadroInfo texto={'Exigencia en el cumplimiento de los requerimientos'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ flex } defaultValue={ flex[2] } onChange={ handleSelectChangeFlex } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver20} onMouseOut={handleMouseOut20} color='#146C94'/> Arquitectura/Resolución de riesgo:
                  {isHovering20 && (
                    <CuadroInfo texto={'Conocimiento de los ítems de riesgo crítico y el modo de abordarlos dentro del proyecto'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ resl } defaultValue={ resl[2] } onChange={ handleSelectChangeResl } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver21} onMouseOut={handleMouseOut21} color='#146C94'/> Cohesión de equipo:
                  {isHovering21 && (
                    <CuadroInfo texto={'Dificultades de sincronización entre los participantes del proyecto'} valor='corto'/>
                  )}
                </td>
                <td><Select options={ team } defaultValue={ team[2] } onChange={ handleSelectChangeTeam } /></td>
              </tr>
              <tr>
                <td>
                  <FiHelpCircle onMouseOver={handleMouseOver22} onMouseOut={handleMouseOut22} color='#146C94'/> Madurez del proceso:
                  {isHovering22 && (
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
                    <center><Boton 
                      name='boton-Modal'
                      funcion={openModal}
                      texto='Puntos de funcion'/>
                    </center>
                    <Modal isOpen={isOpenModal} closeModal={closeModal}>
                      <PuntosFuncion enviarSloc={enviarSloc} />
                    </Modal>
                  </td>
                  </>}
                </tr>
              </tbody>
            </table>
            <div className='contenedor-ksloc'>
              <FiHelpCircle onMouseOver={handleMouseOver24} onMouseOut={handleMouseOut24} color='#146C94'/> KSLOC: {Ksloc}
              {isHovering24 && (
                <CuadroInfo texto={'Miles de líneas de código del software a desarrollar'} valor='corto'/>
              )}
            </div>
          </div>
      </div>
      <Boton
        name='boton'
        funcion={calcularEstimacion}
        texto='Calcular' />
      <hr/>
      <FiHelpCircle onMouseOver={handleMouseOver23} onMouseOut={handleMouseOut23} color='#146C94'/>          
      Esfuerzo: {pmEst}
      
      {isHovering23 && (
        <CuadroInfo texto={'Representa los meses de trabajo de una persona fulltime, requeridos para desarrollar el proyecto'}/>
      )}
    </div>
  );
}

export default CcPostArq;