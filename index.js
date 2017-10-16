import { AppRegistry } from 'react-native';
import App from './App';
import configureStore from './store/configureStore';
import {loadLista} from './actions/listaActions';

export const store = configureStore();
store.dispatch(loadLista());

AppRegistry.registerComponent('ReactRedux', () => App);
