import React, {Component} from 'react';
import { Link } from 'react-router-dom'

//  Redux
import { connect } from "react-redux";
import { deleteProduct }  from '../actions/productos.actions'

class Producto extends Component {


    eliminarProducto = () => {
        const id = this.props.info.id
        this.props.deleteProduct(id);
    }
    
    render(){ 

        const {id, nombre, precio} = this.props.info;

        return(
            <li className="list-group-item">
                <div className="row justify-content-between align-item-center">
                    <div className="col-md-8 d-flex justify-content-between align-item-center">
                        <p className="text-dark m-0">{nombre}</p>
                        <span className="badge badge-warning" >
                            ${precio}
                        </span>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end acciones">
                        <Link to={`/productos/${id}/editar`} className="btn btn-primary mr-2">Editar</Link>
                        <button onClick={this.eliminarProducto} type="button" className="btn btn-danger">Borrar</button> 
                    </div>
                </div>
            </li>
        );
    }
}
export default connect(null, {deleteProduct}) (Producto)