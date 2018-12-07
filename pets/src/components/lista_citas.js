import React, {Component} from 'react';
import Cita  from "./cita";

class ListaCitas extends Component {
    render(){ 
        const citas = this.props.citas
        let mensaje 
        mensaje = citas.length > 0 ? "Lista de citas" : 'No hay citas'

        return(
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="text-center">{mensaje}</h2>
                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(cita => (
                            <Cita 
                                key={cita}
                                info={this.props.citas[cita]}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export default ListaCitas