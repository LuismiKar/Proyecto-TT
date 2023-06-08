import React from "react";

class Cosmic extends React.Component{
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
            <h1>COSMIC</h1>
        </section>

        <section class="contenido">
            <h3>Nombre del proyecto: {} </h3>
            <br></br><br></br><br></br>
            <h2>Puntos de función Cosmic</h2>
            <h3>Entradas {}</h3>
            <h3>Salidas {}</h3>
            <h3>Lecturas {}</h3>
            <h3>Escrituras {}</h3>
            <h3>Tasa de entrega {} </h3>

        </section>

        <section class="contenido">
            <h1>Resultado</h1>
            <h3>Suma de los puntos de función: {}</h3>
            <h3>Esfuerzo calculado: {}</h3>
        </section>
    </main>
    
</body>
    }

}