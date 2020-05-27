import React, { Component } from "react";
import { Text, View } from "react-native";
import { color, tw } from "react-native-tailwindcss";
import { Chip, Button } from "react-native-paper";
import Offer from "../../components/Offer";
import Banner from "../../components/Banner";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Octicons } from "@expo/vector-icons";

export default class results extends Component {
  constructor() {
    super();
    this.data = [
      {
        merchant: "Ripped Jeans Co",
        title: "Discount all item up to 20%",
        image: "https://source.unsplash.com/collection/10017690/700x700",
        category: "Fashion",
        reward: "Rp 35.000",
        condition: "tiap penjualan",
        terms: [
          "1. Benefit berupa uang tunai Rp100.000 untuk setiap 10 buku yang terjual menggunakan voucher yang Anda bagikan ",
          "\n2. Tambahan 2% bagi pemilik Altera Loyal Card",
          "\n3. Masa berlaku campaign sampai tanggal 20 Juli 2020",
        ],
        code: "RPJCO2020",
        exp: "20 Juli 2020",
        link: "https://instagram.com/rippedjeans",
      },
    ];
  }
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
            <Offer
              merchant={this.data[0].merchant}
              title={this.data[0].title}
              image={this.data[0].image}
              category={this.data[0].category}
              reward={this.data[0].reward}
              condition={this.data[0].condition}
            />
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
