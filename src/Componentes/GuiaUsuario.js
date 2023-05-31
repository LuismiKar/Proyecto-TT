import React from 'react';
import '../Hojas-de-estilo/GuiaUsuario.css'

//Selector para elegir el metodo con el cual se va a trabajar
function GuiaUsuario() {
  return(
    <div className='contenedor-guia'>
      <h1>Guía de usuario</h1>
      <p>
        Esta aplicación se ha creado para los estudiantes de ESCOM, con el fin de hacer más comprensibles los modelos de estimación
        COCOMO II y COSMIC, y así poder facilitarles el cálculo del esfuerzo de sus proyectos de software. 
      </p>
      <h3>Definiciones</h3><br/>
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
      <h3>Funcionamiento</h3><br/>
      Selección de nivel en multiplicadores de esfuerzo y factor complejidad<br/><br/>
      <div className='tabla-niveles'>  
        <table border='1' cellSpacing='0' cellPadding='10' align='center'>
          <thead>
            <tr>
              <td>Nivel</td>
              <td>Definición</td>
              <td>Traducción</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>xlo</td>
              <td>Extra low</td>
              <td>Extra bajo</td>
            </tr>
            <tr>
              <td>vlo</td>
              <td>Very low</td>
              <td>Muy bajo</td>
            </tr><tr>
              <td>lo</td>
              <td>Low</td>
              <td>Bajo</td>
            </tr>
            <tr>
              <td>nom</td>
              <td>Nominal</td>
              <td>Nominal (normal)</td>
            </tr>
            <tr>
              <td>hi</td>
              <td>High</td>
              <td>Alto</td>
            </tr>
            <tr>
              <td>vhi</td>
              <td>Very high</td>
              <td>Muy alto</td>
            </tr>
            <tr>
              <td>xhi</td>
              <td>Extra high</td>
              <td>Extra alto</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GuiaUsuario;