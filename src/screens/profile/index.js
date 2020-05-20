import React, { Component } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Button, Title, Divider, Avatar, Card } from 'react-native-paper'
import NavigationService from "../../navigation/NavigationService";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { color } from "react-native-tailwindcss";


export default class index extends Component {
  render() {
    const namaLengkapFans = 'Zain Muhammad'
    const noTelepon = '083323458967'
    return (
      <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

          {/* satu card */}
          <Card style={styles.card}>
                <Avatar.Text style={styles.avatarBulat} size={70} label="ZM" />

                <Card.Content>
                <Title style={styles.titleCard}>{namaLengkapFans}</Title>
                <Text style={styles.subtitleCard}>{noTelepon}</Text>
                  <View style={styles.profilrow}>
                    <Text style={styles.btnUbahProfil} textStyle={styles.profiltext} onPress={() => NavigationService.navigate("UpdateProfileFans")}>
                      Perbarui Profil
                    </Text>
                  </View>
                </Card.Content>
          </Card>

          <Divider style={styles.divider}/>

          <TouchableOpacity onPress={() => NavigationService.navigate("UbahDetailRekening")}>
            <Card style={styles.card}>
                  <Card.Content style={styles.cardRow}>
                  <MaterialCommunityIcons style={styles.iconContact} name="bank" size={24} color={color.purple800} />
                  <Title style={styles.titleContact}>Nomor Rekening</Title>
                  </Card.Content>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => NavigationService.navigate("UbahDetailPengiriman")}>
            <Card style={styles.card}>
                  <Card.Content style={styles.cardRow}>
                  <MaterialCommunityIcons style={styles.iconContact} name="truck-delivery" size={24} color={color.purple800} />
                  <Title style={styles.titleContact}>Alamat Pengiriman</Title>
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
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  divider: {
      margin: 20
  },
  titleContainer: {
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 20,
  },
  fieldTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    marginBottom: 0,
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  fieldDesc: {
      fontSize: 14,
      marginTop: 5,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
      textAlign: 'left',
      alignSelf: 'stretch'
    },
  textInput: {
    margin: 20,
    marginTop: 10,
    marginBottom: 10
  },
  buttonProfil: {
    marginLeft: 20,
    marginRight: 20,
    marginTop:5,
    marginBottom:5,
  //   backgroundColor: '#0055a5'
  },
  button: {
    margin: 20,
  //   backgroundColor: '#0055a5'
  },
  txtbutton: {
    // margin: 20,
    // color: "red",
    // textAlign: "left",
    marginRight:140,
    marginLeft:20,
    // alignSelf: "stretch",
  //   backgroundColor: '#0055a5'
  },
  card: {
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "whitesmoke",
    // paddingHorizontal: 8
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    // height: 120
  },
  titleCard: {
    fontSize: 18,
    marginRight: 5,
    marginLeft: 75,
    marginBottom: 0,
    marginTop: 15,
    paddingHorizontal: 35,
    textAlign: "left",
    alignSelf: "stretch",
  },
  titleContact: {
    fontSize: 16,
    paddingHorizontal: 10,
    textAlign: "left",
    alignSelf: "stretch",
  },
  iconContact: {
    margin:5,
  },
  subtitleCard: {
    fontSize: 14,
    marginRight: 5,
    marginLeft: 75,
    marginBottom: 0,
    paddingHorizontal: 35,
    textAlign: "left",
    alignSelf: "stretch",
  },
  avatarBulat: {
    flexDirection: "row",
    margin:20,
    position: "absolute",
  },
  btnUbahProfil: {
    flexDirection: "row",
    fontSize: 16,
    textDecorationLine: "underline",
    color: color.purple800,
    // width: 130,
    // backgroundColor: "#F78F47",
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 5,
  },
  profilrow: {
    // paddingVertical: 8,
    flexDirection: "row",
    marginLeft: 70,
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "space-between",
  },
  profiltext: {
    fontSize: 12,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    color: "white",
    textAlign: "center",
    alignSelf: "stretch",
  },
  cardRow: {
    flex: 1,
    flexDirection: 'row'
  }
})
