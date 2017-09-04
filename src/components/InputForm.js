import React, { Component } from 'react';
import { StyleSheet, ScrollView, TextInput, Text, TouchableOpacity } from 'react-native';

export default class TilangForm extends Component {
	_handlePress() {
		var param = this.state.no_tilang;
		fetch('http://polres.karimunia.com/api/tilang/'+param)  
		  .then(function(response) {
			return response.json()
		  })
	}
  render() {
    return (
    <ScrollView style={styles.container}>
    <TextInput
    placeholder="No Tilang Anda"
    placeholderTextColor="rgba(255,255,255,0.7)"
    style={styles.input}
    returnKeyLabel = {"next"}
    onChangeText={(no_tilang) => this.setState({no_tilang})}	
    />

    <TouchableOpacity style={styles.buttonContainer} onPress={() => this._handlePress()}>
      <Text style={styles.buttonText}>Lihat Info</Text>
    </TouchableOpacity>
	</ScrollView>
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
