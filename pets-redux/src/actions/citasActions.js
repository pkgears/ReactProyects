import { MOSTAR_CITAS, BORRAR_CITA, AGREGAR_CITA} from './types';

export const getCitas = () => {
    return {
        type: MOSTAR_CITAS
    }
}


export const agregarCita = (cita) => {
    return {
        type: AGREGAR_CITA,
        payload: cita
    }
}

export const borrarCita = (id) =>{
    console.log('Borrando cita', id);
    return {
        type: BORRAR_CITA,
        payload: id
    }
}