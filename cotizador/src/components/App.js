import React, { Component } from 'react';
import Header from  './header/header'
import Formulario from "./formulario/formulario";
import Resumen from "./resumen/resumen";
import Resultado from './resultado/resultado';

import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helpers/helper'

class App extends Component {

  state = {
    resultado: '',
    datos: {}
  }

  // constructor(props){
  //   super(props);
  //   this.state = {}
  // }

  cotizarSeguro = (datos) => {
    console.log("Datos", datos);
    const {marca, plan, year} = datos;

    // Agregar base de 2000
    let resultado = 2000;

    // Obtener la diferencia de año
    const diferencia = obtenerDiferenciaAnio(year);

    // Por cada año restar el 3% al valor del seguro
    resultado -= (diferencia * 3) * resultado / 100

    // Americano +15% --- Asiatico +5%  ---  Europeo +30%
    resultado = calcularMarca(marca) * resultado;
    console.log('Resultado por marca',marca, resultado);

    // plan básico +20% --- plan completo +50%
    let incremento_plan = obtenerPlan(plan)
    resultado =  parseFloat(resultado * incremento_plan).toFixed(2);


    // Cambiar state
    this.setState({
      resultado: resultado,
      datos: datos
    })

  }

  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de seguro de autos"/>

        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro} />

          <Resumen
            datos = {this.state.datos}
            resultado = {this.state.resultado}
          />
          <Resultado 
              resultado = {this.state.resultado}
          />
        </div>
      </div>
    );
  }
}

export default App;
