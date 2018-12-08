import React, { Component } from 'react';
import Header from './header'
import AgregarCita from './agregar_cita'
import ListaCitas from './lista_citas';


// Redux
import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <div className="container">
          <Header titulo={"Administrador de pacientes de veterinaria"}/>
          <div className="row">
            <div className="col-md-6">
              <AgregarCita/>
            </div>

            <div className="col-md-6">
              <ListaCitas/>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
