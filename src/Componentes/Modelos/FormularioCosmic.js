import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input';
import Boton from '../Boton';
import '../../Hojas-de-estilo/CocomoII.css';

/*
Entradas
Salidas
Lecturas
Escrituras
*/

var FormularioCosmic = function( props ){

  const [nombre, setNombre] = useState('');
  const [entradas, setEntradas] = useState(0);
  const [salidas, setSalidas] = useState(0);
  const [lecturas, setLecturas] = useState(0);
  const [escrituras, setEscrituras] = useState(0);
  const [totalPF, setTotalpf] = useState(0);

  function sumarMovimientos(){
    
    setTotalpf( Number(entradas) + Number(salidas) + Number(lecturas) + Number(escrituras) );
  }

  const manejarEnvio = e => {
    e.preventDefault();//Evitar que se recargue cuando se envie el formulario
    const NuevoPFCosmic = {
      id: uuidv4(),
      nombre: nombre, 
      ent: entradas,
      sal: salidas,
      esc: escrituras,
      lec: lecturas,
      totalPF: totalPF 
    }
    props.onSubmit(NuevoPFCosmic);
    sumarMovimientos();
    props.enviarTotalPf(totalPF);
  };

  //Función para ver los cambios del campo de texto
  function handleChange(name,value) {
    switch(name){
      case 'nombre':
        setNombre(value);
        console.log(value);
        break;
      case 'entradas':
        setEntradas(value);
        console.log(value);
        break;
      case 'salidas':
        setSalidas(value);
        console.log(value);
        break;
      case 'lecturas':
        setLecturas(value);
        console.log(value);
        break;
      case 'escrituras':
        setEscrituras(value);
        console.log(value);
        break;
      default:
        break;
    }
  };

  return(
    <div>
      <form 
        className='Cosmic-formulario'
        onSubmit={manejarEnvio}>
        <h3>Puntos de funcion Cosmic</h3>
          <table>
            <tr>
              <td>Nombre: </td>
              <td><Input 
                    attribute={{
                      id: 'nombre',
                      name: 'nombre',
                      type: 'text',
                      placeholder: 'Ingresa el nombre'
                    }}
                    handleChange={handleChange}/></td>
            </tr>
            <tr>
              <td>Entradas: </td>
              <td><Input 
                    attribute={{
                      id: 'entradas',
                      name: 'entradas',
                      type: 'number',
                      placeholder: ''
                    }}
                    handleChange={handleChange}/></td>
            </tr>
            <tr>
              <td>Salidas: </td>
              <td><Input 
                    attribute={{
                      id: 'salidas',
                      name: 'salidas',
                      type: 'number',
                      placeholder: ''
                    }}
                    handleChange={handleChange}/></td>
            </tr>
            <tr>
              <td>Lecturas: </td>
              <td><Input 
                    attribute={{
                      id: 'lecturas',
                      name: 'lecturas',
                      type: 'number',
                      placeholder: ''
                    }}
                    handleChange={handleChange}/></td>
            </tr>
            <tr>
              <td>Escrituras: </td>
              <td><Input 
                    attribute={{
                      id: 'escrituras',
                      name: 'escrituras',
                      type: 'number',
                      placeholder: ''
                    }}
                    handleChange={handleChange}/></td>
            </tr>
          </table>
        <Boton 
          name='formularioCosmic-boton' 
          texto='Agregar punto' />             
      </form>
    </div>
  );
}

export default FormularioCosmic;