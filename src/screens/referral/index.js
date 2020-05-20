import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Surface, Button, Headline, Caption, Title, Divider, TextInput, Card } from 'react-native-paper'
import NavigationService from "../../navigation/NavigationService";
import { color } from "react-native-tailwindcss";

export default class Referral extends React.Component {
  render() {
    const kodeReferral = 'zainkeren'
    return (
      <>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            
          {/* <View style={styles.titleContainer}>
            <Title style={styles.title}>Statistik Referral</Title>
            <Text style={styles.subtitle}>Ini merupakan statistik referral yang kamu miliki</Text>
          </View> */}

          <Card style={styles.card}>
              <Card.Content style={styles.cardRow}>
                <Title style={styles.titleStats}>Total Shared</Title>
                <Headline style={styles.stats}>128</Headline>
              </Card.Content>
          </Card>
          <Caption style={styles.descStats}>*Jumlah offer yang telah kamu bagikan</Caption>

          <Card style={styles.card}>
              <Card.Content style={styles.cardRow}>
                <Title style={styles.titleStats}>Referred User</Title>
                <Headline style={styles.stats}>89</Headline>
              </Card.Content>
          </Card>
          <Caption style={styles.descStats}>*Jumlah orang berhasil kamu ajak melalui offer yang kamu bagikan</Caption>

          <Card style={styles.card}>
              <Card.Content style={styles.cardRow}>
                <Title style={styles.titleStats}>User Claimed</Title>
                <Headline style={styles.stats}>72</Headline>
              </Card.Content>
          </Card>
          <Caption style={styles.descStats}>*Jumlah klaim penawaran yang dilakukan oleh orang yang berhasil kamu ajak</Caption>


          <Text style={styles.tombolLink} onPress={() =>
              NavigationService.navigate("DetailReferral")
              }
          >Detail Statistik Setiap Offer</Text>

          <Divider style={styles.divider}/>

          <View style={styles.titleContainer}>
            <Title style={styles.title}>Kode Referral</Title>
            <Text style={styles.subtitle}>Kode referral ini yang akan muncul pada link penawaran yang kamu bagikan ke sosial media.</Text>
          </View>

          <Text style={styles.kodeReferral}>Kode Referralmu: {kodeReferral}</Text>

          <Button style={styles.button} mode="contained" onPress={() => NavigationService.navigate("OfferScreen", {tags: "travel",})}>Bagikan Penawaran Lagi</Button>
          {/* bagikan kode referral penawaran sementara langdsung didirect ke halaman offer aja, fans milih offers untuk dibagikan */}
          <Button style={styles.button} mode="outlined" onPress={() => NavigationService.navigate("UbahKodeReferral")}>Ubah Kode Referral</Button>

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
  stats: {
    fontSize: 26,
    fontWeight: 'bold',
    color: color.purple700,
    alignSelf: "flex-end",
    marginRight:10
  },
  divider: {
    margin: 20
  },
  titleContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    marginLeft: 20
  },
  title: {
    fontSize: 18,
    textAlign: 'left',
    alignSelf: 'stretch'
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 20,
    marginRight: 20
  },
  tombolLink: {
    paddingTop: 20,
    // fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginRight: 20,
    color: color.purple800,
  },
  kodeReferral: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    // fontWeight: 'bold',
    // color: color.purple800
    // backgroundColor: '#fff',
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
    // bottom: 50,
    // backgroundColor: '#0055a5'
  },
  cardRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  titleStats: {
    fontSize: 16,
    paddingHorizontal: 10,
    // textAlign: "left",
    // alignSelf: "stretch",
    alignSelf: "flex-start"
  },
  card: {
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: color.purple800,
    // paddingHorizontal: 8
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    // height: 120
  },
  descStats:{
    paddingHorizontal:20,
    // marginBottom: 20,
  }
});
