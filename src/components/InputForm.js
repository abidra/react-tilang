import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';

export default class TilangForm extends Component {
  render() {
    return (
    <View style={styles.container}>
    <TextInput
    placeholder="No Tilang Anda"
    placeholderTextColor="rgba(255,255,255,0.7)"
    style={styles.input}
    />

    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Lihat Info</Text>
    </TouchableOpacity>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    padding: 20
  },
  input: {
    height:40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  }
});
