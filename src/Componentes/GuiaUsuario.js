import React from 'react';
import '../Hojas-de-estilo/GuiaUsuario.css'
import CA1 from '../Imagenes/compapp1.png';
import CA2 from '../Imagenes/compapp2.png';
import DT1 from '../Imagenes/DT1.png';
import DT2 from '../Imagenes/DT2.png';
import DT3 from '../Imagenes/DT3.png';
import PA1 from '../Imagenes/PA1.png';
import C1 from '../Imagenes/C1.png';

//Selector para elegir el metodo con el cual se va a trabajar
function GuiaUsuario() {
  return(
    <div className='contenedor-guia'>
      <h1>Guía de usuario</h1>
      <p>
        Esta aplicación se ha creado para los estudiantes de ESCOM, con el fin de hacer más comprensibles los modelos de estimación
        COCOMO II y COSMIC, y así poder facilitarles el cálculo del esfuerzo de sus proyectos de software. 
      </p>
      <br/>

      {/* DEFINICIONES */}
      <h2>Definiciones</h2><br/>
      <h4>Estimación de costos</h4>
      <p className='componente'>
        Consiste en estimar el tamaño, el esfuerzo, la complejidad y el costo del proyecto de software para poder encontrar 
        la mejor decisión de desarrollo y asegurar que el gasto se encuentre de acuerdo con lo presupuestado tizando la 
        eficiencia, excelencia, calidad y la competitividad.  
      </p><br/><hr/>
      <h4>Esfuerzo</h4>
      <p className='componente'>
        Representa el tiempo de trabajo de una persona fulltime, requeridos para desarrollar el proyecto.
        Por lo general se expresa en meses/persona. En este caso, la aplicación trabaja con base en meses/persona.  
      </p><br/><hr/>
      <h4>COCOMO II</h4>
      <p className='componente'>
        Es un modelo de estimación de costos que permite realizar estimaciones en función del tamaño del software, y 
        de un conjunto de factores de coste y de escala.
      </p><br/>
      <p>
        A la vez, COCOMO II se divide en tres modelos de estimación, que depende del proyecto.
      </p><br/>
      <div className='extension'>
        <h4>Composición de aplicación</h4>
        <p className='componente2'>
          Se emplea en desarrollos de software durante la etapa de prototipado.
        </p><br/>
        <h4>Diseño temprano</h4>
        <p className='componente2'>
          Se utiliza en las primeras etapas del desarrollo en las cuales se evalúan las alternativas de hardware 
          y software de un proyecto, es decir, no se tiene mucha información del proyecto
        </p><br/>
        <h4>Post arquitectura</h4>
        <p className='componente2'>
          Se aplica en la etapa de desarrollo, después de definir la arquitectura del sistema, y en la etapa 
          de mantenimiento.
        </p>
      <br/>
      </div><hr/>
      <h4>COSMIC</h4>
      <p className='componente'>
      Es un modelo de estimación de costos que permite realizar estimaciones en función del tamaño del software, y 
      de un conjunto de factores de coste y de escala.
      </p><br/>

      {/* FORMULAS */}
      <h2>Fórmulas</h2>
      <div className='descripcion'>
        A continuación se muestran las fórmulas implementadas para cada modelo considerado en la aplicación
      </div>
      <br/>
      <h4>Composición de aplicación</h4>
        <p className='componente3'>
          <img src={CA1} width='170px'/>
          <br/>
          <img src={CA2} width='250px'/>
        </p><br/>
        <div className='lista'>
          <p>
            <b>-PM:</b> Es el esfuerzo estimado, representado en personas-meses.
          </p>
          <p>
            <b>-NOP</b> (Nuevos Puntos Objeto): Es el tamaño del nuevo software a desarrollar expresado en Puntos Objeto.
          </p>
          <p>
            <b>-OP</b> (Puntos Objeto): Se refiere al tamaño del software a desarrollar expresado en Puntos Objeto.
          </p>
          <p>
            <b>-%reuso:</b> Porcentaje de reuso que se espera lograr en el proyecto.
          </p>
          <p>
            <b>-PROD:</b> Es la productividad promedio, considerando los aspectos "Experiencia y capacidad de los desarrolladores" y "Madurez y capacidad del ICASE".
          </p>
        </div><br/>
  
      <h4>Diseño temprano</h4>
        <p className='componente3'>
        <img src={DT1} width='290px'/>
        <br/>
        <img src={DT2} width='240px'/>
        <br/>
        <img src={DT3} width='220px'/>
        </p><br/>
        <div className='lista'>
          <p>
            <b>-KSLOC:</b> Es el tamaño del software a desarrollar expresado en miles de líneas de código.
          </p>
          <p>
            <b>-A:</b> Es una constante que captura los efectos lineales sobre el esfuerzo de acuerdo a la variación del tamaño (Su valor es de 2.94).
          </p>
          <p>
            <b>-B:</b> Es el factor exponencial, emplea características relacionadas con el incremento en el tamaño del software.
          </p>
          <p>
            <b>-EMi </b>(Multiplicadores de Esfuerzo): Se refiere a los factores de costo que tienen un efecto multiplicativo sobre el esfuerzo. 
          </p>
          <p>
            <b>-Wj </b>(Factores de escala): Factores que influyen en la productividad y esfuerzo del proyecto.
          </p>
        </div><br/>

      <h4>Post arquitectura</h4>
      <p className='componente3'>
          <img src={PA1} width='300px'/>
          <br/>
          </p><br/>
      <div className='lista'>
        <p>
          La fórmula utilizada en este modelo es igual a diseño temprano, sin embargo, en esta fórmula se consideran 
          17 Multiplicadores de esfuerzo
        </p>    
      </div>
      <br/>

      <h4>COSMIC</h4>
      <p className='componente3'>
          <img src={C1} width='350px'/>
          <br/>
          </p><br/>
      <div className='lista'>
        <p>
          <b>-Tamaño:</b> Es el tamaño del software a desarrollar, sumando los puntos de función COSMIC, los cuales
          consideran entradas, salidas, lecturas y escrituras al software.
        </p>
        <p>
          <b>-Tasa de entrega:</b> Valor de ajuste para los puntos de función COSMIC.
        </p>   
      </div>
    </div>
  );
}

export default GuiaUsuario;