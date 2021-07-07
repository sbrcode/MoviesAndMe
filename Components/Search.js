import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import films from '../Helpers/filmsData';
import FilmItems from './FilmItems';

export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder="Titre du Film" />
        <Button title="Rechercher" onPress={() => {}} />
        <FlatList
          data={films}
          keyExtractor={ (item) => item.id.toString() }
          renderItem={ ({item}) => <FilmItems film={item} /> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})