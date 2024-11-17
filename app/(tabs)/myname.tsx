import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { text } from 'stream/consumers';

export class MyName extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Oscar Leal</Text>
      </View>
    );
  }
}

export default MyName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
