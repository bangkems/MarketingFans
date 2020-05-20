import React, {Component, useState} from 'react'
import { StyleSheet, View, ScrollView, Dimensions} from 'react-native'
import { Text, Button, TextInput, Snackbar, HelperText, RadioButton, IconButton } from 'react-native-paper'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import moment from 'moment'
import 'moment/locale/id'
import Header from "../../components/HeaderBack";
import { color } from "react-native-tailwindcss";

function Kalendar() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [chosenDate, setChosenDate] = useState('');

  const handleConfirm = (datetime) => {
    hideDatePicker(); //must be first
    console.log("A date has been picked: ", datetime);
    // setChosenDate(moment(datetime).format('dddd Do MMMM YYYY'))
    setChosenDate(moment(datetime).format('DD-MMMM-YYYY'));
  };

  const showDatePicker = () => {
  setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
  setDatePickerVisibility(false);
  };

  return (
    <>
      <View style={styles.calendarSection}>
        <IconButton style={styles.calendarIcon}
          icon="calendar"
          color={color.purple800}
          size={40}
          onPress={showDatePicker}
        />

        <TextInput style={styles.inputCalendar} value={chosenDate} onFocus={showDatePicker} placeholder="Silahkan Pilih Tanggal"/>

        {/* <Text style={styles.fieldDesc}>{chosenDate}</Text> */}
                
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          display="spinner"
        />
      </View>
    </>
  );
}


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      value: '',
      visible: false,
      text: 'namakeren',
      namaLengkapFans: 'Zain Muhammad',
      alamatEmail: 'zain@gmail.com',
      noTelepon: '083323458967',
      jenisKelamin: 'pria'
    };
  }

  _hasErrors = () => {
    return !this.state.alamatEmail.includes('@');
  };

  _onToggleSnackBar = () => this.setState(state => ({ visible: !state.visible }));

  _onDismissSnackBar = () => this.setState({ visible: false });

  render() {
    const {visible} = this.state;
    return (
        <>
    
        <Header titleText="Profil Fans" />
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

          <Text style={styles.fieldTitle}>Alamat Email</Text>
          <TextInput
            mode="outlined"
            value={this.state.alamatEmail}
            onChangeText={alamatEmail => this.setState({ alamatEmail })}
            style={styles.textInput}
            keyboardType='email-address'
          />
          <HelperText
            style={{marginLeft:10}}
            type="error"
            visible={this._hasErrors()}
          >
            Masukkan alamat email yang benar!
          </HelperText>
            
          <Text style={styles.fieldTitle}>Nomor Telepon</Text>
          <TextInput
            mode="outlined"
            value={this.state.noTelepon}
            onChangeText={noTelepon => this.setState({ noTelepon })}
            style={styles.textInput}
            keyboardType='phone-pad'
          />

          <Text style={styles.fieldTitle}>Tanggal Lahir</Text>
          <Kalendar
          />

          <Text style={styles.fieldTitle}>Jenis Kelamin</Text>
            <RadioButton.Group
              onValueChange={jenisKelamin => this.setState({ jenisKelamin })}
              value={this.state.jenisKelamin}
            >
              <RadioButton.Item label="Pria" value="pria" style={styles.radioButton}/>
              <RadioButton.Item label="Wanita" value="wanita" style={styles.radioButton}/>
            </RadioButton.Group>

          

          <Button style={styles.button} mode="contained" onPress={this._onToggleSnackBar}>Perbarui Profil</Button>

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
            Profil kamu berhasil diperbarui!
          </Snackbar>

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
    marginTop: 10,
    marginBottom: 0,
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  textInput: {
    marginLeft: 20,
    marginRight: 20,
    // marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    margin: 20,
    // backgroundColor: '#0055a5'
  },
  buttonTanggal: {
    margin: 20,
    width: Dimensions.get('window').width / 2
    // backgroundColor: '#0055a5'
  },
  snackbar: {
    marginLeft: 25,
    backgroundColor: '#57B258'
  },
  radioButton: {
    marginLeft: 5,
    marginTop: -5
  },
  title: {
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    alignSelf: 'stretch'
  },
  subtitle: {
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20
  },
  divider: {
    margin: 30
  },
  calendarSection: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  calendarIcon: {
    margin: 10,
  },
  inputCalendar: {
    marginBottom:20,
    backgroundColor: '#fff',
    // color: '#424242',
  },
  fieldDesc: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 20,
  },
})