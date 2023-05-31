import React, { useState } from 'react';
import FormularioUPF from './FormularioUPF';
import PuntoFuncion from './PuntoFuncion';
import '../../Hojas-de-estilo/CocomoII.css';
import FactorComplejidad from './FactorComplejidad';
import Boton from '../Boton';
import Select from 'react-select';
import { FiHelpCircle } from "react-icons/fi";
import CuadroInfo from '../CuadroInfo';


//DET: Campos leidos 
//FTR: Archivos referenciados por la transaccion
//RET: Cantidad de tablas que componen el archivo logico

function PuntosFuncion( props ){

  const [upfs, setUPFs] = useState([]);
  const [tfc, setTfc] = useState(0); //Factor complejidad
  const [ufp, setUfp] = useState(0); //Puntos de funcion no ajustados
  const [fp, setFp] = useState(0); //Puntos de funcion, que son la suma de TFC y UFP
  const [sloc, setSloc] = useState(0);
  const [lenguaje, setLenguaje] = useState(''); //Lenguaje de programacion
  const [nlenguaje, setNlenguaje] = useState(0); //Lenguaje de programacion

  //Variables de los cuadros de información

  const [isHoveringTitulo, setIsHoveringTitulo] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);

  //Lenguajes de programación
  const lenguajeOpciones = [
    { label:"Access", value:38},
    { label:"Ada 83", value:71 },
    { label:"Ada 95", value:49 },
    { label:"AI Shell", value:49 },
    { label:"APL", value:32 },
    { label:"Ensamblador Básico", value:320 },
    { label:"Ensamblador Macro", value:213 },
    { label:"Basic ANSI", value:64 },
    { label:"Basic Visual", value:91 },
    { label:"Basic Compiled", value:32 },
    { label:"C", value:128 },
    { label:"C++", value:55 },
    { label:"Cobol (ANSI 85)", value:91 },
    { label:"Base de datos (Default)", value:40 },
    { label:"Lenguaje de quinta generación", value:4 },
    { label:"Lenguaje de primera generación", value:320 },
    { label:"Forth", value:64 },
    { label:"Fortran 77", value:107 },
    { label:"Fortran 95", value:71 },
    { label:"Lenguaje de cuarta generación", value:20 },
    { label:"Lenguaje de alto nivel", value:64 },
    { label:"HTML 3.0", value:15 },
    { label:"Java", value:53 },
    { label:"Jovial", value:107 },
    { label:"Lisp", value:64 },
    { label:"Código máquina", value:640 },
    { label:"Modula 2", value:80 },
    { label:"Pascal", value:91 },
    { label:"PERL", value:27 },
    { label:"PowerBuilder", value:16 },
    { label:"Prolog", value:64 },
    { label:"Consultas (Default)", value:13 },
    { label:"Generador de reportes", value:80 },
    { label:"Lenguaje de segunda generación", value:107 },
    { label:"Simulación (Default)", value:46 },
    { label:"Spreadsheet", value:6 },
    { label:"Lenguaje de tercera generación", value:80 },
    { label:"Uniz Shell Scripts", value:107 },
    { label:"USR_1", value:1 },
    { label:"USR_2", value:1 },
    { label:"USR_3", value:1 },
    { label:"USR_4", value:1 },
    { label:"USR_5", value:1 },
    { label:"Visual Basic 5.0", value:29 },
    { label:"Visual C++", value:34 }
  ]

  //Funciones cuadros de información

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
  

  const agregarUpf = upf => {
    if(upf.nombre.trim() && upf.peso!==0) { //Se verifica que la cadena no esta vacia
      upf.nombre = upf.nombre.trim(); //Se le quitan los espacios del principio y del final a la cadena
      
      const upfsActualizados = [upf, ...upfs];//El operador ... convierte los upfs de un arreglo a upfs individuales
      setUPFs(upfsActualizados);
    }
  };

  var cambiarTfc = function(numActual){ setTfc( 0.65 + 0.01 * numActual); }

  var enviarPeso = function(numActual){ setUfp( ufp + numActual);}

  const handleSelectLenguaje = ( { value , label } ) => {
    setLenguaje(label);
    setNlenguaje(value);
    console.log("Lenguaje: " + nlenguaje);
    console.log("Label: " + lenguaje);
    
  }

  function calcularFP(){
    setFp(ufp * tfc);
  }

  function calcularSloc(){
    setSloc(nlenguaje * fp);
  }

  return(
    <div>
      <div className='titulo'>
        <h2>
          Puntos de función
        </h2>
        Procuran cuantificar la funcionalidad de un sistema de software
        
      </div>

      <div className='contenedor-puntosfuncion'>
        <div>
          <FormularioUPF onSubmit={agregarUpf} enviarPeso={ enviarPeso } />
          <table cellPadding='10' className='tabla' border='1' cellSpacing='0'  align='center'>
            <thead>
              <tr>
                <td>Nombre</td>
                <td>Tipo</td>
                <td>Peso</td>
              </tr>
            </thead>
            <tbody>
              {
                upfs.map((upf) => 
                  <PuntoFuncion 
                    key={upf.id}
                    id={upf.id}
                    nombre={upf.nombre}
                    tipo={upf.tipo}
                    det={upf.det}
                    ftr={upf.ftr}
                    ret={upf.ret}
                    peso={upf.peso} />
                )
              }
            </tbody>
          </table>
        </div>
        <div>
          <FactorComplejidad cambiarFactorComplejidad={ cambiarTfc }/>
        </div>
      </div>
      <hr/>
      <div className='descripcion2'>
        En el siguiente apartado se debe seleccionar el lenguaje de programación del proyecto, y obtener las líneas de código
      </div>
      <div className='contenedor-puntosfuncion'>
        
        <div>
          Lenguaje de programación:
          <Select options={ lenguajeOpciones } placeholder="Seleccione el lenguaje" onChange={ handleSelectLenguaje } />
          <Boton 
            name='calcularSloc-boton' 
            funcion={props.enviarSloc(sloc)}
            onMouseOver={calcularSloc}
            texto='Calcular SLOC' />
          <Boton 
            name='calcularPF-boton' 
            funcion={calcularFP}
            texto='Calcular Puntos' />
        </div>
        <div className='puro-texto'> 
            <FiHelpCircle onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} color='#146C94'/>
            Factor complejidad: { tfc }
            {isHovering && (
              <CuadroInfo texto={'Total del factor complejidad'}/>
            )}
          <br/>
            <FiHelpCircle onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} color='#146C94'/>
            Puntos de funcion no ajustados: { ufp }
            {isHovering2 && (
              <CuadroInfo texto={'Suma del peso de los puntos de función agregados'}/>
            )}
          <br/>
            <FiHelpCircle onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3} color='#146C94'/>
            Puntos de funcion: { fp }
            {isHovering3 && (
              <CuadroInfo texto={'Puntos de función ajustados'}/>
            )}
          <br/>
            <FiHelpCircle onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut4} color='#146C94'/>
            Lineas de codigo: { sloc }
            {isHovering4 && (
              <CuadroInfo texto={'Líneas de código calculadas'}/>
            )}
           <br/>
        </div>
      </div>
      
    </div>  
  );
}

export default PuntosFuncion;