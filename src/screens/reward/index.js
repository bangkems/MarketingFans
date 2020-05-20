import React from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { Text, Card, Chip, Title, Divider } from "react-native-paper";
import NavigationService from "../../navigation/NavigationService";
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { color } from "react-native-tailwindcss";

export default class Rewards extends React.Component {
  render() {
    return (
      <>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
          <Card.Content style={styles.cardRow}>
            <AntDesign style={styles.iconTotReward} name="gift" size={24} color={color.purple800} />
            <Text style={styles.titleTotReward}>Kamu Memiliki 3 Rewards. Mau reward lebih?</Text>
          </Card.Content>
          <Text style={styles.tombolLink} onPress={() => NavigationService.navigate("OfferScreen", {tags: "travel",})}
          >Yuk bagikan penawaran lagi!</Text>
          <Divider style={styles.divider}/>
          
            {/* satu card */}
            <TouchableOpacity  onPress={() => NavigationService.navigate("DetailReward")}>
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.titleCard}>Cutlery Set</Text>
                <Text style={styles.offerName}>Diskon 50% Produk Sayuran</Text>
                <View style={styles.merchantrow}>
                  <FontAwesome5 name="store-alt" size={12} color={color.purple800} />
                  <Text style={styles.merchantName}>Dapur Mama Bunda</Text>
                </View>
                <View style={styles.chiprow}>
                  {/* <Chip style={styles.chipUndian} textStyle={styles.chiptext}>
                    Undian
                  </Chip> */}
                  <Chip mode="outlined" style={styles.chipStatus} textStyle={styles.chiptextStatus}>
                    Diundi 21 Agustus 2020
                  </Chip>
                </View>
              </Card.Content>
            </Card>
            </TouchableOpacity>

            {/* satu card */}
            <TouchableOpacity  onPress={() => NavigationService.navigate("DetailReward_Komisi")}>
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.titleCard}>Rp. 28.000</Text>
                <Text style={styles.offerName}>Discount all item up to 20%</Text>
                <View style={styles.merchantrow}>
                  <FontAwesome5 name="store-alt" size={12} color={color.purple800} />
                  <Text style={styles.merchantName}>Ripped Jeans Company</Text>
                </View>
                <View style={styles.chiprow}>
                  {/* <Chip style={styles.chipKomisi} textStyle={styles.chiptext}>
                    Komisi
                  </Chip> */}
                  <Chip mode="outlined" style={styles.chipStatus} textStyle={styles.chiptextStatus}>
                    Sudah Ditransfer
                  </Chip>
                </View>
              </Card.Content>
            </Card>
            </TouchableOpacity>

            {/* satu card */}
            <TouchableOpacity  onPress={() => NavigationService.navigate("DetailReward_Hadiah")}>
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.titleCard}>Student Goes To School Package</Text>
                <Text style={styles.offerName}>Beli 1 Dapat 1 Novel Fiksi</Text>
                <View style={styles.merchantrow}>
                  <FontAwesome5 name="store-alt" size={12} color={color.purple800} />
                  <Text style={styles.merchantName}>Toko Buku Altera</Text>
                </View>
                <View style={styles.chiprow}>
                  {/* <Chip style={styles.chipHadiahLangsung} textStyle={styles.chiptext}>
                    Hadiah 
                  </Chip> */}
                  <Chip mode="outlined" style={styles.chipStatus} textStyle={styles.chiptextStatus}>
                    Sedang Dikirim
                  </Chip>
                </View>
              </Card.Content>
            </Card>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  scrollView: {
    backgroundColor: "#fafafa",
  },
  button: {
    margin: 20,
    // bottom: 50,
    backgroundColor: "#0055a5",
  },
  card: {
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: color.white,
    // paddingHorizontal: 8
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    // height: 120
  },
  titleCard: {
    fontSize: 16,
    marginRight: 5,
    marginLeft: 10,
    marginBottom: 0,
    // marginTop: 5,
    // paddingHorizontal: 35,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "stretch",
  },
  tombolLink: {
    textAlign: 'center',
    marginBottom:20,
    color: color.purple800,
  },
  chipStatus: {
    flexDirection: "row",
    // width: 130,
    borderWidth: 0.5,
    borderColor: color.purple800,
    // marginTop: 5,
  },
  chipUndian: {
    flexDirection: "row",
    // width: 130,
    backgroundColor: "#F78F47",
    marginTop: 5,
  },
  chipHadiahLangsung: {
    flexDirection: "row",
    // width: 130,
    backgroundColor: "#F93A90",
    marginTop: 5,

  },
  chipKomisi: {
    flexDirection: "row",
    // width: 130,
    backgroundColor: "#58BBD8",
    marginTop: 5,
    // marginBottom: 20,
  },
  chiprow: {
    // paddingVertical: 8,
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: 5,
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "space-between",
  },
  merchantrow: {
    // paddingVertical: 8,
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: 5,
    flexWrap: "wrap",
    flex: 1,
  },
  chiptext: {
    fontSize: 10,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    color: "white",
    textAlign: "center",
    alignSelf: "stretch",
  },
  chiptextStatus: {
    fontSize: 12,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    color: color.purple800,
    textAlign: "center",
    alignSelf: "stretch",
  },
  cardRow: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal:50,
  },
  titleTotReward: {
    fontSize: 14,
    paddingHorizontal: 10,
    marginTop:8,
    textAlign: "left",
    alignSelf: "stretch",
  },
  iconTotReward: {
    margin:5,
  },
  divider: {
    marginBottom:20,
  },
  merchantName: {
    fontSize: 12,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5,
    color: 'grey',
    // fontStyle: 'italic',
    textAlign: 'left',
  },
  offerName: {
    fontSize: 12,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5,
    color: color.black,
    // fontStyle: 'italic',
    textAlign: 'left',
  },
});
