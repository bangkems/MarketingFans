import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card, Badge, IconButton } from "react-native-paper";
import { color, tw } from "react-native-tailwindcss";
export default class Offer extends Component {
  render() {
    return (
      <Card style={[tw.mX2, tw.mY4, tw.shadowMd, tw.roundedLg]}>
        <Card.Content>
          <View style={[tw.textXl, tw.mT4]}>
            <Text style={[tw.textLg, tw.fontBold, tw.textGray800]}>
              Ripped Jeans Company
            </Text>
          </View>
          <View style={[tw.flexRow, tw.mB4, tw.mT1]}>
            <Badge style={[tw.pX2, tw.mR1]}>Fashion</Badge>
            <Badge style={[tw.pX2, tw.mR1]}>Tekstil</Badge>
            <Badge style={[tw.pX2, tw.mR1]}>Kulit</Badge>
          </View>
          <View style={[tw.flexRow, tw.justifyBetween, tw.itemsCenter]}>
            <View style={[tw.flexCol]}>
              <View style={[tw.flexRow, tw.itemsCenter, tw._mB2, tw._mL2]}>
                <IconButton
                  icon="speedometer"
                  size={25}
                  color={color.green700}
                />
                <Text style={[tw.textLg, tw._mL2, tw.textGreen700]}>89%</Text>
              </View>
            </View>
            <View style={[tw.itemsEnd]}>
              <Text style={[tw.textLg, tw.fontBold, tw.textGray800]}>
                Rp 50.000
              </Text>
              <Text style={[tw.textXs, tw._mT1]}>per transaksi</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    );
  }
}
