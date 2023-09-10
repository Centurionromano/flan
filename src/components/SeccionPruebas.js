import React, { Component } from 'react';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component {
    //var Holamundo= () => {}
    HolaMundo (nombre, edad) {
        var presentacion = (
          <div>
            <h2>Hola, soy {nombre}</h2>
            <h3>Tengo {edad} años</h3>
          </div>
        );
      
        return presentacion;
      }


    render() {
        var nombre ="Victor Robles";


        return (
            <section id="content">
                <h2 class="subheader">Últimos artículos</h2>
                <p>
                    Bienvenido a la casa del flan, donde los flanes endulzan momentos y hacen que cada bocado sea un dulce abrazo.
                </p>

                {this.HolaMundo (nombre,12)}
                <section className="componentes">
                    <MiComponente />
                    <Peliculas />

                </section>
            </section>
        );
    }
}

export default SeccionPruebas;