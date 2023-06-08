import React from "react";

class Cocomo2 extends React.Component{

    render(){
       
<body>
    <header>
        <section class="texto-header">
        </section>
        <div class="wave" style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" 
            preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-0.00,49.85 C150.00,149.60 349.20,-49.85 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z" 
            style="stroke: none; fill: #fff;"></path></svg>
        </div>

    </header>

    <main>
        <section class="titulo">
            <h1>Instituto Politécnico Nacional</h1>
            <h2>Escuela Superior de Cómputo</h2>
        </section>
        <section class="contenido">
            <h1>COCOMO II: Modelo "Composición de aplicación"</h1>
        </section>

        <section class="contenido">
            <h3>Nombre del proyecto: </h3>
            <br></br><br></br><br></br>
            <h2>Puntos objeto</h2>
            <h3>Número de pantallas = {}</h3>
            <h3>Número de reportes = {}</h3>
            <h3>Número de servidores = {}</h3>
            <h3>Complejidad 3GL = {}</h3>
            <h3>Procentaje de reuso= {}</h3>
            <br></br><br></br><br></br>
            <h2>Productividad</h2><br></br>
            <h3>Experiencia y capacidad de los desarrolladores = {}</h3>
            <h3>Madurez y capacidad del ICASE= {}</h3>
        </section>
        
        <section class="contenido">
            <h1>Resultado</h1>
            <h3>Esfuerzo = {}</h3>
        </section>
    </main>
    
</body>
    }
}

export default Cocomo2;