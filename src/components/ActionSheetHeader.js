import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { tw } from "react-native-tailwindcss";

export default class Example extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    paddingTop: 10,
    paddingBottom: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 60,
    height: 6,
    borderRadius: 4,
    backgroundColor: "#00000030",
    marginBottom: 6,
  },
});
