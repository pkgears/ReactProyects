import React, { Component } from 'react';
import Header from './header'
import AgregarCita from './agregar_cita'
import ListaCitas from './lista_citas';


// Redux
import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {

  state = {
    citas:[]
  };


  componentDidMount(){
    console.log('Listo');
    const citasLocalStorage = localStorage.getItem('citas');
    if( citasLocalStorage){
      this.setState({
        citas: JSON.parse(citasLocalStorage)
      })
    }
  }

  componentDidUpdate(){
    console.log('Algo cambio');
    localStorage.setItem("citas", JSON.stringify(this.state.citas));
  }

  crearCita = (nuevaCita) => {
    const citas = [...this.state.citas, nuevaCita];
    this.setState({citas})
    console.log(citas);
  }

  borrarCita = (id) => {
    console.log(id);

    const citasActuales = [...this.state.citas]

    const citas = citasActuales.filter(cita => cita.id !== id );

    this.setState({
      citas
    });

  }

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
              <ListaCitas 
                borrarCita = {this.borrarCita}
                />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
