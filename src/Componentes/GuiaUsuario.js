import React from 'react';
import '../Hojas-de-estilo/GuiaUsuario.css'
import CA1 from '../Imagenes/compapp1.png';
import CA2 from '../Imagenes/compapp2.png';

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
            Se utiliza en las primeras etapas del desarrollo en las cuales se evalúan las alternativas de hardware 
            y software de un proyecto, es decir, no se tiene mucha información del proyecto
          </p><br/>
          <h4>Post arquitectura</h4>
          <p className='componente3'>
            Se aplica en la etapa de desarrollo, después de definir la arquitectura del sistema, y en la etapa 
            de mantenimiento.
          </p>
        
      
    </div>
  );
}

export default GuiaUsuario;