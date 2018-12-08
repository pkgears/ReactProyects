import { VALIDAR_FORMULARIO, MOSTAR_ERROR} from './types'

export const validaFormulario = (estado) => {
    return {
        types: VALIDAR_FORMULARIO,
        payload: estado
    }
}

export const mostarError = (estado) => {
    return {
        type: MOSTAR_ERROR,
        payload: estado
    }
}