import React, {useState} from 'react';
import '../../Hojas-de-estilo/CocomoII.css';
import FormularioCosmic from './FormularioCosmic';
import PuntoFuncionCosmic from './PuntoFuncionCosmic';
import Input from '../Input';
import Boton from '../Boton';

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
  const [esfuerzo, setEsfuerzo] = useState(0);

  var enviarTotalPf = function(numActual){ setTotalPfC( Number(totalPfC) + numActual); }

  const agregarPfc = pfc => {
    if(pfc.nombre.trim() && pfc.totalPF!==0 ) { //Se verifica que la cadena no esta vacia
      pfc.nombre = pfc.nombre.trim(); //Se le quitan los espacios del principio y del final a la cadena
      const pfcsActualizados = [pfc, ...pfcs];//El operador ... convierte los upfs de un arreglo a upfs individuales
      setPfcs(pfcsActualizados);
    }
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
    setEsfuerzo(tasaEntrega * totalPfC);
  }

  return(
    <div className='contenedor-principal'>
      <div className='titulo'>
        <h2>COSMIC</h2>
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
        <h4>Tasa de entrega: </h4>
          <Input 
            attribute={{
              id: 'tasaEntrega',
              name: 'tasaEntrega',
              type: 'number',
              placeholder: ''
            }}
            handleChange={handleChange}/>
          
        </div>
        <div>
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
        </div>
        
      </div>
      <Boton 
            name='calcularUFP-boton' 
            funcion={calcularEsfuerzo}
            texto='Calcular UFP' />
      <hr/>
      Puntos de funcion Cosmic: { totalPfC }<br/>
      Tasa de entrega: { tasaEntrega }<br/>
      Esfuerzo: { esfuerzo }<br/>
    </div>
  );
}

export default PuntosCosmic;