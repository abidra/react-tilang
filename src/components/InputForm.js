import React, { Component } from 'react';
import { StyleSheet, View, FlatList, TextInput, Text, TouchableOpacity } from 'react-native';

export default class TilangForm extends Component {
  constructor(props) {
    super(props);
    this.handleInfoClick = this.handleInfoClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.state = {
    	data: [],
    	isDetail: false
    };
  }
  handleInfoClick() {
    this.setState({isDetail: true});
    let param = this.state.notilang;
	fetch('http://polres.karimunia.com/api/tilang/'+param)  
		 .then((response) => response.json()).then((data) => {
			this.setState({
				data: data,
			})
		})
  }

  handleBackClick() {
    this.setState({isDetail: false});
  } 
  render() {
  	const isDetail = this.state.isDetail;
  	let button = null;
  	if (isDetail) {
    return (<View style={styles.container}>
      <Text style={styles.info}>
      No Tilang : {this.state.data.no_tilang}{"\n"}
      Nama : {this.state.data.nama}{"\n"}
      Alamat : {this.state.data.alamat}{"\n"}
      TTL : {this.state.data.ttl}{"\n"}
      No KTP : {this.state.data.no_ktp}{"\n"}
      Umur : {this.state.data.umur} Tahun{"\n"}
      Pendidikan : {this.state.data.pendidikan}{"\n"}
      Pekerjaan : {this.state.data.pekerjaan}{"\n"}
      Status : {this.state.data.status}{"\n"}
      Dibuat Tanggal : {this.state.data.created_at}{"\n"}
      Terakhir diperbarui : {this.state.data.updated_at}{"\n"}
      </Text>

    <TouchableOpacity style={styles.buttonContainer} onPress={this.handleBackClick}> 
      <Text style={styles.buttonText}>Kembali</Text>
    </TouchableOpacity>
    </View >)
    } else {
    return (<View style={styles.container}>
    <TextInput
    placeholder="No Tilang Anda"
    placeholderTextColor="rgba(255,255,255,0.7)"
    style={styles.input}
    returnKeyLabel = {"next"}
    onChangeText={(notilang) => this.setState({notilang})}	
    //value={this.state.notilang}
    />

    <TouchableOpacity style={styles.buttonContainer} onPress={this.handleInfoClick}> 
      <Text style={styles.buttonText}>Lihat Info</Text>
    </TouchableOpacity>
    </View>)
    }
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
  info:{
    color: '#FFF',
    width: 300,
    opacity: 0.9
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
