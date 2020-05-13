import React, { Component } from "react";
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from "react-native";
import Landing from "./landing";
import Results from "./results";
import { color, tw } from "react-native-tailwindcss";
import { Searchbar } from "react-native-paper";

export default class index extends Component {
  state = {
    searchQuery: "",
  };
  hideResult = true;

  _onChangeSearch = (query) => {
    this.setState({ searchQuery: query });
    this.hideResult = !!query ? false : true;
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <SafeAreaView style={[tw.bgPurple800]}>
          <ScrollView style={{ marginTop: 60 }}>
            <View style={[tw.bgWhite]}>{this.displayResult()}</View>
          </ScrollView>
          <View style={[tw.absolute, tw.bgPurple800, tw.flexRow, tw.p3]}>
            <Searchbar
              placeholder="Cari offer terbaru"
              onChangeText={this._onChangeSearch}
              value={searchQuery}
              style={[styles.searchbar, tw.shadowNone]}
              inputStyle={[tw.textBase]}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }

  displayResult() {
    if (this.hideResult) {
      return <Landing></Landing>;
    } else {
      return <Results query={this.state.searchQuery}></Results>;
    }
  }
}

const styles = StyleSheet.create({
  searchbar: {
    height: 38,
    width: "100%",
    borderRadius: 4,
  },
});
