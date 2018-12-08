import React, { Component } from 'react';
import Header from './header.component'
import Productos  from "./productos.component";
import NuevoProducto from "./nuevo_producto.component";
import EditarProducto from "./editar_producto.component";
// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// Redux
import {Provider} from 'react-redux'
import store from '../store'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <React.Fragment>
            
            <Header/>
            <div className="container">
              <Switch>
                <Route exact path='/' component={Productos}/>
                <Route exact path='/productos/nuevo' component={NuevoProducto}/>
                <Route exact path='/productos/:id/editar' component={EditarProducto}/>
              </Switch>
            </div>

          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
