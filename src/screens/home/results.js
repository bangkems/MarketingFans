import React, { Component } from "react";
import { Text, View } from "react-native";
import { color, tw } from "react-native-tailwindcss";
import { Chip, Button } from "react-native-paper";
import Offer from "../../components/Offer";
import Banner from "../../components/Banner";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Octicons } from "@expo/vector-icons";

export default class results extends Component {
  state = {
    hideCategory: true,
    locationFilter: false,
    payoutFilter: false,
  };
  render() {
    return (
      <>
        <View style={[tw.mX4]}>
          {this.showCategory()}

          <View style={[tw.mX2]}>
            <Text style={[tw.mT6, tw.textLg, tw.fontMedium, tw.textGray700]}>
              Urutkan berdasarkan:
            </Text>

            <View style={[tw.flexRow, tw.mY2, tw.itemsCenter]}>
              <Chip
                style={[tw.rounded, tw.mR2]}
                mode="outlined"
                selected={this.state.payoutFilter}
                onPress={() =>
                  this.setState({ payoutFilter: !this.state.payoutFilter })
                }
              >
                Payout tertinggi
              </Chip>
              <Chip
                style={[tw.rounded, tw.mR2]}
                mode="outlined"
                selected={this.state.locationFilter}
                onPress={() =>
                  this.setState({ locationFilter: !this.state.locationFilter })
                }
              >
                Lokasi saya
              </Chip>
            </View>
          </View>
          <View style={[tw.itemsCenter]}>
            <Offer></Offer>
            <Offer></Offer>
            <Offer></Offer>
            <Offer></Offer>
            <Offer></Offer>
          </View>
        </View>
      </>
    );
  }
  showCategory() {
    if (!this.state.hideCategory) {
      return (
        <>
          <Banner></Banner>
        </>
      );
    } else {
      return (
        <>
          <View
            style={[
              tw.h10,
              tw._mX4,
              tw.justifyCenter,
              tw.borderB,
              tw.borderGray300,
            ]}
          >
            <TouchableOpacity
              style={[tw.flexRow, tw.itemsCenter, tw.mL6]}
              onPress={() => this.setState({ hideCategory: false })}
            >
              <Octicons name="chevron-down" />
              <Text style={[tw.mL2]}>Pilih Kategori</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    }
  }
}
