/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {store} from './index';
import * as listaActions from './actions/listaActions';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

export default class App extends Component < {} > {
  state = {
    lista: []
  }

  componentWillMount() {
    this.setState({lista: store.getState().lista})
    this.unsubscribe = store.subscribe(() => {
      const {lista} = store.getState();
      this.setState({lista});
    })
  }

  guardar = () => {
    const {text} = this.state;
    const item = {
      id: text,
      name: text,
      number: text
    }
    store.dispatch(listaActions.addItemList(item));
  };

  remove = (item) => {
    store.dispatch(listaActions.removeItemList(item));
    alert('se borro perro');
  }

  tachado = (item) => {
    store.dispatch(listaActions.tachadoItemList(item));
  }

  render() {
    const {lista, text} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Agrega un nombre nuevo
        </Text>
        <TextInput placeholder="Escribe tu nombre" onChangeText={text => this.setState({text})}/>
        <Button title="Guardar" onPress={this.guardar}/>
        <Text style={styles.instructions}>
          lista de cosas por hacer
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <View>
          {lista.map((i, index) => {
            return (
              <View style={styles.flexPadre} key={index}>
                <Text style={i.tachado
                ? styles.tachado
                : null} onPress={() => this.tachado(i)} key={index}>{i.name}</Text>
                <Button onPress={() => this.remove(i)} title="X" color="red"/>
              </View>
            )
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  tachado: {
    textDecorationLine: 'line-through'
  },
  flexPadre: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});
