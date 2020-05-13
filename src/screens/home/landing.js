import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import {
  Paragraph,
  IconButton,
  Card,
  Button,
  List,
  Caption,
} from "react-native-paper";
import { color, tw } from "react-native-tailwindcss";
import Offer from "../../components/Offer";
import NavigationService from "../../navigation/NavigationService";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

export class landing extends Component {
  render() {
    return (
      <>
        <View style={[tw.bgWhite]}>
          <Card style={[{ elevation: 1, marginBottom: 1 }]}>
            <Card.Content style={[tw.flexRow, tw._mY1, tw.justifyBetween]}>
              <View style={[tw.flexRow, tw.mL2, tw.itemsCenter, tw.w5_12]}>
                <View style={[tw.border, tw.borderGray300, tw.roundedFull]}>
                  <Entypo
                    name="wallet"
                    size={16}
                    color={color.purple800}
                    style={{ padding: 5 }}
                  />
                </View>
                <Caption style={[tw.mL2, tw.mB2]}>Rp </Caption>
                <Text style={[tw.textGray800]}>150.000</Text>
              </View>
              <View style={[tw.borderR, tw.borderGray400]}></View>
              <View
                style={[
                  tw.flexRow,
                  tw.mL2,
                  tw.justifyStart,
                  tw.itemsCenter,
                  tw.w5_12,
                ]}
              >
                <View style={[tw.border, tw.borderGray300, tw.roundedFull]}>
                  <FontAwesome5
                    name="gift"
                    size={15}
                    color={color.purple800}
                    style={{ padding: 5 }}
                  />
                </View>
                <Text style={[tw.textGray800, tw.mL2]}>14</Text>
                <Text> Reward</Text>
              </View>
            </Card.Content>
          </Card>
        </View>
        <View style={[tw.mB3, tw.mX2]}>
          <View style={[tw.flex, tw.flexRow, tw.mY5]}>
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
              <Image
                style={[{ width: 50, height: 50 }]}
                source={{
                  uri: "https://img.icons8.com/color/48/000000/tent.png",
                }}
              />
              <Paragraph style={[tw.textGray800]}>Travel</Paragraph>
            </View>
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
              <Image
                style={[{ width: 50, height: 50 }]}
                source={{
                  uri: "https://img.icons8.com/color/96/000000/doughnut.png",
                }}
              />
              <Paragraph style={[tw.textGray800]}>Makanan</Paragraph>
            </View>
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
              <Image
                style={[{ width: 50, height: 50 }]}
                source={{
                  uri:
                    "https://img.icons8.com/color/96/000000/red-felt-hat.png",
                }}
              />
              <Paragraph style={[tw.textGray800]}>Fashion</Paragraph>
            </View>
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
              <IconButton
                icon="dots-horizontal"
                color={color.indigo500}
                style={tw.bgIndigo100}
                size={25}
                onPress={() =>
                  NavigationService.navigate("OfferScreen", {
                    tags: "",
                  })
                }
              />
              <Paragraph style={[tw.textGray800]}>More</Paragraph>
            </View>
          </View>
          <View style={[tw._mX2, tw.borderB, tw.borderGray200]} />
          <View style={[tw.mX2, tw.shadow]}>
            <Text
              style={[tw.mT3, tw.mB2, tw.text2xl, tw.fontBold, tw.textGray700]}
            >
              Penawaran terbaru
            </Text>
            <View style={[tw.itemsCenter]}>
              <Offer></Offer>
              <Offer></Offer>
              <Offer></Offer>
              <Offer></Offer>
              <Offer></Offer>
            </View>
            <Text style={[tw.mY2, tw.textCenter, tw.textGray600]}>
              Untuk saat ini segitu dulu ya
            </Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    padding: 5,
  },
});

export default landing;
