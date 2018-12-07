import React, { Component } from 'react';
import Header from './header'
import AgregarCita from './agregar_cita'

class App extends Component {

  state = {
    citas:[]
  };

  crearCita = (nuevaCita) => {
    const citas = [...this.state.citas, nuevaCita];
    this.setState({citas})
    console.log(citas);
  }

  render() {
    return (
      <div className="container">
        <Header titulo={"Administrador de pacientes de veterinaria"}/>
        <div className="row">
          <div className="col-md-6">
            <AgregarCita
                crearCita= {this.crearCita}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
