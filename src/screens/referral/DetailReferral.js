import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Appbar, Text, Card, Chip } from 'react-native-paper'
import Header from "../../components/Header";


function DetailReferral({ navigation }) {
    return (
      <>
        <Header titleText="Detail Referral" navigation={navigation} />

        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

        {/* satu card */}
        <Card style={styles.card}>
          <Card.Cover
            source={{
              uri:
                'https://source.unsplash.com/collection/10017690/700x700',
            }}
          />
          <Card.Content>
            <Text style={styles.titleCard}>Ripped Jeans Company</Text>
            <Text style={styles.dateCard}>21 Jan 2020 - 21 Jun 2020</Text>
            <Text style={styles.descCard}>Pada offer ini kamu berhasil mendapatkan:{"\n"}- 2 Referral dari pengguna{"\n"}- 5 Reward{"\n"}- 8 Klaim dari pengguna</Text>
          </Card.Content>
          <View style={styles.status}>
            <Chip style={styles.chipActive} textStyle={styles.chiptext}>Aktif</Chip>
          </View>
        </Card>

        {/* satu card */}
        <Card style={styles.card}>
          <Card.Cover
            source={{
              uri:
                'https://source.unsplash.com/nGrfKmtwv24/700x700',
            }}
          />
          <Card.Content>
            <Text style={styles.titleCard}>Toko Buku Altera</Text>
            <Text style={styles.dateCard}>10 Jan 2020 - 10 Feb 2020</Text>
            <Text style={styles.descCard}>Pada offer ini kamu berhasil mendapatkan:{"\n"}- 2 Referral dari pengguna{"\n"}- 5 Reward{"\n"}- 8 Klaim dari pengguna</Text>
          </Card.Content>
          <View style={styles.status}>
            <Chip style={styles.chipInactive} textStyle={styles.chiptext}>Tidak Aktif</Chip>
          </View>
        </Card>

        {/* satu card */}
        <Card style={styles.card}>
          <Card.Cover
            source={{
              uri:
                'https://source.unsplash.com/-YHSwy6uqvk/700x700',
            }}
          />
          <Card.Content>
            <Text style={styles.titleCard}>Dapur Mama Bunda</Text>
            <Text style={styles.dateCard}>13 Des 2019 - 13 Jan 2020</Text>
            <Text style={styles.descCard}>Pada offer ini kamu berhasil mendapatkan:{"\n"}- 2 Referral dari pengguna{"\n"}- 5 Reward{"\n"}- 8 Klaim dari pengguna</Text>
          </Card.Content>
          <View style={styles.status}>
            <Chip style={styles.chipInactive} textStyle={styles.chiptext}>Tidak Aktif</Chip>
          </View>
        </Card>

        </View>
        </ScrollView>
      </>
    )
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    scrollView: {
      backgroundColor: '#fafafa',
    },
    card: {
      justifyContent: 'center',
      borderWidth: 0.5,
      borderColor: 'whitesmoke',
      // paddingHorizontal: 8
      margin: 15
    },
    titleCard: {
      fontSize: 18,
      marginRight: 5,
      marginLeft: 5,
      marginBottom: 5,
      marginTop: 10,
      fontWeight: 'bold',
      textAlign: 'left',
      alignSelf: 'stretch'
    },
    dateCard: {
      fontSize: 16,
      marginRight: 5,
      marginLeft: 5,
      marginBottom: 5,
      color: 'grey',
      fontStyle: 'italic',
      textAlign: 'left',
      alignSelf: 'stretch'
    },
    descCard: {
      fontSize: 14,
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 20,
      textAlign: 'left',
      alignSelf: 'stretch'
    },
    chiprow: {
      paddingVertical: 8,
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 12,
    },
    chipActive: {
      flexDirection: 'row',
      backgroundColor: '#00C851',
      margin: 4,
    },
    chipInactive: {
      flexDirection: 'row',
      backgroundColor: '#BE2D29',
      margin: 4,
    },
    chiptext: {
      color: 'white',
    },
    status: {
      position: 'absolute',
      paddingTop: 16,
      right: 16,
    },

  })

export default DetailReferral

