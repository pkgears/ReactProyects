import { PRODUCTS_TYPES } from './types';
import axios from 'axios';

const URL = 'http://localhost:5000/productos/'

export const index = () => async dispatch => {
    const res = await axios.get(URL);
    dispatch({
        type: PRODUCTS_TYPES.INDEX,
        payload: res.data
    });
};

export const deleteProduct = (id) => async dispatch => {
    await axios.delete(`${URL}/${id}`);
    dispatch({
        type: PRODUCTS_TYPES.DELETE,
        payload: id
    });
};