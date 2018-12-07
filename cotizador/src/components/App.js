import React, { Component } from 'react';
import Header from  './header/header'
import Formulario from "./formulario/formulario";

class App extends Component {

  cotizarSeguro = (datos) => {
    console.log("Datos", datos);
  }

  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de seguro de autos"/>

        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro} />
        </div>
      </div>
    );
  }
}

export default App;
