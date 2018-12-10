import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Button } from 'react-native-paper';
import pokemon from './pokemonStore'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Titulo da Marinho</Text>
        <Button icon="add-a-photo" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
        <FlatList
          keyExtractor={pokemon => pokemon.number}
          data={pokemon}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 50
  },
});

export default App;