import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Appbar, Text, Card, Chip, Divider, Button } from "react-native-paper";
import Header from "../../components/Header";

// add the following statement
// import Header from '../components/HeaderBack'

function DetailReward_Hadiah({ navigation }) {
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
                Dapur Mama Bunda
              </Text>
              <View style={styles.chiprow}>
                <Chip style={styles.chipHadiah} textStyle={styles.chiptext}>
                  Hadiah Langsung
                </Chip>
              </View>
              <Text style={styles.descCardKeterangan}>
                Hadiah akan dikirimkan pada tanggal 21 Mei 2020
              </Text>
              <Text style={styles.title}>Syarat & Ketentuan</Text>
              <Text style={styles.descCard}>
                - Dana akan dikirim ke alamat yang kamu masukkan{"\n"}- Pastikan
                alamat yang kamu masukkan benar{"\n"}- Pihak merchant tidak
                bertanggung jawab atas kesalahan pengiriman hadiah
              </Text>

              <Divider style={styles.divider} />

              <Card style={styles.cardNotifikasi}>
                <Text style={styles.descCardNotifikasi}>
                  Selamat! Kamu memperoleh hadiah 1 Dus Indomie Goreng dari
                  penawaran ini
                </Text>
              </Card>
            </Card.Content>
            {/* <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('MyRewards')}>Klaim Hadiah</Button> */}
          </Card>

          <Card style={styles.cardKeterangan}>
            <Text style={styles.titlePengiriman}>Detail Rekening</Text>
            <Divider style={styles.divider} />
            <Text style={styles.descPengiriman}>
              {namaLengkapFans}
              {"\n"}
              {alamatPengiriman}
              {"\n"}
              {noTelepon}
            </Text>
            <Button
              style={styles.button}
              mode="contained"
              onPress={() => navigation.navigate("UbahDetailPengiriman")}
            >
              Ubah Detail Pengiriman
            </Button>
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
  cardNotifikasi: {
    justifyContent: "center",
    // paddingHorizontal: 8
    margin: 5,
    marginBottom: 20,
    backgroundColor: "#70F864",
  },
  descCardKeterangan: {
    fontSize: 14,
    margin: 5,
    textAlign: "center",
    alignSelf: "stretch",
  },
  descCardNotifikasi: {
    fontSize: 16,
    fontWeight: "bold",
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
    fontSize: 18,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "stretch",
  },
  descCard: {
    fontSize: 14,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    textAlign: "center",
    alignSelf: "stretch",
  },
  titlePengiriman: {
    fontSize: 18,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 0,
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "stretch",
  },
  descPengiriman: {
    fontSize: 16,
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
  chipHadiah: {
    flexDirection: "row",
    backgroundColor: "#F93A90",
    margin: 4,
  },
  chiptext: {
    fontSize: 14,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    color: "white",
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
});

export default DetailReward_Hadiah;
