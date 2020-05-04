import React, {Component} from 'react'
import { StyleSheet, View, ScrollView, Dimensions} from 'react-native'
import { Text, Button, TextInput, Appbar, Snackbar, HelperText, RadioButton, IconButton } from 'react-native-paper'
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Header from "../../components/Header";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      value: '',
      mode: 'date',
      displayFormat: 'DD/MM/YYYY',
      visible: false,
      text: 'namakeren',
      namaLengkapFans: 'Zain Muhammad',
      alamatEmail: 'zain@gmail.com',
      noTelepon: '083323458967',
      jenisKelamin: 'pria'
    };
  }

  showDateTimePicker = () => {
   // alert('showDateTimePicker');
    this.setState({ show: true });
    // Keyboard.dismiss();
  };

  hideDateTimePicker = () => {
    this.setState({ show: false });
  };

  handleDatePicked = value => {
    this.setState({ value: value });
    setTimeout(() => {
      this.hideDateTimePicker();
    }, 250);
  };

  _hasErrors = () => {
    return !this.state.alamatEmail.includes('@');
  };

  _onToggleSnackBar = () => this.setState(state => ({ visible: !state.visible }));

  _onDismissSnackBar = () => this.setState({ visible: false });

  render() {
    const { value, show, mode, displayFormat, visible} = this.state;
    return (
        <>
    
        <Header titleText="Ubah Profil Fans" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

          <Text style={styles.fieldTitle}>Nama Lengkap</Text>
          <TextInput
            // label='Nama Lengkap'
            value={this.state.namaLengkapFans}
            onChangeText={namaLengkapFans => this.setState({ namaLengkapFans })}
            style={styles.textInput}
          />

          <Text style={styles.fieldTitle}>Alamat Email</Text>
          <TextInput
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
            value={this.state.noTelepon}
            onChangeText={noTelepon => this.setState({ noTelepon })}
            style={styles.textInput}
            keyboardType='phone-pad'
          />

          {/* <Text style={styles.fieldTitle}>Tanggal Lahir</Text>
          <Button style={styles.buttonTanggal} mode='outlined' onPress={this.showDateTimePicker}>Pilih {value ? moment(value).format(displayFormat) : ''}</Button> */}
            
            {/* <TextInput style={styles.textInput} label={label} value={value ? moment(value).format(displayFormat) : ''} onFocus={this.showDateTimePicker} /> */}
          {/* <Text>{label}</Text> */}
          {/* <DateTimePicker
            date={value ? new Date(value) : new Date()}
            isVisible={show}
            mode={mode}
            display="spinner"
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          /> */}

          <Text style={styles.fieldTitle}>Tanggal Lahir</Text>
          <View style={styles.calendarSection}>
            <IconButton style={styles.calendarIcon}
              icon="calendar"
              color="#6F00F9"
              size={40}
              onPress={this.showDateTimePicker}
            />

            <TextInput style={styles.inputCalendar} value={value ? moment(value).format(displayFormat) : ''} placeholder="Silahkan Pilih Tanggal" onFocus={this.showDateTimePicker} />
            
            <DateTimePicker
              date={value ? new Date(value) : new Date()}
              isVisible={show}
              mode={mode}
              display="spinner"
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
            />
          </View>

          <Text style={styles.fieldTitle}>Jenis Kelamin</Text>
            <RadioButton.Group
              onValueChange={jenisKelamin => this.setState({ jenisKelamin })}
              value={this.state.jenisKelamin}
            >
              <RadioButton.Item label="Pria" value="pria" style={styles.radioButton}/>
              <RadioButton.Item label="Wanita" value="wanita" style={styles.radioButton}/>
            </RadioButton.Group>

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

          <Button style={styles.button} mode="contained" onPress={this._onToggleSnackBar}>Ubah Profil</Button>

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
    marginTop: 30,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarIcon: {
    margin: 5,
  },
  inputCalendar: {
    flex: 1,
    marginLeft: 10,
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    color: '#424242',
  },
})