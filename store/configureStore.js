import {createStore, combineReducers, applyMiddleware} from 'redux';
import listaReducer from '../reducers/listaReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  lista:listaReducer
});

export default function configureStore() {
  return createStore(
    rootReducer, applyMiddleware(thunk)
  );
}
