import React from "react";


class Cocomo1 extends React.Component{
    render(){
        return(
            <div id="plantillaCocomo">
            <section class="titulo">
                <h1>Instituto Politécnico Nacional</h1>
                <h2>Escuela Superior de Cómputo</h2>
            </section>
            <section class="contenido">
                <h1>COCOMO II: Modelo "Diseño temprano"</h1>
            </section>
            <section >
                <div class="izquierda">
                    <h2>Multiplicadores de esfuerzo</h2>
                    <h3>RCPX = {}</h3>
                    <h3>RUSE = {}</h3>
                    <h3>PDIF = {}</h3>
                    <h3>PERS = {}</h3>
                    <h3>PREX = {}</h3>
                    <h3>FCIL = {}</h3>
                    <h3>SCED = {}</h3>
                </div>
                <div class="derecha">
                    <h2>Factor exponencial de escala</h2>
                    <h3>PREC = {}</h3>
                    <h3>FLEX = {}</h3>
                    <h3>RESL = {}</h3>
                    <h3>TEAM = {}</h3>
                    <h3>PMAT = {}</h3>
                </div>
            </section>

            <section class = "contenido">
                <br></br><br></br><br></br>
                <h1>Resultado <br></br><br></br></h1>
                <h3>P estimado = {}</h3>
            </section>

        </div>
        );
    }
}

export default Cocomo1;