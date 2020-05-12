import React from "react";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Card, IconButton, Button, FAB, Paragraph } from "react-native-paper";
import Header from "../../components/Header";
import { color, tw } from "react-native-tailwindcss";
import Animated from "react-native-reanimated";
import ActionSheetInner from "../../components/ActionSheetInner";
import ActionSheetHeader from "../../components/ActionSheetHeader";
import BottomSheet from "reanimated-bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

function index({ navigation }) {
  const bs = React.createRef();
  const fall = new Animated.Value(1);
  const handleOutsidePress = () => {
    bs.current.snapTo(0);
    bs.current.snapTo(0);
  };
  const state = {
    text: "EDF19P3",
  };
  const { tags } = navigation.state.params;
  return (
    <>
      <BottomSheet
        ref={bs}
        snapPoints={[-100, 220, 360]}
        renderContent={() => <ActionSheetInner />}
        renderHeader={() => <ActionSheetHeader />}
        callbackNode={fall}
        initialSnap={0}
        enabledInnerScrolling={false}
      />
      <SafeAreaView
        forceInset={{ top: "always" }}
        style={[tw.bgPurple800, tw.flex1]}
      >
        <View style={{ backgroundColor: "#2c2c2f" }}>
          <Animated.View
            onPress={handleOutsidePress}
            style={{
              backgroundColor: "#fff",
              opacity: Animated.add(0.1, Animated.multiply(fall, 0.9)),
            }}
          >
            <Header titleText="Offer Detail" navigation={navigation}></Header>
          </Animated.View>
          <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            onPress={handleOutsidePress}
            style={{
              backgroundColor: "#fff",
              opacity: Animated.add(0.1, Animated.multiply(fall, 0.9)),
            }}
          >
            <TouchableWithoutFeedback onPress={handleOutsidePress}>
              <Card style={[tw.mB32]}>
                <Card.Title
                  title="Ripped Jeans Company"
                  subtitle="Bandung, Jawa Barat"
                  style={[tw.borderB, tw.borderGray400]}
                  // left={(props) => <Avatar.Icon {...props} icon="folder" />}
                  right={(props) => (
                    <Button style={[tw.mR4]} mode="outlined">
                      Copy
                    </Button>
                  )}
                />
                <Card.Cover
                  source={{
                    uri:
                      "https://source.unsplash.com/collection/10017690/700x700",
                  }}
                />
                <Card.Content>
                  <View style={[tw.mB4]}>
                    <Paragraph style={[tw.mY5]}>
                      RPJ sedang mengadakan promo Ripped Gokil demi merayakan
                      acara Distinguished Gentleman's Ride yang akan
                      diselenggarakan di Bali tahun ini. Semua produk diskon
                      20%!
                    </Paragraph>
                    <Paragraph style={[tw.textGray700]}>
                      Terms of Campaign:{"\n"}
                      1. Campaign ini menggunakan sistem CPA Sales{"\n"}
                      2. Influencer disarankan memberi review dan menampilkan
                      banner atau text link yang telah disediakan disini{"\n"}
                      3. Periode validasi kupon berlaku 30 Hari
                    </Paragraph>
                    <View
                      style={[
                        tw.flexRow,
                        tw.mY5,
                        tw.pY3,
                        tw.justifyCenter,
                        tw.bgGray200,
                        tw.rounded,
                      ]}
                    >
                      <Text
                        style={[
                          tw.text2xl,
                          tw.fontMedium,
                          tw.textGray700,
                          tw.mR2,
                        ]}
                      >
                        {state.text}
                      </Text>
                      <Ionicons
                        name="md-download"
                        size={27}
                        color={color.gray700}
                        style={{ paddingTop: 1 }}
                      />
                    </View>
                    <View style={[tw.itemsStart]}>
                      <Button icon="instagram">@rippedjeansbro</Button>
                      <Button icon="whatsapp">+62 8121554****</Button>
                      <Button icon="link">http://rpj.com</Button>
                    </View>
                  </View>
                </Card.Content>
              </Card>
            </TouchableWithoutFeedback>
          </Animated.ScrollView>
        </View>
      </SafeAreaView>
      <View style={{ backgroundColor: "#2c2c2f" }}>
        <Animated.View
          onPress={handleOutsidePress}
          style={{
            backgroundColor: "#fff",
            opacity: Animated.add(0.1, Animated.multiply(fall, 0.9)),
          }}
        >
          <SafeAreaView>
            <Button
              icon="share-variant"
              mode="contained"
              labelStyle={[tw.textBase]}
              style={[tw.mB2, tw.mX3]}
              contentStyle={[tw.m1]}
              theme={{ roundness: 5 }}
              onPress={() => {
                bs.current.snapTo(1);
                bs.current.snapTo(1);
              }}
            >
              Share
            </Button>
          </SafeAreaView>
        </Animated.View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f7f5eee8",
    shadowColor: "#000000",
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
});
export default index;
