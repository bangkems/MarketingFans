import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Surface, Button, Headline, Caption, Title, Divider, TextInput } from 'react-native-paper'
import NavigationService from "../../navigation/NavigationService";

export default class Referral extends React.Component {
  render() {
    const kodeReferral = 'brianimmanuel'
    return (
      <>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            
          <View style={styles.titleContainer}>
            <Title style={styles.title}>Statistik Referral</Title>
            <Text style={styles.subtitle}>Ini merupakan statistik referral yang kamu miliki</Text>
          </View>
          
          <View style={styles.surfaceFlex}>
            <Surface style={styles.surface}>
              <Headline style={styles.headline}>120</Headline>
              <Caption>Jumlah Referrral</Caption>
            </Surface>
            <Surface style={styles.surface}>
              <Headline style={styles.headline}>28</Headline>
              <Caption>Total Reward</Caption>
            </Surface>
          </View>
          <View style={styles.surfaceFlex}>
            <Surface style={styles.surface}>
              <Headline style={styles.headline}>12</Headline>
              <Caption>Klaim Pelanggan</Caption>
            </Surface>
          </View>
          <Text style={styles.tombolLink} onPress={() =>
              NavigationService.navigate("DetailReferral")
              }
          >Detail Referral</Text>

          <Divider style={styles.divider}/>

          <View style={styles.titleContainer}>
            <Title style={styles.title}>Kode Referral</Title>
            <Text style={styles.subtitle}>Kode referral ini yang akan muncul ketika kamu membagikan penawaran ke sosial media.</Text>
          </View>

          <TextInput
              label='Kode Referral'
              value={kodeReferral}
              dense='TRUE'
              style={styles.kodeReferral}
          />

          <Button style={styles.button} mode="contained" onPress={() => NavigationService.navigate("OfferScreen", {tags: "travel",})}>Bagikan Penawaran</Button>
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
  surfaceFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  surface: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    padding: 8,
    height: 100,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  headline: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'blue'
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
    fontSize: 14,
    marginBottom: 20,
    marginRight: 20
  },
  tombolLink: {
    paddingTop: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginRight: 20,
    color: 'blue'
  },
  kodeReferral: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
    // bottom: 50,
    // backgroundColor: '#0055a5'
  }
});
