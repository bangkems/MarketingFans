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

function Offer({ title, image, category, reward, condition }) {
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
                uri: image,
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
                  <Text style={[tw.mL2, tw.textWhite]}>{category}</Text>
                </View>
              </View>
              <View style={[styles.card]}>
                <Text style={[tw.textWhite, tw.fontBold, tw.textXl, tw.w1_2]}>
                  {title}
                </Text>
                <View style={[tw.itemsEnd]}>
                  <Text style={[tw.textWhite, tw.textBase, tw.fontSemibold]}>
                    {reward}
                  </Text>
                  <Text style={[tw.textWhite, tw.textXs]}>{condition}</Text>
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

export default Offer;
