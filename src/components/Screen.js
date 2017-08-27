import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import TilangForm from './InputForm';

export default class Splash extends Component{
   render(){
   return (
     <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image
      style={styles.logo}
      source={require('../images/logo.png')}
      />
      <Text style={styles.title}>An app made for Tilang Online. Powered by PT. Karimunia</Text>
      </View>
      <View style={styles.formContainer}>
      <TilangForm />
      </View>
     </View>
   )
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 133,
    height: 188
  },
  title:{
    color: '#FFF',
    marginTop: 10,
    width: 200,
    textAlign: 'center',
    opacity: 0.9
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
