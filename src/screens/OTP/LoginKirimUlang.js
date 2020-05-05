import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { color } from "react-native-tailwindcss";

export default class LoginKirimUlang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      nomor_hp: this.props.navigation.state.params.JSON_ListView_Clicked_Item
    };
  }

  CekOTP = () => {
      if (this.state.otp != '5678') {
        if (this.state.otp != '') {
          alert('Kode OTP salah');
        } else {
          alert('Anda belum mengisikan kode OTP');
        }
      } else {
        this.props.navigation.navigate("IndexScreen");
      } 
    }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>OTP Telah Dikirim Kembali</Text>
            <Text style={styles.subtitle}>
              Kode OTP telah dikirimkan ke nomor {this.state.nomor_hp}. Berlaku untuk 3 menit ke depan
            </Text>
          </View>
          <Text style={styles.tombolLink}>Kirim Ulang OTP?</Text>
          <TextInput 
            value={this.state.otp}
            onChangeText={otp => this.setState({ otp })}
            style={styles.input}
            label="Kode OTP" 
            mode="flat" 
            keyboardType="number-pad"
          />
          <Button style={styles.tombol} mode="contained" onPress={ this.CekOTP }>
            MASUK DENGAN OTP
          </Button>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.purple800,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  input: {
    paddingTop: 2,
    paddingBottom: 10,
    height: 45,
  },
  titleContainer: {
    justifyContent: "flex-start",
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    textAlign: "left",
  },
  tombol: {
    marginTop: 20,
    paddingVertical: 5,
    backgroundColor: color.purple700
  },
  tombolLink: {
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: color.white,
    paddingBottom: 10
},
  otp: {
    paddingHorizontal: 30,
  },
});

