import React, { useState } from 'react';
import FormularioProyecto from './FormularioProyecto';
import Proyecto from './Proyecto';
import '../Hojas-de-estilo/ListaProyectos.css'

//Selector para elegir el metodo con el cual se va a trabajar
function ListaProyectos() {

  const [proyectos, setProyectos] = useState([]);

  const agregarProyecto = proyecto => {
    if(proyecto.nombre.trim()) { //Se verifica que la cadena no esta vacia
      proyecto.nombre = proyecto.nombre.trim(); //Se le quitan los espacios del principio y del final a la cadena
      const proyectosActualizados = [proyecto, ...proyectos];//El operador ... convierte los upfs de un arreglo a upfs individuales
      setProyectos(proyectosActualizados);
    }
  };

  const eliminarProyecto = id => {
    const proyectosActualizados = proyectos.filter(proyecto => proyecto.id !== id);//Se genera una copia nueva del arreglo, sin incluir al que tiene id que se manda a esta funcion
    setProyectos(proyectosActualizados);
  };

  return(
    <div className='contenedor-listaproyecto'>
      <FormularioProyecto onSubmit={agregarProyecto}/>
      <table>
          <div>
            {
              proyectos.map((proyecto) => 
                <Proyecto 
                  key={proyecto.id}
                  id={proyecto.id}
                  nombre={proyecto.nombre}
                  tipo={proyecto.tipo}
                  esfuerzo={proyecto.esfuerzo}
                  eliminarProyecto={eliminarProyecto} />
              )
            }
          </div>
      </table>
    </div>
  );
}

export default ListaProyectos;