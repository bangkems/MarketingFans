import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { tw, color } from "react-native-tailwindcss";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function ActionSheetInner({ title }) {
  return (
    <View style={[styles.panel, tw.pX6, tw.pT2]}>
      <View>
        <Text style={[tw.text2xl, tw.fontMedium, tw.textGray900]}>{title}</Text>
        <Text style={[tw.textGray600]}>Berikan kupon serta ulasanmu</Text>
        <ScrollView
          style={[tw.mY6, tw._mX6]}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={[tw.mR5]}></View>
          <View style={[tw.mR6, tw.itemsCenter]}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => console.log("copy pressed")}
            >
              <View
                style={{
                  paddingTop: 11,
                  paddingBottom: 10,
                  paddingLeft: 17,
                  paddingRight: 17,
                  borderRadius: 12,
                  backgroundColor: "#fff",
                }}
              >
                <Ionicons name="ios-copy" size={35} color={color.gray700} />
              </View>
            </TouchableOpacity>

            <Text style={[tw.mT2, tw.textGray800, tw.textXs]}>Copy</Text>
          </View>
          <View style={[tw.mR6, tw.itemsCenter]}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => console.log("instagram pressed")}
            >
              <Image
                style={{ width: 60, height: 60, borderRadius: 12 }}
                source={{
                  uri:
                    "https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/1c/37/b7/1c37b7af-20c8-fad9-cda5-f6c8b8014ea7/source/512x512bb.jpg",
                }}
              />
            </TouchableOpacity>
            <Text style={[tw.mT2, tw.textGray800, tw.textXs]}>Instagram</Text>
          </View>
          <View style={[tw.mR6, tw.itemsCenter]}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => console.log("whatsapp pressed")}
            >
              <Image
                style={{ width: 60, height: 60, borderRadius: 12 }}
                source={{
                  uri:
                    "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/3a/38/db/3a38db89-e2e4-aab3-0d3c-d2b68a0ce2a0/source/512x512bb.jpg",
                }}
              />
            </TouchableOpacity>
            <Text style={[tw.mT2, tw.textGray800, tw.textXs]}>Whatsapp</Text>
          </View>
          <View style={[tw.mR6, tw.itemsCenter]}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => console.log("twitter pressed")}
            >
              <Image
                style={{ width: 60, height: 60, borderRadius: 12 }}
                source={{
                  uri:
                    "https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/18/46/bc/1846bcef-1450-5d4e-f5a0-9254961534d7/source/512x512bb.jpg",
                }}
              />
            </TouchableOpacity>
            <Text style={[tw.mT2, tw.textGray800, tw.textXs]}>Twitter</Text>
          </View>
          <View style={[tw.mR6, tw.itemsCenter]}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => console.log("telegram pressed")}
            >
              <Image
                style={[{ width: 60, height: 60, borderRadius: 12 }]}
                source={{
                  uri:
                    "https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/42/84/88/42848847-c27d-aba1-fb48-2abf966487df/source/512x512bb.jpg",
                }}
              />
            </TouchableOpacity>
            <Text style={[tw.mT2, tw.textGray800, tw.textXs]}>Telegram</Text>
          </View>
          <View style={[tw.mR6, tw.itemsCenter]}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => console.log("facebook pressed")}
            >
              <Image
                style={[{ width: 60, height: 60, borderRadius: 12 }]}
                source={{
                  uri:
                    "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/68/fc/8d/68fc8d89-cfa8-274a-3ba1-82cb06bc5572/source/512x512bb.jpg",
                }}
              />
            </TouchableOpacity>
            <Text style={[tw.mT2, tw.textGray800, tw.textXs]}>Facebook</Text>
          </View>
          <View style={[tw.mR6, tw.itemsCenter]}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => console.log("messenger pressed")}
            >
              <Image
                style={{ width: 60, height: 60, borderRadius: 12 }}
                source={{
                  uri:
                    "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/24/2a/ec/242aec65-ad40-f488-5d22-e98fd20bb073/source/512x512bb.jpg",
                }}
              />
            </TouchableOpacity>
            <Text style={[tw.mT2, tw.textGray800, tw.textXs]}>Messenger</Text>
          </View>
        </ScrollView>
      </View>
      <View style={[tw.pY5, tw.borderT, tw.borderGray400]}>
        <Text style={[tw.fontBold, tw.textGray800]}>Pro tip:</Text>
        <Text style={[tw.mT2, tw.textGray800]}>
          Kenali lebih dalam mengenai produk yang ingin kamu pasarkan, kamu juga
          bisa mengontak pemilik untuk meminta tester
        </Text>
      </View>
    </View>
  );
}

const IMAGE_SIZE = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  box: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  panelContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  panel: {
    height: 305,
    backgroundColor: "#ffffff",
    marginLeft: 10,
    marginRight: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 25,
    height: 30,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#318bfb",
    alignItems: "center",
    marginVertical: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  photo: {
    width: "100%",
    height: 225,
    marginTop: 30,
  },
  map: {
    height: "100%",
    width: "100%",
  },
});

export default ActionSheetInner;
