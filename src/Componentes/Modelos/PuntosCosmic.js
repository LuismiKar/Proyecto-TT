import React, {useState} from 'react';
import '../../Hojas-de-estilo/CocomoII.css';
import FormularioCosmic from './FormularioCosmic';
import PuntoFuncionCosmic from './PuntoFuncionCosmic';
import Input from '../Input';
import Boton from '../Boton';
import { FiHelpCircle } from "react-icons/fi";
import CuadroInfo from '../CuadroInfo';
import ComponenteInput from '../ComponenteInput';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/*
Entradas
Salidas
Lecturas
Escrituras
*/

function PuntosCosmic(){

  const [pfcs, setPfcs] = useState([]);
  const [tasaEntrega, setTasaentrega] = useState({campo:'', valido: null});
  const [nombreProyecto,setNombreProyecto] = useState({campo:'', valido: null});
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

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
    numeros: /^\d*\.?\d+$/ // Al menos un numero positivo y un punto 
  }

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

  function calcularEsfuerzo(){
    setPmEst((tasaEntrega.campo * totalPfC).toFixed(3));
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
      doc.save('PuntosCosmic.pdf');
  })

  }

  function guardarProyecto(){
    
    const NombreProyecto = document.getElementById("nombreProyecto");

    //Guarda el main del proyecto
    axios.post('http://localhost:2000/proyecto',{
      nombre_proyecto: NombreProyecto.value,
      pdf_proyecto: "PDF Prueba",
      esfuerzo_calculado: pmEst,
      pf: 21,
      usuario_email: "aldo.ibanez21@gmail.com",
      idtipoproyecto: "1"
  })
}

  return(
    <div className='contenedor-principal' id='contenedor-principal'>
      <div className='titulo'>
        <h2>
          <FiHelpCircle onMouseOver={handleMouseOverTitulo} onMouseOut={handleMouseOutTitulo} color='#000'/>
          COSMIC
        </h2>
        {isHoveringTitulo && (
          <CuadroInfo texto={'Determina el tamaño del software a partir de las funcionalidades'}/>
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
      <div className='contenedor-cosmic'>
        <div>
          <FormularioCosmic onSubmit={ agregarPfc } enviarTotalPf={ enviarTotalPf } />
          
        </div>
        <div className='tasa-entrega'>
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
          <div className='componente-input'>
            <ComponenteInput
              attribute={{
                id: 'tasaEntrega',
                name: 'tasaEntrega',
                type: 'text',
                placeholder: ''
              }}
              estado={tasaEntrega}
              handleChange={setTasaentrega}
              expresionRegular={expresiones.numeros}
              leyendaerror='El valor debe ser positivo'
              nombreMostrado={false}
            />
          </div>
            
        </div>
      </div>
      
      {pfcs.length!==0 &&<>
        <br/>
        <div className='descripcion2'>
          Total Puntos de función Cosmic: {totalPfC}
        </div>
        <div className='descripcion2'>
          <b>
            <FiHelpCircle onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3} color='#000'/>
            Tabla de puntos de función
          </b>
          {isHovering3 && (
            <CuadroInfo texto={'La tabla se irá actualizando cada que se agreguen funcionalidades nuevas'} />
          )}
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
        </> 
      }
      <br/>
      <center><Boton 
        name='calcularUFP-boton' 
        funcion={calcularEsfuerzo}
        texto='Calcular Esfuerzo' />
      </center>
      <hr/>
      <br/>
      <div className='contenedor-resultado'>
        <FiHelpCircle onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} color='#146C94'/>          
        Esfuerzo: 
        <div className='resultado'>{pmEst}</div>
        {isHovering2 && (
        <CuadroInfo texto={'Representa los meses de trabajo de una persona fulltime, requeridos para desarrollar el proyecto'}/>
      )}
      {pmEst!==0 && <Boton
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

export default PuntosCosmic;