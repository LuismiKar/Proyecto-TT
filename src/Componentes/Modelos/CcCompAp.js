import React, { useRef, useState } from 'react';
import '../../Hojas-de-estilo/CocomoII.css';
import Select from 'react-select';
import Input from '../Input';
import Boton from '../Boton';
import PuntosObjeto from './PuntosObjeto';
import { FiHelpCircle } from "react-icons/fi";
import CuadroInfo from '../CuadroInfo';
import ComponenteInput from '../ComponenteInput';
import TablaValores from '../TablaValores';
import axios from 'axios';
import ReactToPrint from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function CcCompAp(){

  const [ pmEst , setPmEst ] = useState(0);
  const [ NptsObj , setNptsobj ] = useState(0);
  const [ ptsObj , setPtsobj ] = useState(0);
  const [ reuso , setReuso ] = useState({campo:'', valido: null});
  const [ prod , setProd ] = useState(0);
  const [ ecDes , setEcDes ] = useState(0);
  const [ mcIcase , setMcIcase ] = useState(0);
  const [nombreProyecto,setNombreProyecto] = useState({campo:'', valido: null});


  const [isHoveringTitulo, setIsHoveringTitulo] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);

  const Tablaprod = [
    { label:"vlo", value:4 },
    { label:"lo", value:7 },
    { label:"nom", value:13 },
    { label:"hi", value:25 },
    { label:"vhi", value:50 }
  ]

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
    numeros: /^\d*\.?\d+$/,
    reuso:  /^([0-9][0-9]?|[0-9][0-9]?\.[0-9]*|100)$/
  }

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

  function calcularNPtosObjeto(){
    setNptsobj( ptsObj * ( 100 - reuso.campo ) / 100 ); 
    console.log('Nuevos Puntos objetos: '+NptsObj);
    console.log('Prod: ' + prod);
  }
  
  function calcularEsfuerzo(){
    setPmEst( (NptsObj / prod).toFixed(3) );
    console.log('Esfuerzo: ' + pmEst );
  }

function generarPdf(){
      const contentHTML = document.getElementById("contenedor-principal");
      html2canvas(contentHTML)
      .then((canvas)=>{
        let imgWidth = 595;
        let imgHeight = 842;
        const imgData = canvas.toDataURL('img/png');
        var doc=new jsPDF ('portrait', 'px', 'a2', 'false');    
        doc.addImage(imgData,'PNG',0,0,imgHeight,imgWidth);
        doc.save('CCCompApp.pdf');
    })
  }

  //Esta funcion obtiene todos los datos ingresados y los guarda en la base de datos
  function guardarProyecto(){
    
    const NombreProyecto = document.getElementById("nombreProyecto");

    //Guarda el main del proyecto
    axios.post('http://localhost:2000/proyecto',{
      nombre_proyecto: NombreProyecto.value,
      pdf_proyecto: "PDF Prueba",
      esfuerzo_calculado: pmEst,
      pf: ptsObj,
      usuario_email: "aldo.ibanez21@gmail.com",
      idtipoproyecto: "1"
  })

  //Guarda datos secundarios del proyecto


  }

  return(
    <div className='contenedor-principal' id='contenedor-principal'>
      <div className='titulo'>
        <h2>
          <FiHelpCircle onMouseOver={handleMouseOverTitulo} onMouseOut={handleMouseOutTitulo} color='#000'/>
          Composición de Aplicación
        </h2>{isHoveringTitulo && (
            <CuadroInfo texto={'Desarrollos de software durante la etapa de prototipación'}/>
          )}
      </div><br/><br/>
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

      <div className='contenedor-puntosobjeto'>
        <div className='titulo'>
          <h3>
            <FiHelpCircle onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} color='#000'/>
            Puntos objeto
          </h3> 
          {isHovering && (
            <CuadroInfo className='center' texto={'Enfoque de medición de tamaño de software'} />
          )}
          <div className='descripcion2'>
            Como primer paso, se calculan los puntos objeto, de acuerdo a las características de tu proyecto,
            ingresa los valores requeridos, y al finalizar presiona el botón "Calcular" para obtener los puntos objeto:
          </div>
        </div>
        <PuntosObjeto cambiarPtsObj={ cambiarPtsObj }/>
      </div>
      <div className='descripcion2'>
        Como segundo paso se debe incluir el valor del reuso que se espera del proyecto
      </div>
      <div className='contenedor-composicionaplicacion'>
      <table>
        <tbody>
          <tr>
            <td>
              <FiHelpCircle onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} color='#146C94'/>
              Porcentaje de reuso:
              {isHovering2 && (
                <CuadroInfo texto={'Porcentaje de reuso que se espera lograr en el proyecto'} valor='corto'/>
              )} 
            </td>
            <td>
              <ComponenteInput
                attribute={{
                  id: 'reuso',
                  name: 'reuso',
                  type: 'text',
                  placeholder: ''
                }}
                name='Nombre del proyecto:'
                estado={reuso}
                handleChange={setReuso}
                expresionRegular={expresiones.reuso}
                leyendaerror='El valor debe ser positivo'
                nombreMostrado={false}
              />
            </td>
          </tr>
          <tr>
            <td colSpan='2'>
            <div className='descripcion2'>
              <br/>Y por último, seleccionar las caraterísticas de la productividad del proyecto, y dar click en el 
              botón "Calcular Esfuerzo":
            </div>
            </td>
          </tr>
          <tr><td colSpan='2'><center><h3>Productividad</h3></center></td></tr>
          <tr>
            <td colSpan='2'>
              <div className='info-apoyo'>
                <FiHelpCircle onMouseOver={handleMouseOver5} onMouseOut={handleMouseOut5} color='#000'/>
                Informacion de apoyo
              </div>
              {isHovering5 && (
                <CuadroInfo texto={<TablaValores/>} valor='corto'/>
              )}
            </td>
          </tr>
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
                <CuadroInfo texto={'ICASE: Herramientas integradas'} valor='corto'/>
              )} 
            </td>
            <td>
              <Select 
                options={ Tablaprod } 
                defaultValue={ Tablaprod[2] } 
                onChange={ handleSelectChangeMcIcase } /></td>
          </tr>
          <tr>
            <td colSpan='2'>
            <Boton
              name='boton-'
              funcion={ calcularEsfuerzo }
              texto='Calcular Esfuerzo' 
              onMouseOver={ calcularNPtosObjeto }
              onFocus={calcularProd}/>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <hr/>
      <br/>
      <div className='contenedor-resultado'>
        <FiHelpCircle onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut4} color='#146C94'/>          
        Esfuerzo: 
        <div className='resultado' id='Resultadofinal'>{pmEst}</div>
        {isHovering4 && (
          <CuadroInfo texto={'Representa los meses de trabajo de una persona fulltime, requeridos para desarrollar el proyecto'}/>
        )}
        {pmEst!=0 && <Boton
          name='boton-pdf'
          funcion={ generarPdf }
          texto='Generar PDF'/>}

      <Boton
        name='guardar-proyecto'
        texto='Guardar proyecto'
        funcion={guardarProyecto}
      />
      </div>
    </div>
  );
}

export default CcCompAp;