import React, { useState } from 'react';
import FormularioUPF from './FormularioUPF';
import PuntoFuncion from './PuntoFuncion';
import '../../Hojas-de-estilo/CocomoII.css';
import FactorComplejidad from './FactorComplejidad';
import Boton from '../Boton';

//DET: Campos leidos 
//FTR: Archivos referenciados por la transaccion
//RET: Cantidad de tablas que componen el archivo logico

function PuntosFuncion(){

  const [upfs, setUPFs] = useState([]);
  const [tfc, setTfc] = useState(0); //Factor complejidad
  const [ufp, setUfp] = useState(0); //Puntos de funcion no ajustados
  const [fp, setFp] = useState(0); //Puntos de funcion, que son la suma de TFC y UFP
  

  const agregarUpf = upf => {
    if(upf.nombre.trim()) { //Se verifica que la cadena no esta vacia
      upf.nombre = upf.nombre.trim(); //Se le quitan los espacios del principio y del final a la cadena
      const upfsActualizados = [upf, ...upfs];//El operador ... convierte los upfs de un arreglo a upfs individuales
      setUPFs(upfsActualizados);
    }
  };

  var cambiarTfc = function(numActual){ setTfc( 0.65 + 0.01 * numActual); }

  var enviarPeso = function(numActual){ setUfp( ufp + numActual); }

  function sumarUPF(numero){
    setUfp( ufp + numero );
  }

  function calcularUFP(){
    setFp(ufp * tfc);
    console.log(fp);
  }

  return(
    <>
      <hr/>
      <div className='contenedor-principal'>
        <div>
          <FormularioUPF onSubmit={agregarUpf} enviarPeso={ enviarPeso } />
          <Boton 
            name='calcularUFP-boton' 
            funcion={calcularUFP}
            texto='Calcular UFP' />
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
      Factor complejidad: { tfc }<br/>
      Puntos de funcion no ajustados: { ufp }<br/>
      Puntos de funcion: { fp }<br/>
    </>
  );
}

export default PuntosFuncion;