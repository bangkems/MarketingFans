import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { color } from "react-native-tailwindcss";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
      nomor_hp: this.props.navigation.state.params.JSON_ListView_Clicked_Item,
    };
  }

  CekOTP = () => {
    if (this.state.otp != "1234") {
      if (this.state.otp != "") {
        alert("Kode OTP salah");
      } else {
        alert("Anda belum mengisikan kode OTP");
      }
    } else {
      this.props.navigation.navigate("IndexScreen");
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Masukkan Kode OTP Anda</Text>
            <Text style={styles.subtitle}>
              Kode OTP telah dikirimkan ke nomor {this.state.nomor_hp}. Berlaku
              untuk 3 menit ke depan
            </Text>
          </View>
          <Text
            style={styles.tombolLink}
            onPress={() =>
              navigate("LoginKirimUlang", {
                JSON_ListView_Clicked_Item: this.state.nomor_hp,
              })
            }
          >
            Kirim Ulang OTP?
          </Text>
          <TextInput
            value={this.state.otp}
            onChangeText={(otp) => this.setState({ otp })}
            style={styles.input}
            label="Kode OTP"
            mode="flat"
            keyboardType="number-pad"
          />
          <Button
            style={styles.tombol}
            mode="contained"
            onPress={this.CekOTP}
            labelStyle={{ color: "black" }}
          >
            MASUK DENGAN OTP
          </Button>
        </View>
      </>
    );
  }
}
