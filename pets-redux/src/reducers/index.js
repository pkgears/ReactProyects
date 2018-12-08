import { combineReducers } from 'redux';
import citasReducer from './citas_reducer'

export default combineReducers({
    citas: citasReducer
});