import React, {useState} from 'react'
import { StyleSheet, View, ScrollView, Dimensions} from 'react-native'
import { Text, Button, TextInput, Appbar, Snackbar } from 'react-native-paper'
//import DatePicker from the package we installed

// add the following statement
import Header from "../../components/Header";

export default class MyComponent extends React.Component {
  constructor(props){
    super(props)
    //set value in state for initial date
    this.state = {
      visible: false,
      namaLengkapFans: 'Zain Muhammad',
      alamatPengiriman: 'Jalan Kelapa Muda No. 36 Surabaya Kode Pos 6115',
      noTelepon: '083323458967',
    }
  }

  _onToggleSnackBar = () => this.setState(state => ({ visible: !state.visible }));

  _onDismissSnackBar = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <>
      <Header titleText="Ubah Detail Pengiriman" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

          <Text style={styles.fieldTitle}>Nama Lengkap</Text>
            <TextInput
              // label='Nama Lengkap'
              mode="outlined"
              value={this.state.namaLengkapFans}
              onChangeText={namaLengkapFans => this.setState({ namaLengkapFans })}
              style={styles.textInput}
            />

            <Text style={styles.fieldTitle}>Alamat Pengiriman</Text>
            <TextInput
              mode="outlined"
              value={this.state.alamatPengiriman}
              onChangeText={alamatPengiriman => this.setState({ alamatPengiriman })}
              style={styles.textInput}
              numberOfLines={5}
              multiline={true}
            />
            
            <Text style={styles.fieldTitle}>Nomor Telepon</Text>
            <TextInput
              mode="outlined"
              value={this.state.noTelepon}
              onChangeText={noTelepon => this.setState({ noTelepon })}
              style={styles.textInput}
              keyboardType="numeric"
            />

          <Snackbar
            style={styles.snackbar}
            visible={visible}
            onDismiss={this._onDismissSnackBar}
            action={{
              label: 'OK',
              onPress: () => {
                // Do something
              },
            }}
          >
            Detail Pengirimanmu berhasil diperbarui!
          </Snackbar>

          <Button style={styles.button} mode="contained" onPress={this._onToggleSnackBar}>Perbarui Detail Pengiriman</Button>

        </View>
      </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    scrollView: {
      backgroundColor: 'white',
    },
    fieldTitle: {
      fontWeight: 'bold',
      fontSize: 16,
      margin: 20,
      marginBottom: 0,
      textAlign: 'left',
      alignSelf: 'stretch'
    },
    textInput: {
      margin: 20,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: '#fff',
    },
    button: {
      margin: 20,
      // backgroundColor: '#0055a5'
    },
    buttonTanggal: {
      margin: 20,
      width: Dimensions.get('window').width / 3
      // backgroundColor: '#0055a5'
    },
    snackbar: {
      marginLeft: 25,
      backgroundColor: '#57B258'
    }
  })

