import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import configureStore from './store/configureStore';
import {loadLista} from './actions/listaActions';
import {Provider} from 'react-redux';
import {Fapp} from './Fapp';

export const store = configureStore();
store.dispatch(loadLista());

const WithStore = () => (
  <Provider store={store}>
    <Fapp/>
  </Provider>
);

AppRegistry.registerComponent('ReactRedux', () => WithStore);
