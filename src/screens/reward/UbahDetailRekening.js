import React, {useState} from 'react'
import { StyleSheet, View, ScrollView, Dimensions} from 'react-native'
import { Text, Button, TextInput, Appbar, Snackbar } from 'react-native-paper'
//import DatePicker from the package we installed

// add the following statement
import Header from "../../components/Header";

// function UbahDetailRekening({ navigation }) {
//   return (
//     <>
//       <Appbar.Header>
//           <Appbar.BackAction
//             onPress={() => navigation.navigate('DetailReward_Komisi')}
//           />
//           <Appbar.Content
//             title="Ubah Detail Rekening"
//           />
//       </Appbar.Header>
//       <MyComponent />
        
//     </>
//   );
// }
export default class MyComponent extends React.Component {
  constructor(props){
    super(props);
    //set value in state for initial date
    this.state = {
      visible: false,
      nama_bank: 'Bank BRI',
      noRekening: '006 251 698 2354',
      namaPemilik: 'Zain Muhammad',
    };
  }

  // CekNamaBank = () => {
  //   if (this.state.nama_bank != '') {
  //     this.props.navigation.navigate('DetailReward_Komisi', {
  //       JSON_ListView_Clicked_Item: this.state.nama_bank,
  //     })
  //   } else {
  //     alert('Anda belum memasukkan nama bank');
  //   }
  // }

  _onToggleSnackBar = () => this.setState(state => ({ visible: !state.visible }));

  _onDismissSnackBar = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    return (
      <>
      <Header titleText="Ubah Detail Rekening" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

          <Text style={styles.fieldTitle}>Nama Bank</Text>
            <TextInput
              // label='Nama Lengkap'
              mode="outlined"
              value={this.state.nama_bank}
              onChangeText={nama_bank => this.setState({ nama_bank })}
              style={styles.textInput}
            />

            <Text style={styles.fieldTitle}>Nomor Rekening</Text>
            <TextInput
              mode="outlined"
              value={this.state.noRekening}
              onChangeText={noRekening => this.setState({ noRekening })}
              style={styles.textInput}
              keyboardType="numeric"
            />
            
            <Text style={styles.fieldTitle}>Nama Lengkap Pemilik</Text>
            <TextInput
              mode="outlined"
              value={this.state.namaPemilik}
              onChangeText={namaPemilik => this.setState({ namaPemilik })}
              style={styles.textInput}
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
            Detail Rekeningmu berhasil diperbarui!
          </Snackbar>

          <Button style={styles.button} mode="contained" onPress={this._onToggleSnackBar}>Perbarui Detail Rekening</Button>
          {/* <Button style={styles.button} mode="contained" onPress={this.CekNamaBank}>Ubah Detail Pengiriman</Button> */}

        </View>
      </ScrollView>
      </>
    )
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

