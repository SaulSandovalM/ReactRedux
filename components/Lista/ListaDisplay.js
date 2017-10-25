import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';

const imagen = "https://thumbs.gfycat.com/ApprehensiveOddballAgama-max-1mb.gif"

let elInput = '';

function formatear(string) {
  return {id: string, name: string, tachado: false}
}

export const ListaDisplay = ({
  guardar,
  instructions,
  lista,
  tachado,
  remove,
  alertar,
  fetched
}) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Agrega un nombre nuevo
    </Text>
    <TextInput placeholder="Escribe tu nombre" ref={input => elInput = input} onChangeText={text => elInput = text}/>
    <Button title="Guardar" onPress={() => guardar(formatear(elInput))}/>
    <Text style={styles.instructions}>
      lista de cosas por hacer
    </Text>
    <Text style={styles.instructions}>
      {instructions}
    </Text>

    {fetched
      ? <View>
          {lista.map((i, index) => {
            return (
              <View style={styles.flexPadre} key={index}>
                <Text style={i.tachado
                  ? styles.tachado
                  : null} onPress={() => tachado(i)} key={index}>{i.name}</Text>
                <Button onPress={() => {
                  remove(i);
                  alertar(i);
                }} title="X" color="red"/>
              </View>
            )
          })}
        </View>
      : <Image source={{uri: imagen}} style={styles.img}/>
    }
  </View>
);

ListaDisplay.propTypes = {
  guardar: PropTypes.func.isRequired,
  instructions: PropTypes.string,
  lista: PropTypes.array.isRequired,
  tachado: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  fetched: PropTypes.bool,
  alertar: PropTypes.func
};

ListaDisplay.defaultProps = {
  instructions: 'Escribe un nombre',
  fetched: false
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
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
  },
  img: {
    height: '50%',
    width: '50%'
  }
});
