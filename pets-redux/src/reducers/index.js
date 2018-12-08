import { combineReducers } from 'redux';
import citasReducer from './citas_reducer'
import errorReducer from './errors.reducer'

export default combineReducers({
    citas: citasReducer,
    error: errorReducer
});