import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import Header from "../../components/Header";
import Offfer from "../../components/Offer";
import { color, tw } from "react-native-tailwindcss";
import Banner from "../../components/Banner";

function index({ navigation }) {
  const { tags } = navigation.state.params;
  return (
    <>
      <Header titleText="Penawaran tersedia" navigation={navigation}></Header>
      <Banner></Banner>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[tw.itemsCenter, tw.m4]}>
          <View
            style={!!tags ? [tw.flexRow, tw.flexWrap, tw.mY2] : [tw.hidden]}
          ></View>
          <Offfer></Offfer>
        </View>
      </ScrollView>
    </>
  );
}
export default index;
