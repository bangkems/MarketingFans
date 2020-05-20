import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Card, Chip, Divider, Button } from "react-native-paper";
import Header from "../../components/Header";
import { color } from "react-native-tailwindcss";
import { FontAwesome5 } from '@expo/vector-icons';


function DetailReward({ navigation }) {
  const namaLengkapFans = "Zain Muhammad";
  const alamatPengiriman = "Jalan Kelapa Muda No. 36 Surabaya Kode Pos 6115";
  const noTelepon = "083323458967";
  return (
    <>
      <Header titleText="Detail Reward" navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {/* satu card */}
          <Card style={styles.card}>
            <Card.Cover
              source={{
                uri:
                  "https://cdn.icon-icons.com/icons2/1465/PNG/512/666wrappedgift2_100993.png",
              }}
            />
            <Card.Content>
              <Text style={styles.titleCard}>
                Cutlery Set - Diskon 50% Produk Sayuran
              </Text>
              <View style={styles.merchantrow}>
                  <FontAwesome5 name="store-alt" size={12} color={color.purple800} />
                  <Text style={styles.merchantName}>Dapur Mama Bunda</Text>
              </View>
              <View style={styles.chiprow}>
                <Chip mode="outlined" style={styles.chipUndian} textStyle={styles.chiptext}>
                  Undian 21 Agustus 2020
                </Chip>
              </View>
              <Text style={styles.title}>Keterangan</Text>
              <Text style={styles.descCard}>
                - Hadiah akan diundi tanggal 21 Agustus 2020{"\n"}- Pihak merchant akan menghubungi kamu jika kamu berhasil mendapatkan undian{"\n"}
                - Jangan lupa periksa kembali alamat pengiriman kamu{"\n"}
                - Pastikan alamat pengiriman benar dan nomor telepon kamu aktif
              </Text>

              <Divider style={styles.divider} />

                <Text style={styles.descCardNotifikasi}>
                  Selamat! Kamu memenangkan 1 buah Cuterly Set
                </Text>

            </Card.Content>
            {/* <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('MyRewards')}>Klaim Hadiah</Button> */}
          </Card>

          <Card style={styles.cardKeterangan}>
            <View style={styles.infoRow}>
              <Text style={styles.titlePengiriman}>Detail Pengiriman</Text>
              <Text style={styles.btnUbahInfo} onPress={() => navigation.navigate("UbahDetailPengiriman")}>Ubah</Text>
            </View>
            <Divider style={styles.divider} />
            <Text style={styles.descPengiriman}>
              {namaLengkapFans}
              {"\n"}
              {alamatPengiriman}
              {"\n"}
              {noTelepon}
            </Text>
          </Card>
        </View>
      </ScrollView>
    </>
  );
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
  card: {
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "whitesmoke",
    // paddingHorizontal: 8
    margin: 15,
  },
  cardKeterangan: {
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "whitesmoke",
    // paddingHorizontal: 8
    margin: 15,
  },
  descCardNotifikasi: {
    fontSize: 14,
    fontStyle: "italic",
    fontWeight: "bold",
    color: color.purple800,
    margin: 5,
    textAlign: "center",
    alignSelf: "stretch",
  },
  title: {
    fontSize: 16,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "stretch",
  },
  titleCard: {
    fontSize: 16,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "stretch",
  },
  descCard: {
    fontSize: 12,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    textAlign: "center",
    alignSelf: "stretch",
  },
  titlePengiriman: {
    fontSize: 16,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 0,
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "stretch",
  },
  descPengiriman: {
    fontSize: 14,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 0,
    textAlign: "left",
    alignSelf: "stretch",
  },
  chiprow: {
    // paddingVertical: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  chipUndian: {
    flexDirection: "row",
    // backgroundColor: "#f78f47",
    borderWidth: 0.5,
    borderColor: color.purple800,
    margin: 4,
  },
  chiptext: {
    fontSize: 12,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    color: color.purple800,
    textAlign: "center",
    alignSelf: "stretch",
  },
  divider: {
    margin: 20,
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    // bottom: 50,
    // backgroundColor: '#0055a5'
  },
  infoRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnUbahInfo: {
    flexDirection: "row",
    fontSize: 16,
    // textDecorationLine: "underline",
    color: color.purple800,
    // width: 130,
    // backgroundColor: "#F78F47",
    marginRight: 20,
    marginTop: 20,
    // marginBottom: 5,
    alignSelf: 'flex-end'
  },
  merchantrow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
    marginBottom: 5,
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
});

export default DetailReward;
