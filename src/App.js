import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import pokemon from './pokemonStore'
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pokedex!</Text>
        
        <FlatList
          keyExtractor={pokemon => pokemon.id}
          data={pokemon}
          renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 50
  },
  title: {
    marginBottom: 16,
    textTransform: 'uppercase'
  },
  item: {
    marginBottom: 8
  }
});

export default App;