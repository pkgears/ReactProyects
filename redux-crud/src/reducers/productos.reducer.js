import { PRODUCTS_TYPES } from '../actions/types';

const initialState = {
    productos: []
};

export default function(state= initialState, action){
    switch(action.type){
        case PRODUCTS_TYPES.INDEX:
            return {
                ...state,
                productos:action.payload
            }
        case PRODUCTS_TYPES.DELTE:
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id !== action.payload)
            }
        default:
            return state
    }
}