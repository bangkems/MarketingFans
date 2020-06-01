import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Card, Chip } from 'react-native-paper'
import Header from "../../components/HeaderBack";
import { color } from "react-native-tailwindcss";



export default class DetailReferral extends React.Component {
  constructor(props){
    super(props);
    //set value in state for initial date
    this.state = {
      referredUser: '12',
      userClaimed: '8',
      namaOffer: 'Discount All Item Up to 20%',
      namaMerchant: 'Ripped Jeans Company',
      active: 'Aktif',
      nonactive: 'Nonaktif',
      date: '31 Agustus 2020'
    };
  }
  render() {
    return (
      <>
        <Header titleText="Referral Stats Detail"/>

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
          <View style={styles.chipRow}>
            <Chip mode="outlined" style={styles.chipStats} textStyle={styles.chiptextStats}>{this.state.referredUser} Referred User</Chip>
            <Chip mode="outlined" style={styles.chipStats} textStyle={styles.chiptextStats}>{this.state.userClaimed} User Claimed</Chip>
          </View>
            <Text style={styles.titleCard}>{this.state.namaOffer}</Text>
            <Text style={styles.merchantName}>{this.state.namaMerchant}</Text>
          </Card.Content>
          <View style={styles.status}>
            <Chip style={styles.chipActive} textStyle={styles.chiptext}>{this.state.active}: {this.state.date}</Chip>
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
          <View style={styles.chipRow}>
            <Chip mode="outlined" style={styles.chipStats} textStyle={styles.chiptextStats}>18 Referred User</Chip>
            <Chip mode="outlined" style={styles.chipStats} textStyle={styles.chiptextStats}>6 User Claimed</Chip>
          </View>
            <Text style={styles.titleCard}>Beli 1 Dapat 1 Novel Fiksi</Text>
            <Text style={styles.merchantName}>Toko Buku Altera</Text>
          </Card.Content>
          <View style={styles.status}>
            <Chip style={styles.chipActive} textStyle={styles.chiptext}>Aktif: 21 Juli 2020</Chip>
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
          <View style={styles.chipRow}>
            <Chip mode="outlined" style={styles.chipStats} textStyle={styles.chiptextStats}>43 Referred User</Chip>
            <Chip mode="outlined" style={styles.chipStats} textStyle={styles.chiptextStats}>36 User Claimed</Chip>
          </View>

            <Text style={styles.titleCard}>Diskon 50% Produk Sayuran</Text>
            <Text style={styles.merchantName}>Dapur Mama Bunda</Text>
          </Card.Content>
          <View style={styles.status}>
            <Chip style={styles.chipInactive} textStyle={styles.chiptext}>Nonaktif: 13 Mei 2020</Chip>
          </View>
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
      fontSize: 16,
      marginRight: 5,
      marginLeft: 5,
      marginBottom: 5,
      marginTop: 10,
      fontWeight: 'bold',
      textAlign: 'left',
      alignSelf: 'stretch'
    },
    merchantName: {
      fontSize: 12,
      marginRight: 5,
      marginLeft: 5,
      marginBottom: 5,
      color: 'grey',
      // fontStyle: 'italic',
      textAlign: 'left',
      alignSelf: 'stretch',
      marginBottom: 20,
    },
    chipRow: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 10,
      // justifyContent: "space-between"
    },
    chipStats: {
      margin: 4,
      borderWidth: 0.5,
      borderColor: color.purple800,
    },
    chipActive: {
      // flexDirection: 'row',
      backgroundColor: color.green400,
      margin: 4,
    },
    chipInactive: {
      backgroundColor: color.red500,
      margin: 4,
    },
    chiptext: {
      color: 'white',
      fontSize: 12
    },
    chiptextStats: {
      color: color.purple800,
    },
    status: {
      position: 'absolute',
      paddingTop: 16,
      right: 16,
    },

  })

