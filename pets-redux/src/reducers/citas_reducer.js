import { MOSTAR_CITAS, BORRAR_CITA, AGREGAR_CITA} from '../actions/types';

// state inicial
// cada reducer debe tener su propio state

const initialState = {
    citas: [
        // {
        //     id: 0,
        //     fecha: '10-10-2010',
        //     hora:'10:30',
        //     mascota: 'Brook',
        //     propietario: 'Yo',
        //     sintomas: 'Está bien pendejo'
        // }
    ]
}


export default function(state = initialState, action){
    switch(action.type){
        case MOSTAR_CITAS:
            return {
                ...state
            };
        case AGREGAR_CITA:
            return{
                ...state,
                citas:[...state.citas, action.payload]
            }
        case BORRAR_CITA:
            return {
                ...state,
                citas: state.citas.filter(cita => cita.id !== action.payload)
            }
        default:
            return state;
    }
}
