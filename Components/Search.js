import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
// import films from '../Helpers/filmsData';
import FilmItems from './FilmItems';
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi';

export default class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      films: [],
    }
    this.searchedText = ""
  }

  _loadFilms() {
    if (this.searchedText.length > 0) {
      getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
        this.setState({ films: data.results })
      });
    }
  }

  _searchedTextInputChange(text) {
    this.searchedText = text
  }

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput
          onChangeText={(text) => this._searchedTextInputChange(text)}
          style={styles.textinput}
          placeholder="Titre du Film" />
        <Button title="Rechercher" onPress={() => this._loadFilms()} />
        <FlatList
          data={this.state.films}
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