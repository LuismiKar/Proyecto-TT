import React from "react";

class Cocomo3 extends React.Component{
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
            <h1>COCOMO II: Modelo "Post arquitectura"</h1>
        </section>

        <section class="contenido">
            <h3>Nombre del proyecto: {}</h3>
            <br></br><br></br><br></br>
            <h2>Multiplicadores de esfuerzo</h2>
        </section>
        <section>
            <div class="izquierda1">
                <h2>Producto</h2>
                <h3>RELY =  {}</h3>
                <h3>DATA = {}</h3>
                <h3>DOCU = {}</h3>
                <h3>CPLX = {}</h3>
                <h3>RUSE = {}</h3>
                
            </div>
            <div class="derecha">
                <h2>Personal</h2>
                <h3>ACAP =  {}</h3>
                <h3>AEXP = {}</h3>
                <h3>PEXP = {}</h3>
                <h3>LTEX = {}</h3>
                <h3>PCON = {}</h3>
            </div>
        
        </section>
       
            
        <section class="contenido">
            <br></br><br></br><br></br><br></br>
            <h1>Resultado</h1>
            <h3>PM estimado = {}</h3>
        </section>
    </main>
    
</body>
    }
}