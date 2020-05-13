import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Title } from "react-native-paper";
import { tw } from "react-native-tailwindcss";
import NavigationService from "../navigation/NavigationService";

function Header({ titleText, hideBackButton, hideActionButton }) {
  return (
    <Appbar.Header style={titleText == "Home" ? tw.h0 : tw.justifyBetween}>
      <Appbar.BackAction
        onPress={() => NavigationService.back()}
        style={hideBackButton ? tw.hidden : tw.block}
      />
      <View style={[styles.container]}>
        <Title style={styles.title}>
          {titleText == "Home" ? "" : titleText}
        </Title>
      </View>
      <Appbar.Action
        icon="dots-horizontal"
        style={hideActionButton ? tw.hidden : tw.block}
        onPress={() => console.log("Shown more")}
      />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#FFF",
  },
});

export default Header;
