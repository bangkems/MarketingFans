import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Appbar, Text, Card, Chip, Divider, Button } from "react-native-paper";
import Header from "../../components/Header";
import NavigationService from "../../navigation/NavigationService";


// add the following statement
// import Header from '../components/Header'

export default class MyComponent extends React.Component {
  constructor(props){
    super(props);
    //set value in state for initial date
    this.state = {
      visible: false,
      noRekening: '006 251 698 2354',
      namaPemilik: 'Zain Muhammad',
      // nama_bank: this.props.navigation.state.params.JSON_ListView_Clicked_Item,
      nama_bank: 'Bank BRI'
    };
  }
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <>
      <Header titleText="Detail Reward" />
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
                Nama Merchant - Nama Reward 2
              </Text>
              <View style={styles.chiprow}>
                <Chip style={styles.chipKomisi} textStyle={styles.chiptext}>
                  Komisi
                </Chip>
              </View>
              <Text style={styles.descCardKeterangan}>
                Komisi 10% dari penawaran X yang telah kamu bagikan
              </Text>
              <Text style={styles.title}>Syarat & Ketentuan</Text>
              <Text style={styles.descCard}>
                - Dana akan dikirim ke nomor rekening yang kamu masukkan{"\n"}-
                Pastikan nomor rekening yang kamu masukkan benar{"\n"}- Pihak
                merchant tidak bertanggung jawab atas kesalahan nomor rekening
              </Text>

              <Divider style={styles.divider} />

              <Card style={styles.cardNotifikasi}>
                <Text style={styles.descCardNotifikasi}>
                  Selamat! Kamu memperoleh komisi 10% sejumlah Rp. 320.596 dari
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
              {this.state.nama_bank}
              {"\n"}
              {this.state.noRekening}
              {"\n"}
              {this.state.namaPemilik}
            </Text>
            <Button
              style={styles.button}
              mode="contained"
              onPress={() => NavigationService.navigate("UbahDetailRekening")}
            >
              Ubah Detail Rekening
            </Button>

            {/* <Text 
          style={styles.tombolLink} 
          onPress={()=>navigate('UbahDetailRekening', {JSON_ListView_Clicked_Item: this.state.nama_bank})}>Testing Nama Bank</Text> */}

          </Card>
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
  chipKomisi: {
    flexDirection: "row",
    backgroundColor: "#58BBD8",
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
