import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, TextInput } from "react-native";
import { Text, Button } from "react-native-paper";
import { tw, color } from "react-native-tailwindcss";
import Unlock from "../../../assets/illustrations/unlock";
import APIKit, { setClientToken } from "../../../shared/APIKit";
import Spinner from "react-native-loading-spinner-overlay";

const initialState = {
  email: "",
  password: "",
  errors: "",
  isAuthorized: false,
  isLoading: false,
};
class index extends Component {
  state = initialState;

  onEmailChange = (email) => {
    this.setState({ email });
  };

  onPasswordChange = (password) => {
    this.setState({ password });
  };

  onPressLogin() {
    const { email, password } = this.state;
    const payload = { email, password };
    console.log(payload);

    const onSuccess = ({ data }) => {
      // Set JSON Web Token on success
      console.log(data.token);
      setClientToken(data.token);
      this.setState({ isLoading: false, isAuthorized: true });
    };

    const onFailure = (error) => {
      console.log(error.response.data);
      this.setState({ errors: error.response.data.message, isLoading: false });
    };

    // Show spinner when call is made
    this.setState({ isLoading: true });

    APIKit.post("/api/user/login/", payload).then(onSuccess).catch(onFailure);
  }

  getErrorMessageByField(field) {
    // Checks for error message in specified field
    // Shows error message from backend

    // let message = null;

    // if (this.state.errors[field]) {
    //   message = (
    //     <View style={styles.errorMessageContainerStyle}>
    //       {this.state.errors[field].map((item) => (
    //         <Text style={styles.errorMessageTextStyle} key={item}>
    //           {item}
    //         </Text>
    //       ))}
    //     </View>
    //   );
    // }
    return <Text>{this.state.errors}</Text>;
  }

  getNonFieldErrorMessage() {
    // Return errors that are served in `non_field_errors`
    let message = null;
    const { errors } = this.state;
    if (errors.non_field_errors) {
      message = (
        <View style={styles.errorMessageContainerStyle}>
          {errors.non_field_errors.map((item) => (
            <Text style={styles.errorMessageTextStyle} key={item}>
              {item}
            </Text>
          ))}
        </View>
      );
    }
    return message;
  }

  Login = () => {
    if (this.state.nomor_hp != "") {
      this.props.navigation.navigate("Login", {
        JSON_ListView_Clicked_Item: this.state.nomor_hp,
      });
    } else {
      alert("Anda belum memasukkan nomor handphone");
    }
  };

  render() {
    const { isLoading } = this.state;
    let fieldError;

    if (this.state.errors) {
      fieldError = (
        <Text
          style={[tw.textRed600, tw.rounded, tw.fontMedium, tw.textLg, tw.mB2]}
        >
          {this.state.errors}
        </Text>
      );
    } else {
      fieldError = null;
    }

    return (
      <>
        <Spinner visible={isLoading} />
        <View style={[tw.flex1, tw.pX4, tw.bgGray100]}>
          <SafeAreaView style={[]}>
            <View style={[tw.p0]}>
              <Text style={[tw.textXl, tw.fontBold, tw.mY2, tw.textGray500]}>
                Masuk
              </Text>
              <Unlock width={70} height={70} style={[tw.mY4]} />
              <View style={tw.flex1} />
              <Text style={[tw.text3xl, tw.fontBold, tw.mY2, tw.textGray900]}>
                Masukkan email dan password
              </Text>
            </View>
            {fieldError}
            {/* {this.getErrorMessageByField("email")}
            {this.getErrorMessageByField("password")}
            {this.getNonFieldErrorMessage()} */}
            <View style={[tw.pY3, styles.shadow]}>
              <TextInput
                value={this.state.email}
                placeholder="Email"
                placeholderTextColor={color.gray500}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                onSubmitEditing={(event) =>
                  this.passwordInput.wrappedInstance.focus()
                }
                onChangeText={this.onEmailChange}
                style={[
                  tw.textLg,
                  tw.bgTransparent,
                  tw.borderX,
                  tw.borderY,
                  tw.borderGray500,
                  tw.roundedTLg,
                  tw.bgWhite,
                  tw.p4,
                ]}
              />
              <TextInput
                ref={(node) => {
                  this.passwordInput = node;
                }}
                value={this.state.password}
                placeholderTextColor={color.gray500}
                placeholder="Password"
                onChangeText={this.onPasswordChange}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
                blurOnSubmit
                onSubmitEditing={this.onPressLogin.bind(this)}
                secureTextEntry
                style={[
                  tw.textLg,
                  tw.bgTransparent,
                  tw.borderX,
                  tw.borderB,
                  tw.roundedBLg,
                  tw.borderGray500,
                  tw.bgWhite,
                  tw.p4,
                ]}
              />
            </View>
            <Button
              icon="lock"
              style={[tw.bgGreen600, tw.roundedLg, tw.mT2]}
              contentStyle={[tw.pY1, tw.trackingTighter]}
              labelStyle={[tw.fontMedium, tw.textLg, tw.normalCase]}
              mode="contained"
              onPress={this.onPressLogin.bind(this)}
            >
              Masuk
            </Button>
          </SafeAreaView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "space-between",
    paddingVertical: 20,
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
  shadow: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1.5,
  },
  tombol: {
    marginTop: 20,
    paddingVertical: 5,
    backgroundColor: color.yellow500,
  },
});

export default index;
