import React, {Component} from 'react';
import Cita  from "./cita";
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { getCitas } from '../actions/citasActions'

class ListaCitas extends Component {

    componentDidMount(){ 
        this.props.getCitas();
    }

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
                                info={this.props.citas[cita]}
                                borrarCita={this.props.borrarCita}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

ListaCitas.propTypes = {
    citas: PropTypes.array.isRequired,
    borrarCita: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    citas: state.citas.citas
})

export default connect(mapStateToProps, {getCitas}) (ListaCitas);