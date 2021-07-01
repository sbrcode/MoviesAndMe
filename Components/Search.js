import React from 'react';
import { View, TextInput, Button } from 'react';

class Search extends React.Component {
  render() {
    return (
      <View>
        <TextInput placeholder="Titre du Film"/>
        <Button title="Rechercher" onPress={() => {}}/>
      </View>
    );
  }
}

export default Search;