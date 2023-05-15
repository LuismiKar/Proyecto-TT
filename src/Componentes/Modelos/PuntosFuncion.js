import React, { useState } from 'react';
import FormularioUPF from './FormularioUPF';
import PuntoFuncion from './PuntoFuncion';
import '../../Hojas-de-estilo/CocomoII.css';
import FactorComplejidad from './FactorComplejidad';
import Boton from '../Boton';
import Select from 'react-select';

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
    <>
      <h2>Puntos de función</h2>
      <div className='contenedor-puntosfuncion'>
        <div>
          <FormularioUPF onSubmit={agregarUpf} enviarPeso={ enviarPeso } />
          <div>
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
          </div>
 
        </div>
        <div>
          <FactorComplejidad cambiarFactorComplejidad={ cambiarTfc }/>
        </div>
      </div>
      <hr/>
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
        <div> 
          Factor complejidad: { tfc }<br/>
          Puntos de funcion no ajustados: { ufp }<br/>
          Puntos de funcion: { fp }<br/>
          Lineas de codigo: { sloc }<br/>
        </div>
      </div>
      
    </>  
  );
}

export default PuntosFuncion;