import React, {Component} from 'react';

class Cita extends Component {
    
    render(){ 
        const {fecha, hora, mascota, propietario, id, sintomas} = this.props.info

        return(
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{mascota}</h3>
                    <p className="card-text"><b>Nombre dueño:</b> {propietario}</p>
                    <p className="card-text"><b>Fecha:</b> {fecha}</p>
                    <p className="card-text"><b>Hora de ingreso:</b> {hora}</p>
                    <p className="card-text"><b>Sintomas:</b></p>
                    <p className="card-text">{sintomas}</p>
                </div>
            </div>
        );
    }
}
export default Cita
