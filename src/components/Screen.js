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
      source={require('../images/logo-2.png')}
      />
      <Text style={styles.title}>SELAMAT DATANG DI E-BARBUK{"\n"}{"\n"}
Sebuah aplikasi informasi pelayanan{"\n"}Barang Bukti Tilang{"\n"}Satuan Lalu Lintas Polres Banjarnegara. {"\n"}{"\n"}Powered by Karimunia</Text>
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
    width: 283,
    height: 188
  },
  title:{
    color: '#FFF',
    marginTop: 10,
    width: 300,
    textAlign: 'center',
    opacity: 0.9
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
