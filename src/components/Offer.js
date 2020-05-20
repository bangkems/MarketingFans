import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { color, tw } from "react-native-tailwindcss";
import NavigationService from "../navigation/NavigationService";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Offer({ merchant, title, image, category, reward, condition }) {
  return (
    <>
      <View style={[tw.mY3, tw.wFull]}>
        <ImageBackground
          style={{
            height: 200,
            justifyContent: "space-between",
            ...tw.shadowMd,
            ...tw.p3,
          }}
          imageStyle={[tw.rounded]}
          source={{
            uri: image,
          }}
        >
          <View style={[tw.flexRow, tw.justifyBetween, tw.z10]}>
            <View
              style={[
                tw.flexRow,
                tw.p1,
                tw.itemsCenter,
                tw.bgIndigo500,
                tw.rounded,
              ]}
            >
              <MaterialCommunityIcons name="hanger" size={20} color="white" />
              <Text style={[tw.mL2, tw.textWhite]}>{category}</Text>
            </View>
          </View>
          <View style={[styles.card]}>
            <View style={[tw.w1_2]}>
              <Text style={[tw.textWhite, tw.mT1, tw.textXs]}>{merchant}</Text>
              <Text style={[tw.textWhite, tw.fontMedium, tw.textLg]}>
                {title}
              </Text>
            </View>
            <View style={[tw.itemsEnd]}>
              <Text style={[tw.textWhite, tw.textXl, tw.fontBold]}>
                {reward}
              </Text>
              <Text style={[tw.textWhite]}>{condition}</Text>
            </View>
          </View>
          <View style={styles.overlay} />
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    ...tw.flexRow,
    ...tw.justifyBetween,
    ...tw.itemsEnd,
    zIndex: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0, 0.4)",
  },
});

export default Offer;
