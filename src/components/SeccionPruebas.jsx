import React, { Component } from "react";

import Flan from "./Flan";

class SeccionPruebas extends Component {
  //var Holamundo= () => {}
  HolaMundo(nombre, edad) {
    var presentacion = <div></div>;

    return presentacion;
  }

  render() {
    var nombre = "Victor Robles";

    return (
      <section id="content">
        <h2 class="subheader">Nuestros productos</h2>
        <p>
          Bienvenido a la casa del flan, donde los flanes endulzan momentos y
          hacen que cada bocado sea un dulce abrazo.
        </p>

        {this.HolaMundo(nombre, 12)}
        <section className="componentes">
          <Flan />
        </section>
      </section>
    );
  }
}

export default SeccionPruebas;
