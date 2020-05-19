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
  constructor() {
    super();
    this.data = [
      {
        merchant: "Ripped Jeans Co",
        title: "Discount all item up to 20%",
        image: "https://source.unsplash.com/collection/10017690/700x700",
        category: "Fashion",
        reward: "Rp 35.000",
        condition: "per Sale",
      },
      {
        merchant: "Toko Buku Altera",
        title: "Beli 1 Dapat 1 Novel Fiksi",
        image: "https://source.unsplash.com/nGrfKmtwv24/700x700",
        category: "Stationary",
        reward: "Rp 100.000",
        condition: "per 10 Sale",
      },
      {
        merchant: "Dapur Mama Bunda",
        title: "Diskon 50% produk sayuran",
        image: "https://source.unsplash.com/-YHSwy6uqvk/700x700",
        category: "Food",
        reward: "Komisi 2%",
        condition: "dari tiap transaksi",
      },
    ];
  }

  miniStat() {
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
      </>
    );
  }

  render() {
    return (
      <>
        {this.miniStat()}
        <View style={[tw.mB3, tw.mX2]}>
          <View style={[tw.flex, tw.flexRow, tw.mY5]}>
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
              <Image
                style={[styles.icon]}
                source={{
                  uri: "https://img.icons8.com/color/48/000000/tent.png",
                }}
              />
              <Paragraph style={[tw.textGray800]}>Travel</Paragraph>
            </View>
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
              <Image
                style={[styles.icon]}
                source={{
                  uri: "https://img.icons8.com/color/96/000000/doughnut.png",
                }}
              />
              <Paragraph style={[tw.textGray800]}>Makanan</Paragraph>
            </View>
            <View style={[tw.m1, tw.flexGrow, tw.itemsCenter]}>
              <Image
                style={[styles.icon]}
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
              {this.data.map((item, key) => (
                <Offer
                  key={key}
                  merchant={item.merchant}
                  title={item.title}
                  image={item.image}
                  category={item.category}
                  reward={item.reward}
                  condition={item.condition}
                />
              ))}
            </View>
            <Text style={[tw.mY2, tw.textCenter, tw.textGray600]}>
              Mentok boi, sudahlah
            </Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
  },
});

export default landing;
