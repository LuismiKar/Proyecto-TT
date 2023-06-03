import React from 'react';
import '../Hojas-de-estilo/GuiaUsuario.css'

function TablaValores() {
  return(
    <table border='1' cellSpacing='0' cellPadding='10' align='center'>
      <thead>
        <tr>
          <td>Nivel</td>
          <td>Significado</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>xlo</td>
          <td>Extra bajo</td>
        </tr>
        <tr>
          <td>vlo</td>
          <td>Muy bajo</td>
        </tr>
        <tr>
          <td>lo</td>
          <td>Bajo</td>
        </tr>
        <tr>
          <td>nom</td>
          <td>Nominal (normal)</td>
        </tr>
        <tr>
          <td>hi</td>
          <td>Alto</td>
        </tr>
        <tr>
          <td>vhi</td>
          <td>Muy alto</td>
        </tr>
        <tr>
          <td>xhi</td>
          <td>Extra alto</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TablaValores;