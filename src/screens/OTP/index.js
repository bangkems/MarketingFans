import React, { Component }  from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { color } from "react-native-tailwindcss";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomor_hp: '',
    };
  }

  CekNomorHP = () => {
      if (this.state.nomor_hp != '') {
        this.props.navigation.navigate('Login', {
          JSON_ListView_Clicked_Item: this.state.nomor_hp,
        })
      } else {
        alert('Anda belum memasukkan nomor handphone');
      }
    }


  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Selamat Datang di Aplikasi MarketingFans</Text>
            <Text style={styles.subtitle}>Masukkan nomor HP Anda untuk melakukan login dengan OTP</Text>
          </View>
          <TextInput 
            value={this.state.nomor_hp}
            onChangeText={nomor_hp => this.setState({ nomor_hp })}
            style={styles.input}
            label="Nomor Handphone" 
            mode="flat" 
            keyboardType="phone-pad"
          />
          <Button style={styles.tombol} mode="contained" onPress={this.CekNomorHP} labelStyle={{color:'black'}}>
          KIRIM OTP
          </Button>
        </View>
      </>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.purple900,
    paddingHorizontal: 20,
    paddingVertical: 50
  },
  titleContainer: {
    justifyContent: 'space-between',
    paddingVertical: 20,
    flex: 1
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'left'
  },
  input: {
    paddingTop: 2,
    paddingBottom: 10,
    height: 55,
  },
  tombol: {
    marginTop: 20,
    paddingVertical: 5,
    backgroundColor: color.yellow500
  }
})
