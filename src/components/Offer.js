import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  Card,
  Button,
  Title,
  Subheading,
  TouchableRipple,
  Caption,
} from "react-native-paper";
import { color, tw, t } from "react-native-tailwindcss";
import NavigationService from "../navigation/NavigationService";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default class Offer extends Component {
  render() {
    return (
      <>
        <View style={[tw.m3, tw.wFull]}>
          <TouchableRipple
            onPress={() =>
              NavigationService.navigate("OfferDetail", {
                tags: "",
              })
            }
            rippleColor="rgba(0, 0, 0, .32)"
          >
            <>
              <ImageBackground
                style={{
                  height: 200,
                  justifyContent: "space-between",
                  ...tw.shadowMd,
                  ...tw.p2,
                }}
                imageStyle={[tw.rounded]}
                source={{
                  uri:
                    "https://source.unsplash.com/collection/10017690/700x700",
                }}
              >
                <View style={[tw.flexWrap, tw.z10]}>
                  <View
                    style={[
                      tw.flexRow,
                      tw.p1,
                      tw.itemsCenter,
                      tw.bgIndigo500,
                      tw.rounded,
                    ]}
                  >
                    <MaterialCommunityIcons
                      name="hanger"
                      size={20}
                      color="white"
                    />
                    <Text style={[tw.mL2, tw.textWhite]}>Fashion</Text>
                  </View>
                </View>
                <View style={[styles.card]}>
                  <Text style={[tw.textWhite, tw.fontBold, tw.textXl, tw.w1_2]}>
                    Ripped Jeans Company
                  </Text>
                  <View style={[tw.itemsEnd]}>
                    <Text style={[tw.textWhite, tw.textBase, tw.fontSemibold]}>
                      Rp 35.000
                    </Text>
                    <Text style={[tw.textWhite, tw.textXs]}>per sale</Text>
                  </View>
                </View>
                <View style={styles.overlay} />
              </ImageBackground>
            </>
          </TouchableRipple>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    ...tw.flexRow,
    ...tw.justifyBetween,
    ...tw.itemsCenter,
    zIndex: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0, 0.2)",
  },
});
