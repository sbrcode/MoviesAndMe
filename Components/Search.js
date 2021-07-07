import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class Search extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 20, backgroundColor: 'red' }}>
        <TextInput
          style={ styles.textinput }
          placeholder="Titre du Film"
        />
        <Button title="Rechercher" onPress={() => {}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})