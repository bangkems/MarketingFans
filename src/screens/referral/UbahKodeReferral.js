import React from 'react'
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import { Text, Button, Title, Divider, Portal, Dialog, TextInput, Paragraph} from 'react-native-paper'
import Header from "../../components/Header";


export default function UbahKodeReferral({ navigation }) {
  return (
    <>
        <Header titleText="Ubah Kode Referral" navigation={navigation} />

      <MyComponent />
    </>
  );
}

function Konfirm(item) {
  return (
    <View>
      <Paragraph>{item.title}</Paragraph>
    </View>
  );
}

class MyComponent extends React.Component {
  state = {
    visible: false,
    text: 'zainkeren'
  };

  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Title style={styles.title}>Tips Membuat Kode Referral</Title>
              <Text style={styles.subtitle}>1. Kode referral ini yang akan muncul pada link yang kamu bagikan (Misal namatoko.com/xxx/namakamu)</Text>
              <Text style={styles.subtitle}>2. Gunakan nama asli atau nama beken kamu agar dapat mudah diingat orang</Text>
              <Text style={styles.subtitle}>3. Dengan mengubah kode referral, maka semua link dengan kode referral kamu akan nonaktif secara otomatis</Text>
            </View>

            <Divider style={styles.divider}/>

            <View style={styles.titleContainer}>
              <Title style={styles.title}>Kode Referral Baru</Title>
              <Text style={styles.subtitle}>Kode referral ini yang akan muncul pada link penawaran yang kamu bagikan ke sosial media.</Text>
              <Text style={styles.subtitle}>Silahkan ganti kode referralmu melalui form dibawah ini.</Text>
            </View>

            <TextInput
              label='Kode Referral'
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
              style={styles.kodeReferral}
            />

            <Button style={styles.button} mode="contained" onPress={this._showDialog}>Ubah Referral</Button>
            {/* <Button style={styles.button} mode="outlined">Batalkan</Button> */}
            <Portal>
            <Dialog
              style={{ height: Dimensions.get('window').height / 4 }}
              visible={this.state.visible}
              onDismiss={this._hideDialog}>
              <Dialog.Content>
                <Konfirm
                  title="Jika kamu merubah kode referral, maka semua link offer dengan kode referralmu yang lama akan hilang. Apakah kamu yakin?"
                />
                <View style={styles.buttonFlex}>
                  <Button
                    // mode="outlined"
                    style={styles.dialogButton}
                    onPress={this._hideDialog}
                    labelStyle={{ fontSize: 14 }}>
                    Batalkan
                  </Button>
                  <Button
                    // mode="contained"
                    style={styles.dialogButton}
                    onPress={this._hideDialog}
                    labelStyle={{ fontSize: 14 }}>
                    Ubah
                  </Button>
                </View>
              </Dialog.Content>
            </Dialog>
          </Portal>
        </View>
      </ScrollView>
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
    divider: {
      margin: 20
    },
    titleContainer: {
      // alignItems: 'center',
      // justifyContent: 'center',
      marginLeft: 20
    },
    title: {
      fontSize: 18,
      textAlign: 'left',
      alignSelf: 'stretch'
    },
    subtitle: {
      fontSize: 14,
      marginBottom: 10,
      marginRight: 20
    },
    kodeReferral: {
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 20,
      backgroundColor: '#fff',
    },
    button: {
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10
    },
    dialogButton: {
      margin: 20
    },
    buttonFlex: {
      // flex: 1,
    //   margin: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
  })

