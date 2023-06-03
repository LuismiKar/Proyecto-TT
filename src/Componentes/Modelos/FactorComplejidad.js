import React, {useState} from 'react';
import Select from 'react-select';
import Boton from '../Boton';
import { FiHelpCircle } from "react-icons/fi";
import CuadroInfo from '../CuadroInfo';

var FactorComplejidad = function({ cambiarFactorComplejidad }){

  const [f1, setF1] = useState(0);
  const [f2, setF2] = useState(0);
  const [f3, setF3] = useState(0);
  const [f4, setF4] = useState(0);
  const [f5, setF5] = useState(0);
  const [f6, setF6] = useState(0);
  const [f7, setF7] = useState(0);
  const [f8, setF8] = useState(0);
  const [f9, setF9] = useState(0);
  const [f10, setF10] = useState(0);
  const [f11, setF11] = useState(0);
  const [f12, setF12] = useState(0);
  const [f13, setF13] = useState(0);
  const [f14, setF14] = useState(0);
  const [totalFC, setTotalFC] = useState(0);

  const pesos = [
    { label:"Sin influencia", value:0 },
    { label:"Incidental", value:1 },
    { label:"Moderado", value:2 },
    { label:"Medio", value:3 },
    { label:"Significativo", value:4 },
    { label:"Esencial", value:5 }
  ]

  const [isHoveringTitulo, setIsHoveringTitulo] = useState(false);

  const manejarCambioF1 = ( { value } ) => {
    console.log("F1: " + value);
    setF1(value);
  }

  const manejarCambioF2 = ( { value } ) => {
    console.log("F2: " + value);
    setF2(value);
  }

  const manejarCambioF3 = ( { value } ) => {
    console.log("F3: " + value);
    setF3(value);
  }

  const manejarCambioF4 = ( { value } ) => {
    console.log("F4: " + value);
    setF4(value);
  }

  const manejarCambioF5 = ( { value } ) => {
    console.log("F5: " + value);
    setF5(value);
  }

  const manejarCambioF6 = ( { value } ) => {
    console.log("F6: " + value);
    setF6(value);
  }

  const manejarCambioF7 = ( { value } ) => {
    console.log("F7: " + value);
    setF7(value);
  }

  const manejarCambioF8 = ( { value } ) => {
    console.log("F8: " + value);
    setF8(value);
  }

  const manejarCambioF9 = ( { value } ) => {
    console.log("F9: " + value);
    setF9(value);
  }

  const manejarCambioF10 = ( { value } ) => {
    console.log("F10: " + value);
    setF10(value);
  }

  const manejarCambioF11 = ( { value } ) => {
    console.log("F11: " + value);
    setF11(value);
  }

  const manejarCambioF12 = ( { value } ) => {
    console.log("F12: " + value);
    setF12(value);
  }

  const manejarCambioF13 = ( { value } ) => {
    console.log("F13: " + value);
    setF13(value);
  }

  const manejarCambioF14 = ( { value } ) => {
    console.log("F14: " + value);
    setF14(value);
  }

  //Funciones cuadros de información

  const handleMouseOverTitulo = () => {
    setIsHoveringTitulo(true);
  };

  const handleMouseOutTitulo = () => {
    setIsHoveringTitulo(false);
  };

  function calcularFactorComplejidad(){
    setTotalFC( f1 + f2 + f3 + f4 + f5 + f6 + f7 + f8 + f9 + f10 + f11 + f12 + f13 + f14 );
  }

  return(
    <div className='UPF-formulario'>
      <h3>
        <FiHelpCircle onMouseOver={handleMouseOverTitulo} onMouseOut={handleMouseOutTitulo} color='#000'/>
        Factor complejidad
      </h3>
      {isHoveringTitulo && (
        <CuadroInfo texto={'Factores característicos del software'} valor='corto'/>
      )}
      <div className='descripcion'>
        A continuación se debe asignar un valor a cada uno de los siguientes factores
      </div>
      <table>
        <tr>
          <td>F1. Mecanismos de recuperación y back-up confiables</td>
          <td><Select options={ pesos } defaultValue={ pesos[0] } onChange={manejarCambioF1} /></td>
        </tr>
        <tr>
          <td>F2. Comunicación de Datos</td>
          <td><Select options={ pesos } defaultValue={ pesos[0] } onChange={manejarCambioF2} /></td>
        </tr>
        <tr>
          <td>F3. Funciones de Procesamiento Distribuido</td>
          <td><Select options={ pesos } defaultValue={ pesos[0] } onChange={manejarCambioF3} /></td>
        </tr>
        <tr>
          <td>F4. Performance</td>
          <td><Select options={ pesos } defaultValue={ pesos[0] } onChange={manejarCambioF4} /></td>
        </tr>
        <tr>
          <td>F5. Configuración usada rigurosamente</td>
          <td><Select options={ pesos } defaultValue={ pesos[0] } onChange={manejarCambioF5} /></td>
        </tr>
        <tr>
          <td>F6. Entrada de datos on-line</td>
          <td><Select options={ pesos } defaultValue={ pesos[0] } onChange={manejarCambioF6} /></td>
        </tr>
        <tr>
          <td>F7. Factibilidad Operativa</td>
          <td><Select options={ pesos } defaultValue={ pesos[0] } onChange={manejarCambioF7} /></td>
        </tr>
        <tr>
          <td>F8. Actualización de archivos on-line</td>
          <td><Select options={ pesos } defaultValue={ pesos[0] } onChange={manejarCambioF8} /></td>
        </tr>
        <tr>
          <td>F9. Interfases Complejas</td>
          <td><Select options={ pesos } defaultValue={ pesos[0] } onChange={manejarCambioF9} /></td>
        </tr>
        <tr>
          <td>F10. Procesamiento Interno Complejo</td>
          <td><Select options={ pesos } defaultValue={ pesos[0] } onChange={manejarCambioF10} /></td>
        </tr>
        <tr>
          <td>F11. Reusabilidad</td>
          <td><Select options={ pesos } defaultValue={ pesos[0] } onChange={manejarCambioF11} /></td>
        </tr>
        <tr>
          <td>F12. Fácil Instalación</td>
          <td><Select options={ pesos } defaultValue={ pesos[0] } onChange={manejarCambioF12} /></td>
        </tr>
        <tr>
          <td>F13. Soporte de múltiples instalaciones</td>
          <td><Select options={ pesos } defaultValue={ pesos[0] } onChange={manejarCambioF13} /></td>
        </tr>
        <tr>
          <td>F14. Facilidad de cambios y amigabilidad</td>
          <td><Select options={ pesos } defaultValue={ pesos[0] } onChange={manejarCambioF14} /></td>
        </tr>
        <tr>
          <center>
          <Boton 
            name='BotonFC'
            funcion={calcularFactorComplejidad}
            onMouseOver={cambiarFactorComplejidad(totalFC)}
            texto='Calcular Factor Complejidad' />
          </center>
        </tr>
      </table>
    </div>
  );
}

export default FactorComplejidad;