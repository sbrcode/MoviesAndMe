import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class FilmDetail extends React.Component {
  render() {
    // console.log(this.props.route)
    const idFilm = this.props.route.params.idFilm;
    return (
      <View style={StyleSheet.main_container}>
        <Text>Détail du Film { idFilm }</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
})