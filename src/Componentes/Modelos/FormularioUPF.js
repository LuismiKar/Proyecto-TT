import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input';
import Boton from '../Boton';
import Select from 'react-select';
import '../../Hojas-de-estilo/CocomoII.css';
import { FiHelpCircle } from "react-icons/fi";
import CuadroInfo from '../CuadroInfo';
import ComponenteInput from '../ComponenteInput';

var FormularioUPF = function( props ) {
    
  const [aux, setAux] = useState('');
  const [nombre, setNombre] = useState({campo:'', valido: null});
  const [tipo, setTipo] = useState(null);
  const [det, setDet] = useState({campo:'', valido: null});
  const [ret, setRet] = useState({campo:'', valido: null});//Archivos logicos
  const [ftr, setFtr] = useState({campo:'', valido: null});//Consultas, entradas y salidas
  const [peso, setPeso] = useState(0);

  //Variables de los cuadros de información
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,60}$/, // Letras y espacios, pueden llevar acentos.
    numeros: /^\d*\.?\d+$/ // Al menos un numero positivo y un punto 
  }

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

  //Funciones cuadros de información

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

  function asignarPesoArchivosLogicos(){
    if( det.campo<0 || ret.campo<0 ){
      console.log('Los valores deben ser positivos');
    }
    if( (ret.campo===1 && det.campo<20) || (ret.campo>1 && ret.campo<6 && det.campo<20) || (ret.campo===1 && det.campo>19 && det.campo<51) ){
      if(tipo==='ALI')  
        setPeso(ComplejidadPeso['AIbajo']);
      else
        setPeso(ComplejidadPeso['AEbajo']);
        
    }else if( (ret.campo===1 && det.campo>50) || (ret.campo>1 && ret.campo<6 && det.campo>19 && det.campo<51) || (ret.campo>5 && det.campo<20) ){
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
    if( det.campo<0 || ret.campo<0 ){
      console.log('Los valores deben ser positivos');
    }
    if( (ftr.campo<2 && det.campo<6) || (ftr.campo>1 && ftr.campo<4 && det.campo<6) || (ftr.campo<2 && det.campo>5 && det.campo<20) ){
      if(tipo==='SE')  
        setPeso(ComplejidadPeso['SEbajo']);
      else
        setPeso(ComplejidadPeso['CEbajo']);
    }else if( (ftr.campo<2 && det.campo>19) || (ftr.campo>1 && ftr.campo<4 && det.campo>5 && det.campo<20) || (ftr.campo>3 && det.campo<6) ){
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
    if( det.campo<0 || ret.campo<0 ){
      console.log('Los valores deben ser positivos');
    }
    if( (ftr.campo<2 && det.campo<5) || (ftr.campo>1 && ftr.campo<4 && det.campo<5) || (ftr.campo<2 && det.campo>4 && det.campo<16) ){
      setPeso(ComplejidadPeso['EEbajo']);
    }else if( (ftr.campo<2 && det.campo>15) || (ftr.campo>1 && ftr.campo<4 && det.campo>4 && det.campo<16) || (ftr.campo>2 && det.campo<5) ){
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
      nombre: nombre.campo, 
      tipo: tipo,
      det: det.campo,
      ret: ret.campo,
      ftr: ftr.campo,
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
      <h3>
        <FiHelpCircle onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} color='#000'/>
        Funcionalidades
      </h3>{isHovering && (
        <CuadroInfo texto={'Caracteristicas del software'} valor='corto'/>
      )}
      
      <div className='descripcion'>
        En el siguiente apartado se debe agregar cada funcionalidad considerada del software.
      </div>
      <table>
        <tr>
          <td>
            Nombre de la funcionalidad:
          </td>
          <td>
            <ComponenteInput
              attribute={{
                id: 'nombre',
                name: 'nombre',
                type: 'text',
                placeholder: ''
              }}
              estado={nombre}
              handleChange={setNombre}
              expresionRegular={expresiones.nombre}
              leyendaerror='Nombre inválido'
              nombreMostrado={false}
            />
          </td>
        </tr>
        
        {tipo!==null && <tr>
          <td>
            <FiHelpCircle onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} color='#146C94'/>
            Campos leídos: 
            {isHovering2 && (
              <CuadroInfo texto={'Campos reconocibles por el usuario'} valor='corto'/>
            )}
          </td>
          <td>
            <ComponenteInput
                attribute={{
                  id: 'det',
                  name: 'det',
                  type: 'text',
                  placeholder: ''
                }}
                estado={det}
                handleChange={setDet}
                expresionRegular={expresiones.numeros}
                leyendaerror='El valor debe ser positivo'
                nombreMostrado={false}
              />
          </td>
        </tr>}
        {(tipo === 'EE' || tipo === 'CE' || tipo === 'SE') &&
          <tr>
          <td>Cantidad de tablas leídas: </td>
          <td>
            <ComponenteInput
                attribute={{
                  id: 'ret',
                  name: 'ret',
                  type: 'text',
                  placeholder: ''
                }}
                estado={ret}
                handleChange={setRet}
                expresionRegular={expresiones.numeros}
                leyendaerror='El valor debe ser positivo'
                nombreMostrado={false}
            />
          </td>
        </tr>}
        {(tipo === 'ALI' || tipo === 'AEI') &&
          <tr>
          <td>
            <FiHelpCircle onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3} color='#146C94'/>
            Archivos referenciados: 
            {isHovering3 && (
              <CuadroInfo texto={'Fichero (interno o externo) leído/mantenido por el proceso'} valor='corto'/>
            )}
          </td>
          <td>
            <ComponenteInput
                attribute={{
                  id: 'ftr',
                  name: 'ftr',
                  type: 'text',
                  placeholder: ''
                }}
                estado={ftr}
                handleChange={setFtr}
                expresionRegular={expresiones.numeros}
                leyendaerror='El valor debe ser positivo'
                nombreMostrado={false}
            />
          </td>
        </tr>}
        <tr>
          <td>Tipo de funcionalidad: </td>
          <td>
            <div className='select'>
              <Select options={ tipoUPF } placeholder='Tipo de UPF' onChange={ handleSelectChange } />
            </div>
          </td>
        </tr>
      </table>   
        <center>
        <Boton 
          name='formulario-boton' 
          texto='Agregar Punto de función'
          onMouseOver={asignarFuncionPeso} /> </center>
    </form>
    </>
  );
}

export default FormularioUPF;