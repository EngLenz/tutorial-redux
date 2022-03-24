import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { deviceGetInfoReducer } from './reducer/deviceReducer';


const initialState = {
    deviceGetInfo: {
        temperatureSeted: 1,
    }
};

const reducer = combineReducers({
    deviceGetInfo: deviceGetInfoReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk)));

export default store;