import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
// importar reducers
import rootReducer from './reducers';

const initialState = {};

const middelware = [thunk];

// Agregar localStorage
const storageState = localStorage.getItem('citas') ? 
                        JSON.parse(localStorage.getItem('citas')) : [];

const store = createStore(
                rootReducer, 
                storageState, 
                compose(applyMiddleware(...middelware),
                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                ));
                

export default store;