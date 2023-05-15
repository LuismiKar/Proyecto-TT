import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input';
import Boton from '../Boton';
import Select from 'react-select';
import '../../Hojas-de-estilo/CocomoII.css';

var FormularioUPF = function( props ) {
    
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [det, setDet] = useState(0);
  const [ret, setRet] = useState(0);//Archivos logicos
  const [ftr, setFtr] = useState(0);//Consultas, entradas y salidas
  const [peso, setPeso] = useState(0);

  const tipoUPF = [
    { label:"Entrada externa", value:"EE" },
    { label:"Salida externa", value:"SE" },
    { label:"Consulta externa", value:"CE" },
    { label:"Archivo Lógico Interno", value:"ALI" },
    { label:"Archivo Externo de Interfase", value:"AEI" }
  ]

  const ComplejidadPeso = {
    EEbajo: 3,
    EEprom: 4,
    EEalto: 6,
    SEbajo: 4,
    SEprom: 5,
    SEalto: 7,
    CEbajo: 3,
    CEprom: 4,
    CEalto: 6,
    AIbajo: 7,
    AIprom: 10,
    AIalto: 15,
    AEbajo: 5,
    AEprom: 7,
    AEalto: 10
  }

  function asignarPesoArchivosLogicos(){
    if( det<0 || ret<0 ){
      console.log('Los valores deben ser positivos');
    }
    if( (ret===1 && det<20) || (ret>1 && ret<6 && det<20) || (ret===1 && det>19 && det<51) ){
      if(tipo==='ALI')  
        setPeso(ComplejidadPeso['AIbajo']);
      else
        setPeso(ComplejidadPeso['AEbajo']);
        
    }else if( (ret===1 && det>50) || (ret>1 && ret<6 && det>19 && det<51) || (ret>5 && det<20) ){
      if(tipo==='ALI')  
        setPeso(ComplejidadPeso['AIprom']);
      else
        setPeso(ComplejidadPeso['AEprom']);
        
    }else{
      if(tipo==='ALI')  
        setPeso(ComplejidadPeso['AIalto']);
      else
        setPeso(ComplejidadPeso['AEalto']);
    }
  }

  function asignarPesoSEyCE(){
    if( det<0 || ret<0 ){
      console.log('Los valores deben ser positivos');
    }
    if( (ftr<2 && det<6) || (ftr>1 && ftr<4 && det<6) || (ftr<2 && det>5 && det<20) ){
      if(tipo==='SE')  
        setPeso(ComplejidadPeso['SEbajo']);
      else
        setPeso(ComplejidadPeso['CEbajo']);
    }else if( (ftr<2 && det>19) || (ftr>1 && ftr<4 && det>5 && det<20) || (ftr>3 && det<6) ){
      if(tipo==='SE')  
        setPeso(ComplejidadPeso['SEprom']);
      else
        setPeso(ComplejidadPeso['CEprom']);
    }else{
      if(tipo==='SE')  
        setPeso(ComplejidadPeso['SEalto']);
      else
        setPeso(ComplejidadPeso['CEalto']);
    }
  }

  function asignarPesoEE(){
    if( det<0 || ret<0 ){
      console.log('Los valores deben ser positivos');
    }
    if( (ftr<2 && det<5) || (ftr>1 && ftr<4 && det<5) || (ftr<2 && det>4 && det<16) ){
      setPeso(ComplejidadPeso['EEbajo']);
    }else if( (ftr<2 && det>15) || (ftr>1 && ftr<4 && det>4 && det<16) || (ftr>2 && det<5) ){
      setPeso(ComplejidadPeso['EEprom']);
    }else{
      setPeso(ComplejidadPeso['EEalto']);
    }
  }

  function asignarFuncionPeso(){
    if(tipo==='ALI' || tipo==='AEI')
      asignarPesoArchivosLogicos();
    else if(tipo==='SE' || tipo==='CE')
      asignarPesoSEyCE();
    else if(tipo==='EE')
      asignarPesoEE();
  }

  const manejarEnvio = e => {
    e.preventDefault();//Evitar que se recargue cuando se envie el formulario
    const NuevoUFP = {
      id: uuidv4(),
      nombre: nombre, 
      tipo: tipo,
      det: det,
      ret: ret,
      ftr: ftr,
      peso: peso
    }
    props.onSubmit(NuevoUFP);
    props.enviarPeso(peso);
  };

  //Función para ver los cambios del campo de texto
  function handleChange(name,value) {
    switch(name){
      case 'nombre':
        setNombre(value);
        console.log(value);
        break;
      case 'det':
        setDet(value);
        console.log(value);
        break;
      case 'ret':
        setRet(value);
        console.log(value);
        break;
      case 'ftr':
        setFtr(value);
        console.log(value);
        break;
      default:
        break;
    }
  };

  const handleSelectChange = ( { value } ) => {
    console.log("Tipo: " + value);
    setTipo(value);
  }

  return(
    <>
    <form 
      className='UPF-formulario'
      onSubmit={manejarEnvio}>
      <h3>Funcionalidades</h3>
      <table>
        <tr>
          <td>Nombre de la funcionalidad: </td>
          <td>
            <Input 
              attribute={{
                id: 'nombre',
                name: 'nombre',
                type: 'text',
                placeholder: 'Ingresa el nombre'
              }}
              handleChange={handleChange}/>
          </td>
        </tr>
        <tr>
          <td>Tipo de funcionalidad: </td>
          <td>
            <div className='select'>
              <Select options={ tipoUPF } placeholder='Tipo de UPF' onChange={ handleSelectChange } />
            </div>
          </td>
        </tr>
        <tr>
          <td>Campos de leidos: </td>
          <td>
            <Input 
              attribute={{
                id: 'det',
                name: 'det',
                type: 'number',
                placeholder: 'Campos leidos'
              }}
              handleChange={handleChange}/>
          </td>
        </tr>
        <tr>
          <td>Cantidad de tablas del archivo: </td>
          <td>
            <Input 
              attribute={{
                id: 'ret',
                name: 'ret',
                type: 'number',
                placeholder: 'Cantidad de tablas'
              }}
              handleChange={handleChange}/>
          </td>
        </tr>
        <tr>
          <td>Archivos referenciados: </td>
          <td>
            <Input 
              attribute={{
                id: 'ftr',
                name: 'ftr',
                type: 'number',
                placeholder: 'Archivos referenciados'
              }}
              handleChange={handleChange}/>
          </td>
        </tr>
      </table>   
        <Boton 
          name='formulario-boton' 
          texto='Agregar Upf'
          onMouseOver={asignarFuncionPeso} /> 
    </form>
    </>
  );
}

export default FormularioUPF;